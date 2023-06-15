import mysql from 'mysql2'

console.log(DB_DATABASE)
console.log(DB_HOST)
console.log(DB_PASSWORD)
console.log(DB_USERS)


const connection = mysql.createConnection({
    user: process.env.DB_USERS,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});
connection.connect((err) => {
    if (err) {
        console.log(err)

    }
    const table = "create table patients(patientId SMALLINT, name varchar(25),mail varchar(40),number INT,Date VARCHAR(40),time VARCHAR(40),location VARCHAR(20) ,address VARCHAR(50));"
    connection.query(table, function (err, result) {
        if (err) throw err;

    })

})