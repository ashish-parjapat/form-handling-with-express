const express=require('express')
const path=require('path')
const app=express()

const bodyParser=require('body-parser');



const AdminPassword="Admin@321"



// for parsing application/xwww-
app.use(bodyParser.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.post('/',(req,res)=>{

let password=req.body.password;
console.log(password);
if(password==AdminPassword){
    res.redirect('/success')
}else{
    res.redirect('/failure')
}

})

app.get('/success',(req,res)=>{
    res.send("Successfully enterd")
})
app.get('/failure',(req,res)=>{
    res.send("Successfully got fucked ")
})


app.listen(8000,()=>{
    console.log("server started at  8000");
})