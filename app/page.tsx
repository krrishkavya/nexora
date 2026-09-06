import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050507] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}