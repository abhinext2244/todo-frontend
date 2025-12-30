const RecentTodos = ({ todos }) => {
  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">Recent Todos</h3>

      <ul className="space-y-3 text-sm">
        {todos.map((t) => (
          <li
            key={t._id}
            className="flex justify-between items-center border-b pb-2 last:border-none"
          >
            <span>{t.title}</span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${
                t.isCompleted
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {t.isCompleted ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTodos;
