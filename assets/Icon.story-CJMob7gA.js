import { ap as defineComponent, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, ay as computed, at as openBlock, aq as createVNode, av as createBaseVNode, az as createCommentVNode, aA as createElementBlock, aB as Fragment, aC as renderList, aD as toDisplayString } from "./vendor-mEeaDaaB.js";
import { E as EyIcon } from "./index-ClVLnfqP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const mdiIcons = ref([
      // 基础图标
      { name: "mdi:home", label: "Home" },
      { name: "mdi:account", label: "Account" },
      { name: "mdi:settings", label: "Settings" },
      { name: "mdi:menu", label: "Menu" },
      { name: "mdi:close", label: "Close" },
      { name: "mdi:check", label: "Check" },
      { name: "mdi:delete", label: "Delete" },
      { name: "mdi:edit", label: "Edit" },
      { name: "mdi:add", label: "Add" },
      { name: "mdi:remove", label: "Remove" },
      // 导航图标
      { name: "mdi:arrow-left", label: "Arrow Left" },
      { name: "mdi:arrow-right", label: "Arrow Right" },
      { name: "mdi:arrow-up", label: "Arrow Up" },
      { name: "mdi:arrow-down", label: "Arrow Down" },
      { name: "mdi:chevron-left", label: "Chevron Left" },
      { name: "mdi:chevron-right", label: "Chevron Right" },
      // 操作图标
      { name: "mdi:search", label: "Search" },
      { name: "mdi:filter", label: "Filter" },
      { name: "mdi:download", label: "Download" },
      { name: "mdi:upload", label: "Upload" },
      { name: "mdi:refresh", label: "Refresh" },
      { name: "mdi:share", label: "Share" },
      // 状态图标
      { name: "mdi:information", label: "Information" },
      { name: "mdi:alert", label: "Alert" },
      { name: "mdi:alert-circle", label: "Alert Circle" },
      { name: "mdi:check-circle", label: "Check Circle" },
      { name: "mdi:close-circle", label: "Close Circle" },
      // 媒体图标
      { name: "mdi:play", label: "Play" },
      { name: "mdi:pause", label: "Pause" },
      { name: "mdi:stop", label: "Stop" },
      { name: "mdi:volume-high", label: "Volume High" },
      { name: "mdi:volume-off", label: "Volume Off" },
      // 文件图标
      { name: "mdi:file", label: "File" },
      { name: "mdi:folder", label: "Folder" },
      { name: "mdi:image", label: "Image" },
      { name: "mdi:video", label: "Video" },
      { name: "mdi:music", label: "Music" },
      // 通信图标
      { name: "mdi:email", label: "Email" },
      { name: "mdi:phone", label: "Phone" },
      { name: "mdi:message", label: "Message" },
      { name: "mdi:bell", label: "Bell" },
      { name: "mdi:bell-off", label: "Bell Off" },
      // 其他常用图标
      { name: "mdi:heart", label: "Heart" },
      { name: "mdi:star", label: "Star" },
      { name: "mdi:bookmark", label: "Bookmark" },
      { name: "mdi:lock", label: "Lock" },
      { name: "mdi:lock-open", label: "Lock Open" },
      { name: "mdi:eye", label: "Eye" },
      { name: "mdi:eye-off", label: "Eye Off" },
      { name: "mdi:calendar", label: "Calendar" },
      { name: "mdi:clock", label: "Clock" },
      { name: "mdi:map", label: "Map" }
    ]);
    const searchQuery = ref("");
    const filteredIcons = computed(() => {
      if (!searchQuery.value.trim()) {
        return mdiIcons.value;
      }
      const query = searchQuery.value.toLowerCase();
      return mdiIcons.value.filter(
        (icon) => icon.label.toLowerCase().includes(query) || icon.name.toLowerCase().includes(query)
      );
    });
    const __returned__ = { mdiIcons, searchQuery, filteredIcons, get EyIcon() {
      return EyIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = { class: "grid grid-cols-6 gap-4" };
const _hoisted_3 = { class: "mt-2 text-sm text-center break-words color-var(--ey-text-color-primary)" };
const _hoisted_4 = { class: "mt-1 text-xs font-mono color-var(--ey-text-color-secondary)" };
const _hoisted_5 = { style: { "display": "flex", "align-items": "center", "gap": "20px", "padding": "20px" } };
const _hoisted_6 = { style: { "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "8px" } };
const _hoisted_7 = { style: { "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "8px" } };
const _hoisted_8 = { style: { "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "8px" } };
const _hoisted_9 = { style: { "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "8px" } };
const _hoisted_10 = { style: { "display": "flex", "align-items": "center", "gap": "20px", "padding": "20px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Icon",
    group: "icon"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Material Design Icons" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createCommentVNode(" 图标网格 "),
            createBaseVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.filteredIcons, (icon) => {
                  return openBlock(), createElementBlock("div", {
                    key: icon.name,
                    class: "flex flex-col items-center p-4 border border-gray-200 rounded-md cursor-pointer transition-all"
                  }, [
                    createVNode($setup["EyIcon"], {
                      name: icon.name,
                      size: 32,
                      color: "var(--ey-color-primary)"
                    }, null, 8, ["name"]),
                    createBaseVNode(
                      "div",
                      _hoisted_3,
                      toDisplayString(icon.label),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "div",
                      _hoisted_4,
                      toDisplayString(icon.name),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Size Examples" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode($setup["EyIcon"], {
                name: "mdi:home",
                size: 16
              }),
              _cache[0] || (_cache[0] = createBaseVNode(
                "span",
                { style: { "font-size": "12px" } },
                "16px",
                -1
                /* CACHED */
              ))
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode($setup["EyIcon"], {
                name: "mdi:home",
                size: 24
              }),
              _cache[1] || (_cache[1] = createBaseVNode(
                "span",
                { style: { "font-size": "12px" } },
                "24px",
                -1
                /* CACHED */
              ))
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode($setup["EyIcon"], {
                name: "mdi:home",
                size: 32
              }),
              _cache[2] || (_cache[2] = createBaseVNode(
                "span",
                { style: { "font-size": "12px" } },
                "32px",
                -1
                /* CACHED */
              ))
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode($setup["EyIcon"], {
                name: "mdi:home",
                size: 48
              }),
              _cache[3] || (_cache[3] = createBaseVNode(
                "span",
                { style: { "font-size": "12px" } },
                "48px",
                -1
                /* CACHED */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Color Examples" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_10, [
            createVNode($setup["EyIcon"], {
              name: "mdi:heart",
              size: 32,
              color: "var(--ey-color-primary)"
            }),
            createVNode($setup["EyIcon"], {
              name: "mdi:heart",
              size: 32,
              color: "var(--ey-color-success)"
            }),
            createVNode($setup["EyIcon"], {
              name: "mdi:heart",
              size: 32,
              color: "var(--ey-color-warning)"
            }),
            createVNode($setup["EyIcon"], {
              name: "mdi:heart",
              size: 32,
              color: "var(--ey-color-danger)"
            }),
            createVNode($setup["EyIcon"], {
              name: "mdi:heart",
              size: 32,
              color: "var(--ey-color-info)"
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
_sfc_main.__file = "src/components/Icon/Icon.story.vue";
const Icon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Icon/Icon.story.vue"]]);
export {
  Icon_story as default
};
