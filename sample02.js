
var download = function(url, savepath, callback) {
  var http = require('http');
  var fs = require('fs');
  var outfile = fs.createWriteStream(savepath);
  var req = http.get(url, function(res){
    res.pipe(outfile);
    res.on('end', function(){
      outfile.close();
      callback();
    });
  });
}

download(
  "http://faq.rakuten-sec.co.jp/faq.html?category=152",
  "test02.html",
  function() { console.log("OK"); }
);
