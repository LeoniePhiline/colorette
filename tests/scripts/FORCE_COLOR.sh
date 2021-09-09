#!/bin/sh

[ `FORCE_COLOR= node -e '
    import("colorette").then(({ createColors }) =>
      console.log(createColors().blue("window")))
  '` = `printf '\e[34mwindow\e[39m'` ]