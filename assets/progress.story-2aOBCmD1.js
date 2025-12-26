import { ap as defineComponent, aq as createVNode, aE as createTextVNode, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock, av as createBaseVNode } from "./vendor-BYFuIi3B.js";
import { E as EyButton } from "./index-D-y-zMS0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-BLF1Cyy1.js";
const EyProgress = /* @__PURE__ */ defineComponent({
  name: "EyProgress",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    showPercent: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "aquamarine"
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": "ey-progress__wrapper"
      }, [createVNode("div", {
        "class": "ey-progress"
      }, [createVNode("div", {
        "class": "ey-progress__bar",
        "style": {
          width: `${props.modelValue}%`,
          backgroundColor: props.color
        }
      }, null)]), props.showPercent ? createVNode("span", {
        "class": "ey-progress__percent"
      }, [props.modelValue, createTextVNode("%")]) : null]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "progress.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(0);
    const addPercent = () => {
      const interval = setInterval(() => {
        if (modelValue.value >= 100) {
          clearInterval(interval);
          return;
        }
        modelValue.value += 10;
      }, 100);
    };
    const subtractPercent = () => {
      const interval = setInterval(() => {
        if (modelValue.value <= 0) {
          clearInterval(interval);
          return;
        }
        modelValue.value -= 10;
      }, 100);
    };
    const __returned__ = { modelValue, addPercent, subtractPercent, get EyProgress() {
      return EyProgress;
    }, get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center gap-8px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Progress",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyProgress"], { modelValue: 25 })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Show Percent" }, {
        default: withCtx(() => [
          createVNode($setup["EyProgress"], {
            modelValue: 50,
            showPercent: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom Color" }, {
        default: withCtx(() => [
          createVNode($setup["EyProgress"], {
            modelValue: 75,
            color: "red",
            showPercent: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Update Percent" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EyProgress"], { modelValue: $setup.modelValue }, null, 8, ["modelValue"]),
            createVNode($setup["EyButton"], {
              disabled: $setup.modelValue >= 100,
              text: "Add",
              onClick: $setup.addPercent
            }, null, 8, ["disabled"]),
            createVNode($setup["EyButton"], {
              disabled: $setup.modelValue <= 0,
              text: "Subtract",
              onClick: $setup.subtractPercent
            }, null, 8, ["disabled"])
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
_sfc_main.__file = "src/components/Progress/progress.story.vue";
const progress_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Progress/progress.story.vue"]]);
export {
  progress_story as default
};
