import { ap as defineComponent, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock, aq as createVNode } from "./vendor-BYFuIi3B.js";
import { E as EyMenu } from "./index-CH93VL11.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const values = ref("1");
    const multiple_options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4" }
    ]);
    const values2 = ref(["2", "3"]);
    const __returned__ = { options, values, multiple_options, values2, get EyMenu() {
      return EyMenu;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Menu",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyMenu"], {
            options: $setup.options,
            modelValue: $setup.values,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.values = $event)
          }, null, 8, ["options", "modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Multiple" }, {
        default: withCtx(() => [
          createVNode($setup["EyMenu"], {
            options: $setup.multiple_options,
            modelValue: $setup.values2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.values2 = $event),
            multiple: ""
          }, null, 8, ["options", "modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Menu/menu.story.vue";
const menu_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Menu/menu.story.vue"]]);
export {
  menu_story as default
};
