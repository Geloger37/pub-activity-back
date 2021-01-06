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
    
    app.route("/institute")
        .get((request, response) => {
            pool.query('SELECT * FROM Institute', (error, result) => {
                if (error) throw error;
                response.send(result);
            });
        })
        .post((request, response) => {
            pool.query('SELECT MAX(idInstitute) AS mx, COUNT(idInstitute) AS cnt FROM Institute', (error, result) => {
                if(error) throw error;
                let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
                pool.query('INSERT INTO Institute VALUES(?, ?)', [index, request.body.name], (err, res) => {
                    if (err) throw err;
        
                    response.status(201).send(`User added with ID: ${res.insertId}`);
                });
            });
            
        })
        .put((request, response) => {
            pool.query('UPDATE Institute SET nameInstitute = ? WHERE idInstitute = ?', [request.body.name, request.body.id], (error, result) => {
                if (error) throw error;
    
                response.send('User updated successfully.');
            });
        })
        .delete((request, response) => {

            pool.query('DELETE FROM Institute WHERE idInstitute = ?', [request.body.id], (error, result) => {
                if (error) throw error;
    
                response.send('User deleted.');
            });
        })

    app.route("/degree")
    .get((request, response) => {
        pool.query('SELECT * FROM Degree', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    })
    .post((request, response) => {
        pool.query('SELECT MAX(idDegree) AS mx, COUNT(idDegree) AS cnt FROM Degree', (error, result) => {
            if(error) throw error;
            let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
            pool.query('INSERT INTO Degree VALUES(?, ?)', [index, request.body.name], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        });
        
    })
    .put((request, response) => {
        pool.query('UPDATE Degree SET nameDegree = ? WHERE idDegree = ?', [request.body.name, request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('DELETE FROM Degree WHERE idDegree = ?', [request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User deleted.');
        });
    })
    
    app.route("/sci_rank")
    .get((request, response) => {
        pool.query('SELECT * FROM Sci_rank', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    })
    .post((request, response) => {
        pool.query('SELECT MAX(idSciRank) AS mx, COUNT(idSciRank) AS cnt FROM Sci_rank', (error, result) => {
            if(error) throw error;
            let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
            pool.query('INSERT INTO Sci_rank VALUES(?, ?)', [index, request.body.name], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        });
        
    })
    .put((request, response) => {
        pool.query('UPDATE Sci_rank SET name_sci_rank = ? WHERE idSciRank = ?', [request.body.name, request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('DELETE FROM Sci_rank WHERE idSciRank = ?', [request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User deleted.');
        });
    })

    app.route("/cathedra")
    .get((request, response) => {
        pool.query('SELECT * FROM Cathedra', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    })
    .post((request, response) => {
        pool.query('SELECT MAX(idCathedra) AS mx, COUNT(idCathedra) AS cnt FROM Cathedra ', (error, result) => {
            if(error) throw error;
            let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
            pool.query('INSERT INTO Cathedra VALUES(?, ?, ?)', [index, request.body.id, request.body.name], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        });
        
    })
    .put((request, response) => {
        pool.query('UPDATE Cathedra SET idInstitute = ?, nameCathedra = ? WHERE idCathedra = ?', [request.body.idInst, request.body.name, request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('DELETE FROM Cathedra WHERE idCathedra = ?', [request.body.id], (error, result) => {
            if (error) throw error;

            response.send('User deleted.');
        });
    })

    app.route("/post")
        .get((request, response) => {
            pool.query('SELECT * FROM Post', (error, result) => {
                if (error) throw error;
                response.send(result);
            });
        })
        .post((request, response) => {
            pool.query('SELECT MAX(idPost) AS mx, COUNT(idPost) AS cnt FROM Post', (error, result) => {
                if(error) throw error;
                let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
                pool.query('INSERT INTO Post VALUES(?, ?, ?)', [index, request.body.name, request.body.val], (err, res) => {
                    if (err) throw err;
        
                    response.status(201).send(`User added with ID: ${res.insertId}`);
                });
            });
            
        })
        .put((request, response) => {
            pool.query('UPDATE Post SET postName = ?, minPlanValue = ? WHERE idPost = ?', [request.body.name, request.body.val, request.body.id], (error, result) => {
                if (error) throw error;
    
                response.send('User updated successfully.');
            });
        })
        .delete((request, response) => {

            pool.query('DELETE FROM Post WHERE idPost = ?', [request.body.id], (error, result) => {
                if (error) throw error;
    
                response.send('User deleted.');
            });
        })

    // app.get('/institute', (request, response) => {
    //     pool.query('SELECT * FROM Institute', (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     });
    // });

    // app.post('/institute', (request, response) => {
    //     pool.query('SELECT MAX(idInstitute) AS mx, COUNT(idInstitute) AS cnt FROM Institute', (error, result) => {
    //         if(error) throw error;
    //         let index = (result[0].cnt != 0 ? result[0].mx + 1 : 1)
    //         pool.query('INSERT INTO Institute VALUES(?, ?)', [index, request.body.name], (err, res) => {
    //             if (err) throw err;
    
    //             response.status(201).send(`User added with ID: ${res.insertId}`);
    //         });
    //     });
        
    // });

    // app.put('/institute', (request, response) => {
    //     pool.query('UPDATE Institute SET nameInstitute = ? WHERE idInstitute = ?', [request.body.name, request.body.id], (error, result) => {
    //         if (error) throw error;

    //         response.send('User updated successfully.');
    //     });
    // });

    // app.delete('/institute', (request, response) => {

    //     pool.query('DELETE FROM Institute WHERE idInstitute = ?', [request.body.id], (error, result) => {
    //         if (error) throw error;

    //         response.send('User deleted.');
    //     });
    // });

}

// router.get('/', (req, res) => {
//     pool.query('SELECT * FROM Institute', function(error, result) {
//         if(error) throw error;

//         res.send(result);
//     })
// });

// Export the router
module.exports = router;
