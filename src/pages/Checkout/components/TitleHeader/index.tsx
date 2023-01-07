import { Subtitle, Title, TitleContainer } from "./index.style";

interface TitleHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function TitleHeader({ icon, title, subtitle }: TitleHeaderProps) {
  return (
    <TitleContainer>
      {icon}
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </TitleContainer>
  );
}
