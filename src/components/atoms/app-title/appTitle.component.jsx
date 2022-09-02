import styled from '@emotion/styled';

const AppHeading = styled.img`
	width: ${props => props.width};
`;

const AppTitle = ({ width }) => {
	return <AppHeading src='./assets/images/logo.svg' width={width} />;
};

export default AppTitle;
