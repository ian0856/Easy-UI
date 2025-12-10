import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock } from "./vendor-mEeaDaaB.js";
import { E as EyButton } from "./index-CteLYO-j.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-ClVLnfqP.js";
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
    "input": (value) => true
  },
  setup(props, {
    slots,
    emit
  }) {
    const handleInput = (e) => {
      const value2 = e.target.value;
      emit("update:modelValue", value2);
      emit("input", value2);
    };
    const value = useVModel(props, "value", emit);
    return () => {
      return createVNode("div", {
        "class": `ey-input ey-input--${props.variant} flex items-center`
      }, [createVNode("div", {
        "class": "ey-input__prefix"
      }, [slots.prefix?.()]), createVNode("input", {
        "class": `ey-input__content ${props.clearable ? "ey-input__content--clearable" : ""}`,
        "value": value.value,
        "onInput": handleInput,
        "placeholder": props.placeholder,
        "disabled": props.disabled,
        "readonly": props.readonly
      }, null), createVNode("div", {
        "class": "ey-input__suffix"
      }, [slots.suffix?.()])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get EyInput() {
      return EyInput;
    }, get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Input",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyInput"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Underline" }, {
        default: withCtx(() => [
          createVNode($setup["EyInput"], {
            variant: "underline",
            clearable: true
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With suffix" }, {
        default: withCtx(() => [
          createVNode($setup["EyInput"], { variant: "default" }, {
            suffix: withCtx(() => [
              createVNode($setup["EyButton"], { text: "搜索" })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Input/Input.story.vue";
const Input_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Input/Input.story.vue"]]);
export {
  Input_story as default
};
