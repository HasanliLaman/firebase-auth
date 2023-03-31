import styled from "styled-components";

const StyleSignup = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    padding: 2.5rem 3rem 4rem;
    width: 450px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  header {
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .google-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  a {
    font-size: 1.4rem;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
  }
`;

export default StyleSignup;
