import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

export default function ButtonStyled() {
    return <StyledButton>Styled Components 버튼</StyledButton>;
}
