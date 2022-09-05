import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const AppHeading = styled.img`
	width: ${props => props.width};
	cursor: ${props => props.sx.cursor};
	@media (max-width: 768px) {
		width: ${props => props.widthMd};
	}
`;

const AppTitle = ({ width, widthMd, sx, href }) => {
	return (
		<>
			{href ? (
				<Link to={href || ''}>
					<AppHeading
						src='/assets/images/logo.svg'
						width={width}
						widthMd={widthMd}
						sx={{ ...sx }}
					/>
				</Link>
			) : (
				<AppHeading
					src='/assets/images/logo.svg'
					width={width}
					widthMd={widthMd}
					sx={{ ...sx }}
				/>
			)}
		</>
	);
};

export default AppTitle;
