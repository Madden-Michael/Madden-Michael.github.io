import { FileText, Download } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl h-[calc(100vh-140px)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <FileText className="text-blue-600" /> Resume
                </h1>
                <a
                    href="/files/MichaelMaddenResume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
                >
                    <Download size={16} /> Download PDF
                </a>
            </div>
            <div className="flex-1 w-full border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm bg-gray-50">
                <object
                    data="/files/MichaelMaddenResume.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                >
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                        <p className="mb-2">Your browser doesn't support PDF viewing.</p>
                        <a href="/files/MichaelMaddenAerospaceResume.pdf" className="text-blue-600 underline hover:text-blue-800">Download it here</a>
                    </div>
                </object>
            </div>
        </div>
    );
}
