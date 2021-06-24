import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#495769',
      main: '#27313D',
      dark: '#101e30',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#2F8BD5',
      dark: '#C51162',
      contrastText: '#fff',
    },
  },
});

export default theme;