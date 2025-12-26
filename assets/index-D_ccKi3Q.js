import { ap as defineComponent, aw as ref, aq as createVNode, ax as useVModel } from "./vendor-BYFuIi3B.js";
const EyInput = /* @__PURE__ */ defineComponent({
  name: "EyInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "default"
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "input": (value) => true,
    "focus": () => true,
    "blur": () => true
  },
  setup(props, {
    slots,
    emit,
    expose
  }) {
    const inputRef = ref(null);
    const handleInput = (e) => {
      const value2 = e.target.value;
      emit("update:modelValue", value2);
      emit("input", value2);
    };
    const handleFocus = () => {
      emit("focus");
    };
    const handleBlur = () => {
      emit("blur");
    };
    const focus = () => {
      inputRef.value?.focus();
    };
    const blur = () => {
      inputRef.value?.blur();
    };
    expose({
      focus,
      blur
    });
    const value = useVModel(props, "value", emit);
    return () => {
      return createVNode("div", {
        "class": `ey-input ey-input--${props.variant} flex items-center`
      }, [createVNode("div", {
        "class": "ey-input__prefix"
      }, [slots.prefix?.()]), createVNode("input", {
        "ref": inputRef,
        "class": `ey-input__content ${props.clearable ? "ey-input__content--clearable" : ""}`,
        "value": value.value,
        "onInput": handleInput,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "placeholder": props.placeholder,
        "disabled": props.disabled,
        "readonly": props.readonly
      }, null), createVNode("div", {
        "class": "ey-input__suffix"
      }, [slots.suffix?.()])]);
    };
  }
});
export {
  EyInput as E
};
