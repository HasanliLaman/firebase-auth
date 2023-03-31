import styled from "styled-components";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      color: red;
      font-size: 1.4rem;
    }
  }

  input,
  button {
    outline: 0;
    padding: 0.7rem 1rem;
    font-size: 1.4rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: #17a2b8;
    border: 1px solid #17a2b8;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export default StyleLoginForm;
