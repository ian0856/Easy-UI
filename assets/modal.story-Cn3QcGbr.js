import { ap as defineComponent, aq as createVNode, aw as ref, ay as computed, ax as useVModel, aG as Teleport, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock, av as createBaseVNode } from "./vendor-BYFuIi3B.js";
import { E as EyButton } from "./index-D-y-zMS0.js";
import { E as EyIcon } from "./index-BLF1Cyy1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
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
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: true
    },
    fullscreenToggle: {
      type: Boolean,
      default: true
    },
    /** 布局相关 */
    size: {
      type: String,
      default: "default"
    },
    height: {
      type: String,
      default: "500px"
    },
    width: {
      type: String,
      default: "500px"
    },
    offsetLeft: {
      type: String
    },
    offsetTop: {
      type: String
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
    const fullScreen = ref(props.fullscreen);
    const actionIcon = computed(() => fullScreen.value ? "mdi:fullscreen-exit" : "mdi:fullscreen");
    const toggleIcon = () => {
      fullScreen.value = !fullScreen.value;
    };
    return () => {
      return modelValue.value ? createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(EyOverlay, null, {
          default: () => createVNode("div", {
            "class": ["ey-modal", fullScreen.value ? "ey-modal--fullscreen" : ["ey-modal--default", `ey-modal--default__${props.size}`]]
          }, [createVNode("header", {
            "class": "flex items-center justify-between"
          }, [createVNode("h2", null, [props.title ?? "Easy-UI Modal"]), createVNode("div", {
            "class": "flex items-center gap-4px"
          }, [createVNode(EyIcon, {
            "class": "cursor-pointer",
            "name": actionIcon.value,
            "size": "1.7em",
            "onClick": toggleIcon
          }, null), createVNode(EyIcon, {
            "class": "cursor-pointer",
            "name": "mdi:close",
            "size": "1.7em",
            "onClick": () => {
              modelValue.value = false;
            }
          }, null)])]), createVNode("main", null, [slots.default?.()]), createVNode("footer", null, [slots.footer?.() ?? createVNode("div", {
            "class": "flex gap-8px justify-end"
          }, [createVNode(EyButton, {
            "text": "关闭",
            "onClick": () => {
              modelValue.value = false;
            }
          }, null), createVNode(EyButton, {
            "text": "确认",
            "type": "primary",
            "onClick": () => {
              modelValue.value = false;
            }
          }, null)])])])
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
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event)
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createBaseVNode(
                "p",
                null,
                "自定义弹窗体",
                -1
                /* CACHED */
              )
            ])]),
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
