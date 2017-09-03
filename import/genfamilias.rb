require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

familias = YAML.load_file('import/v5n_novatec_familias_productos.yml')

FileUtils::mkdir_p "content/familias/"

familias.each_with_index do |familia, index|
  if familia['state'] != -2
    FileUtils::mkdir_p "content/familias/#{familia['titulo'].parameterize}"
    draft = if familia['state'] == 1 then "false" else "true" end
    File.open("content/familias/#{familia['titulo'].parameterize}/_index.md", "w+") do |file|
      file.write("---\n")
      file.write("title: \"#{familia['titulo']}\"\n")
      file.write("id: #{familia['id']}\n")
      file.write("imagen: \"/images/familias/#{familia['imagen']}\"\n")
      file.write("link: \"#{familia['link_default']}\"\n")
      file.write("catalogo: \"#{familia['catalogo']}\"\n")
      file.write("meta_keywords: \"#{familia['meta_keywords']}\"\n")
      file.write("meta_description: \"#{familia['meta_description']}\"\n")
      file.write("menu:\n")
      file.write("  principal:\n")
      file.write("    parent: 'Productos'\n")
      file.write("    weight: #{familia['ordering']}\n")
      file.write("draft: #{draft}\n")
      file.write("weight: #{familia['ordering']}\n")
      file.write("---\n")
      file.write(familia['descripcion'])
    end
    puts "Marca - #{familia['titulo']}"
  end
end
