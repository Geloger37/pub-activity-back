// JSON data
const pool = require('../data/config');
// const router = require('express').Router();

// Router
const router = app => {
    // Display welcome message on the root
    // app.get('/:a', (request, response) => {
        // const a = request.params.a;
        // var c = a*b;
        // response.status(200).send(`User added with ID:`+c);
    // });
    
    app.get('/institute', (request, response) => {
        pool.query('SELECT * FROM Institute', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    app.post('/institute', (request, response) => {
        pool.query('SELECT MAX(idInstitute) AS mx, COUNT(idInstitute) AS cnt FROM Institute', (error, result) => {
            if(error) throw error;
            let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
            pool.query('INSERT INTO Institute VALUES(?, ?)', [index, request.body.name], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        });
        
    });

    app.put('/institute', (request, response) => {
        pool.query('UPDATE Institute SET nameInstitute = ? WHERE idInstitute = ?', [request.body.name, request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    });

    app.delete('/institute', (request, response) => {

        pool.query('DELETE FROM Institute WHERE idInstitute = ?', [request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User deleted.');
        });
    });

}

// router.get('/', (req, res) => {
//     pool.query('SELECT * FROM Institute', function(error, result) {
//         if(error) throw error;

//         res.send(result);
//     })
// });

// Export the router
module.exports = router;
