// DO YOUR MAGIC

const res = require('express/lib/response');
// const {
//     checkCarId,
//     checkCarPayload,
//     checkVinNumberValid,
//     checkVinNumberUnique,
//   } = require('./cars-middleware') 
const md =require('./cars-middleware')
const  router  = require('express').Router();

// TEST: http get :8000/api/car
router.get('/', (req, res, next)=>{
    try{
        res.json('get car')
    }catch(err){
        next(err)
    }
})

//s Test: http get :8000/api/car/1
router.get('/:id', md.checkCarId, async(req, res, next)=> {
    try{
        res.json('get car by id')
    }catch(err){
        next(err)
    }
})

// Err Test:  http post  :8000/api/fruits name=foo
router.post('/', 
    md.checkCarPayload,
    md.checkVinNumberUnique,
    md.checkVinNumberUnique,
     (req, res, next)=>{
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