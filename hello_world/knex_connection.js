//knex is a function, take mysql2 connection
var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123456',
      database : 'mydb'
    }
  });

//OR connect with URL
// const options = {
//   client: 'mysql2',
//   connection: "mysql://root:123456@localhost:3306/mydb"
// }

// const knex = require('knex')(options);


// //excute raw SQL command, and close the database connection with destroy()
// knex.raw("SELECT VERSION()").then(
//     (version) => console.log((version[0][0]))
//   ).catch((err) => { console.log( err); throw err })
//   .finally(() => {
//       knex.destroy();
//   });

// //create table and define columns
// knex.schema.createTable('cars', (table) => {
//   table.increments('id')
//   table.string('name')
//   table.integer('price')
// }).then(() => console.log("table created"))
//   .catch((err) => { console.log(err); throw err })
//   .finally(() => {
//       knex.destroy();
//   });


// //insert into table 
//   const cars = [
//     { name: 'Audi', price: 52642 },
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },
// ]

// knex('cars').insert(cars).then(() => console.log("data inserted"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });


// // select all from a table 
// knex.from('cars').select("*")
//     .then((rows) => {
//       console.log(rows);
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']} ${row['price']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// //restrict output with WHERE
knex.from('cars').select("name", "price").where('price', '>', '50000')
    .then((rows) => {
      console.log(rows);
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });




  // const getCustomer = async () => {
  //   const result =  await knex('customers').where({
  //       address: 'Highway 37'
  //     }).select('name')
    
  //   // knex('customers')
  //   // .where('address', 'Highway 37')
  //   // .select()
  //   // .toSQL()
  //   //await knex.select().table('customers');
  //   console.log(result[0].name);
  // }

  // getCustomer();
