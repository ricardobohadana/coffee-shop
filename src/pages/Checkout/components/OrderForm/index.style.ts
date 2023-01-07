import styled from "styled-components";

export interface InputProps {
  flex?: boolean;
  width?: number;
  fullWidth?: boolean;
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  height: 2.625rem;
  background-color: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  border-radius: 4px;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.base.text};
  font-family: ${({ theme }) => theme.text.font.family};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
  font-size: ${({ theme }) => theme.text.font.size.px14};
  flex: ${(props) => (props.flex ? 1 : 0)};
  ${(props) =>
    props.fullWidth
      ? {
          width: "100%",
        }
      : props.width && {
          width: props.width / 16 + "rem",
        }};

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
    font-family: ${({ theme }) => theme.text.font.family};
    font-size: ${({ theme }) => theme.text.font.size.px14};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.yellow.dark};
  }

  ${(props) =>
    !!props.error &&
    `
    border: 1px solid red;
  `}

  &:disabled {
    opacity: 0.55;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const OptionalWrapper = styled.div`
  position: relative;
  flex: 1;
  ::after {
    content: attr(data-optional);
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    color: ${({ theme }) => theme.colors.base.label};
    font-family: ${({ theme }) => theme.text.font.family};
    font-size: ${({ theme }) => theme.text.font.size.px12};
    font-style: italic;
  }
`;
