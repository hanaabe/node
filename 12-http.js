const http=require('http');
const server =http.createServer((req,res)=>{
if(req==='/'){
res.end('wellcome to home')
}
if(req==='/about'){
    res.end('this is about page')
}
res.end(`
<h1> Oops!<h1/>
<p>We can't seem to find the page you are looking for</p>
<a href="/">backhome </a>
`)


})
server.listen(5000)