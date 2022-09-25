import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
		values: {
			lg: 1200,
			md: 900,
			sm: 600,
			xl: 1536,
			xs: 360,
			xxs: 0,
		},
	},
	palette: {
		mode: 'dark',
		background: {
			default: 'rgb(10, 25, 41)',
		},
		red: {
			main: '#e14342',
			contrastText: '#ffffff',
		},
	},
});

const MuiThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
