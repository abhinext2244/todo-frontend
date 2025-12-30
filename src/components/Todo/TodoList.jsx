import { useTodo } from "../../contextApi/todo/useTodo";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contextApi/category/useCategory";

export const TodoList = () => {
  const {
    todo,
    toggleTodoStatus,
    removeTodo,
    search,
    page,
    setPage,
    setSearch,
    setStatus,
    setPriority,
    setCategory,
  } = useTodo();

  const { categories } = useCategory();
  const navigate = useNavigate();

  return (
    <>
      {/* Filters */}
      <div
        className="
          bg-[rgb(var(--bg-card))]
          border border-[rgb(var(--border-default))]
          rounded-xl
          p-20
          mb-6
          shadow-sm
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              px-4 py-2.5
              rounded-lg
              border border-[rgb(var(--border-default))]
              bg-[rgb(var(--bg-secondary))]
              text-sm
              focus:ring-2 focus:ring-indigo-500
              outline-none
            "
          />

          {/* Status */}
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="input-select"
          >
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

          {/* Priority */}
          <select
            onChange={(e) => setPriority(e.target.value)}
            className="input-select"
          >
            <option value="">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Category */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="input-select"
          >
            <option value="">All Categories</option>
            {categories?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Empty State */}
      {todo.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-10">
          No todos found
        </p>
      )}

      {/* Todo List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
        {todo.map((t) => (
          <li
            key={t._id}
            className="
              bg-[rgb(var(--bg-card))]
              border border-[rgb(var(--border-default))]
              rounded-xl
              p-4
              flex flex-col
              gap-2
              transition
              hover:-translate-y-0.5
            "
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">
                {t.title}
              </h3>

              {/* Status */}
              <span
                onClick={() => toggleTodoStatus(t._id)}
                className={`px-2 py-1 rounded-md text-xs font-medium text-white cursor-pointer
                  ${t.isCompleted ? "bg-[rgb(20,184,166)]" : "bg-red-500"}
                `}
              >
                {t.isCompleted ? "Completed" : "Pending"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[rgb(var(--text-secondary))] line-clamp-3">
              {t.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-2 text-xs mt-1">
              {/* Priority */}
              <span
                className={`px-2 py-1 rounded font-medium
                  ${
                    t.priority === "High"
                      ? "bg-[rgb(var(--danger-light))] text-[rgb(var(--danger))]"
                      : t.priority === "Medium"
                      ? "bg-[rgb(var(--warning-light))] text-[rgb(var(--warning))]"
                      : "bg-[rgb(224,242,254)] text-[rgb(var(--priority-low))]"
                  }
                `}
              >
                {t.priority}
              </span>

              {/* Due date */}
              <span className="px-2 py-1 rounded bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text-secondary))]">
                Due: {new Date(t.dueDate).toLocaleString()}
              </span>

              {/* Category */}
              {t.category?.name && (
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-indigo-500 text-white">
                  {t.category.name}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => navigate(`/todos/${t._id}`)}
                className="btn-primary"
              >
                Edit
              </button>

              <button
                onClick={() => removeTodo(t._id)}
                className="btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination */}
<div className="flex justify-center items-center gap-4 mt-10">
  <button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40"
  >
    Prev
  </button>

  <span className="text-sm font-medium">
    Page {page}
  </span>

  <button
    onClick={() => setPage(page + 1)}
    className="px-4 py-2 rounded-lg border text-sm"
  >
    Next
  </button>
</div>

    </>
  );
};

export default TodoList;