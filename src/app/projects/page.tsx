import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                            {project.thumbnail ? (
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                                {project.excerpt}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
