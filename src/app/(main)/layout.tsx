import Footer from "@/components/common/main/footer/Footer";
import Navbar from "@/components/common/main/navbar/navabar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div  >
      {/* nav */}
      <Navbar />
      {/* <NavigationMenuDemo/> */}
      <main  >{children}</main>
      <Footer />
    </div>
  );
}
