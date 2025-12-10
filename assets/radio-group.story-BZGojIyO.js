import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-B0AiILHj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyRadio = /* @__PURE__ */ defineComponent({
  name: "EyRadio",
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    switch: (_value) => true
  },
  setup(props, {
    emit
  }) {
    const handleChange = () => {
      emit("switch", props.value);
    };
    const inputId = `${props.name}-${props.value}`;
    return () => {
      return createVNode("label", {
        "class": "ey-radio-group__item",
        "for": inputId
      }, [createVNode("input", {
        "id": inputId,
        "onChange": handleChange,
        "type": "radio",
        "value": props.value,
        "name": props.name,
        "checked": props.checked,
        "disabled": props.disabled
      }, null), createVNode("span", null, [props.label])]);
    };
  }
});
let radioGroupCounter = 0;
const EyRadioGroup = /* @__PURE__ */ defineComponent({
  name: "EyRadioGroup",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    variant: {
      type: String,
      default: "default"
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    emit
  }) {
    const radioName = `ey-radio-${radioGroupCounter++}`;
    const modelValue = useVModel(props, "modelValue", emit);
    const handleRadioSwitch = (value) => {
      modelValue.value = value;
    };
    return () => {
      return createVNode("div", {
        "class": ["ey-radio-group", props.direction === "horizontal" ? "ey-radio-group--horizontal" : "ey-radio-group--vertical", `ey-radio-group--${props.variant}`]
      }, [props.options.map((option) => createVNode(EyRadio, {
        "name": radioName,
        "value": option.value,
        "checked": modelValue.value === option.value,
        "label": option.label,
        "disabled": option.disabled,
        "onSwitch": handleRadioSwitch
      }, null))]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio-group.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref("1");
    const options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const value2 = ref("2");
    const options2 = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2", disabled: true },
      { label: "Option 3", value: "3" }
    ]);
    const __returned__ = { value, options, value2, options2, get EyRadioGroup() {
      return EyRadioGroup;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "RadioGroup",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyRadioGroup"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
            options: $setup.options
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Outlined" }, {
        default: withCtx(() => [
          createVNode($setup["EyRadioGroup"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
            options: $setup.options,
            variant: "outlined"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Card" }, {
        default: withCtx(() => [
          createVNode($setup["EyRadioGroup"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value = $event),
            options: $setup.options,
            variant: "card"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Tab" }, {
        default: withCtx(() => [
          createVNode($setup["EyRadioGroup"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.value = $event),
            options: $setup.options,
            variant: "tab"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createVNode($setup["EyRadioGroup"], {
            modelValue: $setup.value2,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.value2 = $event),
            options: $setup.options2
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/RadioGroup/radio-group.story.vue";
const radioGroup_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/RadioGroup/radio-group.story.vue"]]);
export {
  radioGroup_story as default
};
