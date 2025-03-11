import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "./useStateDemo";

export default function UseStateDynamicPage() {
    const { id } = useParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo>(); // Adjust the type as needed

    const loadData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await loadData();
            setTodo(response);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <h1>Todo ID: {id}</h1>
            {todo && (
                <div>
                    <h2>{todo.title}</h2>
                    <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
                </div>
            )}
            {/* You can add more logic to fetch and display todo details based on the ID here */}
        </div>
    )
}