import { useRef } from "react";
import {
  Box,
  Input,
} from "@mui/material";
const TodoForm = (props) => {
  const inputTodo = useRef("todoText");
  const onAddHandler = event => {
    event.preventDefault();
    let todo = {
      id: `t${Math.random() * 10000}`,
      text: inputTodo.current.value,
      checked: false,
    }
    props.onAddHandler(todo);
    inputTodo.current.value = "";
  }
  return (
    <Box component="form" onSubmit={onAddHandler}>
      <Input
        aria-label="test"
        placeholder="add todo items"
        inputRef={inputTodo}
        sx={{width: '100%'}}
      />
    </Box>
  );
};
export default TodoForm;
