import {useContext} from "react";
import CategoryContext from "./CategoryContext";

export const useCategory = () => {
    const ctx = useContext(CategoryContext);
    if (!ctx) throw new Error("useCategory must be used within CategoryProvider");
    return ctx;
};