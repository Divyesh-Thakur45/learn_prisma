"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Create() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    // const router = useRouter("")
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = await axios.post("http://localhost:3000/api/notes", { name, price })

        if (data.data.success) {
            window.location.href = "/notes"
        }
    }
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <form suppressHydrationWarning onSubmit={(e) => handleCreate(e)}>
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
                            <Input onChange={(e) => setName(e.target.value)} suppressHydrationWarning id="name" type="text" />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="price">price</Label>
                            </div>
                            <Input onChange={(e) => setPrice(e.target.value)} suppressHydrationWarning id="price" type="text" />
                        </div>

                    </div>
                    <Button suppressHydrationWarning type="submit">Create</Button>
                </Card>
            </form>
        </div>
    )
}

