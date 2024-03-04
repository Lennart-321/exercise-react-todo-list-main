import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { Todo } from "./TodoItem";

export const ListContext = createContext({});

export default function App() {
    const initialList: Todo[] = [];
    const [theList, setTheList] = useState(initialList);

    return (
        <ListContext.Provider value={{ theList, setTheList }}>
            <Outlet />
        </ListContext.Provider>
    );
}
