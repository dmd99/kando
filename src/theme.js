import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4F4F4F',
      main: '#222222',
      dark: '#121212',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#C51162',
      contrastText: '#fff',
    },
  },
});

export default theme;