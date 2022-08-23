import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { ITodo } from "../context/TodoContext.model";
import { TodoContext } from "../context/TodoProvider";

function TodoItem({
  todo,
  labelId,
  handleClickOpen,
}: {
  todo: ITodo;
  labelId: string;
  handleClickOpen: (title: string) => void;
}) {
  const { getTodoList, updateTodo } = useContext(TodoContext);
  const todoList = getTodoList();

  const handleChecked = (title: string) => {
    const todoIndex = todoList.findIndex((item) => item.title === title);
    if (todoIndex === -1) return;
    const todo = {
      ...todoList[todoIndex],
      status:
        todoList[todoIndex].status === "Hoàn thành"
          ? "Chưa hoàn thành"
          : "Hoàn thành",
    };
    updateTodo(title, todo);
  };

  const handleClickDelete = (title: string) => {
    handleClickOpen(title);
  };

  return (
    <ListItem
      key={todo.title}
      secondaryAction={
        <div>
          <IconButton
            onClick={() => handleClickDelete(todo.title)}
            sx={{ mr: 1 }}
            edge="end"
            aria-label="comments"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => handleChecked(todo.title)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.status === "Hoàn thành"}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.title} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
