require 'yaml'
require 'parameterize'
require 'open-uri'

productos = YAML.load_file('import/v5n_novatec_productos.yml').select{|p| p['state'] > -2}
marcas = YAML.load_file('import/v5n_novatec_marcas.yml')
industrias = YAML.load_file('import/v5n_novatec_industrias.yml')
familias = YAML.load_file('import/v5n_novatec_familias_productos.yml')
noticias = YAML.load_file('import/v5n_content.yml').select{|p| p['state'] > -2 and p['catid'] == 9}

productos.each do |product|

  puts product['titulo']

  #Marcas
  if product['marcas'].class == String
    product_marca_ids = product['marcas'].gsub('"', '').split(',').map(&:to_i)
  else
    product_marca_ids = [product['marcas']]
  end
  marca_titles = marcas.select{|marca| product_marca_ids.include? marca['id'] }.map{ |n| "\"#{n['titulo'].strip}\""}
  marcas_string = "[#{marca_titles.join(",")}]"

  #industrias
  if product['industria'].class == String
    product_industria_ids = product['industria'].gsub('"', '').split(',').map(&:to_i)
  else
    product_industria_ids = [product['industria']]
  end
  industria_titles = industrias.select{|industria| product_industria_ids.include? industria['id'] }.map{ |n| "\"#{n['titulo'].strip}\""}
  industrias_string = "[#{industria_titles.join(",")}]"

  #familias
  if product['familia'].class == String
    product_familia_ids = product['familia'].gsub('"', '').split(',').map(&:to_i)
  else
    product_familia_ids = [product['familia']]
  end
  familia_titles = familias.select{|familia| product_familia_ids.include? familia['id'] }.map{ |n| "\"#{n['titulo'].strip}\""}
  familias_string = "[#{familia_titles.join(",")}]"

  #thumbnail
  thumbnail_extension = product['thumbnail'].split(//).last(4).join
  if thumbnail_extension == 'jpeg'
    thumbnail_extension = '.jpeg'
  end
  thumbnail_filename = "static/images/productos/original-#{product['titulo'].parameterize}#{thumbnail_extension}"
  thumbnail_url = "http://novatec.cr/images/productos/thumbnails/#{product['thumbnail']}"

  unless product['thumbnail'] == ""
    download = open(thumbnail_url)
    IO.copy_stream(download, "#{thumbnail_filename}")
  end

  #catálogo
  catalogo_filename = "static/catalogos/original-#{product['catalogo'].parameterize}"
  catalogo_url = "http://novatec.cr/administrator/components/com_novatec/catalogos/#{product['catalogo']}"

  unless product['catalogo'] == ""
    download = open(catalogo_url)
    IO.copy_stream(download, "#{catalogo_filename}.pdf")
  end

  File.open("content/productos/#{product['titulo'].parameterize}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{product['titulo']}\"\n")
    file.write("id = #{product['id']}\n")
    file.write("marcas = #{marcas_string}\n")
    file.write("familias = #{familias_string}\n")
    file.write("industrias = #{industrias_string}\n")
    file.write("imagen = \"/images/productos/original-#{product['titulo'].parameterize}#{thumbnail_extension}\"\n")
    file.write("catalogo = \"/catalogos/original-#{product['titulo'].parameterize}.pdf\"\n")
    file.write("meta_description = \"#{product['meta_description']}\"\n")
    file.write("meta_keywords = \"#{product['meta_keywords']}\"\n")
    file.write("weight = #{product['ordering']}\n")
    file.write("draft = false\n")
    file.write("taxonomyCover = false\n")
    file.write("+++\n")
    file.write(product['descripcion'])
  end
end
