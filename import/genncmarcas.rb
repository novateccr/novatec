require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

marcas = YAML.load_file('import/v5n_novatec_construccion_marcas.yml')

marcas.each_with_index do |marca, index|
  FileUtils::mkdir_p "content/ncmarcas/#{marca['titulo'].parameterize}"
  draft = if marca['state'] == 1 then "false" else "true" end
  File.open("content/ncmarcas/#{marca['titulo'].parameterize}/_index.md", "w+") do |file|
    file.write("---\n")
    file.write("title: \"#{marca['titulo']}\"\n")
    file.write("id: #{marca['id']}\n")
    file.write("logo: \"#{marca['logo']}\"\n")
    file.write("link: \"#{marca['link_default']}\"\n")
    file.write("catalogo: \"#{marca['catalogo']}\"\n")
    file.write("meta_keywords: \"#{marca['meta_keywords']}\"\n")
    file.write("meta_description: \"#{marca['meta_description']}\"\n")
    file.write("draft: #{draft}\n")
    file.write("weight: #{marca['ordering']}\n")
    file.write("---\n")
    file.write(marca['descripcion'])
  end
  puts "Marca - #{marca['titulo']}"
end
