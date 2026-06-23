const http=require('http')

const server=http.createServer((req,res)=>{
    //write a msg that would logged everytime a request hits your server
    console.log("I got an incoming request")

    //set the HTTP status codes +headers(optional)
    res.writeHead(200)
    //end the request or end the connection
    res.end('THANKS FOR VISITING MY SERVER')//this text/data goes to the browser 


})//the callback function of createServer will run for every request


//start the server and listen on port 8000
server.listen(8000,()=>{
    console.log("http sever is up and running on port 8000")

})

