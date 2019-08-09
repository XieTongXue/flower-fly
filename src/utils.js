const utils = {
  getOffset() {
    let offset = {};
    for (let type in {Top: "", Left: ""}) {
        const direction = type == "Top" ? "Y": "X";
        if (typeof window["page" + direction + "Offset"] != "undefined") {
            offset[type.toLowerCase()] = window["page" + direction + "Offset"];
        } else {
            const target = document.documentElement.clientHeight ? document.documentElement: document.body;
            a[type.toLowerCase()] = target["scroll" + type]
        }
    }
    return offset
  }
}
export default utils