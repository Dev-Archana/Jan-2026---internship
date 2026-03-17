const Todo = require("../model/Todo");

exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create({
            userId: req.user.id,
            title: req.body.title
        });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;

        const todos = await Todo.find({ userId: req.user.id })
            .skip((page - 1) * limit)
            .limit(limit);  

        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title },
            { new: true }
        );
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        todo.completed = !todo.completed; 

        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};