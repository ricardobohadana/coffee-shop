import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  gap: 3.125rem;
  align-items: center;
  justify-content: flex-start;
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

export const RemoveButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
`;

export const ItemTitle = styled.p`
  color: ${(props) => props.theme.colors.base.subtitle};
  font-size: ${(props) => props.theme.text.font.size.px16};
  font-weight: ${(props) => props.theme.text.font.weight.regular};
  margin-bottom: 0.5rem;
`;
