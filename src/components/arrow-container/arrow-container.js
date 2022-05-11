import React from "react";
import styled from "styled-components";

const ArrowWrapper = styled.div`
  padding: 6px;
  border-radius: 50%;
  background-color: var(--clr-bg-color-main);
`;

const ArrowContainer = ({ handleModal, isHidden }) => {
  return (
    <ArrowWrapper
      className="arrow__container"
      onClick={() => handleModal(!isHidden)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path
          fill="#6E8098"
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
    </ArrowWrapper>
  );
};

export default ArrowContainer;
