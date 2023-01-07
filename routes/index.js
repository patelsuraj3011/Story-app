
const express = require('express');
const router = express.Router();

// des : Login page 
// route : "/"
router.get('/', (req, res)=>{
    res.render('login',{
        layouts : 'main',
    });
})

// des :/login/landing page'
// route : "/dashBoard"
router.get('/dashBoard', (req, res)=>{
    res.render('dashBoard');
})


module.exports = router;
