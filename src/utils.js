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
  },
  getClientHeight() {
    const body = document.body 
    let clientHeight
    if (window.innerHeight) {
      clientHeight = window.innerHeight;
    } else if (body.parentElement.clientHeight) {
      clientHeight = body.parentElement.clientHeight;
    } else if (body && body.clientHeight) {
      clientHeight = body.clientHeight;
    }
    return clientHeight
  }
}
export default utils