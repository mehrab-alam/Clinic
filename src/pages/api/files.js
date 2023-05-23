import mysql from 'mysql2'


export default function handler(req, res) {
    const query = req.query
    const { name } = query
    console.log(name)
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
        else {
            connection.query(`select * from customers`, function (err, result) {
                if (err) throw err;
                res.status(200).json({ result })
            })
        }
    })
}