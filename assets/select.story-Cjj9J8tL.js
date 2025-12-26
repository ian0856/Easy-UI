import { ap as defineComponent, aw as ref, aH as useTemplateRef, aI as onClickOutside, ax as useVModel, aJ as watch, aq as createVNode, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock } from "./vendor-BYFuIi3B.js";
import { E as EyInput } from "./index-D_ccKi3Q.js";
import { E as EyIcon } from "./index-BLF1Cyy1.js";
import { E as EyMenu } from "./index-CH93VL11.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EySelect = /* @__PURE__ */ defineComponent({
  name: "EySelect",
  props: {
    modelValue: {
      type: [String, Array]
    },
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    emit
  }) {
    const inputRef = ref(null);
    const isMenuVisible = ref(false);
    const menuRef = ref(null);
    const handleFocus = () => {
      isMenuVisible.value = true;
    };
    const handleIconClick = () => {
      isMenuVisible.value = !isMenuVisible.value;
      if (isMenuVisible.value) inputRef.value?.focus();
      else inputRef.value?.blur();
    };
    const handleMenuMouseDown = (e) => {
      e.preventDefault();
    };
    const ActiveArea = useTemplateRef("ey-select-wrapper");
    onClickOutside(ActiveArea, () => {
      isMenuVisible.value = false;
    });
    const value = useVModel(props, "modelValue", emit, {
      defaultValue: props.multiple ? [] : ""
    });
    watch(value, () => {
      if (!props.multiple) isMenuVisible.value = false;
    });
    const inputContent = (value2) => {
      if (typeof value2 === "string") return props.options.find((option) => option.value === value2)?.label ?? "";
      else return value2.map((v) => props.options.find((option) => option.value === v)?.label ?? "").join(", ");
    };
    return () => {
      return createVNode("div", {
        "class": "ey-select",
        "ref": "ey-select-wrapper"
      }, [createVNode(EyInput, {
        "onFocus": handleFocus,
        "readonly": true,
        "placeholder": "请选择",
        "ref": inputRef,
        "value": inputContent(value.value ?? "")
      }, {
        suffix: () => createVNode(EyIcon, {
          "color": "gray",
          "onClick": handleIconClick,
          "name": isMenuVisible.value ? "mdi:chevron-up" : "mdi:chevron-down",
          "size": "1.7em",
          "class": "cursor-pointer"
        }, null)
      }), createVNode("div", {
        "class": "ey-select__menu-wrapper",
        "ref": menuRef,
        "onMousedown": handleMenuMouseDown
      }, [isMenuVisible.value && createVNode(EyMenu, {
        "options": props.options,
        "modelValue": value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        "multiple": props.multiple
      }, null)])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref("1");
    const options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const multiple_options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4" }
    ]);
    const multiple_value = ref([]);
    const __returned__ = { value, options, multiple_options, multiple_value, get EySelect() {
      return EySelect;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Select",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EySelect"], {
            options: $setup.options,
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
          }, null, 8, ["options", "modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Multiple" }, {
        default: withCtx(() => [
          createVNode($setup["EySelect"], {
            options: $setup.multiple_options,
            modelValue: $setup.multiple_value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.multiple_value = $event),
            multiple: ""
          }, null, 8, ["options", "modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Select/select.story.vue";
const select_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Select/select.story.vue"]]);
export {
  select_story as default
};
