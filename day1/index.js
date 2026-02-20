const express = require("express");

const app = express();
const PORT = 8000;


// Core: Implement in-memory CRUD for a Todo API (GET, POST, PUT, DELETE)
app.use(express.json());

const todos = [];

function handleInvalidId(id) {
    const todo = todos.find(x => x.id === Number(id));
    if(!todo) {
        throw new Error("todo not found :(");
    }
    return todo;
}

function handleMissingFields(title, description) {
    if(title == "" || title.trim() === "") {
        throw new Error("title is missing");
    }
    if(description == "" || description.trim() === "") {
        throw new Error ("description is missing");
    }
}

function handleDuplicateEntries(title, description) {
    dupeTitle = todos.find(x => x.title == title);
    dupeDescription = todos.find(y => y.description == description);
    if(dupeTitle && dupeDescription) throw new Error ("dupe entries arent allowed.");
}

app.get("/", (req, res) => {
    res.json(todos);
});

app.post("/add", (req, res) => {
    try {
        const {title, description} = req.body;
    
        handleDuplicateEntries(title, description);
        handleMissingFields(title, description);
        
        const newTodo = {id: Date.now(), title, description};
        todos.push(newTodo);
        res.json(newTodo);
    } catch(err) {
        res.json({error: err.message})
    }
}) 

app.put("/update/:id", (req, res) => {
    try {

        const {id} = req.params;    
        const {title, description} = req.body;
    
        const currTodo = handleInvalidId(id);
        handleDuplicateEntries(title, description);
        handleMissingFields(title, description);
    
        currTodo.title = title;
        currTodo.description = description;
    
        res.json(currTodo);
    } catch(err) {
        res.json({error: err.message});
    }
})

app.delete("/delete/:id", (req, res) => {
    try {
        const {id} = req.params;
    
        handleInvalidId(id);
    
        const currIndex = todos.findIndex(x => x.id == Number(id));
        if(currIndex === -1) throw new Error("todo not found :(");
    
        const deleted = todos.splice(currIndex, 1);
        res.json(`task id: ${id} has been deleted`);
    } catch(err) {
        res.json({error: err.message});
    }
})

app.listen(PORT, () => {
    console.log(`server is running on the ${PORT}. tap in nigga.`);
})