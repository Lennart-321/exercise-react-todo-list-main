import { useState } from "react";

export class Todo {
    id: number;
    description: string;
    author: string;
    date: Date;
    constructor(d: string, a: string) {
        this.id = ++Todo.lastId;
        this.description = d;
        this.author = a;
        this.date = new Date();
    }

    static lastId = 0;
}

export default function TodoItem({ item }: { item: Todo }) {
    //normal ready deleted
    const [status, setStatus] = useState("normal");

    return (
        <article
            className={`todo-entry ${status}`}
            onClick={() => {
                setStatus(s => (s !== "normal" ? "normal" : "ready"));
            }}
        >
            <p>
                {item.description}
                <span> {item.author}</span>
                <br />
                <span>{item.date.toLocaleDateString()}</span>
            </p>
        </article>
    );
}
