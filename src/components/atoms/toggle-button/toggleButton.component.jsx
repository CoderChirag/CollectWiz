import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButton({ children, value, handleChange }) {
	return (
		<ToggleButtonGroup
			color='primary'
			value={value}
			exclusive
			onChange={handleChange}
			aria-label='Platform'
		>
			{children}
		</ToggleButtonGroup>
	);
}
