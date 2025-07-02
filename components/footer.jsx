export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-black text-black py-4 shadow-md z-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
