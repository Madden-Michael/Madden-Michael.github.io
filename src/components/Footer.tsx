import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Michael Madden. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="https://github.com/Madden-Michael" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/madden-michael" target="_blank" className="text-gray-500 hover:text-blue-600">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
