require 'yaml'
require 'parameterize'
require 'open-uri'

noticias = YAML.load_file('import/v5n_content.yml').select{|p| p['state'] > -2 and p['catid'] == 9}

noticias.each do |noticia|
  puts "Noticia - #{noticia['title']}"

  state = noticia['state'] > 0 ? false : true

  array_de_imagenes = noticia['images'].split(',')
  imagen_intro = array_de_imagenes[0].split(':')[1].gsub('\\', "")
  imagen_full = array_de_imagenes[4].split(':')[1].gsub('\\', "")

  File.open("content/noticias/#{noticia['alias']}.md", "w+") do |file|
    file.write("+++\n")
    file.write("title = \"#{noticia['title']}\"\n")
    file.write("date = \"#{noticia['created']}\"\n")
    file.write("imagen_intro = #{imagen_intro}\n")
    file.write("imagen_full = #{imagen_full}\n")
    file.write("asset_id = #{noticia['asset_id']}\n")
    file.write("alias = \"#{noticia['alias']}\"\n")
    file.write("metakey = \"#{noticia['metakey']}\"\n")
    file.write("metadesc = \"#{noticia['metadesc']}\"\n")
    file.write("featured = #{noticia['featured']}\n")
    file.write("draft = #{state}\n")
    file.write("id = #{noticia['id']}\n")
    file.write("+++\n")
    file.write("#{noticia['introtext']}\n")
    file.write("<!--more-->")
    file.write(noticia['fulltext'])
  end

end
