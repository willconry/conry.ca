import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#000",
    },
    secondary: {
        main: orange[700],
    },
    background: {
        // default: "#eee",
        default: "#77f",
    },
    // text: {
    //     primary: purple[700],
    // }
  },
});

export default theme