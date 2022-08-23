import { createContext, ReactNode, useState } from "react";
import { ITodo, ITodoContext, ITodoData } from "./TodoContext.model";

export const TodoContext = createContext<ITodoContext>({
  updateTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  getTodoList: () => [],
  changeFilter: () => {},
});
function TodoProvider({ children }: { children: ReactNode }) {
  // State
  const [todoData, setTodoData] = useState<ITodoData>({
    filters: {
      search: "",
      status: "Tất cả",
    },
    todoList:
      JSON.parse(localStorage.getItem("todoList") as string)?.todoList || [],
  });

  // Todo Actions
  const updateTodo = (title: string, todoUpdate: ITodo) => {
    const newTodoData = {
      ...todoData,
    };
    const index = todoData.todoList.findIndex(
      (todo: ITodo) => todo.title === title
    );
    newTodoData.todoList[index] = todoUpdate;
    setTodoData(newTodoData);
    localStorage.setItem("todoList", JSON.stringify(newTodoData));
  };
  const deleteTodo = (title: string) => {
    const newTodoList = todoData.todoList.filter(
      (todo: ITodo) => todo.title !== title
    );
    setTodoData({ ...todoData, todoList: newTodoList });
    localStorage.setItem(
      "todoList",
      JSON.stringify({ ...todoData, todoList: newTodoList })
    );
  };
  const getTodoList = () => {
    return todoData.todoList.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(todoData.filters.search.toLowerCase()) &&
      todoData.filters.status === "Tất cả"
        ? true
        : todo.status === todoData.filters.status
    );
  };
  const addTodo = (newTodo: ITodo) => {
    setTodoData({
      ...todoData,
      todoList: [...todoData.todoList, newTodo],
    });
    localStorage.setItem(
      "todoList",
      JSON.stringify({
        ...todoData,
        todoList: [...todoData.todoList, newTodo],
      })
    );
  };

  // Filter Actions
  const changeFilter = ({ field, value }: { field: string; value: string }) => {
    setTodoData({
      ...todoData,
      filters: {
        ...todoData.filters,
        [field]: value,
      },
    });
  };
  const data = { updateTodo, deleteTodo, getTodoList, addTodo, changeFilter };
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
