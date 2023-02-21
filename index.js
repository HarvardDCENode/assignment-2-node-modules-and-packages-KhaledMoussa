var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(
    <html>
    <head>
      <title>The Iliad</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>

    <h1>Achilles Death</h1>
    <p>I am reading the Iliad for my Ancient Greek Hero class and this is the first thing that came to my mind to write about.</p>
    <img src="images/achilles.jpg" alt="">

    <p>Achilles Death by Paris's Arrow</p>

    </body>
    </html>



    );
    res.end();
});
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");
<!DOCTYPE html>
