interface Style {
  (text: string | number): string
}

interface Options {
  colorize: boolean
}

interface Colors {
  reset: Style
  bold: Style
  dim: Style
  italic: Style
  underline: Style
  inverse: Style
  hidden: Style
  strikethrough: Style
  black: Style
  red: Style
  green: Style
  yellow: Style
  blue: Style
  magenta: Style
  cyan: Style
  white: Style
  gray: Style
  bgBlack: Style
  bgRed: Style
  bgGreen: Style
  bgYellow: Style
  bgBlue: Style
  bgMagenta: Style
  bgCyan: Style
  bgWhite: Style
  blackBright: Style
  redBright: Style
  greenBright: Style
  yellowBright: Style
  blueBright: Style
  magentaBright: Style
  cyanBright: Style
  whiteBright: Style
  bgBlackBright: Style
  bgRedBright: Style
  bgGreenBright: Style
  bgYellowBright: Style
  bgBlueBright: Style
  bgMagentaBright: Style
  bgCyanBright: Style
  bgWhiteBright: Style
}

export const isColorSupported: boolean

export default function (options: Options): Colors
