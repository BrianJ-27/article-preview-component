import React from "react";
import avatarMichelle from "../../images/avatar-michelle.jpg";
import AvatarImage from "../card-avatar/card-avatar";
import HiddenModal from "../modal/modal";

const CardContent = () => {
  return (
    <div className="wrapper">
      <h2 className="title__secondary">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h2>
      <p className="content">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="flex__container">
        <AvatarImage card_avatar={avatarMichelle} />
        <div>
          <h2 className="title__secondary">Michelle Appleton</h2>
          <p className="content">28 Jun 2020</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
