import Image from "next/image";
import Hero from "./components/Hero";
import TopCategories from "./components/categories";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black ">
      <Hero/>
      <TopCategories/>
    </div>
  );
}
