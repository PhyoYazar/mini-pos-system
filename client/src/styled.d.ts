import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // themecolor: string;

      // primary: string;
      // secondary: string;

      neutral900: string;
      neutral800: string;
      neutral700: string;
      neutral600: string;
      neutral500: string;
      neutral400: string;
      neutral300: string;
      neutral200: string;
      neutral100: string;
      neutral50: string;
      neutral30: string;
      neutral25: string;
      neutral20: string;

      emerald900: string;
      emerald800: string;
      emerald700: string;
      emerald600: string;
      emerald500: string;
      emerald400: string;
      emerald300: string;
      emerald200: string;
      emerald100: string;

      amber900: string;
      amber800: string;
      amber700: string;
      amber600: string;
      amber500: string;
      amber400: string;
      amber300: string;
      amber200: string;
      amber100: string;
      amber50: string;

      rose900: string;
      rose800: string;
      rose700: string;
      rose600: string;
      rose500: string;
      rose400: string;
      rose300: string;
      rose200: string;
      rose100: string;
      rose50: string;

      light: string;
      dark: string;

      black: string;
      white: string;
    };

    fontSize: {
      xxbg: number;
      xbg: number;
      bg: number;
      xxl: number;
      xl: number;
      xlg: number;
      lg: number;
      semilg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    };

    fontWeight: {
      xxl: number;
      xl: number;
      lg: number;
      semilg: number;
      md: number;
      sm: number;
      xs: number;
    };

    transition: string;
  }
}
