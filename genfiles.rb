require 'yaml'
require 'parameterize'

productos = YAML.load_file('data/v5n_novatec_productos.yml')

productos.each do |product|
  puts product['titulo'].parameterize
  File.open("content/productos/#{product['titulo'].parameterize}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{product['titulo']}\"\n")
    file.write("+++\n")
  end
end
