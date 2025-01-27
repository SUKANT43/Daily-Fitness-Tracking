const express=require('express');

const app=express();
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); 
});
app.get('/',(req,res)=>{
    res.json({message:'welcome to the app'});
})

app.listen(4010,()=>console.log("server is running on port 4010..."));