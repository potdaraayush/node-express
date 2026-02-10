const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.json({message: 'hey there!'});
});

app.get('/users', (req, res) => {
    return res.json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(user => userId == user.id);
    return res.json(user);
})

app.post('/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        return res.json({status: "success"});
    });
    console.log(body);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});