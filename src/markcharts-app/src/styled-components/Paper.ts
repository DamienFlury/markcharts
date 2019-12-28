import styled from '../styled';

const Paper = styled.div`
    box-shadow: ${(props) => props.theme.shadows[2]};
    border-radius: 4px;
`;

export default Paper;
