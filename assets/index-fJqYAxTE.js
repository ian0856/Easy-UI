import { ap as defineComponent, aw as ref, aq as createVNode } from "./vendor-Cqrudiws.js";
/* empty css              */
import { E as EyIcon } from "./index-DmAJkX_z.js";
const EyTag = /* @__PURE__ */ defineComponent({
  name: "EyTag",
  props: {
    text: {
      type: String,
      default: "Easy-UI"
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#409eff"
    }
  },
  emits: {
    "close": (_text) => true
  },
  setup(props, {
    emit
  }) {
    const show = ref(true);
    const handleClose = () => {
      show.value = false;
      emit("close", props.text);
    };
    return () => {
      return show.value && createVNode("div", {
        "class": "ey-tag",
        "onClick": handleClose
      }, [createVNode("span", {
        "class": "truncate",
        "title": props.text
      }, [props.text]), props.closable ? createVNode(EyIcon, {
        "class": "ml-4px",
        "name": "mdi:close-circle",
        "size": "16px",
        "onClick": handleClose
      }, null) : null]);
    };
  }
});
export {
  EyTag as E
};
