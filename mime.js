var mime = function(){

  return
  {
    log = function(extname){
    const mimeTypes = {
      'html' : "text/html",
      'css'  : "text/css",
      'js'   : "text/javascript",
      'png'  : "image/png",
      'jpg'  : "image/jpg"
    }

    console.log(mimeTypes[extname]);

                    }
}
}

module.exports = mime;
