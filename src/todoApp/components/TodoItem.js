import {
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Checkbox,
  Icon,
} from "@mui/material";
import {Delete as DeleteIcon} from '@mui/icons-material'
import './TodoItem.css'
const TodoItem = (props) => {
  const onDeleteHandler = () => {
    props.onDeleteHandler(props.id);
  };
  const onCheckedHandler = () => {
    props.onCheckedHandler({
      id: props.id,
      checked: !props.checked,
    });
  };

  const todoText = props.checked ? <del>{props.text}</del> : props.text;
  return (
    <ListItem className={`${props.checked && 'todo-item-done'}`} secondaryAction={
      <IconButton color="error" onClick={onDeleteHandler}>
        <DeleteIcon/>
      </IconButton>
    }>
      <ListItemIcon>
        <Checkbox checked={props.checked} onChange={onCheckedHandler} />
      </ListItemIcon>
      <ListItemText>{todoText}</ListItemText>
    </ListItem>
  );
};

export default TodoItem;
