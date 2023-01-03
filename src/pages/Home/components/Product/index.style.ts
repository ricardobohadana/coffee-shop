import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;
  padding: 1.25rem;
  width: 16rem;
`;

export const CoffeeImgContainer = styled.div`
  margin-top: -2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TagContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.yellow.light};
  color: ${({ theme }) => theme.colors.yellow.dark};
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 36px;
  font-size: ${({ theme }) => theme.text.font.size.px10};
  line-height: ${({ theme }) => theme.text.lineHeight.default};
  font-weight: ${({ theme }) => theme.text.font.weight.bold};
`;

export const Title = styled.h6`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: ${({ theme }) => theme.text.font.size.px20};
  line-height: ${({ theme }) => theme.text.lineHeight.big};
  font-weight: ${({ theme }) => theme.text.font.weight.bold};
  font-family: ${({ theme }) => theme.header.font.family};

  text-align: center;
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-family: ${({ theme }) => theme.text.font.family};
  color: ${({ theme }) => theme.colors.base.label} !important;
  font-size: ${({ theme }) => theme.text.font.size.px14};
  line-height: ${({ theme }) => theme.text.lineHeight.default};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
  text-align: center;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4375rem;
`;

export const DollarSign = styled.span`
  font-family: ${({ theme }) => theme.text.font.family};
  color: ${({ theme }) => theme.colors.base.text} !important;
  font-size: ${({ theme }) => theme.text.font.size.px14};
  line-height: ${({ theme }) => theme.text.lineHeight.default};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
  text-align: right;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.header.font.family};
  color: ${({ theme }) => theme.colors.base.text} !important;
  font-size: ${({ theme }) => theme.text.font.size.px24};
  line-height: ${({ theme }) => theme.text.lineHeight.big};
  font-weight: ${({ theme }) => theme.header.font.weight.extra};
  text-align: right;
`;

export const AddToCartBtn = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  color: white;
  background: ${({ theme }) => theme.colors.purple.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.purple.default};
  }
`;

export const ItemCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.base.button};
  padding: 0.5rem;
  border-radius: 6px;
`;
export const LessButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.purple.default};
  cursor: pointer;
`;
export const Count = styled.p`
  padding: 0 4px;
`;
export const MoreButton = styled(LessButton)``;
