"use client"
//basically makes it a react component which is hydrated in the browser
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateForm() {

    const router = useRouter();

    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[priority, setPriority] = useState("low");
    const[isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const ticket = {title, body, priority, user_email: "tabish123@gmail.com"}

        const response = await fetch(`http:localhost:4000/tickets`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        });

        if(response.status === 201){
            router.refresh()
            router.push(`/tickets`)

        } 
    }


    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label htmlFor="">
                <span>Title: </span>
                <input type="text" required  onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label htmlFor="">
                <span>Body: </span>
                <input type="text" required  onChange={(e) => setBody(e.target.value)} value={body}/>
            </label>
            <label htmlFor="">
                <span>Priority: </span>
                <select type="text" required  onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High </option>
                </select>
            </label>
            <button className="btn-primary" disabled={isLoading}>
                {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
            </button>
        </form>
    )
}