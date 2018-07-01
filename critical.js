var critical = require('critical');

critical.generate({
  inline: true,
  base: 'public/',
  src: 'index.html',
  dest: 'index.html',
  minify: true,
  width: 1366,
  height: 768,
  include: [
    ".slick-slider",
    ".slick-list",
    ".slick-track",
    ".slick-slide",
    ".slick-arrow.slick-hidden",
    ".slick-list",
    ".slick-loading",
    ".slick-prev",
    ".slick-next"
  ]
});