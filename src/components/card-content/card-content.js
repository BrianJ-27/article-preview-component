import React from "react";
import avatarMichelle from "../../images/avatar-michelle.jpg";
import AvatarImage from "../card-avatar/card-avatar";
import styled from "styled-components";
import ArrowContainer from "../arrow-container/arrow-container";

const Wrapper = styled.div`
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 0px 0px 10px 10px;
  @media screen and (min-width: 768px) {
    border-radius: 0px 10px 10px 0px;
  }
`;

const CardContent = ({ handleModal, isHidden }) => {
  return (
    <Wrapper className="wrapper card_content">
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
        <div className="avatar__container flex__container">
          <AvatarImage card_avatar={avatarMichelle} />
          <div style={{ paddingLeft: "1rem" }}>
            <h2 className="title__secondary--avatar">Michelle Appleton</h2>
            <p className="content">28 Jun 2020</p>
          </div>
        </div>
        <ArrowContainer handleModal={handleModal} isHidden={isHidden} />
      </div>
    </Wrapper>
  );
};

export default CardContent;
