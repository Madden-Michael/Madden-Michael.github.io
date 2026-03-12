import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] md:flex-row">
      {/* Left Section: Identity */}
      <section className="w-full md:w-5/12 lg:w-1/3 bg-gray-50 dark:bg-gray-900 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center p-8 md:p-12 text-center md:h-[calc(100vh-64px)] md:sticky md:top-16">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
            <Image
              src="/assets/images/headshot.jpg"
              alt="Michael Madden"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full border border-gray-200 dark:border-gray-700 opacity-50 blur-sm -z-10"></div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Michael Madden
        </h1>
        <p className="text-lg text-blue-600 font-medium mb-6">
          Mechanical/Aerospace Engineer
        </p>

        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
          Systems Engineering • Satellite Design • Manufacturing • Test
        </p>

        <div className="flex gap-4">
          <Link
            href="/resume"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all font-medium text-sm"
          >
            <FileText size={16} /> Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/madden-michael"
            target="_blank"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all font-medium text-sm shadow-lg shadow-blue-500/20"
          >
            Connect
          </Link>
        </div>
      </section>

      {/* Right Section: Content & Highlights */}
      <section className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
            Building the future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              space systems.
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            I solve complex problems that touch design, the manufacturing floor, and validation.
            My passion lies in closing the loop between a concept and a flight-ready system.
          </p>

          {/* Orbital Gators Section */}
          <div className="mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Logo (Left, cleaner cardless look) */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 flex items-center justify-center">
              <Image
                src="/assets/images/orbital-gators.svg"
                alt="Orbital Gators Logo"
                width={300}
                className="w-full h-full object-contain brightness-0 dark:invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Text & Action (Right) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl font-extrabold tracking-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Founding Program Manager
                </span>
              </h3>

              <Link href="/orbital-gators" className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white group hover:text-blue-600 transition-colors"
            >
              View All Projects <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
