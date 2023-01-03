import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.75rem 0rem;
  gap: 3.5rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.base.title};
  font-size: ${({ theme }) => theme.header.font.size.px48};
  font-family: ${({ theme }) => theme.header.font.family};
  font-weight: ${({ theme }) => theme.header.font.weight.extra};
  line-height: ${({ theme }) => theme.header.lineHeight.default};
`;

export const Subtitle = styled.h6`
  margin-bottom: 4.125rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: ${({ theme }) => theme.header.font.size.px20};
  font-family: ${({ theme }) => theme.text.font.family};
  font-weight: ${({ theme }) => theme.text.font.weight.regular};
  line-height: ${({ theme }) => theme.text.lineHeight.big};
`;

export const IconGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 301px);

  column-gap: 2.5rem;
  row-gap: 1.25rem;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  row-gap: 2.5rem;
`;

export const ProductsTitle = styled.div`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: ${({ theme }) => theme.header.font.size.px32};
  font-family: ${({ theme }) => theme.header.font.family};
  font-weight: ${({ theme }) => theme.header.font.weight.extra};
  line-height: ${({ theme }) => theme.header.lineHeight.default};
  margin-bottom: 3.375rem;
  margin-top: 2rem;
`;
