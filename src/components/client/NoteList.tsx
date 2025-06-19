"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';
import { Card } from '../ui/card';

type Note = {
    id: number;
    name: string;
    price: string;
};
type noteResponse = {
    status: number;
    data: Note[];
    message: string;
    success: boolean;
}
type noteSingleResponse = {
    status: number;
    data: Note;
    message: string;
    success: boolean;
}

export default function NoteList({ notes }: { notes: noteResponse }) {
    const [id, setId] = useState<number | null>(null)
    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const data = notes?.data;
    const updateModel = async (id: number) => {
        setId(id)
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
            cache: "no-store"
        })
        const result: noteSingleResponse = await res.json()
        setName(result.data.name)
        setPrice(result.data.price)
    }
    const handleDelete = async (id: number) => {
        await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "DELETE",
            cache: "no-store"
        })
        window.location.reload()
    }
    const handleUpdate = async (e: React.FormEvent, id: number) => {
        try {
            e.preventDefault()
            const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
                method: "PATCH",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    price,
                }),
            })
            const result: noteSingleResponse = await res.json()
            if (result.success) {
                window.location.reload()
            }
            // console.log(result.errors?.price?.[0])
            // console.log(result.errors?.name?.[0])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div >
            {!id ? (
                <div className="grid grid-cols-3 gap-6 w-[80%] mx-auto mt-6">
                    {data.map((e, i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <h1 className="text-lg font-semibold text-gray-800 mb-2">{e.name}</h1>
                            <h1 className="text-gray-600 mb-4">₹ {e.price}</h1>
                            <div className="flex justify-between">
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 hover:cursor-pointer text-sm" onClick={() => handleDelete(e.id)}>
                                    Delete
                                </button>
                                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 hover:cursor-pointer text-sm" onClick={() => updateModel(e.id)}>
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div className="flex justify-center items-center min-h-[80vh]">
                        <form suppressHydrationWarning onSubmit={(e) => handleUpdate(e, id)}>
                            <Card className="w-[120%] max-w-sm p-5">
                                <div className="flex flex-col gap-6">

                                    {/* <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label suppressHydrationWarning htmlFor="image">image</Label>
                                        </div>
                                        <Input id="image" type="file" />
                                    </div> */}

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="name">name</Label>
                                        </div>
                                        <Input value={name} onChange={(e) => setName(e.target.value)} suppressHydrationWarning id="name" type="text" />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="price">price</Label>
                                        </div>
                                        <Input value={price} onChange={(e) => setPrice(e.target.value)} suppressHydrationWarning id="price" type="text" />
                                    </div>
                                </div>
                                <Button suppressHydrationWarning type='submit'>Update</Button>
                            </Card>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

