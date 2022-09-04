import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user/user.context';
import MuiThemeProvider from './theme/muiThemeProvider.theme';
import { CssBaseline } from '@mui/material';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MuiThemeProvider>
				<CssBaseline />
				<UserProvider>
					<App />
				</UserProvider>
			</MuiThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
