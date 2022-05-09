import React from "react";
import styled from "styled-components";

const CardAvatar = styled.img`
  display: block;
  max-width: 100%;
  height: 45px;
  border-radius: 50%;
`;

const cardMichelle = ({ card_avatar }) => (
  <CardAvatar src={card_avatar} alt="michelle" />
);

export default cardMichelle;
