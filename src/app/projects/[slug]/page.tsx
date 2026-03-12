import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import rehypeRaw from "rehype-raw";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <article>
                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{project.title}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4">
                        {project.excerpt}
                    </p>
                </header>

                {project.thumbnail && (
                    <div className="mb-12 relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
