import { ap as defineComponent, aq as createVNode, ar as resolveComponent, as as createBlock, at as openBlock, au as withCtx, av as createBaseVNode, aw as ref } from "./vendor-mEeaDaaB.js";
import { E as EyButton } from "./index-CteLYO-j.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-ClVLnfqP.js";
const EyBadge = /* @__PURE__ */ defineComponent({
  name: "EyBadge",
  props: {
    text: {
      type: String
    },
    position: {
      type: String,
      default: "top-left"
    },
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "red"
    }
  },
  setup(props, {
    slots
  }) {
    return () => {
      const badgeType = props.text ? "text" : "dot";
      return createVNode("div", {
        "class": "ey-badge-wrapper"
      }, [slots.default?.(), createVNode("div", {
        "class": ["ey-badge", `ey-badge--${badgeType}`, `ey-badge--${badgeType}--${props.position}`, {
          "ey-badge--hidden": !props.value
        }],
        "style": {
          backgroundColor: props.color
        }
      }, [props.text])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value1 = ref(true);
    const value2 = ref(true);
    const value3 = ref(true);
    const value4 = ref(true);
    const value5 = ref(true);
    const value6 = ref(true);
    const __returned__ = { value1, value2, value3, value4, value5, value6, get EyBadge() {
      return EyBadge;
    }, get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "flex gap-20px",
  style: { "overflow": "visible", "padding": "10px" }
};
const _hoisted_2 = {
  class: "flex gap-20px items-center",
  style: { "overflow": "visible", "padding": "10px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Badge",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EyBadge"], { value: $setup.value1 }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Default Color",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.value1 = !$setup.value1)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"]),
            createVNode($setup["EyBadge"], {
              value: $setup.value1,
              color: "hotpink"
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Hotpink Color",
                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.value1 = !$setup.value1)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"]),
            createVNode($setup["EyBadge"], {
              value: $setup.value1,
              color: "pink"
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Pink Color",
                  onClick: _cache[2] || (_cache[2] = ($event) => $setup.value1 = !$setup.value1)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Four positions" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["EyBadge"], {
              text: "99+",
              position: "top-right",
              value: $setup.value2
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Top Right",
                  onClick: _cache[3] || (_cache[3] = ($event) => $setup.value2 = !$setup.value2)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"]),
            createVNode($setup["EyBadge"], {
              text: "123",
              position: "bottom-left",
              value: $setup.value3
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Top Left",
                  onClick: _cache[4] || (_cache[4] = ($event) => $setup.value3 = !$setup.value3)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"]),
            createVNode($setup["EyBadge"], {
              text: "456",
              position: "top-left",
              value: $setup.value4
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Bottom Right",
                  onClick: _cache[5] || (_cache[5] = ($event) => $setup.value4 = !$setup.value4)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"]),
            createVNode($setup["EyBadge"], {
              text: "789",
              position: "bottom-right",
              value: $setup.value5
            }, {
              default: withCtx(() => [
                createVNode($setup["EyButton"], {
                  text: "Bottom Left",
                  onClick: _cache[6] || (_cache[6] = ($event) => $setup.value5 = !$setup.value5)
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value"])
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
_sfc_main.__file = "src/components/Badge/Badge.story.vue";
const Badge_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Badge/Badge.story.vue"]]);
export {
  Badge_story as default
};
