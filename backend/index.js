const { Router } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT||4000;
  
  app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
  })


app.get('./health',function(req,res,next){
    res.json({status: 'UP'}); 
}
)
app.use("/health", Router);