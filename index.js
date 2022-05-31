const express = require("express");
const app = express();

//checking that we are in the rigth server from cmd
//app.use(()=>{
    //console.log("We got a new request!!")
//})

//app.use((req,res)=>{
    //console.log("We got a new request!!!")
    //res.send("Hello,We got your request!!! This is a respone")//send the message to the browser
   // res.send('<h1>This is my webpage!</h1>')
//})

//express routing
app.get('/',(req,res)=>{
    res.send('This is the home page!')
})
app.get('/r/:subreddit',(req,res)=>{//just need r/something
    const {subreddit} = req.params;//get the path routing after /:
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postId',(req,res)=>{//just need r/something
    const {subreddit,postId} = req.params;//get the path routing after /:
    res.send(`<h1>Veiwing Post ID:${postId} on the ${subreddit} subreddit</h1>`)
})
app.post('/cats',(req,res) =>{
    res.send("Post request to /cats")//show in browser
})
app.get('/cats',(req,res) =>{
    res.send("Meow")//show in browser
})
app.get('/dogs',(req,res) =>{
    res.send("Wolf")//show in browser
})
app.get('/search',(req,res)=>{
    const {q} = req.query;//this one request q=
    if(!q){
        res.send('Nothing found! if not thing search!')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})
app.get('*',(req,res)=>{
   res.send(`I don't know`)
})

app.listen(3000, () =>{
    console.log("Listening on port 3000!")
})
