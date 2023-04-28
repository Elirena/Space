import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryTextColor: string;
            secondaryTextColor: string;
            tertiaryTextColor: string;
        },
        bgColor: {
            primary: string;
            secondary: string;
            tertiary: string;
        },
        maxWidth: string
    }
}