import styled from "styled-components";

const StyleHomepage = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 5rem 3rem;
    width: 450px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    text-align: center;
    font-size: 4rem;
  }

  button {
    outline: 0;
    padding: 0.7rem 1rem;
    font-size: 1.4rem;
    background: #17a2b8;
    border: 1px solid #17a2b8;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export default StyleHomepage;
