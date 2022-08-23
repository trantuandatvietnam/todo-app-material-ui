import { Button, Dialog, List } from "@mui/material";
import { useContext, useState } from "react";
import { ITodo } from "../context/TodoContext.model";
import { TodoContext } from "../context/TodoProvider";
import TodoItem from "./TodoItem";
import noMessage from "../assests/imgs/no.gif";

function TodoList() {
  const { getTodoList, deleteTodo } = useContext(TodoContext);
  const todoList = getTodoList();
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTodoWantDelete, setCurrentTodoWantDelete] =
    useState<string>("");

  const handleClickOpen = (title: string) => {
    setOpenDialog(true);
    setCurrentTodoWantDelete(title);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleClickDelete = () => {
    deleteTodo(currentTodoWantDelete);
    setOpenDialog(false);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        overflowY: "auto",
        bgcolor: "background.paper",
        padding: "12px",
      }}
    >
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <p className="p-[12px]">Bạn có muốn xóa công việc này không?</p>
        <div className="inline-flex">
          <div className="max-w-[120px]">
            <img src={noMessage} alt="" />
          </div>
          <div className="inline-flex items-center gap-x-[12px]">
            <Button
              size="small"
              color="error"
              className="h-max"
              variant="contained"
              onClick={handleClickDelete}
            >
              Có
            </Button>
            <Button
              onClick={() => handleClose()}
              size="small"
              className="h-max"
              variant="outlined"
            >
              Không
            </Button>
          </div>
        </div>
      </Dialog>
      {todoList.length > 0 ? (
        todoList.map((todo: ITodo) => {
          const labelId = `checkbox-list-label-${todo.title}`;
          return (
            <TodoItem
              key={labelId}
              handleClickOpen={handleClickOpen}
              labelId={labelId}
              todo={todo}
            />
          );
        })
      ) : (
        <span className="pl-[12px] text-[#bdb700]">Không có công việc nào</span>
      )}
    </List>
  );
}

export default TodoList;
