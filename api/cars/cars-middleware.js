

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(' middleware!!!')
  next()
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(' middleware!!!')
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(' middleware!!!')
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(' middleware!!!')
  next()
}
module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
