import React from "react";
import {deleteTodo, toggleTodo} from "../../redux/todos/action";
import {useDispatch} from "react-redux";
import {Grid, makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((them) => ({
    listItem: {
        borderRadius: '5px',
        transition: 'background-color 0.5s',
        marginBottom: '10px',
        '&:hover':{
            backgroundColor:'lightgray',
            cursor: 'pointer'
        }
    },
    done:{
        textDecoration:"line-through",
        color:'grey',
        display:'inline-block'
    },
    notDone:{
        color:"black",
        display:"inline-block"
    }
}))


export const ListItem = ({todo}) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    return (
        <Grid container justifyContent="space-between" className={classes.listItem}>
            <li
                className={todo.isDone ? classes.done : classes.notDone}
                onClick={() => dispatch(toggleTodo(todo))}
            >
                {todo.value}
            </li>
            <IconButton aria-label="delete">
                <DeleteIcon
                    fontSize="medium"
                    onClick={() => dispatch(deleteTodo(todo))}
                />
            </IconButton>
        </Grid>
    );
};
