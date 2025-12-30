import {apiConnector} from "./apiConnector";
import { todoendpoint } from "./api";
const { CREATE_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO, SINGLE_TODO, UPDATE_TODO_STATUS } = todoendpoint;
export const createTodo = (title, description,priority, dueDate, categoryId) => {
    return apiConnector("POST",CREATE_TODO, {
        title,
        description,
        priority,
        dueDate,
        categoryId,
    });
};
export const fetchTodos = (queryParams = {}) => {
  return apiConnector(
    "GET",
    FETCH_TODOS,
    null,        
    null,        
    queryParams  
  );
};

export const singleTodo = (id) => {
    return apiConnector("GET",SINGLE_TODO.replace(":id",id));
}
export const updateTodo = (id, updatedTodo) => {
  return apiConnector(
    "PUT",
    UPDATE_TODO.replace(":id", id),
    updatedTodo
  );
};
export const deleteTodo = (id) => {
    return apiConnector("DELETE",DELETE_TODO.replace(":id",id));    
}
export const updateTodoStatusApi = (id) => {
  return apiConnector(
    "PUT",
    UPDATE_TODO_STATUS.replace(":id", id)
  );
};
