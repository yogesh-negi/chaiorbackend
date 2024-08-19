let express = require('express');
let app = express()

let port = 3000

app.get("/api/user",(req, res)=>{
    res.json({"username":"yogesh"})
})

app.listen(port || process.env.port, ()=>{
    console.log(`app listening on port ${port}`)
})