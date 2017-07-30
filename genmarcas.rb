require 'yaml'
require 'parameterize'
require 'open-uri'
require 'fileutils'

marcas = YAML.load_file('data/v5n_novatec_marcas.yml')

marcas.each do |marca|
  FileUtils::mkdir_p "content/marcas/#{marca['titulo'].parameterize}"
  File.open("content/marcas/#{marca['titulo'].parameterize}/_index.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{marca['titulo']}\"\n")
    file.write("id = #{marca['id']}\n")
    file.write("logo = \"#{marca['logo']}\"\n")
    file.write("link = \"#{marca['link_default']}\"\n")
    file.write("catalogo = \"#{marca['catalogo']}\"\n")
    file.write("meta_keywords = \"#{marca['meta_keywords']}\"\n")
    file.write("meta_description = \"#{marca['meta_description']}\"\n")
    file.write("+++\n")
    file.write(marca['descripcion'])
  end
  puts "Marca - #{marca['titulo']}"
end
