const express = require('express');
const router = express.Router();

router.get('/getdata', (req, res) => {
    res.json({ msg: "I got the GET request" });
});

router.get('/getdata/:id', (req, res) => {
    res.json({ msg: `I got the GET request with the id: ${req.params.id}` });
});

router.post('/putdata',(req,res)=>{
    res.json({msg:'I got the post method'})
})

router.delete('/deletedata/:id',(req,res)=>{
    res.json({msg:`I got the delete method ${req.params.id}`})
})

router.patch('/updatedata/:id',(req,res)=>{
    res.json({msg:`I got the patch method ${req.params.id}`})
})

module.exports = router;
