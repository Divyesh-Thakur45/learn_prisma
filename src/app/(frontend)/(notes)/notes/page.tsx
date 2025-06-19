import NoteList from "@/components/client/NoteList"
// import { supabase } from "@/lib/supabase-client";
// import { useEffect } from "react";

async function getNotes() {
    const res = await fetch("http://localhost:3000/api/notes", {
        cache: "no-store"
    })
    const result = res.json()
    return result;
}

export default async function Notes() {
    const notes = await getNotes()
    // useEffect(() => {
    //     const channel = supabase
    //         .channel("public:notes")
    //         .on(
    //             "postgres_changes",
    //             {
    //                 event: "*",
    //                 schema: "public",
    //                 table: "notes",
    //             },
    //             (payload) => {
    //                 console.log("Change received!", payload);
    //             }
    //         )
    //         .subscribe();

    //     return () => {
    //         supabase.removeChannel(channel);
    //     };
    // }, []);
    return (
        <div>
            <NoteList notes={notes} />
        </div>
    )
}

