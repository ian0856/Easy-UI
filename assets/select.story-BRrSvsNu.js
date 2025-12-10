import { ap as defineComponent, aq as createVNode, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-CyA3As81.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EySelect = /* @__PURE__ */ defineComponent({
  name: "EySelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": "ey-select"
      }, [createVNode("select", {
        "class": "ey-select__content",
        "multiple": props.multiple,
        "value": props.value
      }, [props.options.map((option) => createVNode("option", {
        "value": option.value
      }, [option.label]))])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref("1");
    const options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const __returned__ = { value, options, get EySelect() {
      return EySelect;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Select",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EySelect"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
            options: $setup.options
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
_sfc_main.__file = "src/components/Select/select.story.vue";
const select_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Select/select.story.vue"]]);
export {
  select_story as default
};
