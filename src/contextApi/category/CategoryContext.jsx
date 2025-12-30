import { createContext, useState } from "react";
import {useLoading} from "../../contextApi/useLoading";
import {
  createCategory,
  fetchCategories,
  updateCategory,
  deleteCategory,
} from "../../services/categoryApi";
import { toast } from "react-hot-toast";
import {useEffect} from "react";
import {useCallback} from "react";
const CategoryContext = createContext(null);

//  Provider
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { setLoading} = useLoading();

  // FETCH (user → own, admin → all) — backend decide karega
  const getCategories =useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchCategories();

      if (res?.data?.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch categories"
      );
    } finally {
      setLoading(false);
    }
  },[setLoading]);

  // CREATE
  const addCategory = async (name) => {
    try {
      const res = await createCategory(name);

      if (res?.data?.success) {
        toast.success(res.data.message);

        // new category add
        setCategories((prev) => [...prev, res.data.data]);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to create category"
      );
    }
  };

  // UPDATE
  const editCategory = async (id, name) => {
    try {
      const res = await updateCategory(id, name);

      if (res?.data?.success) {
        toast.success(res.data.message);

        setCategories((prev) =>
          prev.map((cat) =>
            cat._id === id ? res.data.data : cat
          )
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update category"
      );
    }
  };

  //  DELETE
  const removeCategory = async (id) => {
    try {
      const res = await deleteCategory(id);

      if (res?.data?.success) {
        toast.success(res.data.message);

        setCategories((prev) =>
          prev.filter((cat) => cat._id !== id)
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to delete category"
      );
    }
  };
 useEffect(() => {
  getCategories();
 },[getCategories])
  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        getCategories,
        addCategory,
        editCategory,
        removeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};



export default CategoryContext;
