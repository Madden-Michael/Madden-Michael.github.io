import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Rocket, Users, Calendar, Award, Globe, Briefcase, TrendingUp, FileText } from "lucide-react";

export default function OrbitalGators() {
    const historyEvents = [
        {
            year: "Summer 2024",
            title: "The Beginning",
            description: "Orbital Gators started as a small team visiting Kennedy Space Center. With no student-led satellite design organization at UF for years, we sought advising from university faculty to set up the foundation.",
            icon: <Users className="w-6 h-6 text-white" />,
            image: "/assets/projects/orbital-gators/OGSummer2024.jpg"
        },
        {
            year: "August 2024",
            title: "Taking the Lead",
            description: "I became Program Manager and we hit the ground running. We structured the team and set our sights on our first major competition.",
            icon: <Briefcase className="w-6 h-6 text-white" />,
        },
        {
            year: "Fall 2024 - Spring 2025",
            title: "COSMIC Capstone Challenge",
            description: "Participated in the COSMIC Capstone Challenge, refining our engineering processes and teamwork. Simultaneously, we proposed our GATOR Arms design to NASA TechLeap.",
            icon: <Award className="w-6 h-6 text-white" />,
            image: "/assets/projects/orbital-gators/COSMIC20242025.jpg"
        },
        {
            year: "Spring 2025",
            title: "UNP Mission Concept Program",
            description: "Accepted into the prestigious University Nanosatellite Program (UNP) Mission Concept Program. This was a turning point, validating our technical roadmap.",
            icon: <Rocket className="w-6 h-6 text-white" />,
        },
        {
            year: "Summer 2025",
            title: "Internship at SDL",
            description: "Myself and two other students interned at Utah State Space Dynamics Laboratory (SDL) in Albuquerque, NM. We learned systems engineering and mission concepting directly from SDL and Air Force Research Labs engineers.",
            icon: <Globe className="w-6 h-6 text-white" />,
            image: "/assets/projects/afrl-sdl/AFRLKickoff.JPG"
        },
        {
            year: "End of Summer 2025",
            title: "SmallSat Conference",
            description: "Presented GATOR Arms as a poster and paper at the Utah State SmallSat Conference in Salt Lake City, sharing our work with the global space community.",
            icon: <FileText className="w-6 h-6 text-white" />,
            image: "/assets/projects/gator-arms/GATORArmsPosterGroup.JPEG"
        },
        {
            year: "Fall 2025 - Spring 2026",
            title: "COSMIC Lunar Track",
            description: "Currently participating in the COSMIC Capstone Challenge Lunar track, pushing the boundaries of what our student team can design for deep space applications.",
            icon: <TrendingUp className="w-6 h-6 text-white" />,
        },
        {
            year: "Future",
            title: "The Next Mission",
            description: "We plan to continue building the GATOR Arms Robotic Arm System and propose a full satellite mission for the upcoming UNP Nanosatellite funding call.",
            icon: <Rocket className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header / Hero */}
            <header className="bg-blue-600 dark:bg-blue-900 text-white py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} /> Back to Portfolio
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Orbital Gators
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                        Building the first student-led satellite design team at the University of Florida.
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-16">
                {/* The Need Section */}
                <section className="mb-20">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            The Mission Gap
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                            <p>
                                At the University of Florida, we have a world-class aerospace curriculum. However, until recently, something critical was missing: a pipeline for students to get hands-on experience building <i>real</i> space hardware.
                            </p>
                            <p>
                                Theory is essential, but space engineering demands practice. We founded Orbital Gators to bridge this gap—creating an organization where students could go from "textbook" to "telemetry."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="relative">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 text-center">
                        Our Journey
                    </h2>

                    {/* Central Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-20 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {historyEvents.map((event, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Box */}
                                <div className="flex-1 w-full pl-12 md:pl-0">
                                    <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                                        {/* Connecting Dot for Desktop (Left or Right based on row) */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900 ${index % 2 === 0 ? '-left-[calc(2rem_+_5px)]' : '-right-[calc(2rem_+_5px)]'}`}></div>

                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-bold mb-2">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {event.description}
                                        </p>

                                        {event.image && (
                                            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mt-4 shadow-sm">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Center Icon Marker */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 flex items-center justify-center shadow-md z-10 shrink-0 mt-1">
                                    {/* Small dot or icon can go here, using just the dot style for cleaner look on the line */}
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
