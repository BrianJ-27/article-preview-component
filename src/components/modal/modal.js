import React from "react";
import styled from "styled-components";
import FacebookSVG from "../../images/icon-facebook.svg";
import TwitterSVG from "../../images/icon-twitter.svg";
import PinterestSVG from "../../images/icon-pinterest.svg";

const Modal = styled.div`
  background-color: var(--clr-primary-text);
  color: #ffffff;
  padding: 1.8rem 2.5rem;
  bottom: 0px;
  right: 0;
  left: 0;
  position: absolute;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 1rem;
    left: 78%;
    right: -8%;
    bottom: 100px;
    padding: 1rem 2rem;
    border-radius: 10px;
    &:after {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-top: 25px solid var(--clr-primary-text);
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
    }
  }
`;

const IconContainer = styled.div`
  margin-left: -30px;
  @media screen and (min-width: 768px) {
    margin-left: -10px;
  }
`;

const ArrowContainer = styled.button`
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 50%;
  background-color: var(--clr-secondary-text);
  cursor: pointer;
`;

const SocialIcons = styled.img`
  display: inline-block;
  padding: 0 5px;
`;

const ModalText = styled.p`
  font-size: 1.3rem;
  font-weight: var(--fp-f-weight-normal);
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--clr-secondary-text);
`;

const SrOnlyText = styled.span`
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;

const socialModal = ({ handleModal, isHidden, ariaExpanded }) => {
  return (
    <Modal className="flex__container">
      <div>
        <ModalText>Share</ModalText>
      </div>

      <IconContainer>
        <SocialIcons src={FacebookSVG} alt="Facebook Icon" />
        <SocialIcons src={TwitterSVG} alt="Twitter Icon" />
        <SocialIcons src={PinterestSVG} alt="Facebook Icon" />
      </IconContainer>

      <ArrowContainer
        onClick={() => handleModal(!isHidden)}
        className={isHidden ? "show__back-arrow" : "hide__back-arrow"}
        aria-expanded={ariaExpanded ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#fff"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
        <SrOnlyText>Click on back arrow</SrOnlyText>
      </ArrowContainer>
    </Modal>
  );
};

export default socialModal;
