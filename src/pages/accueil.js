import Header from "../components/header";
import Div from "../components/div";
import AtoutBloc from "../components/atout_bloc";
import atout1 from "../assets/lounge.jpg";
import atout2 from "../assets/atout2.png";
import Slider from "../components/slider";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import image1 from "../assets/slider-image/okok.jpeg";
import image2 from "../assets/slider-image/tchep.jpg";
import image3 from "../assets/slider-image/pdg.jpg";
import image4 from "../assets/slider-image/tlitli.jpg";
import image5 from "../assets/slider-image/ndole.jpg";
import image6 from "../assets/slider-image/atiéké.jpg";
import image7 from "../assets/slider-image/Pilé.webp";
import image8 from "../assets/slider-image/taro.jpg";

const Slide_images = [
  <Card titre="Okok" origine="Cameroun" image={image1} />,
  <Card titre="Tchep" origine="Sénégal" image={image2} />,
  <Card titre="Poulet DG" origine="Cameroun" image={image3} />,
  <Card titre="Tlitli" origine="Algérie" image={image4} />,
  <Card titre="Ndolè" origine="Cameroun" image={image5} />,
  <Card titre="Atiéké" origine="Côte D'Ivoire" image={image6} />,
  <Card titre="Pilé" origine="Cameroun" image={image7} />,
  <Card titre="Taro" origine="Cameroun" image={image8} />,
];

function Home() {
  return (
    <div>
      <Header />
      <Div.Intro />
      <Div.TitleBloc titre="Nos atouts" />
      <div className="atout_bloc">
        <AtoutBloc
          texte="Un cadre à la foix chaleureux et luxueux, pour vivre en famille et avec les amis de nouvelles expériences gustatives !"
          logo={atout1}
          position="right"
        />
        <AtoutBloc
          texte="Un menu riche et varié, miroir des peuples africains avec une touche de modernité"
          logo={atout2}
          position="left"
        />
      </div>
      <Div.TitleBloc titre="Nos Spécialités" />
      <Slider images={Slide_images} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Home;
