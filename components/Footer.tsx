export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-gray-100 bg-gray-50/30 backdrop-blur-sm relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                <div className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">
                        KUNDU VINAY KUMAR REDDY
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                        © {currentYear} • All Rights Reserved
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-1">
                    <p className="text-xs text-gray-500 font-medium">
                        Designed & Developed with <span className="text-red-500">♥</span> and <span className="text-indigo-600 font-bold">Code</span>
                    </p>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        Portfolio v2.0
                    </div>
                </div>

            </div>
        </footer>
    );
}
