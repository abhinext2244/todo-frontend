import todoContext from "./TodoContext.jsx";
import { useContext } from "react";

export const useTodo = () => {
    const ctx = useContext(todoContext);
    if (!ctx) throw new Error("useTodo must be used within TodoProvider");
    return ctx;
};