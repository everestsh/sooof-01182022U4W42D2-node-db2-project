// DO YOUR MAGIC
const router = require('express').Router()
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
  } = require('./cars-middleware')

  // TEST: http get :9000/api/car
router.get('/', async (req, res, next)=>{
    // res.json({message: "[GET] cars"})
    try{
        const cars = await Car.getAll()
        res.json(cars)
    }catch(err){
        next(err)
    }
})
// Test: http get :9000/api/cars/1
router.get('/:id', checkCarId, async (req, res, next)=>{
    // res.json({message: "[GET] car by id"})
    try{
        res.json(req.car)
    }catch(err){
        next(err)
    }
})
//  Test http post  :9000/api/cars vin=12111111111111111 make=BBBBB model=TTTTT mileage=13456
// TEST ERR:  http post  :9000/api/cars make=BBBBB model=TTTTT mileage=13456              ### "message": "vin is missing"
// TEST ERR:  http post  :9000/api/cars vin=12111111111111111  model=TTTTT mileage:=13456 ### "message": "make is missing"
// TEST ERR:  http post  :9000/api/cars vin=12111111111111111 make=BBBBB  mileage:=13456  ### "message": "model is missing"
// TEST ERR:  http post  :9000/api/cars vin=12111111111111111 make=BBBBB model=TTTTT      ### "message": "mileage is missing" 
// TEST ERR:  http post  :9000/api/cars vin:=12111111111111111 make=BBBBB model=TTTTT mileage:=13456     ###
router.post('/',
checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique,
async (req, res, next)=>{
    // res.json({message: "[POST] car"})
    try{
        const car = await Car.create(req.body)
        res.status(201).json(car)
    }catch(err){
        next(err)
    }
})

module.exports = router