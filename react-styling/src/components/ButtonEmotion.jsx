import { css } from "@emotion/react";

const buttonStyle = css`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

export default function ButtonEmotion() {
    return <button css={buttonStyle}>Emotion 버튼</button>;
}