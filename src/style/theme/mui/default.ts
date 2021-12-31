
import {blue, deepOrange, green, indigo, red} from "@material-ui/core/colors";


export const defaultTheme = {
    palette: {
        type: "light",
        primary: indigo,
        secondary: deepOrange,
    },
};


export  const darkTheme = {
    palette: {
        type: "dark",
        primary: blue,
        secondary: green,
    },
};
export const blueTheme = {
    palette: {
        primary: blue,
        secondary: red
    },
};
export  const customTheme1 = {
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
};