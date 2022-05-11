import React from "react";
import styled from "styled-components";

const CardFooter = styled.footer`
  color: darkgreen;
  font-size: 12px;
  text-align: center;
`;

const footer = () => {
  return (
    <CardFooter className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        &nbsp; Frontend Mentor
      </a>
      . Coded by <a href="#myid">Brian Johnson</a>.
    </CardFooter>
  );
};

export default footer;
