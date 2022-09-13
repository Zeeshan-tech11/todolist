const express=require('express')
const cors=require('cors')
const fs=require('fs')

const port=8000
const app=express()
app.use(cors())
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.post('/deldata',(req,res)=>{
    let idx=(req.body['index']);
    let data=JSON.parse(fs.readFileSync('../public/database.json','utf-8'))
     console.log(data);
     data.splice(idx-10,1)
     console.log(data);
     fs.writeFileSync('../public/database.json',JSON.stringify(data))
})
app.post('/postdata',(req,res)=>{
    let data=JSON.parse(fs.readFileSync('../public/database.json','utf-8'))
    console.log(data,'.dataaa');
    let length=data.length;
    console.log(req.body,'........');
    let obj={
        length:req.body['0']
    }
    if(obj.length){
        data.push(obj)
        fs.writeFileSync('../public/database.json',JSON.stringify(data))}
    
})

app.listen(port,(e)=>{
    console.log(`server is runiing on port:${port}`);
})