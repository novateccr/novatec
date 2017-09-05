require 'yaml'
require 'parameterize'
require 'open-uri'

productos = YAML.load_file('import/v5n_novatec_construccion_producto.yml')
marcas = YAML.load_file('import/v5n_novatec_construccion_marcas.yml')
subfamilias = YAML.load_file('import/v5n_novatec_construccion_subfamilias.yml')
familias = YAML.load_file('import/v5n_novatec_construccion_familias.yml')
imagenes = YAML.load_file('import/v5n_novatec_construccion_imagenes.yml')

productos.each do |producto|
  puts "producto - #{producto['titulo']}"

  state = producto['state'] > 0 ? false : true

  #Marca
  marca = marcas.find{|marca| marca['id'] == producto['marca']}['titulo'].strip

  #Subfamilia
  subfamilia = subfamilias.find{|s| s['id'] == producto['subfamilia']}
  #['titulo'].strip

  #Subfamilia
  familia = familias.find{|s| s['id'] == subfamilia['familia']}['titulo'].strip

  #Get Imagen
  imagen = imagenes.find{|s| s['producto'] == producto['id']}
  imagenPath = imagen.nil? ? nil : "/#{imagen['imagen']}"

  File.open("content/novatec-construccion/#{familia.parameterize}/#{subfamilia['titulo'].parameterize}/#{producto['titulo'].parameterize}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{producto['titulo']}\"\n")
    file.write("id = #{producto['id']}\n")
    file.write("ncmarcas = [\"#{marca}\"]\n")
    # file.write("ncfamilias = [\"#{familia}\"]\n")
    # file.write("subfamilias = [\"#{subfamilia['titulo'].strip}\"]\n")
    file.write("draft = #{state}\n")
    file.write("imagen = \"#{ imagenPath }\"\n")
    file.write("+++\n")
    file.write("#{producto['introtext']}\n")
    file.write("<!--more-->")
    file.write(producto['fulltext'])
  end

end
