const Car = require('./cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkCarId  middleware!!!!")
  // next()
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
       next({status: 404, message: `car with id ${req.params.id} is not found` })
    }else{
      req.car = car
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkCarPayload  middleware!!!!")
  // next()
  try{
    const {vin, make, model, mileage} = req.body
    
    if(!vin || !vin.trim()){
      next({ status: 400, message: `vin is missing`  })
    }else if(!make || !make.trim()){
      next({ status: 400, message: `make is missing`  })
    }else if (!model|| !model.trim()){
      next({ status: 400, message: `model is missing`  })
    }else if(!mileage){
      next({ status: 400,message: `mileage is missing`  })
    }else {
      next()
    }
  }catch(err){
    next(err)
  }

  // way 2
  // const { vin, make, model, mileage } = req.body;
  // const error = { status: 400 };
  // try{
  //   if  (mileage === undefined){
  //     error.message = "mileage is missing";
  //   } else if (make === undefined) {
  //     error.message = "make is missing";
  //   } else if (model === undefined) {
  //     error.message = "model is missing";
  //   } else if (vin === undefined) {
  //     error.message = "vin is missing";
  //   }
  //   if (error.message) {
  //     next(error);
  //   } else {
  //     next();
  //   }
  // }catch(err){
  //   next(err)
  // }

}
// http post  :9000/api/cars vin=11111111111111111 make=BBBBB model=TTTTT mileage=13456
const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkVinNumberValid  middleware!!!!")
  // next()
  try{
    // var isValidVin = vinValidator.validate('11111111111111111'); 
    var isValidVin = vinValidator.validate(req.body.vin) 
    console.log(isValidVin)
    if(isValidVin){
      next()
    }else{
      next({ status: 400, message: `vin ${req.body.vin} is invalid`})
    }
  }catch(err){
    next()
  }
}



const checkVinNumberUnique =async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log("checkVinNumberUnique  middleware!!!!")
  // next()
  try{
    const existCar = await db('cars').where('vin', req.body.vin.trim()).first()
    // console.log("test: : ",existCar)
    if(!existCar){
      next()
    }else{
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    }
  }catch(err){
    next(err)
  }
}
module.exports ={
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}