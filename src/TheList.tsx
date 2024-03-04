//import { useState } from "react";
import { Dispatch, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ListContext } from "./App";
import TodoItem, { Todo } from "./TodoItem";

// import { setListner } from "./dependecyManager";

export default function TheList() {
    // console.log("TheList props:", props);
    // const initialList: Todo[] = [new Todo("Städa", "Anna")];
    // const [theList, setTheList] = useState(initialList);
    // const [updateCount, setUpdateCount] = useState(0);
    // function setTheListWrap(data: any) {
    //     console.log("Call setTheList(", data, ")");
    //     console.log("Same list:", data === theList);
    //     setUpdateCount(updateCount + 1);
    //     setTheList(data);
    // }
    // function addTodo(todo: Todo) {
    //     console.log("addTodo(", todo, ")");
    //     setTheList(list => [...list, todo]);
    // }
    // setListner("ADDTODO", "TheList", addTodo);
    // console.log("In TheList:", theList);

    const { theList }: { theList: Todo[] } = useContext(ListContext);
    // const { theList, setTheList }: { theList: Todo[], setTheList: Dispatch<SetStateAction<Todo[]>> } =
    //     useContext(ListContext);

    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/addtodo")} id="add-button">
                +
            </button>
            <section id="todo-list">
                {theList.map(todo => (
                    <TodoItem key={todo.id} item={todo} />
                ))}
            </section>
        </>
    );
}
