import { FloatingHeader } from "@/components/Custom/Header";
import { Outlet } from "react-router-dom";

export default function HooksOutlet() {
    return(
        <div className="min-h-screen">
              <FloatingHeader />
              <main className="container mx-auto px-4 pt-20 md:px-6 md:pt-24">
                <section className="py-12 md:py-16 lg:py-20">
                  <Outlet />
                </section>
              </main>
            </div>
    )
}