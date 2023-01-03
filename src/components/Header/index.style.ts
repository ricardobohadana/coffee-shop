import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Action = styled.div`
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.text.font.size.px14};
  cursor: pointer;
`;

export const LocationContainer = styled(Action)`
  background: ${({ theme }) => theme.colors.purple.light};
  color: ${({ theme }) => theme.colors.purple.dark};
  &:hover {
    color: ${({ theme }) => theme.colors.purple.default};
  }
`;

export const CartContainer = styled(Action)`
  background: ${({ theme }) => theme.colors.yellow.light};
  color: ${({ theme }) => theme.colors.yellow.dark};
  &:hover {
    color: ${({ theme }) => theme.colors.yellow.default};
  }
  position: relative;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 15.6px;
  font-size: ${({ theme }) => theme.text.font.size.px12};
  padding: 2px 0;
  background-color: ${({ theme }) => theme.colors.yellow.dark};
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: -20%;
  right: -20%;
`;
