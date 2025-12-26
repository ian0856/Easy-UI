import { ap as defineComponent, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock, aq as createVNode, av as createBaseVNode } from "./vendor-BYFuIi3B.js";
import { E as EyTag } from "./index-Bk4e_OI2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-BLF1Cyy1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tag.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClose = (text) => {
      console.log("close", text);
    };
    const __returned__ = { handleClose, get EyTag() {
      return EyTag;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-20px" };
const _hoisted_2 = { class: "flex gap-20px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Tag",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EyTag"], { text: "Default" })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Closable" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["EyTag"], {
              text: "Closable",
              closable: "",
              onClose: $setup.handleClose
            })
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
_sfc_main.__file = "src/components/Tag/Tag.story.vue";
const Tag_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Tag/Tag.story.vue"]]);
export {
  Tag_story as default
};
