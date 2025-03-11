import { FloatingHeader } from "./components/Custom/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <FloatingHeader />
      <main className="container mx-auto px-4 pt-20 md:px-6 md:pt-24">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to the React Crash Course
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Scroll down to see how the header stays fixed at the top of the page.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

