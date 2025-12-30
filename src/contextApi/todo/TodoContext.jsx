import { createContext, useState } from "react";
import {
  createTodo,
  fetchTodos,
  updateTodo,
  deleteTodo,
  singleTodo,
  updateTodoStatusApi,
} from "../../services/todoApi";
import { useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
const TodoContext = createContext(null);
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [oneTodo, setOneTodo] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");     
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;

  const addTodo = async (title, description, priority, dueDate, categoryId) => {
    try {
      const res = await createTodo(
        title,
        description,
        priority,
        dueDate,
        categoryId
      );
      if (res?.data?.success) {
        setTodo((prevTodos) => {
          const updatedTodos = [...prevTodos, res.data.data];
          console.log("Before:", prevTodos);
          console.log("Added todo:", res.data.data);
          console.log("After:", updatedTodos);
          return updatedTodos;
        });

        toast.success(res.data.message);
      }
      console.log("add", res.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to create todo");
    }
  };
  const getTodos = useCallback(async () => {
  try {
    const params = {};

    if (search.trim()) params.search = search;
    if (status) params.status = status;
    if (priority) params.priority = priority;
    if (category) params.category = category;

    params.page = page;
    params.limit = limit;

    const res = await fetchTodos(params);

    if (res?.data?.success) {
      setTodo(res.data.data || []);
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch todos");
  }
}, [search, status, priority, category, page, limit]);

  const SelectedTodo = async (id) => {
    try {
      const res = await singleTodo(id);
      if (res?.data?.success) {
        setOneTodo(res.data.data);
        return res.data.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to fetch todo");
    }
  };

  const editTodo = async (id, updatedData) => {
    try {
      const res = await updateTodo(id, updatedData);
      if (res?.data?.success) {
        setTodo((prev) =>
          prev.map((todo) => (todo._id === id ? res.data.data : todo))
        );
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to update todo");
    }
  };
  const removeTodo = async (id) => {
    try {
      const res = await deleteTodo(id);
      if (res?.data?.success) {
        setTodo((prev) => prev.filter((todo) => todo._id !== id));
      }
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to delete todo");
    }
  };
  const toggleTodoStatus = async (id) => {
  try {
    const res = await updateTodoStatusApi(id);

    setTodo((prev) =>
      prev.map((t) =>
        t._id === id ? res.data.data: t
      )
    );
  } catch (error) {
    console.error("Status update failed", error);
  }
};

 useEffect(() => {
    getTodos();
  }, [getTodos]);
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        addTodo,
        getTodos,
        editTodo,
        removeTodo,
        SelectedTodo,
        oneTodo,
        page,
        setPage,
        limit,
        search,
        setSearch,
        status,
        setStatus,
        priority,
        setPriority,
        category,
        setCategory,
        toggleTodoStatus
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
