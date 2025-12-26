import { ap as defineComponent, aq as createVNode, az as createTextVNode, aA as Transition, aw as ref, aK as lodashExports, aE as computed, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock, av as createBaseVNode, aB as createElementBlock, ay as Fragment, aC as renderList } from "./vendor-Cqrudiws.js";
/* empty css              */
import { E as EyIcon } from "./index-DmAJkX_z.js";
import { E as EyTag } from "./index-fJqYAxTE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
function getAllDescendantValues(options) {
  const descendantValues = [];
  const traverse = (node) => {
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => traverse(child));
    } else {
      descendantValues.push(node.value);
    }
  };
  options.forEach((option) => traverse(option));
  return descendantValues;
}
function getAllDescendantNodesByValue(options, value) {
  const findTreeNodeByValue = (nodeList) => {
    for (const node of nodeList) {
      if (node.value === value) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const found = findTreeNodeByValue(node.children);
        if (found) {
          return found;
        }
      }
    }
    return void 0;
  };
  const targetNode = findTreeNodeByValue(options);
  if (!targetNode) {
    return [];
  }
  const result = getAllDescendantValues(targetNode.children || []);
  return result;
}
function getAllExpandableNodeValues(options) {
  const expandableValues = [];
  const traverse = (node) => {
    if (node.children && node.children.length > 0) {
      expandableValues.push(node.value);
      node.children.forEach((child) => traverse(child));
    }
  };
  options.forEach((option) => traverse(option));
  return expandableValues;
}
const EyTreeSelection = /* @__PURE__ */ defineComponent({
  name: "EyTreeSelection",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: {
    "update:modelValue": (_value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    const useCollapsedState = () => {
      const collapsedKeys2 = ref([]);
      const update = (key) => {
        if (collapsedKeys2.value.includes(key)) {
          collapsedKeys2.value = collapsedKeys2.value.filter((k) => k !== key);
        } else {
          collapsedKeys2.value.push(key);
        }
      };
      return {
        collapsedKeys: collapsedKeys2,
        update
      };
    };
    const {
      collapsedKeys,
      update: updateCollapsedState
    } = useCollapsedState();
    const toggleAllNodes = () => {
      const treeNodeValues = getAllExpandableNodeValues(props.options);
      if (collapsedKeys.value.includes("root")) {
        collapsedKeys.value = [];
      } else {
        collapsedKeys.value = lodashExports.xor(collapsedKeys.value, treeNodeValues, ["root"]);
      }
    };
    const useRootCheckboxState = () => {
      const descendantValues = getAllDescendantValues(props.options);
      const isChecked2 = computed(() => {
        return modelValue.value.length === descendantValues.length;
      });
      const isIndeterminate2 = computed(() => {
        return modelValue.value.length > 0 && modelValue.value.length < descendantValues.length;
      });
      const toggle2 = () => {
        if (!isChecked2.value) {
          modelValue.value = [.../* @__PURE__ */ new Set([...modelValue.value, ...descendantValues])];
        } else modelValue.value = [];
      };
      return {
        isChecked: isChecked2,
        isIndeterminate: isIndeterminate2,
        toggle: toggle2
      };
    };
    const renderLeafNode = (node) => {
      const getLeafNodeCheckboxState = () => {
        const isChecked3 = computed(() => {
          return modelValue.value.includes(node.value);
        });
        const toggle3 = () => {
          if (!isChecked3.value) {
            modelValue.value = [.../* @__PURE__ */ new Set([...modelValue.value, node.value])];
          } else {
            modelValue.value = lodashExports.difference(modelValue.value, [node.value]);
          }
        };
        return {
          isChecked: isChecked3,
          toggle: toggle3
        };
      };
      const {
        isChecked: isChecked2,
        toggle: toggle2
      } = getLeafNodeCheckboxState();
      return createVNode("label", {
        "class": "ey-tree-selection-leaf-node",
        "for": `leaf-node-${node.value}`
      }, [createVNode("input", {
        "disabled": node.disabled,
        "type": "checkbox",
        "id": `leaf-node-${node.value}`,
        "checked": isChecked2.value,
        "style": node.disabled ? {
          "opacity": 0.5
        } : {},
        "onChange": () => {
          toggle2();
        }
      }, null), createVNode("span", null, [node.label])]);
    };
    const renderTreeNode = (node, level = 1) => {
      const getTreeNodeCheckboxState = () => {
        const descendantValues = getAllDescendantNodesByValue(props.options, node.value);
        const isChecked3 = computed(() => {
          return lodashExports.every(descendantValues, (value) => modelValue.value.includes(value));
        });
        const isIndeterminate3 = computed(() => {
          return !isChecked3.value && lodashExports.some(modelValue.value, (value) => descendantValues.includes(value));
        });
        const toggle3 = () => {
          if (!isChecked3.value) modelValue.value = [.../* @__PURE__ */ new Set([...modelValue.value, ...descendantValues])];
          else modelValue.value = lodashExports.difference(modelValue.value, descendantValues);
        };
        return {
          isChecked: isChecked3,
          isIndeterminate: isIndeterminate3,
          toggle: toggle3
        };
      };
      const {
        isChecked: isChecked2,
        isIndeterminate: isIndeterminate2,
        toggle: toggle2
      } = getTreeNodeCheckboxState();
      const isCollapsed = computed(() => {
        return collapsedKeys.value.includes(node.value);
      });
      return createVNode("div", {
        "class": "ey-tree-selection-tree-node"
      }, [createVNode("div", {
        "class": "ey-tree-selection-tree-node__header"
      }, [createVNode("label", {
        "for": `tree-node-${node.value}`
      }, [createVNode("input", {
        "id": `tree-node-${node.value}`,
        "disabled": node.disabled,
        "type": "checkbox",
        "checked": isChecked2.value,
        "indeterminate": isIndeterminate2.value,
        "onChange": () => toggle2()
      }, null), createVNode("span", null, [node.label])]), createVNode(EyIcon, {
        "onClick": () => updateCollapsedState(node.value),
        "name": isCollapsed.value ? "mdi:chevron-up" : "mdi:chevron-down",
        "class": "ml-auto",
        "size": "1.5em"
      }, null)]), createVNode("div", {
        "class": "ey-tree-selection-tree-node__content"
      }, [isCollapsed.value ? null : createVNode("div", {
        "style": {
          marginLeft: `${level * 10}px`
        }
      }, [node.children?.map((child) => {
        if (child.children) return renderTreeNode(child, level + 1);
        else return renderLeafNode(child);
      })])])]);
    };
    const {
      isChecked,
      isIndeterminate,
      toggle
    } = useRootCheckboxState();
    return () => {
      return createVNode("div", {
        "class": "ey-tree-selection"
      }, [createVNode("div", {
        "class": "ey-tree-selection__root"
      }, [createVNode("label", {
        "for": "root"
      }, [createVNode("input", {
        "id": "root",
        "type": "checkbox",
        "checked": isChecked.value,
        "indeterminate": isIndeterminate.value,
        "onChange": () => toggle()
      }, null), createVNode("span", null, [createTextVNode("Root")])]), createVNode(EyIcon, {
        "onClick": toggleAllNodes,
        "name": collapsedKeys.value.includes("root") ? "mdi:chevron-up" : "mdi:chevron-down",
        "size": "1.5em"
      }, null)]), createVNode(Transition, {
        "name": "collapse"
      }, {
        default: () => [collapsedKeys.value.includes("root") ? null : createVNode("div", {
          "class": "ey-tree-selection__tree"
        }, [props.options.map((option) => renderTreeNode(option))])]
      })]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "treeSelection.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref([]);
    const options = ref([
      { label: "Option 1", value: "1", children: [
        { label: "Option 1-1", value: "1-1" },
        { label: "Option 1-2", value: "1-2" },
        { label: "Option 1-3", value: "1-3" },
        { label: "Option 1-4", value: "1-4", disabled: true }
      ] },
      { label: "Option 2", value: "2", children: [
        { label: "Option 2-1", value: "2-1", children: [
          { label: "Option 2-1-1", value: "2-1-1" },
          { label: "Option 2-1-2", value: "2-1-2" },
          { label: "Option 2-1-3", value: "2-1-3" }
        ] },
        { label: "Option 2-2", value: "2-2" },
        { label: "Option 2-3", value: "2-3" }
      ] }
    ]);
    const __returned__ = { modelValue, options, get EyTreeSelection() {
      return EyTreeSelection;
    }, get EyTag() {
      return EyTag;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid grid-cols-2 gap-8px" };
const _hoisted_2 = { class: "flex flex-col gap-8px" };
const _hoisted_3 = { class: "flex flex-wrap gap-8px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "TreeSelection",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EyTreeSelection"], {
              modelValue: $setup.modelValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
              options: $setup.options
            }, null, 8, ["modelValue", "options"]),
            createBaseVNode("div", _hoisted_2, [
              _cache[1] || (_cache[1] = createBaseVNode(
                "p",
                { class: "text-16px font-bold" },
                "Selected Values:",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_3, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.modelValue, (item) => {
                    return openBlock(), createElementBlock("div", { key: item }, [
                      createVNode($setup["EyTag"], { text: item }, null, 8, ["text"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
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
_sfc_main.__file = "src/components/TreeSelection/treeSelection.story.vue";
const treeSelection_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/TreeSelection/treeSelection.story.vue"]]);
export {
  treeSelection_story as default
};
