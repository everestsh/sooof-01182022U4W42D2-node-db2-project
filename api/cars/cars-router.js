// DO YOUR MAGIC

const res = require('express/lib/response');

const  router  = require('express').Router();

// TEST: http get 9000:/api/car
router.get('/', (req, res, next)=>{
    try{
        res.json('get car')
    }catch(err){
        next(err)
    }
})

//s Test: http get 9000:/api/car/1
router.get('/:id', (req, res, next)=> {
    try{
        res.json('get car by id')
    }catch(err){
        next(err)
    }
})

// Err Test:  http post  :9000/api/fruits name=foo
router.post('/', (req, res, next)=>{
    try{
        res.json('post car')
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next)=>{ // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
    })
} )

module.exports = router