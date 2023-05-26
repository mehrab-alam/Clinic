import mysql from 'mysql2'
export default function handler(req, res) {
    const query = req.query
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
            res.status(500).json({ result: 'there is some problem' })
        }

        /**
         * api for inserting the data in table
         */
        if (req.method == 'POST') {
            /***
             * querry for checking wheather this patient's information already exist or not.
             */
            const count = `SELECT COUNT(*) from Patients WHERE mail = "${req.body.mail}" &&  number = ${req.body.number};`
            connection.query(count, function (err, result) {
                if (err) throw err;
                if (result[0]['COUNT(*)'] > 0) {
                    res.status(201).json({ result: `it is already exist` })
                    console.log("exist")
                }
                else {
                    /***
                     * counting the rows and setting the id accordingly.
                     */
                    const count = `SELECT COUNT(*) from Patients;`
                    connection.query(count, function (err, result) {
                        if (err) throw err;
                        let id = result[0]['COUNT(*)'] + 1
                        /**
                         * querry for inserting the information of the patients
                         */
                        const insertData = `INSERT INTO Patients(patientId,name,mail,number,Date,time,location,address) VALUES(${id},"${req.body.name}","${req.body.mail}",${req.body.number},"${req.body.Date}","${req.body.time}","${req.body.location}","${req.body.address}")`;
                        connection.query(insertData, function (err, result) {
                            if (err) throw err;
                            res.status(200).json({ status: ' appointment booked' })
                        })

                    })
                }
            })
        }
    })
}


























        //     connection.query(`SELECT * FROM customers`, function (err, result) {
        //         if (err) throw err;
        //         res.status(200).json({ result })
        //     })


        //     if (req.method == 'POST' && req.body.key == undefined) {
        //         const count = `SELECT COUNT(*) from customers;`
        //         connection.query(count, function (err, result) {
        //             if (err) throw err;
        //             console.log(result['COUNT(*)'])
        //             res.status(200).json({ result })
        //         })
        //     }

        //     if (req.method == 'POST' && req.body.name != undefined) {
        //         console.log(req.body)
        //         const insertData = `INSERT INTO customers(customerId,name,mail,number,Date,time,location,address) VALUES(${id},"${req.body.name}","${req.body.mail}",${req.body.number},"${req.body.Date}","${req.body.time}","${req.body.location}","${req.body.address}")`;
        //         connection.query(insertData, function (err, result) {
        //             if (err) throw err;
        //             console.log(result)
        //             res.status(201).json({ stutus: 'customer created' })
        //         })
        //     }

