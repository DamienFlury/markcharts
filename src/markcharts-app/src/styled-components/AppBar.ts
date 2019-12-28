import styled from '../styled';

const AppBar = styled.nav`
    display: flex;
    background: ${(props) => props.theme.colors.primary[0]};
    box-shadow: ${(props) => props.theme.shadows[0]}
`;

export default AppBar;
