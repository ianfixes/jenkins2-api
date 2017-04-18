var search_data = {"index":{"searchIndex":["jenkins2api","artifact","build","cli","jenkins2","client","command","build","job","node","job","node","thorcommand","__print_version()","all()","all()","all()","api_request()","artifact()","build()","builds()","get()","get()","job()","latest()","list()","logtext_lines()","new()","new()","new()","new()","new()","node()","slave_name()","slave_name()","slaves()","test_results()","license","readme","rakefile","jenkins2-api.gemspec","license","readme"],"longSearchIndex":["jenkins2api","jenkins2api::artifact","jenkins2api::build","jenkins2api::cli","jenkins2api::cli::jenkins2","jenkins2api::client","jenkins2api::command","jenkins2api::command::build","jenkins2api::command::job","jenkins2api::command::node","jenkins2api::job","jenkins2api::node","jenkins2api::thorcommand","jenkins2api::cli::jenkins2#__print_version()","jenkins2api::artifact#all()","jenkins2api::command::node#all()","jenkins2api::node#all()","jenkins2api::client#api_request()","jenkins2api::client#artifact()","jenkins2api::client#build()","jenkins2api::job#builds()","jenkins2api::artifact#get()","jenkins2api::build#get()","jenkins2api::client#job()","jenkins2api::build#latest()","jenkins2api::job#list()","jenkins2api::build#logtext_lines()","jenkins2api::artifact::new()","jenkins2api::build::new()","jenkins2api::client::new()","jenkins2api::job::new()","jenkins2api::node::new()","jenkins2api::client#node()","jenkins2api::build#slave_name()","jenkins2api::command::build#slave_name()","jenkins2api::command::node#slaves()","jenkins2api::build#test_results()","","","","","",""],"info":[["Jenkins2API","","Jenkins2API.html","","<p>Jenkins2API codebase wrapper\n<p>Jenkins2API codebase wrapper\n<p>Jenkins2API codebase wrapper\n"],["Jenkins2API::Artifact","","Jenkins2API/Artifact.html","","<p>This class contains all the calls to reach Jenkins2 and obtain Artifact\ndata\n<p>This class contains all the …\n"],["Jenkins2API::Build","","Jenkins2API/Build.html","","<p>This class contains all the calls to reach Jenkins2 and obtain Build data\n<p>This class contains all the …\n"],["Jenkins2API::CLI","","Jenkins2API/CLI.html","","<p>CLI wrapper under Jenkins2API\n<p>CLI wrapper under Jenkins2API\n"],["Jenkins2API::CLI::Jenkins2","","Jenkins2API/CLI/Jenkins2.html","","<p>Base class for Thor with registered modules and version info\n<p>Base class for Thor with registered modules …\n"],["Jenkins2API::Client","","Jenkins2API/Client.html","","<p>Basically the only public class to call Jenkins2 API nedpoints\n<p>Basically the only public class to call …\n"],["Jenkins2API::Command","","Jenkins2API/Command.html","","<p>Command module wraps all the cli commands\n<p>Command module wraps all the cli commands\n<p>Command module wraps …\n"],["Jenkins2API::Command::Build","","Jenkins2API/Command/Build.html","","<p>Contains all the commands under <code>build</code> namespace\n<p>Contains all the commands under <code>build</code> namespace\n"],["Jenkins2API::Command::Job","","Jenkins2API/Command/Job.html","","<p>Contains all the commands under <code>job</code> namespace\n<p>Contains all the commands under <code>job</code> namespace\n"],["Jenkins2API::Command::Node","","Jenkins2API/Command/Node.html","","<p>Contains all the commands under <code>node</code> namespace\n<p>Contains all the commands under <code>node</code> namespace\n"],["Jenkins2API::Job","","Jenkins2API/Job.html","","<p>This class contains all the calls to reach Jenkins2 and obtain Build data\n<p>This class contains all the …\n"],["Jenkins2API::Node","","Jenkins2API/Node.html","","<p>This class contains all the calls to reach Jenkins2 and obtain Computer\ndata\n<p>This class contains all the …\n"],["Jenkins2API::ThorCommand","","Jenkins2API/ThorCommand.html","","<p>Wrapper class for commands. Checks if credentials are passed or not and\ncreates a new <code>Jenkins2API::Client</code> …\n"],["__print_version","Jenkins2API::CLI::Jenkins2","Jenkins2API/CLI/Jenkins2.html#method-i-__print_version","()",""],["all","Jenkins2API::Artifact","Jenkins2API/Artifact.html#method-i-all","(name, build_id)","<p>Returns a list of all artifacts for a specific build\n<p>Params:\n<p>name &mdash; Job name\n"],["all","Jenkins2API::Command::Node","Jenkins2API/Command/Node.html#method-i-all","()",""],["all","Jenkins2API::Node","Jenkins2API/Node.html#method-i-all","()","<p>List all available Computer\n<p>Returns with slaves and masters also\n"],["api_request","Jenkins2API::Client","Jenkins2API/Client.html#method-i-api_request","(method, path, response_type = :json, **opts)","<p>Creates and calls an API endpoint.\n<p>Params:\n<p>method &mdash; <code>:post</code> or <code>:get</code>\n"],["artifact","Jenkins2API::Client","Jenkins2API/Client.html#method-i-artifact","()","<p>Artifact related endpoints. Creates new <code>Jenkins2API::Artifact</code>\ninstance\n"],["build","Jenkins2API::Client","Jenkins2API/Client.html#method-i-build","()","<p>Build related endpoints. Creates new <code>Jenkins2API::Build</code>\ninstance\n"],["builds","Jenkins2API::Job","Jenkins2API/Job.html#method-i-builds","(name)",""],["get","Jenkins2API::Artifact","Jenkins2API/Artifact.html#method-i-get","(name, build_id, artifact)","<p>Download a specific artifact.\n<p>Params:\n<p>name &mdash; Job name\n"],["get","Jenkins2API::Build","Jenkins2API/Build.html#method-i-get","(job_name, build_id)",""],["job","Jenkins2API::Client","Jenkins2API/Client.html#method-i-job","()","<p>Job related endpoints. Creates new <code>Jenkins2API::Job</code> instance\n"],["latest","Jenkins2API::Build","Jenkins2API/Build.html#method-i-latest","(name)",""],["list","Jenkins2API::Job","Jenkins2API/Job.html#method-i-list","()",""],["logtext_lines","Jenkins2API::Build","Jenkins2API/Build.html#method-i-logtext_lines","(name, build_id)",""],["new","Jenkins2API::Artifact","Jenkins2API/Artifact.html#method-c-new","(client)","<p>Stores the Jenkins2API::Client instance\n"],["new","Jenkins2API::Build","Jenkins2API/Build.html#method-c-new","(client)","<p>Stores the Jenkins2API::Client instance\n"],["new","Jenkins2API::Client","Jenkins2API/Client.html#method-c-new","(**options)","<p>Save Jenkins credentials and server path\n<p>Options:\n<p>server &mdash; Server path (e.g.: jenkins.example.com/)\n"],["new","Jenkins2API::Job","Jenkins2API/Job.html#method-c-new","(client)","<p>Stores the Jenkins2API::Client instance\n"],["new","Jenkins2API::Node","Jenkins2API/Node.html#method-c-new","(client)","<p>Stores the Jenkins2API::Client instance\n"],["node","Jenkins2API::Client","Jenkins2API/Client.html#method-i-node","()","<p>Node/Computer related endpoints. Creates new <code>Jenkins2API::Node</code>\ninstance\n"],["slave_name","Jenkins2API::Build","Jenkins2API/Build.html#method-i-slave_name","(name, build_id)",""],["slave_name","Jenkins2API::Command::Build","Jenkins2API/Command/Build.html#method-i-slave_name","(name, build_id)",""],["slaves","Jenkins2API::Command::Node","Jenkins2API/Command/Node.html#method-i-slaves","()",""],["test_results","Jenkins2API::Build","Jenkins2API/Build.html#method-i-test_results","(name, build_id)",""],["LICENSE","","LICENSE.html","","<p>The MIT License\n<p>Copyright (C) 2017 by Balazs Nadasdi\n<p>Permission is hereby granted, free of charge, to any …\n"],["README","","README_md.html","","<p><img src=\"https://badge.fury.io/rb/jenkins2-api.svg\">\n<p>API Client for Jenkins2\n<p>Install\n"],["Rakefile","","Rakefile.html","","<p>require &#39;rubygems/package_task&#39; require\n&#39;rubygems/dependency_installer&#39;\n<p>specfile = &#39;jenkins2-api.gemspec&#39; …\n"],["jenkins2-api.gemspec","","jenkins2-api_gemspec.html","","<p>$:.push File.expand_path(“../lib”, __FILE__) require_relative\n&#39;lib/version&#39;\n<p>Gem::Specification.new …\n"],["LICENSE","","pkg/jenkins2-api-1_0_1/LICENSE.html","","<p>The MIT License\n<p>Copyright (C) 2017 by Balazs Nadasdi\n<p>Permission is hereby granted, free of charge, to any …\n"],["README","","pkg/jenkins2-api-1_0_1/README_md.html","","<p><img src=\"https://badge.fury.io/rb/jenkins2-api.svg\">\n<p>API Client for Jenkins2\n<p>Install\n"]]}}