import { ShoppingCart } from "phosphor-react";
import { ReactNode } from "react";
import { defaultTheme } from "../../../../styles/themes/default";
import { IconContainer, IconTextContainer } from "./index.style";

export type BackgroundFillColor = string;

interface IconTextProps {
  content: string;
  backgroundFillColor: BackgroundFillColor;
  icon: ReactNode;
}

export function IconText({
  content,
  backgroundFillColor,
  icon,
}: IconTextProps) {
  return (
    <IconTextContainer>
      <IconContainer backgroundFillColor={backgroundFillColor}>
        {icon}
      </IconContainer>
      {content}
    </IconTextContainer>
  );
}
