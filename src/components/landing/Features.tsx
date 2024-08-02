import { BookOpen, PenTool, Users } from "lucide-react";
import Image from "next/image";

export default function Features() {
    return (
        <div className="w-full pb-32">
            <div className="grid grid-cols-1 items-center gap-8 rounded-lg border p-4 lg:grid-cols-2">
                <Image
                    className="ghost"
                    src="/images/ghost.png"
                    width={600}
                    height={600}
                    alt="Floating ghost"
                    priority
                />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <div></div>
                        <div className="flex flex-col gap-2">
                            <h2 className="tracking-tighter">
                                Enter the Realm of Horror
                            </h2>
                            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
                                Welcome to your ultimate destination for horror
                                stories. Whether you want to read spine-chilling
                                tales, share your own terrifying experiences, or
                                connect with a community of horror enthusiasts,
                                Creepify has something for you.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
                        <div className="flex flex-col items-start gap-6 sm:flex-row">
                            <BookOpen className="mt-2 h-6 w-6 flex-shrink-0" />{" "}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold sm:text-lg">
                                    Read the Scariest Stories
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Explore a vast collection of horror stories
                                    from different genres and authors.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-6 sm:flex-row">
                            <PenTool className="mt-2 h-6 w-6 flex-shrink-0" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold sm:text-lg">
                                    Share Your Own Tales
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Have a scary story to tell? Share it with
                                    our community and get feedback from fellow
                                    horror fans.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-6 sm:flex-row">
                            <Users className="mt-2 h-6 w-6 flex-shrink-0" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold sm:text-lg">
                                    Join the Community
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Connect with other horror enthusiasts,
                                    participate in discussions, and make new
                                    friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
