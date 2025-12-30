import {TodoList} from "../components/Todo/TodoList";
import {useTodo} from "../contextApi/todo/useTodo";
import {useEffect} from "react";
const MyTodo = () => {
    const {getTodos,search,status,priority,category} = useTodo();
    useEffect(() => {
        getTodos();
    
    },[search,status,priority,category]);
    return (
        <TodoList />
    )
};

export default MyTodo