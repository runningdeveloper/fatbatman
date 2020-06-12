const header = require('./header.js')
// import dateFormat from 'dateformat'
const dateFormat = require('dateformat');

module.exports = function(data){ 
return `<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>${data.title} | Fat Batman</title>
  <meta name="description" content="This is a site for some links to experimental projects I am playing with. But imagine a TV show called Fat Batman, might be funny?">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
  <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
  
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
    <link rel="manifest" href="/images/site.webmanifest">
    <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
  <style>
  .container {
    max-width: 980px;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .logo{
    height: 100px;
  }
  .logo-div{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .logo-title{
      margin-left: 1rem;
  }
  .batman-talk-div{

}
  .batman-talk{
      height: 150px;
      
  }

  .main{
    flex: 1;
  }
  .container{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  </style>
</head>

<body>
<div class="container">
<div class="main">
${header}
${data.content}

<ul>
${data.collections.project.sort((a, b) => (a.data.date.getTime() < b.data.date.getTime()) ? 1 : -1).map((post) => `<li><h4><a href="${ post.url}">${ post.data.title } - ${ dateFormat(post.data.date, 'dd mmm yyyy'
  ) }</a><h4>
  <p>Demo - <a target="_blank" href="${post.data.demo}">link</a></p>
  </li>`).join("\n")}
</ul>
</div>
<footer>
<p>
<span class="nes-text is-primary"><a target="_blank" href="https://runningdeveloper.com">runningdeveloper.com</a></span>
<span class="nes-text is-primary"><a target="_blank" href="https://twitter.com/geoff4l">@geoff4l</a></span>
</p>

<p>©2019 Fat Batman<p>
</footer>
</div>
</body>

</html>
`}