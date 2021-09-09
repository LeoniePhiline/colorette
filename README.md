# Colorette

> Easily set your terminal text color & styles.

- No wonky prototype method-chain API.
- Automatic color support detection.
- Up to [2x faster](#benchmarks) than alternatives.
- [`NO_COLOR`](https://no-color.org) friendly. ✅

Here's the first example to get you started.

```js
import { blue, bold, underline } from "colorette"

console.log(
  blue("I'm blue"),
  bold(blue("da ba dee")),
  underline(bold(blue("da ba daa")))
)
```

Here's an example using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```js
console.log(`
  There's a ${underline(blue("house"))},
  With a ${bold(blue("window"))},
  And a ${blue("corvette")}
  And everything is blue
`)
```

Of course, you can nest styles without breaking existing color sequences.

```js
console.log(bold(`I'm ${blue(`da ba ${underline("dee")} da ba`)} daa`))
```

Need to dynamically toggle color on or off? You can do that too.

```js
import { Colorette } from "colorette"

const { blue, options } = new Colorette({ useColor: true })

console.log(blue("I'm blue"))

options.useColor = false

console.log(blue("I'm not blue!"))
```

## Installation

```console
npm install colorette
```

## API

### <code><i><a href="#supported-styles">colorOrStyle</a></i>(string)</code>

```js
blue("I'm blue") //=> \x1b[34mI'm blue\x1b[39m
```

### `isColorSupported`

`true` if your terminal supports color or `false` otherwise.

### `new Colorette(options)`

Create a Colorette instance. Terminal color support is automatically detected.

```js
import { Colorette } from "colorette"

const { blue, options } = new Colorette({ useColor: true })
```

### `createColors(options)`

Create a Colorette instance. Terminal color support is automatically detected.

```js
import { createColors } from "colorette"

const { blue, options } = createColors({ useColor: true })
```

#### `options.useColor`

Toggle color on or off as needed.

```js
options.useColor = false
```

## Environment

You can force color usage in new Colorette instances from the CLI via `FORCE_COLOR=` or `NO_COLOR=`.

```console
$ FORCE_COLOR= node example.js >color_log
$ NO_COLOR= node example.js >no_color_log
```

## Supported styles

| Colors  | Background Colors | Bright Colors | Bright Background Colors | Modifiers         |
| ------- | ----------------- | ------------- | ------------------------ | ----------------- |
| black   | bgBlack           | blackBright   | bgBlackBright            | dim               |
| red     | bgRed             | redBright     | bgRedBright              | **bold**          |
| green   | bgGreen           | greenBright   | bgGreenBright            | hidden            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           | _italic_          |
| blue    | bgBlue            | blueBright    | bgBlueBright             | <u>underline</u>  |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          | ~~strikethrough~~ |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             | reset             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |                   |
| gray    |                   |               |                          |                   |

## Benchmarks

```console
npm --prefix bench start
```

## License

[MIT](LICENSE.md)
