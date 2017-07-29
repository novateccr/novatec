require 'yaml'
require 'parameterize'
require 'open-uri'

productos = YAML.load_file('data/v5n_novatec_construccion_producto.yml')
marcas = YAML.load_file('data/v5n_novatec_construccion_marcas.yml')
subfamilias = YAML.load_file('data/v5n_novatec_construccion_subfamilias.yml')

productos.each do |producto|
  puts "producto - #{producto['titulo']}"

  state = producto['state'] > 0 ? false : true

  #Marca
  marca = marcas.find{|marca| marca['id'] == producto['marca']}['titulo']

  #Subfamilia
  subfamilia = subfamilias.find{|s| s['id'] == producto['subfamilia']}['titulo']

  File.open("content/novatec-construccion/#{producto['titulo'].parameterize}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{producto['titulo']}\"\n")
    file.write("id = #{producto['id']}\n")
    file.write("marcas = [\"#{marca}\"]\n")
    file.write("subfamilias = [\"#{subfamilia}\"]\n")
    file.write("draft = #{state}\n")
    file.write("+++\n")
    file.write("#{producto['introtext']}\n")
    file.write("<!--more-->")
    file.write(producto['fulltext'])
  end

end
