import { useTodo } from "../../contextApi/todo/useTodo";
import { useCategory } from "../../contextApi/category/useCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const { categories } = useCategory();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTodo(
      formData.title,
      formData.description,
      formData.priority,
      formData.dueDate,
      formData.categoryId
    );

    navigate("/todos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-xl backdrop-blur-lg bg-white/90 border border-gray-200 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
           Create Todo
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Plan your tasks with clarity and priority
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">

          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Finish MERN project"
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white
              focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Write details about your task..."
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white
              focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Priority + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white
                focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white
                focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select category</option>
                {categories?.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Due Date & Time
            </label>
            <input
              type="datetime-local"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white
              focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-5 border-t">
            <button
              type="button"
              onClick={() => navigate("/todos")}
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition"
            >
              ← Back to list
            </button>

            <button
              type="submit"
              className="px-7 py-2.5 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700
              shadow-md hover:shadow-lg transition"
            >
              Create Todo
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TodoForm;
