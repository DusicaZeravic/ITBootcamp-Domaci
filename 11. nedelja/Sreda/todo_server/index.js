import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

let todos = [
    {
        id: 1,
        text: 'dsjhfsdjk',
        done: true
    }
]

// Рута за читање целог низа
app.get('/todos', (_, res) => {
    res.json(todos);
});

// Рута за читање једног елемента (по id)
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id == id);
    if (todo) {
        res.json(todo)
    } else {
        res.status(404).send('Not Found');
    }
});

// Рута за брисање једног елемента (по id)
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id != id);

    res.status(204).end();
});

// Рута за додавање елемента
app.post('/todos', (req, res) => {
    const id = uuidv4();

    const todoItem = req.body;
    todoItem.id = id;

    todos.push(todoItem);
    res.json(todoItem);
});

// Рута за мењање елемента (по id)
app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;

    const item = todos.find(todo => todo.id == id);
    const newItem = req.body;

    todos.splice(item, 1, { ...newItem, id });
    res.json(newItem);
});

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`listened on http://localhost:${PORT}`);
})