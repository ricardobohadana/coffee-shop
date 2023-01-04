import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({theme}) => theme.colors.base.card};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const OrderDetails = styled.div`
  flex: 1 1 0;
`;

export const SelectedProducts = styled(Card)`
  border-radius: 6px 44px 6px 44px;
  flex: 1 1 0;
`;

export const CompleteYourOrder = styled(Card)`
`;

export const OrderPaymentMethod = styled(Card)``;