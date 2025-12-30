import { useState } from "react";
import { useCategory } from "../../contextApi/category/useCategory";

const CreateCategoryForm = () => {
  const [name, setName] = useState("");
  const { addCategory, loading } = useCategory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    await addCategory(name);
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-md
        mx-auto
        mt-6
        p-4
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-[rgb(var(--border-default))]
        bg-[rgb(var(--bg-card))]
      "
    >
      <input
        type="text"
        placeholder="Enter category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="
          flex-1
          px-3
          py-2
          rounded-md
          bg-[rgb(var(--bg-secondary))]
          border
          border-[rgb(var(--border-default))]
          text-[rgb(var(--text-primary))]
          placeholder:text-[rgb(var(--text-muted))]
          focus:outline-none
          focus:ring-2
          focus:ring-[rgb(var(--primary))]
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          px-4
          py-2
          rounded-md
          text-sm
          font-medium
          text-white
          bg-[rgb(var(--primary))]
          hover:bg-[rgb(var(--primary-hover))]
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default CreateCategoryForm;
