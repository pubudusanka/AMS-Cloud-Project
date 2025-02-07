const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Smax@0251',
    database: 'attendance'
});

app.get('/student/getstudent', (req, res) => {
    const query = 'SELECT email, password FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
