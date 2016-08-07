// ファイルを丸ごとDLする

var url = "http://faq.rakuten-sec.co.jp/faq.html?category=152";

var savepath = "test.html";

var http = require('http');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function(res){
  res.pipe(outfile);
  res.on('end', function(){
    outfile.close();
    console.log("ok");
  });
});
