import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export default function UseStateDemo() {
    // const [view, setView] = useState(true);
    const [data, setData] = useState<Todo[]>([]);

    const loadData = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await loadData();
            setData(response);
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <Button  className="mb-4">
                Click me hide
            </Button>
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">UseState Demo</h2>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Completed</th>
                                    <th className="px-4 py-2">Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((todo, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{todo.id}</td>
                                        <td className="border px-4 py-2">{todo.title}</td>
                                        <td className="border px-4 py-2">{todo.completed ? "Yes" : "No"}</td>
                                        <td className="border px-4 py-2">
                                            <Link to={`/hooks/useState/${todo.id}`}>
                                                <Button variant="outline" className="mr-2">
                                                    Edit
                                                </Button>
                                            </Link>
                                            {/* <Button variant="destructive">Delete</Button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
            
            {/* Add your demo content here */}
        </div>
    )
}