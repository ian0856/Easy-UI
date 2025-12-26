import { ap as defineComponent, ar as resolveComponent, as as createBlock, at as openBlock, au as withCtx, aq as createVNode, av as createBaseVNode } from "./vendor-BYFuIi3B.js";
import { E as EyButton } from "./index-D-y-zMS0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-BLF1Cyy1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-20px" };
const _hoisted_2 = { class: "flex gap-20px" };
const _hoisted_3 = { class: "flex gap-20px items-center" };
const _hoisted_4 = { class: "flex gap-20px" };
const _hoisted_5 = { class: "flex gap-20px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Type" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EyButton"]),
            createVNode($setup["EyButton"], { type: "primary" })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Variant" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["EyButton"], {
              type: "default",
              variant: "default"
            }),
            createVNode($setup["EyButton"], {
              type: "default",
              variant: "plain"
            }),
            createVNode($setup["EyButton"], {
              type: "default",
              variant: "text"
            }),
            createVNode($setup["EyButton"], {
              type: "primary",
              variant: "default"
            }),
            createVNode($setup["EyButton"], {
              type: "primary",
              variant: "outlined"
            }),
            createVNode($setup["EyButton"], {
              type: "primary",
              variant: "plain"
            }),
            createVNode($setup["EyButton"], {
              type: "primary",
              variant: "text"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Size" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["EyButton"], { size: "small" }),
            createVNode($setup["EyButton"], { size: "default" }),
            createVNode($setup["EyButton"], { size: "large" })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["EyButton"], { disabled: "" })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Prefix Icon And Suffix Icon" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["EyButton"], { prefixIcon: "mdi:home" }),
            createVNode($setup["EyButton"], { suffixIcon: "mdi:arrow-right" })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Button/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Button/Button.story.vue"]]);
export {
  Button_story as default
};
