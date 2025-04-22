import styled from "styled-components";

export const Header = styled.nav`
  height: 6rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
`;
