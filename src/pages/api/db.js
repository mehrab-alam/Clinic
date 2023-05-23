import mysql from 'mysql2'


export default function handler(req, res) {
    const query = req.query
    const { id } = query
    console.log(id)

    const connection = mysql.createConnection({
        user: "root",
        password: "Mehrab@123",
        host: "127.0.0.1",
        port: "3306",
        database: "clinicdb"
    });
    connection.connect((err) => {
        if (err) {
            console.log(err)
        }
        if (req.method == 'POST') {
            const insertData = `INSERT INTO customers(customerId,name,mail,number,Date,time,location,address) VALUES(${id},"${req.body.name}","${req.body.mail}",${req.body.number},"${req.body.Date}","${req.body.time}","${req.body.location}","${req.body.address}")`
            connection.query(insertData, function (err, result) {
                if (err) throw err;
                console.log(result)
                res.status(200).json({})
            })
        }

    })
}