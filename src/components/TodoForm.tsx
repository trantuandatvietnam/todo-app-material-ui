import { Alert, AlertColor, Button, TextField } from "@mui/material";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoForm() {
  const { getTodoList, addTodo } = useContext(TodoContext);
  const todoList = getTodoList();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [alert, setAlert] = useState<{
    isShow: Boolean;
    mess: string;
    type: AlertColor | undefined;
  }>({
    isShow: false,
    mess: "",
    type: "success",
  });

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // validate todo
    if (!todoTitle) return;
    const existedTodo = todoList.find(
      (todo) => todo.title.toLowerCase() === todoTitle.toLowerCase()
    );
    if (existedTodo) {
      setAlert({
        isShow: true,
        mess: "Công việc này đã tồn tại",
        type: "error",
      });
      return;
    }
    addTodo({ title: todoTitle, status: "Chưa hoàn thành" });
    setAlert({
      isShow: true,
      mess: "Thêm công việc thành công",
      type: "success",
    });
    setTodoTitle("");
  };

  const handleCloseAlert = useCallback(() => {
    return setAlert({
      ...alert,
      isShow: false,
    });
  }, [alert]);

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        handleCloseAlert();
      }, 3000);
    }
  }, [alert.isShow, handleCloseAlert]);
  return (
    <form onSubmit={handleSubmit} className="mt-[24px] p-[24px]">
      {alert.isShow && (
        <Alert
          onClose={handleCloseAlert}
          sx={{ mb: 3 }}
          severity={alert.type}
          color={alert.type}
        >
          {alert.mess}
        </Alert>
      )}
      <TextField
        size="small"
        id="outlined-basic"
        label="Thêm công việc"
        variant="outlined"
        fullWidth
        onChange={handleChangeTitle}
        value={todoTitle}
      />
      <Button
        type="submit"
        sx={{ mt: "12px" }}
        variant="contained"
        size="medium"
      >
        Thêm
      </Button>
    </form>
  );
}

export default TodoForm;
