import { ap as defineComponent, aq as createVNode, ay as computed } from "./vendor-BYFuIi3B.js";
function resolveItemOrArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return [value];
}
const EyErrorMessage = /* @__PURE__ */ defineComponent({
  name: "EyErrorMessage",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": "color-red text-sm"
      }, [props.text]);
    };
  }
});
const EyMenu = /* @__PURE__ */ defineComponent({
  name: "EyMenu",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [Array, String]
    },
    class: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    emit
  }) {
    if (props.modelValue && props.multiple && !Array.isArray(props.modelValue)) {
      return () => {
        return createVNode(EyErrorMessage, {
          "text": "多选菜单的关联数据必须为数组"
        }, null);
      };
    }
    if (props.modelValue && !props.multiple && typeof props.modelValue !== "string") {
      return () => {
        return createVNode(EyErrorMessage, {
          "text": "单选菜单的关联数据必须为字符串"
        }, null);
      };
    }
    const modelValues = computed(() => resolveItemOrArray(props.modelValue ?? []));
    const updateModelValues = (value) => {
      const isExist = modelValues.value.includes(value);
      if (!props.multiple) {
        if (isExist) return;
        emit("update:modelValue", value);
      } else {
        if (isExist) {
          const newValues = modelValues.value.filter((v) => v !== value);
          emit("update:modelValue", newValues);
        } else {
          modelValues.value.push(value);
          emit("update:modelValue", modelValues.value);
        }
      }
    };
    return () => {
      return createVNode("div", {
        "class": ["ey-menu__wrapper", props.class]
      }, [props.options.map((option) => createVNode("div", {
        "class": ["ey-menu__wrapper__item", modelValues.value.includes(option.value) ? "ey-menu__wrapper__item--active" : ""],
        "key": option.value,
        "onClick": () => updateModelValues(option.value)
      }, [option.label]))]);
    };
  }
});
export {
  EyMenu as E
};
