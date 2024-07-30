import { Badge } from "@/components/ui/badge"
import { Book, Ghost, Skull } from "lucide-react"

export default function FeaturedStories() {
    return (
        <div className="w-full pb-32">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-start gap-4">
                    <div>
                        <Badge>Featured</Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2>Chilling Tales</h2>
                        <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                            Discover the most spine-tingling horror stories that
                            will haunt your dreams.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
                        <Ghost className="h-8 w-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">
                                The Haunting of Hill Manor
                            </h3>
                            <p className="max-w-xs text-base text-muted-foreground">
                                A tale of a haunted house that holds dark
                                secrets and eerie occurrences.
                            </p>
                        </div>
                    </div>
                    <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
                        <Book className="h-8 w-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">
                                Whispers in the Dark
                            </h3>
                            <p className="max-w-xs text-base text-muted-foreground">
                                A collection of short stories that delve into
                                the unknown and the supernatural.
                            </p>
                        </div>
                    </div>
                    <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
                        <Skull className="h-8 w-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">
                                The Forgotten Graveyard
                            </h3>
                            <p className="max-w-xs text-base text-muted-foreground">
                                Legends of an old graveyard where restless
                                spirits are said to wander.
                            </p>
                        </div>
                    </div>
                    <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
                        <Ghost className="h-8 w-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">
                                The Phantom&apos; Curse
                            </h3>
                            <p className="max-w-xs text-base text-muted-foreground">
                                The legend of a vengeful spirit that haunts the
                                living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
