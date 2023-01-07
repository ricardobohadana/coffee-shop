import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.375rem;
`;

export const SuccessTitle = styled.h1`
  color: ${({ theme }) => theme.colors.yellow.dark};
  font-size: ${({ theme }) => theme.header.font.size.px32};
  font-family: ${({ theme }) => theme.header.font.family};
  font-weight: ${({ theme }) => theme.header.font.weight.extra};
  line-height: ${({ theme }) => theme.header.lineHeight.default};
  margin-top: 5rem;
`;

export const SuccessSubtitle = styled.h6`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: ${({ theme }) => theme.text.font.size.px20};
  font-family: ${({ theme }) => theme.text.font.family};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
  line-height: ${({ theme }) => theme.text.lineHeight.big};
`;

export const OutlineCard = styled.main`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  align-items: flex-start;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors.yellow.default};
  flex: 1;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  color: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
