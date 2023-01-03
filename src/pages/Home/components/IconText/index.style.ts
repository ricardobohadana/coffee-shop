import styled from "styled-components";
import { BackgroundFillColor } from ".";

export const IconTextContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  justify-self: baseline;
`;

interface IconContainerProps {
  backgroundFillColor: BackgroundFillColor;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundFillColor};
  padding: 8px;
`;
