import { ap as defineComponent, aq as createVNode, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock, av as createBaseVNode } from "./vendor-CyA3As81.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyTag = /* @__PURE__ */ defineComponent({
  name: "EyTag",
  props: {
    text: {
      type: String,
      default: "Easy-UI"
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": "ey-tag"
      }, [createVNode("div", {
        "class": "ey-tag__content"
      }, [props.text])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tag.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get EyTag() {
      return EyTag;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-20px" };
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
