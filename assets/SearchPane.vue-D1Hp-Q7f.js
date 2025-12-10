const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-djGy1xHr.js","assets/vendor-CyA3As81.js"])))=>i.map(i=>d[i]);
import { n as ref, k as watch, c as computed, W as markRaw, d as defineComponent, a as createElementBlock, o as openBlock, a2 as renderSlot, v as withKeys, q as normalizeClass, y as createBlock, e as unref, I as Icon, f as createVNode, b as createBaseVNode, g as createCommentVNode, z as createTextVNode, t as toDisplayString, F as Fragment, x as renderList, l as useCssVars, Z as toRefs, $ as useRouter, p as withCtx, aI as useFocus, aJ as refDebounced, w as withDirectives, ae as vModelText, a8 as withModifiers, _ as __vitePreload, aK as Fuse } from "./vendor-CyA3As81.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-DJmCHwEE.js";
import { u as useStoryStore } from "./story-BircuDcD.js";
import "./mapping-PXchRQ4Y.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-BCFbvYMu.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./responsive-BOO4tKjn.js";
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
let searchData$1 = { "index": [{ "id": 0, "text": "badge" }, { "id": 1, "text": "badge default" }, { "id": 2, "text": "badge four positions" }, { "id": 3, "text": "button" }, { "id": 4, "text": "button type" }, { "id": 5, "text": "button variant" }, { "id": 6, "text": "button size" }, { "id": 7, "text": "button disabled" }, { "id": 8, "text": "button prefix icon and suffix icon" }, { "id": 9, "text": "checkbox" }, { "id": 10, "text": "checkbox default" }, { "id": 11, "text": "checkbox outlined" }, { "id": 12, "text": "checkbox card" }, { "id": 13, "text": "checkbox tab" }, { "id": 14, "text": "checkbox custom color" }, { "id": 15, "text": "collapse" }, { "id": 16, "text": "collapse default" }, { "id": 17, "text": "collapse custom" }, { "id": 18, "text": "icon" }, { "id": 19, "text": "icon material design icons" }, { "id": 20, "text": "icon size examples" }, { "id": 21, "text": "icon color examples" }, { "id": 22, "text": "input" }, { "id": 23, "text": "input default" }, { "id": 24, "text": "input underline" }, { "id": 25, "text": "input with suffix" }, { "id": 26, "text": "modal" }, { "id": 27, "text": "modal default" }, { "id": 28, "text": "radio group" }, { "id": 29, "text": "radio group default" }, { "id": 30, "text": "radio group outlined" }, { "id": 31, "text": "radio group card" }, { "id": 32, "text": "radio group tab" }, { "id": 33, "text": "radio group disabled" }, { "id": 34, "text": "select" }, { "id": 35, "text": "select default" }, { "id": 36, "text": "tag" }, { "id": 37, "text": "tag default" }, { "id": 38, "text": "toggle" }, { "id": 39, "text": "toggle default" }], "idMap": { "0": { "id": "src-components-badge-badge-story-vue", "kind": "story" }, "1": { "id": "src-components-badge-badge-story-vue:src-components-badge-badge-story-vue-0", "kind": "variant" }, "2": { "id": "src-components-badge-badge-story-vue:src-components-badge-badge-story-vue-1", "kind": "variant" }, "3": { "id": "src-components-button-button-story-vue", "kind": "story" }, "4": { "id": "src-components-button-button-story-vue:src-components-button-button-story-vue-0", "kind": "variant" }, "5": { "id": "src-components-button-button-story-vue:src-components-button-button-story-vue-1", "kind": "variant" }, "6": { "id": "src-components-button-button-story-vue:src-components-button-button-story-vue-2", "kind": "variant" }, "7": { "id": "src-components-button-button-story-vue:src-components-button-button-story-vue-3", "kind": "variant" }, "8": { "id": "src-components-button-button-story-vue:src-components-button-button-story-vue-4", "kind": "variant" }, "9": { "id": "src-components-checkbox-checkbox-story-vue", "kind": "story" }, "10": { "id": "src-components-checkbox-checkbox-story-vue:src-components-checkbox-checkbox-story-vue-0", "kind": "variant" }, "11": { "id": "src-components-checkbox-checkbox-story-vue:src-components-checkbox-checkbox-story-vue-1", "kind": "variant" }, "12": { "id": "src-components-checkbox-checkbox-story-vue:src-components-checkbox-checkbox-story-vue-2", "kind": "variant" }, "13": { "id": "src-components-checkbox-checkbox-story-vue:src-components-checkbox-checkbox-story-vue-3", "kind": "variant" }, "14": { "id": "src-components-checkbox-checkbox-story-vue:src-components-checkbox-checkbox-story-vue-4", "kind": "variant" }, "15": { "id": "src-components-collapse-collapse-story-vue", "kind": "story" }, "16": { "id": "src-components-collapse-collapse-story-vue:src-components-collapse-collapse-story-vue-0", "kind": "variant" }, "17": { "id": "src-components-collapse-collapse-story-vue:src-components-collapse-collapse-story-vue-1", "kind": "variant" }, "18": { "id": "src-components-icon-icon-story-vue", "kind": "story" }, "19": { "id": "src-components-icon-icon-story-vue:src-components-icon-icon-story-vue-0", "kind": "variant" }, "20": { "id": "src-components-icon-icon-story-vue:src-components-icon-icon-story-vue-1", "kind": "variant" }, "21": { "id": "src-components-icon-icon-story-vue:src-components-icon-icon-story-vue-2", "kind": "variant" }, "22": { "id": "src-components-input-input-story-vue", "kind": "story" }, "23": { "id": "src-components-input-input-story-vue:src-components-input-input-story-vue-0", "kind": "variant" }, "24": { "id": "src-components-input-input-story-vue:src-components-input-input-story-vue-1", "kind": "variant" }, "25": { "id": "src-components-input-input-story-vue:src-components-input-input-story-vue-2", "kind": "variant" }, "26": { "id": "src-components-modal-modal-story-vue", "kind": "story" }, "27": { "id": "src-components-modal-modal-story-vue:src-components-modal-modal-story-vue-0", "kind": "variant" }, "28": { "id": "src-components-radiogroup-radio-group-story-vue", "kind": "story" }, "29": { "id": "src-components-radiogroup-radio-group-story-vue:src-components-radiogroup-radio-group-story-vue-0", "kind": "variant" }, "30": { "id": "src-components-radiogroup-radio-group-story-vue:src-components-radiogroup-radio-group-story-vue-1", "kind": "variant" }, "31": { "id": "src-components-radiogroup-radio-group-story-vue:src-components-radiogroup-radio-group-story-vue-2", "kind": "variant" }, "32": { "id": "src-components-radiogroup-radio-group-story-vue:src-components-radiogroup-radio-group-story-vue-3", "kind": "variant" }, "33": { "id": "src-components-radiogroup-radio-group-story-vue:src-components-radiogroup-radio-group-story-vue-4", "kind": "variant" }, "34": { "id": "src-components-select-select-story-vue", "kind": "story" }, "35": { "id": "src-components-select-select-story-vue:src-components-select-select-story-vue-0", "kind": "variant" }, "36": { "id": "src-components-tag-tag-story-vue", "kind": "story" }, "37": { "id": "src-components-tag-tag-story-vue:src-components-tag-tag-story-vue-0", "kind": "variant" }, "38": { "id": "src-components-toggle-toggle-story-vue", "kind": "story" }, "39": { "id": "src-components-toggle-toggle-story-vue:src-components-toggle-toggle-story-vue-0", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          _ctx.result.path?.length ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "1f9aa6ca": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected) return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f94ad2b"]]);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-djGy1xHr.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new Fuse([], {
        keys: ["text"]
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const document of data.index) {
        titleSearchIndex.add(document);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const document of data.index) {
          docSearchIndex.add(document);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          await searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      await load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const result = titleSearchIndex.search(value);
      let rank = 0;
      for (const document of result) {
        const idMapData = titleIdMap[document.item.id];
        if (!idMapData) continue;
        switch (idMapData.kind) {
          case "story": {
            list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
            rank++;
            break;
          }
          case "variant": {
            const [storyId] = idMapData.id.split(":");
            const story = storyStore.getStoryById(storyId);
            const variant = storyStore.getVariantById(idMapData.id);
            list.push(variantResultFactory(story, variant, rank));
            rank++;
            break;
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const result = docSearchIndex.search(query);
        let rank = 0;
        for (const document of result) {
          const idMapData = docIdMap[document.item.id];
          if (!idMapData) continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
              rank++;
              break;
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode(" No results ")
          ])),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
