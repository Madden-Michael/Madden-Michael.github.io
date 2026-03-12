import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface Project {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    tags: string[];
    thumbnail?: string;
    teaseline?: string;
    order?: number;
}

export function getAllProjects(): Project[] {
    // Ensure directory exists
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            content,
            tags: data.tags || [],
            thumbnail: data.header?.teaser || null,
            teaseline: data.teaser_line || null,
            order: data.order || 99,
        };
    });

    return allProjectsData.sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            content,
            tags: data.tags || [],
            thumbnail: data.header?.teaser || null,
            teaseline: data.teaser_line || null,
        };
    } catch (e) {
        return null;
    }
}
