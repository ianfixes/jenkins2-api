require 'net/http'
require 'json'

require_relative './endpoints/artifact'
require_relative './endpoints/build'
require_relative './endpoints/job'
require_relative './endpoints/node'
require_relative './endpoints/configuration'

# Jenkins2API codebase wrapper
module Jenkins2API
  # Basically the only public class to call Jenkins2 API nedpoints
  class Client
    # Save Jenkins credentials and server path
    #
    # ==== Options:
    # +server+:: Server path (e.g.: https://jenkins.example.com/)
    # +username+:: Username for Jenkins
    # +password+:: Password or API Token for Jenkins
    # Throws an +ArgumentError+ if username is specified
    # but password is empty
    def initialize(**options)
      @server   = options[:server] || 'http://127.0.0.1/'
      @username = options[:username]
      @password = options[:password]

      return if @username && @password

      raise ArgumentError, 'If username is provided, password is required'
    end

    # Job related endpoints.
    # Creates new +Jenkins2API::Endpoint::Job+ instance
    def job
      @job ||= Endpoint::Job.new(self)
    end

    # Build related endpoints.
    # Creates new +Jenkins2API::Endpoint::Build+ instance
    def build
      @build ||= Endpoint::Build.new(self)
    end

    # Artifact related endpoints.
    # Creates new +Jenkins2API::Endpoint::Artifact+ instance
    def artifact
      @artifact ||= Endpoint::Artifact.new(self)
    end

    # Configuration related endpoints.
    # Creates new +Jenkins2API::Endpoint::Configuration+ instance
    def configuration
      @configuration ||= Endpoint::Configuration.new(self)
    end

    # Node/Computer related endpoints.
    # Creates new +Jenkins2API::Endpoint::Node+ instance
    def node
      @node ||= Endpoint::Node.new(self)
    end

    # Creates and calls an API endpoint.
    #
    # ==== Params:
    # +method+:: +:post+ or +:get+
    # +path+:: Path to the Jenkins resource (e.g.: +/job/my-job/+)
    # +response_type+:: +:json+ or +:raw+
    # +opts+:: sym options to pass to the endpoint. Applicable only if +:post+
    def api_request(method, path, response_type = :json, **opts)
      req = new_request(method, path, response_type, opts)
      req.basic_auth @username, @password

      yield req if block_given?

      req.content_type ||= 'application/x-www-form-urlencoded'
      response = Net::HTTP.start(
        req.uri.hostname, req.uri.port, use_ssl: req.uri.scheme == 'https'
      ) do |http|
        http.request(req)
      end

      handle_response(response, response_type)
    end

    # Creates a new request for the API call
    # with default and required values
    def new_request(method, path, response_type, **opts)
      response_type = :json unless %i[json raw xml].include?(response_type)

      parts = [@server, URI.escape(path)]
      parts << 'api/json' if response_type == :json
      parts << 'api/xml' if response_type == :xml
      uri = URI(File.join(parts))
      uri.query = URI.encode_www_form(opts)

      case method
      when :get then Net::HTTP::Get
      when :post then Net::HTTP::Post
      end.new(uri)
    end

    # Handles response based on response_type
    def handle_response(response, response_type)
      return response['location'] if response.is_a?(Net::HTTPRedirection)

      response.value unless response.is_a?(Net::HTTPSuccess)

      if response_type == :json
        JSON.parse(response.body)
      else
        response.body
      end
    end
  end
end
