const connection = require('../sql/connection');

const getUsers = (req, res) => {
    console.log(`inside the getUsers list route`);
    // select all from users to show a list and limit to 100 in case database is larger
    connection.query('SELECT * FROM users LIMIT 100', function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
};

const getUsersById = (req, res) => {
    console.log(`inside the getUsersById route`);
    // Return either one or a list of user(s) with the id
    let sql = `SELECT * FROM users WHERE UserId = ${req.params.UserId}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(`there is an error : ${err}`);
            res.status(500).send(`internal service error`)
        };
        console.log(results);
        res.json(results)
    })
};

const createUser = (req, res) => {
    console.log(`inside the createUser route`);
    // Create a new user with this information
    let sql = `INSERT INTO users (UserId, FirstName, LastName, Age) VALUES (${req.params.UserId}, ${req.params.FirstName}, ${req.params.LastName}, ${req.params.Age}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(`there is an error : ${err}`);
            res.status(500).send(`internal service error (employee by firstname), ${req.params.FirstName}`)
        };
        console.log(results);
        res.json(results)
    })
};

const updateUser = (req, res) => {
    console.log(`inside the updateUser route`);
    // Update user with id 
    let sql = `UPDATE users SET
        UserId = ${req.params.UserId}, FirstName = ${req.params.FirstName}, LastName = ${req.params.LastName}, Age = ${req.params.Age} 
        WHERE UserId = ${req.params.UserId}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(`there is an error : ${err}`);
            res.status(500).send(`internal service error (employee by firstname), ${req.params.FirstName}`)
        };
        console.log(results);
        res.json(results)
    })
};

const deleteUser = (req, res) => {
    console.log(`inside the deleteUser route`);
    // Delete a user by their id
    let sql = `DELETE * FROM employees WHERE first_name = '${req.params.FirstName}'`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(`there is an error : ${err}`);
            res.status(500).send(`internal service error (employee by firstname), ${req.params.FirstName}`)
        };
        console.log(results);
        res.json(results)
    })
};

module.exports = { getUsers, getUsersById, createUser, updateUser, deleteUser};