import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";


export default function page () {
  return (
    <>
      <Navbar />
      <main className="p-8">
      <Home />
      </main>
      <Footer />
    </>
  );
}