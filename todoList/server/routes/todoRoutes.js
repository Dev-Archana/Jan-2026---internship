const router=require("express").Router();
const auth=require("../middleware/authMiddleware");
const {createTodo,getTodos,updateTodo,deleteTodo,toggleTodo}=require('../controllers/todoController');

router.post("/",auth,createTodo);
router.get("/",auth,getTodos);
router.put("/:id",auth,updateTodo);
router.delete("/:id",auth,deleteTodo);
router.patch("/:id/toggle",auth,toggleTodo);

module.exports=router;