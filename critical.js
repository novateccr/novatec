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
    ".slick-list:focus",
    ".slick-track",
    ".slick-slide",
    ".slick-slide img",
    "slick-loading img",
    ".slick-slide.slick-initialized",
    ".slick-slide.slick-loading",
    ".slick-slide.slick-vertical",
    ".slick-arrow.slick-hidden",
    ".slick-list",
    ".slick-list .slick-loading",
    ".slick-loading",
    ".slick-prev",
    ".slick-next",
    ".slick-slider .slick-track",
    ".slick-slider .slick-list",
  ]
});