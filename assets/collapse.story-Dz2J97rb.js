import { ap as defineComponent, aq as createVNode, aB as Fragment, ax as useVModel, aE as createTextVNode, aF as Transition, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock, av as createBaseVNode, aA as createElementBlock, aC as renderList, aD as toDisplayString } from "./vendor-mEeaDaaB.js";
import { E as EyButton } from "./index-CteLYO-j.js";
import { E as EyIcon } from "./index-ClVLnfqP.js";
/* empty css              */
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyCollapse = /* @__PURE__ */ defineComponent({
  name: "EyCollapse",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  setup(props, {
    emit,
    slots
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    return () => {
      return createVNode("div", {
        "class": "ey-collapse"
      }, [createVNode("div", {
        "class": "ey-collapse__header"
      }, [slots.header?.() ?? createVNode(Fragment, null, [createVNode(EyIcon, {
        "size": "1.5em",
        "name": modelValue.value ? "mdi:chevron-down" : "mdi:chevron-right",
        "onClick": () => {
          if (props.trigger === "click") {
            modelValue.value = !modelValue.value;
          }
        },
        "onMouseEnter": () => {
          if (props.trigger === "hover") {
            modelValue.value = true;
          }
        },
        "onMouseLeave": () => {
          if (props.trigger === "hover") {
            modelValue.value = false;
          }
        }
      }, null), createVNode("span", null, [createTextVNode("Easy-UI Collapse")])])]), createVNode(Transition, {
        "name": "collapse"
      }, {
        default: () => [modelValue.value ? createVNode("div", {
          "class": "ey-collapse__content"
        }, [slots.content?.() ?? createVNode("div", {
          "class": "ey-collapse__content__default"
        }, [createVNode("p", null, [createTextVNode("Easy-UI Collapse")]), createVNode("p", null, [createTextVNode("Easy-UI Collapse")]), createVNode("p", null, [createTextVNode("Easy-UI Collapse")])])]) : null]
      })]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collapse.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(false);
    const customModelValue = ref(false);
    const customData = ref([
      "展示元素1",
      "展示元素2"
    ]);
    const __returned__ = { modelValue, customModelValue, customData, get EyCollapse() {
      return EyCollapse;
    }, get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center gap-20px" };
const _hoisted_2 = { class: "flex flex-col gap-8px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Collapse",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyCollapse"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom" }, {
        default: withCtx(() => [
          createVNode($setup["EyCollapse"], {
            modelValue: $setup.customModelValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.customModelValue = $event)
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode($setup["EyButton"], {
                  type: "primary",
                  text: "action",
                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.customModelValue = !$setup.customModelValue)
                }),
                _cache[4] || (_cache[4] = createBaseVNode(
                  "span",
                  null,
                  "custom header",
                  -1
                  /* CACHED */
                ))
              ])
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.customData, (item, index) => {
                    return openBlock(), createElementBlock("div", { key: index }, [
                      createBaseVNode(
                        "span",
                        null,
                        toDisplayString(index + 1) + ". " + toDisplayString(item),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                createVNode($setup["EyButton"], {
                  text: "添加元素",
                  onClick: _cache[2] || (_cache[2] = ($event) => $setup.customData.push("新元素" + ($setup.customData.length + 1)))
                })
              ])
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
_sfc_main.__file = "src/components/Collapse/collapse.story.vue";
const collapse_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Collapse/collapse.story.vue"]]);
export {
  collapse_story as default
};
