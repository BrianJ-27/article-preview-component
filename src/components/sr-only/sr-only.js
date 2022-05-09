import React from "react";
import styled from "styled-components";

const HideHeading = styled.h1`
  /*Hide h1 but make it accessible for screen readers*/
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const sr_only = (params) => (
  <HideHeading>Article Preview Component</HideHeading>
);

export default sr_only;
