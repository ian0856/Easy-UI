import { ap as defineComponent, aq as createVNode } from "./vendor-CyA3As81.js";
import { E as EyIcon } from "./index-isWnVmkB.js";
const EyButton = /* @__PURE__ */ defineComponent({
  name: "EyButton",
  props: {
    text: {
      type: String,
      default: "Easy-UI"
    },
    variant: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 支持用户自定义unocss
    class: {
      type: String,
      default: ""
    },
    // 前缀 / 后缀 图标
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    }
  },
  emits: {
    click: () => true,
    mouseEnter: () => true,
    mouseLeave: () => true,
    hover: () => true
  },
  setup(props, {
    emit,
    attrs
  }) {
    return () => {
      const handleClick = (e) => {
        if (props.disabled) return;
        emit("click");
        if (attrs.onClick && typeof attrs.onClick === "function") {
          attrs.onClick(e);
        }
      };
      const handleMouseEnter = (e) => {
        emit("mouseEnter");
        if (attrs.onMouseEnter && typeof attrs.onMouseEnter === "function") {
          attrs.onMouseEnter(e);
        }
      };
      const handleMouseLeave = (e) => {
        emit("mouseLeave");
        if (attrs.onMouseLeave && typeof attrs.onMouseLeave === "function") {
          attrs.onMouseLeave(e);
        }
      };
      return createVNode("button", {
        "class": ["ey-btn", `ey-btn--variant--${props.variant}`, `ey-btn--size--${props.size}`, `ey-btn--type--${props.type}`, {
          "ey-btn--disabled": props.disabled
        }, props.class],
        "onClick": handleClick,
        "onMouseenter": handleMouseEnter,
        "onMouseleave": handleMouseLeave,
        "disabled": props.disabled
      }, [props.prefixIcon && createVNode(EyIcon, {
        "name": props.prefixIcon,
        "size": "1.2em",
        "class": "mr-2px"
      }, null), props.text, props.suffixIcon && createVNode(EyIcon, {
        "name": props.suffixIcon,
        "size": "1.2em",
        "class": "ml-2px"
      }, null)]);
    };
  }
});
export {
  EyButton as E
};
