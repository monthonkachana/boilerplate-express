let express = require('express');
let app = express();
require('dotenv').config()
//1
//console.log('Hello World')
//2
// app.get('/',(req,res)=>{
//   res.send('Hello World')
// })
//3 get http file html
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
//4 asste file public open Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
//7 Root level logger middleware  ตัวจัดการความผิดพลาด สื่อสาร ระหว่าง อาร์กิวเม้น **check route
app.use("/", (req, res, next) => {
    console.log(`${req.method} ${req.path} ${req.ip} `)
    next();
})
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


























module.exports = app;
