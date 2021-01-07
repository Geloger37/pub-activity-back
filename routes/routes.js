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
            pool.query('CALL GET_INSTITUTES()', (error, result) => {
                if (error) throw error;
                response.send(result[0]);
            });
        })
        .post((request, response) => {
            pool.query('CALL INSERT_INSTITUTE(?)', [request.body.name], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        })
        .put((request, response) => {
            pool.query('CALL UPDATE_INSTITUTE(?, ?)', [request.body.id, request.body.name], (error, result) => {
                if (error) throw error;
    
                response.send('User updated successfully.');
            });
        })
        .delete((request, response) => {
            pool.query('SELECT COUNT(idCathedra) AS cnt FROM Cathedra WHERE idInstitute = ?', [request.body.id], (err, res) => {
                if(res[0].cnt == 0)
                pool.query('CALL DELETE_INSTITUTE(?)', [request.body.id], (error, result) => {
                    if (error) throw error;
        
                    response.send('User deleted.');
                });
                else 
                    response.status(404).send('')
            });
            
        })

    app.route("/degree")
    .get((request, response) => {
        pool.query('CALL GET_DEGREES()', (error, result) => {
            if (error) throw error;
            response.send(result[0]);
        });
    })
    .post((request, response) => {
        pool.query('CALL INSERT_DEGREE(?)', [request.body.name], (err, res) => {
            if (err) throw err;

            response.status(201).send(`User added with ID: ${res.insertId}`);
        });
    })
    .put((request, response) => {
        pool.query('CALL UPDATE_DEGREE(?, ?)', [request.body.id, request.body.name], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('SELECT COUNT(idEmployee) AS cnt FROM Employees WHERE idDegree = ?', [request.body.id], (err, res) => {
            if(res[0].cnt == 0)
            pool.query('CALL DELETE_DEGREE(?)', [request.body.id], (error, result) => {
                if (error) throw error;
    
                response.send('User deleted.');
            });
            else 
                response.status(404).send('')
        });
    })
    
    app.route("/sci_rank")
    .get((request, response) => {
        pool.query('CALL GET_SCI_RANKS()', (error, result) => {
            if (error) throw error;
            response.send(result[0]);
        });
    })
    .post((request, response) => {
        pool.query('CALL INSERT_SCI_RANK(?)', [request.body.name], (err, res) => {
            if (err) throw err;

            response.status(201).send(`User added with ID: ${res.insertId}`);
        });
    })
    .put((request, response) => {
        pool.query('CALL UPDATE_SCI_RANK(?, ?)', [request.body.id, request.body.name], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('SELECT COUNT(idEmployee) AS cnt FROM Employees WHERE idSciRank = ?', [request.body.id], (err, res) => {
            if(res[0].cnt == 0)
            pool.query('CALL DELETE_SCI_RANK(?)', [request.body.id], (error, result) => {
                if (error) throw error;

                response.send('User deleted.');
            });
            else 
                response.status(404).send('')
        });
    })

    app.route("/cathedra")
    .get((request, response) => {
        pool.query('CALL GET_CATHEDRAS()', (error, result) => {
            if (error) throw error;
            response.send(result[0]);
        });
    })
    .post((request, response) => {
        pool.query('CALL INSERT_CATHEDRA(?, ?)', [request.body.id, request.body.name], (err, res) => {
            if (err) throw err;

            response.status(201).send(`User added with ID: ${res.insertId}`);
        });
    })
    .put((request, response) => {
        pool.query('CALL UPDATE_CATHEDRA(?, ?, ?)', [request.body.id, request.body.idInst, request.body.name], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    })
    .delete((request, response) => {
        pool.query('SELECT COUNT(idEmployee) AS cnt FROM Employees WHERE idCathedra = ?', [request.body.id], (err, res) => {
            if(res[0].cnt == 0)
            pool.query('CALL DELETE_CATHEDRA(?)', [request.body.id], (error, result) => {
                if (error) throw error;

                response.send('User deleted.');
            });
            else 
                response.status(404).send('')
        });
    })

    app.route("/post")
        .get((request, response) => {
            pool.query('CALL GET_POSTS()', (error, result) => {
                if (error) throw error;
                response.send(result[0]);
            });
        })
        .post((request, response) => {
            pool.query('CALL INSERT_POST(?, ?)', [request.body.name, request.body.val], (err, res) => {
                if (err) throw err;
    
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        })
        .put((request, response) => {
            pool.query('CALL UPDATE_POST(?, ?, ?)', [request.body.id, request.body.name, request.body.val], (error, result) => {
                if (error) throw error;
    
                response.send('User updated successfully.');
            });
        })
        .delete((request, response) => {
            pool.query('SELECT COUNT(idEmployee) AS cnt FROM Employees WHERE idPost = ?', [request.body.id], (err, res) => {
                if(res[0].cnt == 0)
                pool.query('CALL DELETE_POST(?)', [request.body.id], (error, result) => {
                    if (error) throw error;
                
                    response.send('User deleted.');
                });
                else 
                response.status(404).send('')
            });
        })

    app.route("/employee")
        .get((request, response) => {
            pool.query('CALL GET_EMPLOYEES()', (error, result) => {
                if (error) throw error;
                response.send(result[0]);
            });
        })
        .post((request, response) => {
            pool.query('CALL INSERT_EMPLOYEE(?, ?, ?, ?, ?, ?)', [request.body.fio, request.body.idcath, request.body.idrank, request.body.iddegree, request.body.idpost, request.body.status], (err, res) => {
                if (err) throw err;
                response.status(201).send(`User added with ID: ${res.insertId}`);
            });
        })
        .put((request, response) => {
            pool.query('CALL UPDATE_EMPLOYEE(?, ?, ?, ?, ?, ?, ?)', [request.body.id, request.body.fio, request.body.idcath, request.body.idrank, request.body.iddegree, request.body.idpost, request.body.status], (error, result) => {
                if (error) throw error;

                response.send('User updated successfully.');
            });
        })
        .delete((request, response) => {

            pool.query('CALL DELETE_EMPLOYEE(?)', [request.body.id], (error, result) => {
                if (error) throw error;

                response.send('User deleted.');
            });
        })

}

// Export the router
module.exports = router;
