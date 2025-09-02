"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navBar",
  setup(__props) {
    const navBarConfig = common_vendor.reactive({
      statusBarHeight: 0,
      bottomSafeareaHeight: 0,
      platform: "",
      // 设备机型
      navBarHeight: 0
    });
    common_vendor.onMounted(() => {
      getSystemInfo();
    });
    function getSystemInfo() {
      const res = common_vendor.index.getSystemInfoSync();
      const menuBtn = common_vendor.index.getMenuButtonBoundingClientRect();
      common_vendor.index.__f__("log", "at components/navBar/navBar.vue:22", res, "res");
      common_vendor.index.__f__("log", "at components/navBar/navBar.vue:23", menuBtn, "menuBtn");
      navBarConfig.statusBarHeight = res.statusBarHeight * 2;
      navBarConfig.navBarHeight = (menuBtn.top + menuBtn.bottom - res.statusBarHeight) * 2;
      common_vendor.index.__f__("log", "at components/navBar/navBar.vue:26", navBarConfig);
    }
    return (_ctx, _cache) => {
      return {
        a: `${navBarConfig.navBarHeight}rpx`,
        b: `${navBarConfig.statusBarHeight}rpx`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fba290dc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navBar/navBar.js.map
