import FeaturedStories from "@/components/landing/FeaturedStories"
import Features from "@/components/landing/Features"
import Hero from "@/components/landing/Hero"

export default function Home() {
    return (
        <main className="container">
            <Hero />
            <Features />
            <FeaturedStories />
        </main>
    )
}
