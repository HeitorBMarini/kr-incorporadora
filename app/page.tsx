import Banner from "./components/Banner";
import Estrela from "./components/Estrela";
import Footer from "./components/Footer";
import Passaros from "./components/Passaros";
import Pilar from "./components/Pilar";
import QuemSomos from "./components/QuemSomos";
import Soberano from "./components/Soberano";

export default function Home() {
  return (
    <>
      <Banner />
      <QuemSomos />
      <Estrela/>
      <Soberano/>
      <Pilar/>
      <Passaros/>
      <Footer/>
    </>
  );
}
