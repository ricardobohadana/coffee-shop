import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h6`
  font-family: ${({ theme }) => theme.text.font.family};
  font-size: ${({ theme }) => theme.text.font.size.px16};
  font-weight: ${({ theme }) => theme.text.font.weight.bold};
`;
export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.text.font.family};
  font-size: ${({ theme }) => theme.text.font.size.px14};
  line-height: ${({ theme }) => theme.text.lineHeight.default};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
`;
