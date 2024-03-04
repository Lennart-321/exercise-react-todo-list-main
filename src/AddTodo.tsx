import { useState, useContext, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { ListContext } from "./App";
import { Todo } from "./TodoItem";
// import { dataChanged, getData } from "./dependecyManager";

export default function AddTodo() {
    const [descIn, setDescIn] = useState("");
    const { setTheList }: { setTheList: Dispatch<SetStateAction<Todo[]>> } = useContext(ListContext);
    // const { theList, setTheList }: { theList: Todo[]; setTheList: Dispatch<SetStateAction<Todo[]>> } =
    //     useContext(ListContext);
    const navigate = useNavigate();

    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    // const todos: Todo[] = getData("TODOLIST");
                    const newTodo = new Todo(descIn, "Lennart");
                    setTheList(list => {
                        list.push(newTodo);
                        return list;
                    });
                    //setTheList([...theList, newTodo]);
                    // dataChanged("TODOLIST", todos ? [...todos, newTodo] : [newTodo]);
                    // dataChanged("ADDTODO", newTodo);
                    navigate("/");
                }}
            >
                <input
                    type="text"
                    id="todoDescIn"
                    value={descIn}
                    onChange={function (e) {
                        setDescIn(e.target.value);
                    }}
                />
                <input type="submit"></input>
            </form>
        </>
    );
}
