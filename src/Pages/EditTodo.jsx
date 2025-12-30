import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "../contextApi/todo/useTodo";
import { useCategory } from "../contextApi/category/useCategory";
import {useLoading} from "../contextApi/useLoading";
import EditTodoForm from "../components/Todo/EditTodoForm";
const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { SelectedTodo, editTodo } = useTodo();
  const { categories, getCategories } = useCategory();
  const { loading, setLoading } = useLoading();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    category: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const todo = await SelectedTodo(id);
      await getCategories();

      if (todo) {
        setFormData({
          title: todo.title || "",
          description: todo.description || "",
          priority: todo.priority || "",
          dueDate: todo.dueDate?.slice(0, 10) || "",
          category: todo.category || "",
        });
      }

      setLoading(false);
    };

    if (id) fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editTodo(id, formData);
    navigate("/todos");
  };

  if (loading) return <p>Loading...</p>;

return (
  <div className="flex justify-center">
    <div className="w-full max-w-lg ">
  <EditTodoForm
    formData={formData}
    categories={categories}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />
</div>

  </div>
);

};

export default EditTodo;