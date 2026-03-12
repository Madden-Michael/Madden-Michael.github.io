import { BadgeCheck, Wrench, ChevronRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="mx-auto container max-w-4xl px-4 py-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight">About Me</h1>
            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I’m a hands-on Mechanical and Aerospace Engineer focused on systems engineering, satellite design, and production. I like solving problems that touch design and the manufacturing floor, then closing the loop with testing and verification.
            </p>

            <div className="grid gap-12 md:grid-cols-2">
                <section>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                        <BadgeCheck className="text-blue-600" /> Capabilities
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "Systems Engineering: requirements flowdown, ICDs, risk management",
                            "Satellite/Space Systems: subsystem integration, power/thermal trades",
                            "Structural Analysis (FEA): sizing and margin assessments",
                            "Mechanisms & Precision Assemblies: kinematic design, clearances",
                            "Thermal Analysis & Control: conduction/radiation balances",
                            "Manufacturing & DFM/DFA: design for machining/assembly",
                            "Test & Validation: lab test rigs, test plans/procedures",
                            "Documentation & Release: BOMs, work instructions",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                        <Wrench className="text-blue-600" /> Tools
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "FEA: Abaqus for linear/nonlinear analyses",
                            "Thermal: radiator/MLI sizing models",
                            "Test: custom lab rigs, environmental support",
                            "CAD: design and drawing for manufacturing",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
