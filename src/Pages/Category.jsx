import { useEffect } from "react";
import { useCategory } from "../contextApi/category/useCategory";
import CreateCategoryForm from "../components/Category/CategoryForm";
import CategoryList from "../components/Category/CategoryList";

const Category = () => {
  const { getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="
        min-h-screen
        px-4
        py-8
        bg-[rgb(var(--bg-app))]
        text-[rgb(var(--text-primary))]
      "
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Categories
      </h2>

      <CreateCategoryForm />
      <CategoryList />
    </div>
  );
};

export default Category;
