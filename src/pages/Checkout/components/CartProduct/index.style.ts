import styled from "styled-components";

interface FlexContainerProps {
  gap?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : "3.125rem")};
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
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  &:hover {
    background-color: ${({ theme }) => theme.colors.base.hover};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`;

export const ItemTitle = styled.p`
  color: ${(props) => props.theme.colors.base.subtitle};
  font-size: ${(props) => props.theme.text.font.size.px16};
  font-weight: ${(props) => props.theme.text.font.weight.regular};
  font-family: ${(props) => props.theme.text.font.family};
  margin-bottom: 0.5rem;
`;

export const Currency = styled.p`
  align-self: flex-start;
  justify-self: flex-end;
  flex: 1;
  text-align: right;
  color: ${(props) => props.theme.colors.base.text};
  font-size: ${(props) => props.theme.text.font.size.px16};
  font-weight: ${(props) => props.theme.text.font.weight.bold};
  font-family: ${(props) => props.theme.text.font.family};
`;

export const LineSeparator = styled.div`
  margin: 1.5rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.base.button};
`;

export const RemoveText = styled.p`
  color: ${(props) => props.theme.colors.base.text};
  font-size: ${(props) => props.theme.text.font.size.px12};
  font-weight: ${(props) => props.theme.text.font.weight.regular};
  font-family: ${(props) => props.theme.text.font.family};
  text-transform: uppercase;
`;
