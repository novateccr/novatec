require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

industrias = YAML.load_file('import/v5n_novatec_industrias.yml')

industrias.each_with_index do |industria, index|
  FileUtils::mkdir_p "content/industrias/#{industria['titulo'].parameterize}"
  File.open("content/industrias/#{industria['titulo'].parameterize}/_index.md", "w+") do |file|
    file.write("---\n")
    file.write("title: \"#{industria['titulo']}\"\n")
    file.write("id: #{industria['id']}\n")
    file.write("imagen: \"#{industria['imagen']}\"\n")
    file.write("link: \"#{industria['link_default']}\"\n")
    file.write("catalogo: \"#{industria['catalogo']}\"\n")
    file.write("meta_keywords: \"#{industria['meta_keywords']}\"\n")
    file.write("meta_description: \"#{industria['meta_description']}\"\n")
    file.write("menu:\n")
    file.write("  principal:\n")
    file.write("    parent: 'industrias'\n")
    file.write("    weight: #{index}\n")
    file.write("---\n")
    file.write(industria['descripcion'])
  end
  puts "industria - #{industria['titulo']}"
end
