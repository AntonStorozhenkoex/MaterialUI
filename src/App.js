import { Header } from "./components/todoList/Header";
import { TodoList } from "./components/todoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleTodos } from "./redux/filter";
import { fetchTodos } from "./redux/todos/action";
import "./index.css";
import { useEffect } from "react";
import { Container, Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  todoContainer: {
    marginTop: "20%",
    padding: "20px",
    webkitBoxShadow: "-2px 3px 38px -2px rgba(27, 135, 217, 0.39)",
    boxShadow: "-2px 3px 38px -2px rgba(27, 135, 217, 0.39)",
  }
}));

export const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.visibilityFilter);
  const todos = useSelector((state) => state.todos);

   const visibleTodos = getVisibleTodos(todos, filter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container maxWidth="sm">
      <Box className={classes.todoContainer}>
        <Header />
        <TodoList filter={filter} todos={todos} visibleTodos={visibleTodos} />
      </Box>
    </Container>
  );
};
