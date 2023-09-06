let express = require('express');
let app = express();
require('dotenv').config()
//1
//console.log('Hello World')
//2
// app.get('/',(req,res)=>{
//   res.send('Hello World')
// })

//7 Root level logger middleware  ตัวจัดการความผิดพลาด สื่อสาร ระหว่าง อาร์กิวเม้น **check route
//frist to check root middleware 
app.use((req, res, next) => {
    // console.log(`${req.method} ${req.path} ${req.ip} `)
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})
//3 get http file html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
//4 asste file public open Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


//5 get file json serve  message 
app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" })
})
//6 .env file get path 
app.get('/json', (req, res) => {
    if (process.env["MESSAGE_STYLE"] == "uppercase") {
        res.json({ "message": "HELLO JSON" })
    } else {
        res.json({ "message": "Hello json" })
    }
})
//8 chian middleeare create time server chian คือ ชื่อ
app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.send({
        time: req.time
    });
});
//9 get parameter inpiut from client to ecro
app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word
    });
});
//10 qurey parame input to clinet ecro
app.get('/name', (req, res) => {
    var firstname = req.query.frist
    var lastname = req.query.last
    var { first: firstName, last: lastName } = req.query;
    res.json({
        name: `${firstName} ${lastName}`
    })
})


























module.exports = app;
