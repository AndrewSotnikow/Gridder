import { ColorVariant, TextVariant, ButtonVariant } from "./variants";

import { ValuesOf } from "../helpers/type";

export type ButtonVariants = ValuesOf<typeof ButtonVariant>;
export type TextVariants = ValuesOf<typeof TextVariant>;
export type Color = ValuesOf<typeof ColorVariant>;

interface ButtonColors {
  bgColor: string;
  bgColorHover: string;
  bgColorActive: string;
  borderColor: string;
  borderColorHover: string;
  borderColorActive: string;
  contentColor: string;
  contentColorHover: string;
  contentColorActive: string;
  borderColorDisabled: string;
  contentColorDisabled: string;
}

interface TextTypography {
  fontSizeMobile: number
  lineHeightMobile: number
  fontSizeDesktop: number
  lineHeightDesktop: number
  fontFamily?: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    button: Record<ButtonVariants, ButtonColors>;
    text: Record<TextVariants, TextTypography>;
    color: Record<Color, string>;
  }
}
