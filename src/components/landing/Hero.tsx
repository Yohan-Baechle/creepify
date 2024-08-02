import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section>
            {/* Hero */}
            <div className="py-24 lg:py-32">
                {/* Grid */}
                <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
                    {/* Col: Image */}
                    <div className="relative z-50 order-1 ms-4 md:order-2">
                        <Image
                            className="w-full rounded-md"
                            src="/images/bats.png"
                            width={800}
                            height={700}
                            alt="Flying bats with a moon in the background"
                            priority
                        />
                    </div>
                    {/* Col: Text */}
                    <div className="order-2 md:order-1">
                        <h1>
                            Dive <span className="">into Darkness</span> with{" "}
                            <span className="">Creepify</span>
                        </h1>
                        <p className="mt-3 text-xl text-muted-foreground">
                            Share, Read, and Experience the Most Chilling Horror
                            Tales
                        </p>
                        {/* Buttons */}
                        <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                            <Button size={"lg"}>Start Reading</Button>
                            <Button variant={"outline"} size={"lg"}>
                                Join the Community
                            </Button>
                        </div>
                        {/* End Buttons */}
                        <div className="mt-6 grid grid-cols-2 gap-x-5 lg:mt-10">
                            {/* Review */}
                            <Review />
                            {/* End Review */}
                        </div>
                    </div>
                </div>
                {/* End Grid */}
            </div>
            <div className="shadow"></div>
            {/* End Hero */}
        </section>
    );
}

function Review() {
    return (
        <div className="py-5">
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                ))}
            </div>
            <p className="mt-3 text-sm">
                <span className="font-bold">4.6</span> /5 - from 12k reviews
            </p>
            <div className="mt-5">
                <svg
                    className="h-auto w-16"
                    width={80}
                    height={27}
                    viewBox="0 0 80 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* SVG paths */}
                    <path
                        d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z"
                        fill="currentColor"
                    />
                    <path
                        d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z"
                        fill="currentColor"
                    />
                    <path
                        d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z"
                        fill="currentColor"
                    />
                    <path
                        d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z"
                        fill="currentColor"
                    />
                    <path
                        d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z"
                        fill="currentColor"
                    />
                    <path
                        d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div>
    );
}
