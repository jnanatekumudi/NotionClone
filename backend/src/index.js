const { Router } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT||4000;

app.get('./health',function(req,res,next){
    res.json({status: 'UP'}); 
}
)

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
})
