import styled and {css} from 'styled-components';

const Sbutton = styled.button`
border-radius: 5px;
color: red;

${props => props.primary && css`
background-color: yellow;
color: green;
`}
`;

const Container = styled.div`
text-align: center;
`