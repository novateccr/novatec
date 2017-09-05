require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

subfamilias = YAML.load_file('import/v5n_novatec_construccion_subfamilias.yml')
familias = YAML.load_file('import/v5n_novatec_construccion_familias.yml')

subfamilias.each_with_index do |subfamilia, index|
  if subfamilia['state'] > -2
    familia = familias.find{|s| s['id'] == subfamilia['familia'] }['titulo'].strip
    FileUtils::mkdir_p "content/novatec-construccion/#{familia.parameterize}/#{subfamilia['titulo'].parameterize}"
    draft = if subfamilia['state'] == 1 then "false" else "true" end
    File.open("content/novatec-construccion/#{familia.parameterize}/#{subfamilia['titulo'].parameterize}/_index.md", "w+") do |file|
      file.write("---\n")
      file.write("title: \"#{subfamilia['titulo']}\"\n")
      file.write("id: #{subfamilia['id']}\n")
      file.write("imagen: \"#{subfamilia['imagen']}\"\n")
      file.write("meta_keywords: \"\"\n")
      file.write("meta_description: \"\"\n")
      # file.write("menu:\n")
      # file.write("  principal:\n")
      # file.write("    parent: 'Productos'\n")
      # file.write("    weight: #{familia['ordering']}\n")
      file.write("draft: #{draft}\n")
      file.write("weight: #{subfamilia['ordering']}\n")
      file.write("---\n")
      file.write(familia['descripcion'])
    end
    puts "Marca - #{subfamilia['titulo']}"
  end
end
