const express = require('express');
const app=express();
const port = 4500;

app.use(express.urlencoded({extended: false}));

app.get("/",(req,res) => res.json({
    "GET /": "All Routes", 
    "GET /hello": "{hello:world}", 
    "GET /slow": "slow request",
    "POST /bye": "POST Request: + post data"
   }));

// hello world rest endpoint 
app.get("/hello", (req,res) => res.json({hello:"world"}));

app.post("/bye", (req,res) => res.send("POST Request : "+ req));

// Mock slow endpoint, waiting between 3 and 6 seconds to return a response
app.get('/slow', async (req, res) => {
    if ((Math.floor(Math.random() * 100)) === 0) {
        throw new Error('Internal Error')
    }
    // Generate number between 3-6, then delay by a factor of 1000 (miliseconds)
    const delaySeconds = Math.floor(Math.random() * (6 - 3)) + 3
    await new Promise(res => setTimeout(res, delaySeconds * 1000))
    res.end('Slow url accessed!');
});

app.listen(port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});



   