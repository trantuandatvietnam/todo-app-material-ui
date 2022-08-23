import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoFilter() {
  const { changeFilter } = useContext(TodoContext);
  const [valueChoose, setValueChoose] = React.useState("Tất cả");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueChoose((event.target as HTMLInputElement).value);
    changeFilter({ field: "status", value: event.target.value });
  };

  return (
    <div className="pl-[24px]">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Lọc danh sách:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Tất cả"
          name="radio-buttons-group"
          value={valueChoose}
          onChange={handleChange}
        >
          <FormControlLabel value="Tất cả" control={<Radio />} label="Tất cả" />
          <FormControlLabel
            value="Hoàn thành"
            control={<Radio />}
            label="Hoàn thành"
          />
          <FormControlLabel
            value="Chưa hoàn thành"
            control={<Radio />}
            label="Chưa hoàn thành"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default TodoFilter;
