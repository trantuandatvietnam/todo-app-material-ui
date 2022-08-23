import { Box } from "@mui/material";
import Seach from "./components/Search";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-[#4f4f4f] h-screen w-full flex items-center justify-center">
      <Box
        sx={{
          width: "90%",
          maxWidth: "460px",
          height: "90%",
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: "white",
          boxShadow: "10px 10px 5px 8px black",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TodoForm />
        <div className="px-[24px] mb-[16px]">
          <Seach />
        </div>
        <TodoFilter />
        <h3 className="pl-[24px] py-[12px]">Danh sách công việc của bạn: </h3>
        <TodoList />
      </Box>
    </div>
  );
}

export default App;
