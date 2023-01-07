import styled from "styled-components";

export const PaymentMethodButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  align-items: center;
  margin-top: 2rem;
`;

interface PaymentMethodButtonProps {
  selected?: boolean;
  error?: boolean;
}

export const PaymentMethodButton = styled.div<PaymentMethodButtonProps>`
  background-color: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  flex: 1;
  font-size: ${({ theme }) => theme.text.font.size.px12};
  text-transform: uppercase;

  ${(props) =>
    !!props.selected
      ? `
      background-color: ${props.theme.colors.purple.light};
      border: 1px solid ${props.theme.colors.purple.default};
      `
      : `
      &:hover {
        background-color: ${props.theme.colors.base.hover};
        color: ${props.theme.colors.base.subtitle};
      }
    `}

  ${(props) =>
    !!props.error &&
    `
    border: 1px solid red;
  `}
`;

export const ErrorLabel = styled.label`
  color: red;
  font-size: ${({ theme }) => theme.text.font.size.px12};
`;
