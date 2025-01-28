const express=require('express');
const routes=require('./Routes/workouts')
const app=express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); 
});
app.use('/',routes);

app.listen(4010,()=>console.log("server is running on port 4010..."));