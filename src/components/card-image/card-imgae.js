import React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0px 0px;
`;

const cardImage = ({ card_image }) => (
  <CardImage src={card_image} alt="green drawer" />
);

export default cardImage;
