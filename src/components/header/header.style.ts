import styled from "styled-components";

const HeaderBox = styled.div<{ $headerBgColor: string }>`
  position: fixed;
  top: 0;
  height: 72px;
  opacity: 0.9;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;

  background: ${(props) => props.$headerBgColor};
  width: 100%;
  color: ${(props) => (props.$headerBgColor === "black" ? "white" : "black")};

  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);

  z-index: 101;

  transition: all 0.2s ease;

  white-space: nowrap;

  @media (max-width: 800px) {
    display: none;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.2s ease;

    margin-right: 1.5rem;

    &:hover {
      color: #0073cf;
    }
  }
`;

const MenusContainer = styled.div`
  display: flex;
  gap: 3rem;

  span {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 0;
  }
`;

export default { HeaderBox, InnerBox, MenusContainer };
