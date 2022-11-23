import { Box, Card } from "@mui/material";

import { useReducer, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const todoStates = {
  list: [],
};
const todoReducer = (state, action) => {
  if (action.type === "update") {
    return { list: action.data };
  } else if (action.type === "add") {
    const newList = [action.data, ...state.list];
    localStorage.setItem("todos", JSON.stringify(newList));
    return { list: newList };
  } else if (action.type === "remove") {
    const newList = state.list.filter((item) => item.id !== action.id);
    localStorage.setItem("todos", JSON.stringify(newList));
    return { list: newList };
  } else if (action.type === "checked") {
    let newList = state.list.slice(0);
    newList = newList.map((todo) => {
      if (todo.id === action.data.id) todo.checked = action.data.checked;
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newList));
    return { list: newList };
  }
  return state;
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, todoStates);
  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) dispatch({ type: "update", data: JSON.parse(data) });
  }, []);

  const onDeleteHandler = (id) => {
    dispatch({ type: "remove", id });
  };
  const onAddHandler = (data) => {
    dispatch({
      type: "add",
      data,
    });
  };

  const onCheckedHandler = (data) => {
    dispatch({ type: "checked", data });
  };
  return (
    <Card>
      <Box sx={{ m: 2 }}>
        <TodoForm onAddHandler={onAddHandler} />
        <TodoList
          list={todos.list}
          onDeleteHandler={onDeleteHandler}
          onCheckedHandler={onCheckedHandler}
        />
      </Box>
    </Card>
  );
};
export default TodoApp;
