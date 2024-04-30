import api from "../index";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const useTodosApi = () => {
  const addTodo = async (data) => api.post("/todos", { ...data }, config);
  const editTodo = async (data, id) =>
    api.patch(`/todos/${id}`, { ...data }, config);
  const getTodos = async () => api.get("/todos");
  const deleteTodo = async (id) => api.delete(`/todos/${id}`, config);

  return {
    addTodo,
    editTodo,
    getTodos,
    deleteTodo,
  };
};

export default useTodosApi;
