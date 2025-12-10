import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, aw as ref, at as openBlock, au as withCtx } from "./vendor-mEeaDaaB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyCheckbox = /* @__PURE__ */ defineComponent({
  name: "EyCheckbox",
  props: {
    modelValue: {
      type: Array,
      required: true
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
    return () => {
      const modelValue = useVModel(props, "modelValue", emit);
      const handleCheckboxSwitch = (value) => {
        modelValue.value = [...modelValue.value, value];
      };
      return createVNode("div", {
        "class": ["ey-checkbox", props.direction === "horizontal" ? "ey-checkbox--horizontal" : "ey-checkbox--vertical", `ey-checkbox--${props.variant}`]
      }, [props.options.map((option, index) => {
        const inputId = `checkbox-${props.modelValue}-${option.value}-${index}`;
        return createVNode("label", {
          "class": "ey-checkbox__item",
          "for": inputId
        }, [createVNode("input", {
          "id": inputId,
          "onChange": () => handleCheckboxSwitch(option.value),
          "type": "checkbox",
          "value": option.value,
          "checked": modelValue.value.includes(option.value),
          "style": option.color ? {
            "accent-color": option.color
          } : {},
          "disabled": option.disabled
        }, null), createVNode("span", null, [option.label])]);
      })]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value1 = ref(["1"]);
    const options1 = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4", disabled: true }
    ]);
    const value2 = ref(["2"]);
    const options2 = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const value3 = ref(["3"]);
    const options3 = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const value4 = ref(["1", "2"]);
    const options4 = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const value5 = ref(["1", "3", "4"]);
    const options5 = ref([
      { label: "苹果", value: "1", color: "red" },
      { label: "橘子", value: "2", color: "orange" },
      { label: "香蕉", value: "3", color: "yellow" },
      { label: "葡萄", value: "4", color: "purple" },
      { label: "草莓", value: "5", color: "pink" },
      { label: "蓝莓", value: "6", color: "blue" }
    ]);
    const __returned__ = { value1, options1, value2, options2, value3, options3, value4, options4, value5, options5, get EyCheckbox() {
      return EyCheckbox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Checkbox",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value1 = $event),
            options: $setup.options1
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Outlined" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value2 = $event),
            options: $setup.options2,
            variant: "outlined"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Card" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value3,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value3 = $event),
            options: $setup.options3,
            variant: "card"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Tab" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value4,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.value4 = $event),
            options: $setup.options4,
            variant: "tab"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom Color" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value5,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.value5 = $event),
            options: $setup.options5,
            variant: "outlined"
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
_sfc_main.__file = "src/components/Checkbox/checkbox.story.vue";
const checkbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Checkbox/checkbox.story.vue"]]);
export {
  checkbox_story as default
};
