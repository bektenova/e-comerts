import MainOne from "@/components/MainOne";
import MainOneMobile from "@/components/MainOneMobile";
import Part from "@/components/Part/Part";
import Posts from "../components/Posts";
// import Products from "../components/Products";
import EditorsPick from "@/components/EditorsPick/EditorsPick";
import GreenClassic from "@/components/GreenClassic/GreenClassic";
// import Footer from "@/components/Footer/Footer";
// import Shop from "../components/Shop/Shop";

export default function Home() {
  return (
    <main>
      <MainOne />
      <MainOneMobile />
      <EditorsPick />
      {/* <Products /> */}
      <GreenClassic />
      <Part />

      {/* <Shop /> */}
      <Posts />
      {/* <Footer /> */}
    </main>
  );
}
