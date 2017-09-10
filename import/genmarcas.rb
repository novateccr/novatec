require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

marcas = YAML.load_file('import/v5n_novatec_marcas.yml')

marcas.each_with_index do |marca, index|
  FileUtils::mkdir_p "content/marcas/#{marca['titulo'].parameterize}"
  draft = if marca['state'] == 1 then "false" else "true" end
  logo = "/images/logos/#{marca['logo']}"
  File.open("content/marcas/#{marca['titulo'].parameterize}/_index.md", "w+") do |file|
    file.write("---\n")
    file.write("title: \"#{marca['titulo']}\"\n")
    file.write("id: #{marca['id']}\n")
    file.write("logo: \"#{logo unless logo == "/images/logos/"}\"\n")
    file.write("link: \"#{marca['link_default']}\"\n")
    file.write("catalogo: \"#{marca['catalogo']}\"\n")
    file.write("meta_keywords: \"#{marca['meta_keywords']}\"\n")
    file.write("meta_description: \"#{marca['meta_description']}\"\n")
    file.write("menu:\n")
    file.write("  principal:\n")
    file.write("    parent: 'marcas'\n")
    file.write("    weight: #{index}\n")
    file.write("draft: #{draft}\n")
    file.write("weight: #{marca['ordering']}\n")
    file.write("---\n")
    file.write(marca['descripcion'])
  end
  puts "Marca - #{marca['titulo']}"
end
