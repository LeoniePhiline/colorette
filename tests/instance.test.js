import { blue, Colorette } from "../index.js"
import { t, equal } from "twist"

export default [
  t("colorette", [
    t("options.useColor toggle color on/off", [
      (done) => {
        done([
          equal(
            blue("megazord"),
            new Colorette({ useColor: true }).blue("megazord")
          ),
          equal(
            "megazord",
            new Colorette({ useColor: false }).blue("megazord")
          ),
        ])
      },
    ]),
  ]),
]
