#!/bin/sh

[ `NO_COLOR= node -e '
    import("colorette").then(({ createColors }) =>
      console.log(createColors().blue("window")))
  '` = "window" ]
