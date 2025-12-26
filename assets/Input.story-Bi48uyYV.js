import { ap as defineComponent, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock, aq as createVNode } from "./vendor-BYFuIi3B.js";
import { E as EyInput } from "./index-D_ccKi3Q.js";
import { E as EyButton } from "./index-D-y-zMS0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-BLF1Cyy1.js";
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
