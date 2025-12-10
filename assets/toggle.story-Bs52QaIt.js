import { ap as defineComponent, ay as computed, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-B0AiILHj.js";
/* empty css              */
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyToggle = /* @__PURE__ */ defineComponent({
  name: "EyToggle",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    activeColor: {
      type: String,
      default: "#409eff"
    },
    inactiveColor: {
      type: String,
      default: "#dcdfe6"
    },
    activeText: {
      type: String
    },
    inactiveText: {
      type: String
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    const handleClick = () => {
      if (props.disabled) return;
      const newValue = !modelValue.value;
      modelValue.value = newValue;
      emit("change", newValue);
    };
    const switchStyle = computed(() => {
      return {
        backgroundColor: modelValue.value ? props.activeColor : props.inactiveColor
      };
    });
    return () => {
      return createVNode("div", {
        "class": ["ey-toggle", `ey-toggle--${props.size}`, {
          "ey-toggle--checked": modelValue.value,
          "ey-toggle--disabled": props.disabled
        }],
        "onClick": handleClick
      }, [createVNode("span", {
        "class": "ey-toggle__core",
        "style": switchStyle.value
      }, null), props.activeText || props.inactiveText ? createVNode("span", {
        "class": "ey-toggle__label"
      }, [modelValue.value ? props.activeText : props.inactiveText]) : null]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toggle.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref(false);
    const __returned__ = { value, get EyToggle() {
      return EyToggle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Toggle",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyToggle"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Toggle/toggle.story.vue";
const toggle_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Toggle/toggle.story.vue"]]);
export {
  toggle_story as default
};
