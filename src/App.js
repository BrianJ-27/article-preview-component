import drawersPic from "./images/drawers.jpg";
import CardImage from "./components/card-image/card-imgae";
import CardContents from "./components/card-content/card-content";
import Footer from "./components/footer/footer";
import HideHeading from "./components/sr-only/sr-only";

function App() {
  return (
    <div className="grid__container">
      <main className="container">
        <HideHeading />
        <div>
          <CardImage card_image={drawersPic} />
          <CardContents />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
