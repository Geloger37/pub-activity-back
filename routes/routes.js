// JSON data
const pool = require('../data/config');

// Router
const router = app => {
    // Display welcome message on the root
   /* app.get('/:a', (request, response) => {
        const a = request.params.a;
        var c = a*b;
        response.status(200).send(`User added with ID:`+c);
    });
*/
    app.get('/institute', (request, response) => {
        pool.query('SELECT * FROM Institute', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    app.post('/institute', (request, response) => {
        pool.query('INSERT INTO Institute SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

    app.put('/institute/:idInstitute', (request, response) => {
        const idInstitute = request.params.idInstitute;
        pool.query('UPDATE Institute SET ? WHERE idInstitute = ?', [request.body, idInstitute], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    });

    app.delete('/institute/:idInstitute', (request, response) => {
    const idInstitute = request.params.idInstitute;

    pool.query('DELETE FROM Institute WHERE idInstitute = ?', idInstitute, (error, result) => {
        if (error) throw error;

        response.send('User deleted.');
    });
});

}

// Export the router
module.exports = router;
