const express = require('express');
const mariadb = require('mariadb/callback');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mariadb.createConnection({
    user: 'root',
    password: 'root',

    host: 'localhost',
    database: 'test',
})


app.post('/addTask', async (request, response)=>{
    const text = request.body.text;

    db.query('INSERT INTO Tasks ( task ) VALUES( ? )', [ text ], (err, result)=>{
        if( err ) console.log(err);
        else{
            response.send('Value inserted');
        }
    });
})


app.get('/tasks', async (request, response)=>{
    db.query('SELECT * FROM Tasks ORDER BY id ASC', (err, result, meta)=>{
        if( err ) console.log(err);
        else{
            response.send(result);
        }
    })
})






app.listen(3001, ()=>{
    console.log('listening on port 3001');
})
