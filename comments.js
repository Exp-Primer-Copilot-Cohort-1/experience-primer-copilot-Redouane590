// create web server
// 1. create server
// 2. register request listener
// 3. start server

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('middleware 1');
    next();
})

app.use((req, res, next) => {
    console.log('middleware 2');
    next();
})

app.use((req, res, next) => {
    console.log('middleware 3');
    next();
})

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        }
        res.send(JSON.parse(data));
    })
})

app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        }
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('./comments.json', JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal server error');
            }
            res.send('add comment successfully');
        })
    })
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})