

import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Link } from "react-router-dom"
import { useMobile } from "@/hooks/use-mobile"

interface FloatingHeaderProps extends React.HTMLAttributes<HTMLElement> {
    links?: {
        href: string
        label: string
    }[]
}

export function FloatingHeader({
    className,
    links = [
        { href: "/", label: "Home" },
        { href: "/hooks", label: "Hooks Demo" },
        
    ],
    ...props
}: FloatingHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const isMobile = useMobile()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header
            className={cn(
                "fixed left-4 right-4 top-3 z-50 flex h-10 items-center justify-between rounded-xl border bg-background/95 px-3 shadow-lg backdrop-blur-sm transition-all duration-300 md:left-8 md:right-8 md:top-4 md:px-4 p-6",
                className,
            )}
            {...props}
        >
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        F
                    </div>
                    <span>FloatHeader</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                to={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <Button className="hidden md:inline-flex">
                    Get Started
                </Button>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobile && isMenuOpen && (
                <div className="absolute left-0 right-0 top-10 z-50 mt-1 rounded-xl border bg-background/95 p-4 shadow-lg backdrop-blur-sm md:hidden">
                    <nav>
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                                    Get Started
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

