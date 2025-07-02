    export default function Navbar() {
        return (
            <nav className="bg-white border-b border-gray-800 p-6 shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex gap-9 items-center">
                    <a href="/" className="text-black text-lg font-semibold">
                        Admin Dashboard
                    </a>
                    <div className="space-x-4">
                        <a href="/" className="text-black hover:text-gray-800">
                            Home
                        </a>
                        <a href="/users" className="text-black hover:text-gray-800">
                            Insights
                        </a>
                        <a href="/about" className="text-black hover:text-gray-100">
                            About
                        </a>
                        <a href="/contact" className="text-black hover:text-gray-100">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        );
    }