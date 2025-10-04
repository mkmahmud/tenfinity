import Navbar from "@/component/common/main/navbar/navabar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-primary">
      {/* nav */}
      <Navbar />
      <main className="pt-20 ">{children}</main>
      <footer className="fixed bottom-0 left-0 w-full h-12 bg-gray-800 text-white flex items-center justify-center z-50">
        <p className="text-sm">&copy; 2024 My App</p>
      </footer>
    </div>
  );
}
