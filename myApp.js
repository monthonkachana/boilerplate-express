let express = require('express');
let app = express();

//1
// app.get('/',(req,res)=>{
//   res.send('Hello World')
// })
//2 get http file html
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
//3 asste file public
// Normal usage
// app.use(express.static(__dirname + "/public"));
// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
//4 get file json serve  message 
// app.get('/json', (req, res) => {
//     res.json({ "message": "Hello json" })
// })
//5 .env file get path 
app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    let message = "Hello json";
    if (messageStyle === 'uppercase') {
        message = message.toUpperCase();
    }
    res.json({ message });
});



































module.exports = app;
