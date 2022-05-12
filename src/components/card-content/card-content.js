import React from "react";
import avatarMichelle from "../../images/avatar-michelle.jpg";
import AvatarImage from "../card-avatar/card-avatar";
import styled from "styled-components";
import ArrowContainer from "../arrow-container/arrow-container";
import ShowModal from "../modal/modal";

const Wrapper = styled.div`
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 0px 0px 10px 10px;
  @media screen and (min-width: 768px) {
    border-radius: 0px 10px 10px 0px;
    padding: 2rem 3rem;
  }
`;

const CardContent = ({ handleModal, isHidden, isAriaExpanded }) => {
  return (
    <Wrapper className="wrapper card_content">
      <h2 className="title__secondary">
        <strong>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </strong>
      </h2>
      <p className="content">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="flex__container">
        {!isHidden && (
          <ShowModal
            handleModal={handleModal}
            isHidden={isHidden}
            ariaExpanded={isAriaExpanded}
          />
        )}
        <div className="avatar__container flex__container">
          <AvatarImage card_avatar={avatarMichelle} />
          <div style={{ paddingLeft: "1rem" }}>
            <h2 className="title__secondary--avatar">Michelle Appleton</h2>
            <p className="content__date">28 Jun 2020</p>
          </div>
        </div>
        <ArrowContainer
          handleModal={handleModal}
          isHidden={isHidden}
          isAriaExpanded={isAriaExpanded}
        />
      </div>
    </Wrapper>
  );
};

export default CardContent;
