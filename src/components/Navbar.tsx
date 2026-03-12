import Link from "next/link";

export function Navbar() {
    const navs = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Resume", href: "/resume" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Michael Madden
                </Link>
                <nav className="gap-6 flex">
                    {navs.map((n) => (
                        <Link key={n.href} href={n.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                            {n.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
