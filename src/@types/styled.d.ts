import { defaultTheme } from "../styles/theme/Default";

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}