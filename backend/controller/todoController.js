const Todo = require('../models/todoModel');

exports.addTodo = async (req, res) => {
    try {
        const {title,description,dueDate,status} = req.body;
        let find=await Todo.find({})
        let length=find.length+1
        let id = length.toString();
          id=id.padStart(3,0);
        const todo = new Todo({
            id:id,
            title:title,
            description:description,
            dueDate:new Date(dueDate),
            status:status
            
        });
        await todo.save();
        const todos = await Todo.find();
       return res.json({
            success:true,
            message:'data added successfully'
        });
    } catch (error) {
        console.error(error);
        return  res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
       if(todos.length!=0)
        return  res.json(todos);
        else
        return  res.json({
            message:'data not present'
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Update the todo document by ID
        const updatedTodo = await Todo.findOneAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        
        return res.status(200).json({
            success:true,
            message:'data updated',
            updatedTodo
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the todo document by ID
        await Todo.findOneAndDelete({id});
       
        return res.status(200).json({
            success:false,
            message:'data deleted'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
