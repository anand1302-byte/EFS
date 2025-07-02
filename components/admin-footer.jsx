export default function Footer() {
  return (
    <footer className=" md:fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Company Name */}
        <div className="text-gray-800 font-semibold text-lg">
          MyCompany
        </div>

        {/* Center: Links (optional) */}
        <div className="flex gap-4 text-sm text-gray-600 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Terms</a>
          <a href="#" className="hover:text-blue-500">Help</a>
        </div>

        {/* Right: Year */}
        <div className="text-sm text-gray-500 mt-2 md:mt-0">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
