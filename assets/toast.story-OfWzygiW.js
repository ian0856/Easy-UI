import { ap as defineComponent, aJ as watch, aq as createVNode, ax as useVModel, aA as Transition, aG as Teleport, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-Cqrudiws.js";
import { E as EyButton } from "./index-ckdLgVE-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-DmAJkX_z.js";
const EyToast = /* @__PURE__ */ defineComponent({
  name: "EyToast",
  props: {
    message: {
      type: String,
      default: "Hello From Easy-UI Toast"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 1e3
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    let timer = null;
    watch(() => modelValue.value, (newValue) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (newValue) {
        timer = setTimeout(() => {
          modelValue.value = false;
          timer = null;
        }, props.duration);
      }
    }, {
      immediate: true
    });
    return () => {
      return createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(Transition, {
          "name": "toast"
        }, {
          default: () => [modelValue.value ? createVNode("div", {
            "class": "ey-toast"
          }, [props.message]) : null]
        })]
      });
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toast.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(false);
    const __returned__ = { modelValue, get EyToast() {
      return EyToast;
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
    title: "Toast",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyButton"], {
            text: "打开Toast",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.modelValue = true)
          }),
          createVNode($setup["EyToast"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Toast/toast.story.vue";
const toast_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Toast/toast.story.vue"]]);
export {
  toast_story as default
};
