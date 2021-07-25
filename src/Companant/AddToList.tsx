import React, { useState } from 'react'
import { Istate as props } from "./List";

interface Iprops {
    friend: props['friend']
    setFriend: React.Dispatch<React.SetStateAction<props['friend']>>
}

const AddToList: React.FC<Iprops> = ({ friend, setFriend }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        image: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age) return

        setFriend([
            ...friend,
            {
                name: input.name,
                age: parseInt(input.age),
                image: input.image,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            image: "",
            note: ""
        })
    }
    return (
        <div className="AddToList">
            <input
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="image"
                value={input.image}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;