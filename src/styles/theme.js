import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    // primary: {
    //     main: purple[500],
    // },
    secondary: {
        main: green[500],
    },
    background: {
        default: purple[300],
        root: purple[200],
    },
    text: {
        primary: purple[700],
    }
  },
});

export default theme