import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const OrderDetails = styled.div`
  flex: 1 1 0;
`;

export const SelectedProducts = styled(Card)`
  border-radius: 6px 44px 6px 44px;
`;

export const CompleteYourOrder = styled(Card)`
  margin-bottom: 0.75rem;
`;

export const OrderPaymentMethod = styled(Card)``;

export const CheckoutInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const SmallInfo = styled.p`
  color: ${(props) => props.theme.colors.base.text};
  font-size: ${(props) => props.theme.text.font.size.px16};
  font-weight: ${(props) => props.theme.text.font.weight.regular};
  font-family: ${(props) => props.theme.text.font.family};
  line-height: ${(props) => props.theme.text.lineHeight.big};
  text-align: right;
`;

export const LargeInfo = styled(SmallInfo)`
  color: ${(props) => props.theme.colors.base.subtitle};
  font-size: ${(props) => props.theme.text.font.size.px20};
  font-weight: ${(props) => props.theme.text.font.weight.bold};
  font-family: ${(props) => props.theme.text.font.family};
  line-height: ${(props) => props.theme.header.lineHeight.default};
`;

export const OrderButton = styled.button`
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.yellow.default};
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${(props) => props.theme.text.font.weight.bold};
  font-family: ${(props) => props.theme.text.font.family};
  font-size: ${(props) => props.theme.text.font.size.px14};
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;
