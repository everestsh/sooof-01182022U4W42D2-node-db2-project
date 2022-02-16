// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2222222222222',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '3333333333333',
        make: 'ford',
        model: 'focus',
        mileage: 200000,
    },
]
const carss = [
{vin: 'zzzzzzzzzzzzz',make: 'toyota',model: 'prius',mileage: 1316000,title: 'wendy',transmission: 'manual'},
{vin: 'yyyyyyyyyyyyy',make: 'Audi',model: 'R8',mileage: 6000,transmission: 'manual'},
{vin: 'xxxxxxxxxxxxx',make: 'Porsche',model: 'Turbo',mileage: 1000,title: 'wendy',transmission: 'automatic'},
{vin: 'ooooooooooooo',make: 'Subaru',model: 'Outback XT',mileage: 13000},
{vin: 'ppppppppppppp',make: 'BMW',model: 'M5',mileage: 16000,title: 'wendy',transmission: 'automatic'},
]

const carsa = [
    { vin: 112233, make: "Audi", model: "R8", mileage: 5000, transmission: "manual"},
    { vin: 112343, make: "Porsche", model: "911 Turbo S", mileage: 0},
    { vin: 134533, make: "Mercedes-Benz", model: "AMG G63", mileage: 12000, transmission: "automatic"},
    { vin: 156783, make: "Subaru", model: "Outback XT", mileage: 50000, transmission: "manual"},
    { vin: 167993, make: "BMW", model: "M5", mileage: 26000, transmission: "manual"},
]
// exports.seed = function(knex){
//     return  knex('cars').truncate()
//     .then( ()=> {
//         return knex('cars').insert(cars)
//     });
// }
exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(carsa)
}



// exports.seed = function (knex) {
//     return knex('cars').truncate()
//       .then(function () {
//         return knex('cars').insert([
//             { vin: 112233, make: "Audi", model: "R8", mileage: 5000, transmission: "manual"},
//             { vin: 112343, make: "Porsche", model: "911 Turbo S", mileage: 0},
//             { vin: 134533, make: "Mercedes-Benz", model: "AMG G63", mileage: 12000, transmission: "automatic"},
//             { vin: 156783, make: "Subaru", model: "Outback XT", mileage: 50000, transmission: "manual"},
//             { vin: 167993, make: "BMW", model: "M5", mileage: 26000, transmission: "manual"},
//         ]);
//       });
//   };