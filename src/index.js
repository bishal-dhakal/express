const path = require('path');
const express = require("express");
const hbs = require('hbs');
const app = express();
const port = 8000;

//const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

//to set hte view engine
app.set('view engine','hbs')

//change views dir name
app.set('views',templatePath)
hbs.registerPartials(partialPath)

//builtin middleware
// app.use(express.static(staticPath))

//template engine route
//passdynamic data to the frontend
app.get('/',(req,res)=>{
    res.render('index',{
        name:"JavaScript"
    });
});



app.get("/about", (req,res)=>{
    res.render('about')
});

app.get("/data",(req,res) =>{
    res.status(200).json([{
        id:1,
        name:"noone"
    },
    {
        id:1,
        name:"noone"
    },{
        id:1,
        name:"noone"
    }]);
})

app.get("/data/*",(req,res)=>{
    res.render("404", {
        errorcomment : 'oops data page not found',
    });
});

app.get("*",(req,res)=>{
    res.render("404", {
        errorcomment : 'oops page not found',
    });
});

app.listen(port, ()=>{
    console.log(`listining to the port ${port}`)
});