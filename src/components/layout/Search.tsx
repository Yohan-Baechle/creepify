"use client"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Search as SearchIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { DialogDescription, DialogTitle } from "../ui/dialog"

// Définir l'interface pour les posts
interface Post {
    id: number
    title: string
    body: string
}

export default function Search() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                )
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error("Error fetching posts:", error)
            }
            setLoading(false)
        }

        fetchPosts()
    }, [])

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex cursor-pointer items-center p-2 duration-200 hover:rotate-90 hover:scale-110"
            >
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle>
                    {" "}
                    <VisuallyHidden>Menu</VisuallyHidden>
                </DialogTitle>
                <DialogDescription>
                    <VisuallyHidden>
                        Use the input below to search for stories.
                    </VisuallyHidden>
                </DialogDescription>
                <CommandInput
                    placeholder="Search..."
                    value={search}
                    onValueChange={setSearch}
                />
                <CommandList>
                    {loading ? (
                        <CommandItem>Loading...</CommandItem>
                    ) : (
                        <>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Stories">
                                {filteredPosts.length > 0 ? (
                                    filteredPosts.map((post) => (
                                        <CommandItem key={post.id}>
                                            <span>{post.title}</span>
                                        </CommandItem>
                                    ))
                                ) : (
                                    <CommandEmpty>
                                        No results found.
                                    </CommandEmpty>
                                )}
                            </CommandGroup>
                        </>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    )
}
