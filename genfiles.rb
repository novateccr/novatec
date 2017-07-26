require 'yaml'
require 'parameterize'

productos = YAML.load_file('data/v5n_novatec_productos.yml')
marcas = YAML.load_file('data/v5n_novatec_marcas.yml')
industrias = YAML.load_file('data/v5n_novatec_industrias.yml')
familias = YAML.load_file('data/v5n_novatec_familias_productos.yml')

productos.each do |product|

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


  File.open("content/productos/#{product['titulo'].parameterize}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{product['titulo']}\"\n")
    file.write("id = \"#{product['id']}\"\n")
    file.write("marcas = #{marcas_string}\n")
    file.write("familias = #{familias_string}\n")
    file.write("industrias = #{industrias_string}\n")
    file.write("meta_description = \"#{product['meta_description']}\"\n")
    file.write("meta_keywords = \"#{product['meta_keywords']}\"\n")
    file.write("+++\n")
    file.write(product['descripcion'])
  end
end
