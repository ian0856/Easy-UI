import { ap as defineComponent, aq as createVNode, ax as useVModel, aG as Teleport, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock, av as createBaseVNode } from "./vendor-mEeaDaaB.js";
import { E as EyButton } from "./index-CteLYO-j.js";
/* empty css              */
import "./index-ClVLnfqP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyOverlay = /* @__PURE__ */ defineComponent({
  name: "EyOverlay",
  setup(_, {
    slots
  }) {
    return () => {
      return createVNode("div", {
        "class": "ey-overlay"
      }, [slots.default?.()]);
    };
  }
});
const EyModal = /* @__PURE__ */ defineComponent({
  name: "EyModal",
  props: {
    title: {
      type: String
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    return () => {
      return modelValue.value ? createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(EyOverlay, null, {
          default: () => createVNode("div", {
            "class": "ey-modal"
          }, [createVNode("header", null, [props.title ?? "Easy-UI Modal"]), createVNode("main", null, [slots.default?.()]), createVNode("footer", null, [slots.footer?.() ?? createVNode(EyButton, {
            "text": "关闭",
            "onClick": () => {
              modelValue.value = false;
            }
          }, null)])])
        })]
      }) : null;
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(false);
    const __returned__ = { modelValue, get EyModal() {
      return EyModal;
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
    title: "Modal",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyButton"], {
            text: "打开弹窗",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.modelValue = true)
          }),
          createVNode($setup["EyModal"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.modelValue = $event)
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode(
                "p",
                null,
                "自定义弹窗体",
                -1
                /* CACHED */
              )
            ])]),
            footer: withCtx(() => [
              createVNode($setup["EyButton"], {
                text: "关闭",
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.modelValue = false)
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Modal/modal.story.vue";
const modal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Modal/modal.story.vue"]]);
export {
  modal_story as default
};
