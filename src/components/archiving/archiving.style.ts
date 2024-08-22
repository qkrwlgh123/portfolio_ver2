import styled from "styled-components";

const ArchivinContentsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArchivingListContainer = styled.div`
  display: flex;

  margin-top: 3rem;
  gap: 4rem;
  justify-content: center;

  width: 70%;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;

    gap: 4rem;
    width: 100%;
  }
`;

export default { ArchivinContentsContainer, ArchivingListContainer };
