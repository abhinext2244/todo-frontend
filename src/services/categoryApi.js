import {apiConnector} from "./apiConnector";
import { categoryendpoint } from "./api";

export const createCategory = (name) => {
    return apiConnector("POST", categoryendpoint.CREATE_CATEGORY, {
        name,
    });
}
export const fetchCategories = () => {
    return apiConnector("GET", categoryendpoint.FETCH_CATEGORY);
}

export const updateCategory = (id,name) => {
    return apiConnector("PUT", categoryendpoint.UPDATE_CATEGORY.replace(":id",id), {
        name,
    });
}
export const deleteCategory = (id) => {
    return apiConnector("DELETE", categoryendpoint.DELETE_CATEGORY.replace(":id",id));
}