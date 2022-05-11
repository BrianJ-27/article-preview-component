import React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  display: block;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  @media screen and (min-width: 768px) {
    border-radius: 10px 0px 0px 10px;
  }
`;

const cardImage = ({ card_image }) => (
  <div>
    <CardImage className="card_image" src={card_image} alt="green drawer" />
  </div>
);

export default cardImage;
