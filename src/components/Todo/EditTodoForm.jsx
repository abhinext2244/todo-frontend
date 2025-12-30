const EditTodoForm = ({ formData, categories, onChange, onSubmit, onCancel }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-xl backdrop-blur-lg bg-white/90 border border-gray-200 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
             Edit Todo
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Update task details and keep everything on track
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="px-8 py-6 space-y-6">

          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300
              focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
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
              onChange={onChange}
              rows={3}
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300
              focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
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
                onChange={onChange}
                required
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
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
                onChange={onChange}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              >
                <option value="">Select category</option>
                {categories?.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Due Date & Time */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Due Date & Time
            </label>
            <input
              type="datetime-local"      
              name="dueDate"
              value={formData.dueDate}
              onChange={onChange}
              required
              className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-300
              focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-5 border-t">
            <button
              type="button"
              onClick={onCancel}
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition"
            >
              ← Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-2.5 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700
              shadow-md hover:shadow-lg transition"
            >
              Update Todo
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditTodoForm;
