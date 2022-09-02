import styled from '@emotion/styled';

const AppHeading = styled.img`
	width: ${props => props.width};
	@media (max-width: 768px) {
		width: ${props => props.widthMd};
	}
`;

const AppTitle = ({ width, widthMd }) => {
	return (
		<AppHeading
			src='./assets/images/logo.svg'
			width={width}
			widthMd={widthMd}
		/>
	);
};

export default AppTitle;
