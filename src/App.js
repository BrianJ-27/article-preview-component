import React, { useState } from "react";
import drawersPic from "./images/drawers.jpg";
import CardImage from "./components/card-image/card-imgae";
import CardContents from "./components/card-content/card-content";
import Footer from "./components/footer/footer";
import SrOnlyHeading from "./components/sr-only/sr-only";
const App = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isAriaExpanded, setIsAriaExpanded] = useState(false);

  const handleModalState = (isHidden, isAriaExpanded) => {
    setIsHidden(isHidden);
    setIsAriaExpanded(true);
  };

  return (
    <React.Fragment>
      <SrOnlyHeading />
      <div className="grid__container">
        <main className="main__grid--container">
          <CardImage card_image={drawersPic} />
          <CardContents
            handleModal={handleModalState}
            isHidden={isHidden}
            ariaExpanded={isAriaExpanded}
          />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
