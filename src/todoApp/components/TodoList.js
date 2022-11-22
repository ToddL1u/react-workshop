import TodoItem from "../components/TodoItem";
import {
  List
} from "@mui/material";
const TodoList = (props) => {
  return (
    <List>
      {props.list.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            checked= {item.checked}
            onCheckedHandler={props.onCheckedHandler}
            onDeleteHandler={props.onDeleteHandler}
          />
        );
      })}
    </List>
  );
};
export default TodoList;
