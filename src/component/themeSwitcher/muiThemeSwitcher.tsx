import { createTheme } from '@material-ui/core/styles'
import {blue, deepOrange, green, indigo, red} from '@material-ui/core/colors';
import React, {FC} from "react";
import {Theme} from "@material-ui/core/styles/createTheme";
import {LocalStorageGet, LocalStorageSet} from "../../utility/localStorage/localStorageHelper";
import {AppConfiguration} from "read-appsettings-json";
import {createIntl} from "react-intl";
import {AllLocalizationResourcesReactInt} from "../languageSwitcher/react-intl/langSwitcher";



const defaultTheme = createTheme({
    palette: {
        type: "light",
        primary: indigo,
        secondary: deepOrange,
    },
});
const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: blue,
        secondary: green,
    },
});
const blueTheme = createTheme({
    palette: {
        primary: blue,
        secondary: red
    },
});
const customTheme1 = createTheme({
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
});
const themeLocalStorageName='theme';
const defaultUiTheme=AppConfiguration.Setting().defaultTheme;
const getDefaultTheme=():string=> {
    const localeValueFomStorage = LocalStorageGet(themeLocalStorageName);
    if (localeValueFomStorage === null || localeValueFomStorage === undefined || localeValueFomStorage === '') {
        LocalStorageSet(themeLocalStorageName, defaultUiTheme);
        return defaultUiTheme;
    }
    return localeValueFomStorage
}
const generateTheme=():Theme=> {
    const themeValue:string=getDefaultTheme();
    switch (themeValue.toLowerCase())
    {
        case "defaulttheme":
            return defaultTheme;
            break;
        case "darktheme":
            return darkTheme;
            break;
        case "bluetheme":
            return blueTheme;
            break;
        case "customtheme1":
            return customTheme1;
            break;
    }
    return defaultTheme;
};
// const ThemeGenerator: FC<{themeName:string,setThemeName:any}>= ({themeName,setThemeName}) => {
//     const handleLanguageSelect = (e: any) => {
//         setThemeName(e.target.value);
//         generateTheme();
//         LocalStorageSet(themeLocalStorageName, e.target.value);
//     };
//     return(<>
//         <select onChange={handleLanguageSelect} defaultValue={themeName}>
//             <option value='defaultTheme'>default</option>
//             <option value='darkTheme'>dark</option>
//             <option value='blueTheme'>blue</option>
//             <option value= 'customTheme1'>custom-1</option>
//         </select>
//     </>)
// };

export {getDefaultTheme,generateTheme,defaultTheme,blueTheme,darkTheme,customTheme1}
