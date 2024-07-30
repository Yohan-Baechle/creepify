import CTA from "@/components/landing/CTA"
import FAQs from "@/components/landing/FAQs"
import FeaturedStories from "@/components/landing/FeaturedStories"
import Features from "@/components/landing/Features"
import Hero from "@/components/landing/Hero"

export default function Home() {
    return (
        <main className="container">
            <Hero />
            <Features />
            <FeaturedStories />
            <FAQs />
            <CTA />
        </main>
    )
}
