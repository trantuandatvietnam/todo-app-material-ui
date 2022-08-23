import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { ChangeEvent, useContext, useRef, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

export default function Seach() {
  const { changeFilter } = useContext(TodoContext);
  const [search, setSearch] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      changeFilter({ field: "search", value: e.target.value });
    }, 300);
  };
  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: "100%" }}
    >
      <InputBase
        onChange={handleChangeSearch}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm kiếm"
        value={search}
      />
      <IconButton
        disabled={true}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
