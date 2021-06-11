import { getOptions } from "../../common/util.js"

const options = getOptions()
const el = document.getElementById("base") as HTMLInputElement
if (el) {
  el.value = options.base
}
