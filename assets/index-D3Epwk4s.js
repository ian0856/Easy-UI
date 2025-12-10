import { ap as defineComponent, aq as createVNode, aH as Icon } from "./vendor-B0AiILHj.js";
function resolveIconSize(size) {
  return typeof size === "number" ? `${size}px` : size;
}
const EyIcon = /* @__PURE__ */ defineComponent({
  name: "EyIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    }
  },
  emits: {
    click: () => true,
    mouseEnter: () => true,
    mouseLeave: () => true
  },
  setup(props, {
    emit,
    attrs
  }) {
    return () => {
      const size = resolveIconSize(props.size);
      const handleClick = (e) => {
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
      return createVNode("span", {
        "class": ["ey-icon", props.class],
        "style": {
          fontSize: size,
          color: props.color
        },
        "onClick": handleClick,
        "onMouseenter": handleMouseEnter,
        "onMouseleave": handleMouseLeave
      }, [createVNode(Icon, {
        "icon": props.name,
        "width": size,
        "height": size
      }, null)]);
    };
  }
});
export {
  EyIcon as E
};
