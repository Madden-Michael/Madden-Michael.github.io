# Portfolio - Michael Madden

This is a modern portfolio website built with **Next.js 16**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Quick Start (Local)

I have created two scripts in the root directory for easy access:

### 1. **`Develop_Locally.bat`** (Recommended)
- **Double-click this file** to start the local development server.
- Automatically opens the browser to [http://localhost:3000](http://localhost:3000).
- **Edit & Preview**: Changes you make to files in `src/` will appear instantly (hot reloading).
- **Stop**: Simply close the window.

### 2. `Build_and_Preview.bat`
- Creates a production build (`npm run build`) and starts it.
- Use this to verify the final site before deploying.
- Edits will **NOT** show up automatically here.

---

## 📂 Project Structure

- **`src/app/`**: The main pages of the website.
  - `page.tsx`: Home page
  - `about/`: About page
  - `projects/`: Project listing and details
  - `resume/`: Resume page
- **`src/content/projects/`**: Markdown files for your portfolio projects. **Add new projects here.**
- **`src/components/`**: Reusable parts like `Navbar.tsx` and `Footer.tsx`.
- **`public/`**: Images, PDFs, and static assets.

## 🛠️ Adding Content

### Adding a New Project
1. Create a new `.md` file in `src/content/projects/`.
2. Use the frontmatter format:
   ```yaml
   ---
   title: "My New Project"
   excerpt: "A short description..."
   tags: [tag1, tag2]
   header:
     teaser: /assets/images/my-image.jpg
   ---
   ```
3. Write your content in Markdown below the dashes.

## 📦 Deployment

This project is ready to be deployed on **GitHub Pages** (via GitHub Actions) or **Vercel** (recommended for Next.js).
