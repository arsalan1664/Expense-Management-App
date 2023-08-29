

  const express = require('express')
  
  
  // ruetr object
  const router = express.Router()
  
  // router
  // post
  router.get('/', (req, res) => {
    res.send('Hello ars!');
  });
  

  
  
  // export
  module.exports = router