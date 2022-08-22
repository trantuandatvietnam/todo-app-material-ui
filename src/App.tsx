import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className="bg-[#4f4f4f] h-screen w-full flex items-center justify-center">
      <Box
        sx={{
          width: "90%",
          maxWidth: "360px",
          height: "90%",
          borderRadius: 4,
          backgroundColor: "white",
          boxShadow: "10px 10px 5px 8px black",
        }}
      >
        <form className="mt-[24px] p-[24px]">
          <TextField
            size="small"
            id="outlined-basic"
            label="Thêm công việc"
            variant="outlined"
            fullWidth
          />
          <Button sx={{ mt: "12px" }} variant="contained" size="small">
            Thêm
            <AddIcon />
          </Button>
        </form>
        <h3 className="pl-[24px] py-[12px]">Danh sách công việc của bạn: </h3>
        <List
          sx={{
            width: "100%",
            maxHeight: "300px",
            overflowX: "hidden",
            maxWidth: "100%",
            bgcolor: "background.paper",
            padding: "0 12px",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
}

export default App;
