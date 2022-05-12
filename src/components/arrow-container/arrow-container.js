import React from "react";
import styled from "styled-components";

const ArrowWrapper = styled.button`
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
`;

const SrOnlyText = styled.span`
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;

const ArrowContainer = ({ handleModal, isHidden, isAriaExpanded }) => {
  return (
    <ArrowWrapper
      className={isHidden ? "arrow__base-color" : "arrow__change-color"}
      onClick={() => handleModal(!isHidden)}
      aria-expanded={isAriaExpanded}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
      <SrOnlyText>Click on the arrow</SrOnlyText>
    </ArrowWrapper>
  );
};

export default ArrowContainer;
