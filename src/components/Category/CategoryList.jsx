import { useCategory } from "../../contextApi/category/useCategory";
import { useLoading } from "../../contextApi/useLoading";

const CategoryList = () => {
  const { categories, editCategory, removeCategory } = useCategory();
  const { loading } = useLoading();

  if (loading)
    return (
      <p className="text-sm text-center text-[rgb(var(--text-secondary))] mt-6">
        Loading...
      </p>
    );

  if (categories.length === 0)
    return (
      <p className="text-sm text-center text-[rgb(var(--text-muted))] mt-6">
        No categories found
      </p>
    );

  return (
    <ul
      className="
        w-full
        max-w-md
        mx-auto
        mt-6
        flex
        flex-col
        gap-2
      "
    >
      {categories.map((cat) => (
        <li
          key={cat._id}
          className="
            flex
            items-center
            justify-between
            px-4
            py-3
            rounded-lg
            border
            border-[rgb(var(--border-default))]
            bg-[rgb(var(--bg-card))]
          "
        >
          {/* Category Name */}
          <span className="text-sm font-medium text-[rgb(var(--text-primary))]">
            {cat.name}
          </span>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                const newName = prompt("Edit name", cat.name);
                if (newName?.trim()) {
                  editCategory(cat._id, newName);
                }
              }}
              className="
                    px-3
                py-1
                rounded-md
                text-sm
                font-medium
                text-white
                bg-[rgb(20,184,166)]
                hover:bg-[rgb(13,148,136)]
                transition
                  "
            >
              Edit
            </button>

            <button
              onClick={() => removeCategory(cat._id)}
              className="
                px-3
                py-1
                rounded-md
                text-sm
                font-medium
                text-white
                bg-[rgb(var(--danger))]
                hover:opacity-90
                transition
              "
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
