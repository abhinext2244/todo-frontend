const BASE_URL = import.meta.env.VITE_BASE_URL;
export const authendpoint={
    REGISTER_API:`${BASE_URL}/auth/register`,
    LOGIN_API:`${BASE_URL}/auth/login`,
    GETME_API:`${BASE_URL}/auth/me`,
    LOGOUT_API:`${BASE_URL}/auth/logout`

}
export const categoryendpoint={
    CREATE_CATEGORY:`${BASE_URL}/categories`,
    FETCH_CATEGORY:`${BASE_URL}/categories`,
    UPDATE_CATEGORY:`${BASE_URL}/categories/:id`,
    DELETE_CATEGORY:`${BASE_URL}/categories/:id`
}
export const todoendpoint={
    CREATE_TODO:`${BASE_URL}/auth/todos`,
    FETCH_TODOS:`${BASE_URL}/auth/todos`,
    UPDATE_TODO:`${BASE_URL}/auth/todos/:id`,
    SINGLE_TODO:`${BASE_URL}/auth/todos/:id`,
    DELETE_TODO:`${BASE_URL}/auth/todos/:id`,
    UPDATE_TODO_STATUS: `${BASE_URL}/auth/todos/status/:id`,

}
export const dashboardendpoint={
    DASHBOARD:`${BASE_URL}/auth/dashboard`,
    ADMIN_DASHBOARD:`${BASE_URL}/admin/dashboard`
}
