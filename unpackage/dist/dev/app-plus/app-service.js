if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_REACH_BOTTOM = "onReachBottom";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$g = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$6], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/Graduation_Project/APP/demo1/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$f = {
    __name: "qa-card",
    props: {
      date: String,
      question: String,
      images: Array,
      username: String,
      answer: String,
      views: Number,
      answers: Number
    },
    setup(__props) {
      const navigateToDetail = () => {
        uni.navigateTo({
          url: "/pages/detail/detail"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "qa-card",
          onClick: navigateToDetail
        }, [
          vue.createElementVNode(
            "view",
            { class: "date" },
            vue.toDisplayString(__props.date),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "qc_title" }, [
            vue.createElementVNode("image", { src: "/static/images/qa.png" }),
            vue.createElementVNode(
              "view",
              { class: "question" },
              vue.toDisplayString(__props.question),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "images" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.images.slice(0, 3), (img, index) => {
                return vue.openBlock(), vue.createElementBlock("image", {
                  src: img,
                  key: index,
                  mode: "aspectFill"
                }, null, 8, ["src"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            __props.images.length > 3 ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "image-count"
              },
              "共" + vue.toDisplayString(__props.images.length) + "张",
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "qc_title" }, [
            vue.createElementVNode("image", { src: "/static/images/ans.png" }),
            vue.createElementVNode(
              "view",
              { class: "username" },
              vue.toDisplayString(__props.username),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode(
            "view",
            { class: "answer" },
            vue.toDisplayString(__props.answer),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "stats" },
            vue.toDisplayString(__props.views) + "人看过, 共" + vue.toDisplayString(__props.answers) + "条回答 >>",
            1
            /* TEXT */
          )
        ]);
      };
    }
  };
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-578e70a0"], ["__file", "E:/Graduation_Project/APP/demo1/components/qa-card/qa-card.vue"]]);
  const _sfc_main$e = {
    __name: "home",
    setup(__props) {
      const yolov8 = requireNativePlugin("kk-yolov8");
      const detection = vue.ref([]);
      let maxConfidenceObject = vue.ref([]);
      let classId = vue.ref(0);
      const dissss = vue.ref("../../static/disease/scab.JPG");
      const dis = vue.ref("赤霉病");
      const diss = vue.ref("小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。");
      const disss = vue.ref("../../static/disease/scab.JPG");
      const disease = vue.ref(["健康麦穗", "健康麦叶", "健康麦秆", "赤霉病", "叶锈病", "条锈病", "秆锈病", "小麦壳针孢斑病", "未检测到病害"]);
      const qa_info = vue.ref([
        {
          date: "2024-04-08",
          question: "这是杆锈病吗？",
          images: ["../../static/disease/stem_rust.jpg", "../../static/disease/stem_rust.jpg", "../../static/disease/stem_rust.jpg", "../../static/disease/stem_rust.jpg"],
          username: "lsh",
          answer: "小麦秆锈病是由禾柄锈菌小麦变种引起的、发生在小麦的病害。主要为害小麦的茎秆和叶鞘，也可为害叶片和穗部。",
          views: 123,
          answers: 4
        },
        {
          date: "2024-04-09",
          question: "这是赤霉病吗？",
          images: ["../../static/disease/scab.JPG", "../../static/disease/scab.JPG", "../../static/disease/scab.JPG", "../../static/disease/scab.JPG"],
          username: "银河系的一名专家",
          answer: "是的，小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。",
          views: 123,
          answers: 4
        },
        {
          date: "2024-04-08",
          question: "我这养的小麦好吗？",
          images: ["../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg"],
          username: "啦啦啦阿联",
          answer: "好，挺不错的",
          views: 123,
          answers: 4
        }
      ]);
      const result = ["小麦很健康", "小麦很健康", "小麦很健康", "小麦赤霉病又称烂穗病、麦秸枯、烂麦头、红麦头、红头瘴，是由多种镰刀菌侵染所引起的、发生在小麦上的病害。", "小麦叶锈病又称黄疸病，是由小麦隐匿柄锈菌侵染所引起的、发生在小麦上的病害。主要危害小麦叶片，产生疱疹状病斑，很少危害叶鞘和茎秆。", "小麦条锈病是由条形柄锈菌引起的、发生在小麦的病害。该病自小麦出苗至成熟都有可能会发生，危害的主要部位是叶片，其次是叶鞘、茎秆，也侵染穗部、颖壳和芒等组织。", "小麦秆锈病是由禾柄锈菌小麦变种引起的、发生在小麦的病害。主要为害小麦的茎秆和叶鞘，也可为害叶片和穗部。", "又称小麦斑枯病。主要为害叶片、叶鞘，也为害茎部和穗部。", "请对准小麦病害关键部分拍照"];
      const diseasesrc = ["../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg", "../../static/disease/wheat.jpg", "../../static/disease/scab.JPG", "../../static/disease/leaf_rust.JPG", "../../static/disease/stripe_rust.png", "../../static/disease/stem_rust.jpg", "../../static/disease/septoria.JPG"];
      let lshmodel = "/storage/emulated/0/Android/data/lushihao.maixiaobao/apps/__UNI__5E3B096/www/static/best.onnx";
      let savedImagePaths = [];
      let disease1 = [];
      const testYoloV8 = () => {
        uni.getStorage({
          key: "savedImagePaths",
          success: function(res) {
            savedImagePaths = res.data;
            formatAppLog("log", "at pages/home/home.vue:100", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
          },
          fail: function() {
            savedImagePaths = [];
            formatAppLog("log", "at pages/home/home.vue:104", "本地存储中没有找到 savedImagePaths 数组，将初始化为空数组");
          }
        });
        uni.getStorage({
          key: "disease",
          success: function(res) {
            disease1 = res.data;
            formatAppLog("log", "at pages/home/home.vue:111", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
          },
          fail: function() {
            disease1 = [];
            formatAppLog("log", "at pages/home/home.vue:115", "本地存储中没有找到 savedImagePaths 数组，将初始化为空数组");
          }
        });
        yolov8.create({
          model: lshmodel
        }, (ret) => {
          if (ret["code"] == 0) {
            uni.chooseImage({
              count: 1,
              //默认9
              sizeType: ["original", "compressed"],
              //可以指定是原图还是压缩图，默认二者都有
              sourceType: ["album", "camera"],
              //从相册选择
              success: (res) => {
                const image_path = plus.io.convertLocalFileSystemURL(res.tempFilePaths[0]);
                uni.saveFile({
                  tempFilePath: image_path,
                  success: function(saveFileRes) {
                    const savedFilePath = saveFileRes.savedFilePath;
                    const newFileName = savedImagePaths.length.toString() + ".jpg";
                    const newFilePath = savedFilePath.substring(0, savedFilePath.lastIndexOf("/") + 1) + newFileName;
                    plus.io.resolveLocalFileSystemURL(savedFilePath, function(entry) {
                      plus.io.resolveLocalFileSystemURL(newFilePath.substring(0, newFilePath.lastIndexOf("/") + 1), function(dirEntry) {
                        entry.moveTo(dirEntry, newFileName, function(target) {
                          formatAppLog("log", "at pages/home/home.vue:139", "图片已重命名并保存到：" + target.fullPath);
                          savedImagePaths.push(target.fullPath);
                          uni.setStorage({
                            key: "savedImagePaths",
                            data: savedImagePaths,
                            success: function() {
                              formatAppLog("log", "at pages/home/home.vue:147", "图片路径已保存到本地存储");
                            }
                          });
                        }, function(e) {
                          formatAppLog("log", "at pages/home/home.vue:151", "图片重命名失败：" + e.message);
                        });
                      }, function(e) {
                        formatAppLog("log", "at pages/home/home.vue:154", "Resolve directory URL error: " + e.message);
                      });
                    }, function(e) {
                      formatAppLog("log", "at pages/home/home.vue:157", "Resolve file URL error: " + e.message);
                    });
                  }
                });
                yolov8.predict({
                  image: image_path,
                  threshold: 0.1
                }, (ret2) => {
                  detection.value = ret2;
                  if (detection.value.length > 0) {
                    formatAppLog("log", "at pages/home/home.vue:169", detection.value);
                    maxConfidenceObject = detection.value.reduce((max, obj) => max.confidence > obj.confidence ? max : obj);
                    classId = maxConfidenceObject.class_id;
                    dis.value = disease.value[classId];
                    diss.value = result[classId];
                    disss.value = diseasesrc[classId];
                    dissss.value = image_path;
                    disease1.push(disease.value[classId]);
                    uni.setStorage({
                      key: "disease",
                      data: disease1,
                      success: function() {
                        formatAppLog("log", "at pages/home/home.vue:182", "病害类型已保存");
                      }
                    });
                  } else {
                    dis.value = disease.value[8];
                    diss.value = result[8];
                    disss.value = diseasesrc[8];
                    dissss.value = image_path;
                    disease1.push(disease.value[8]);
                    uni.setStorage({
                      key: "disease",
                      data: disease1,
                      success: function() {
                        formatAppLog("log", "at pages/home/home.vue:196", "病害类型已保存");
                      }
                    });
                  }
                });
              }
            });
          } else {
            uni.showModal({
              title: "模型加载",
              content: "加载模型失败"
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        const _component_qa_card = resolveEasycom(vue.resolveDynamicComponent("qa-card"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homelayout pageBg" }, [
          vue.createElementVNode("image", {
            class: "upload-image",
            src: vue.unref(dissss),
            onClick: _cache[0] || (_cache[0] = ($event) => testYoloV8())
          }, null, 8, ["src"]),
          vue.createVNode(_component_uni_icons, {
            class: "icon1",
            type: "camera",
            size: "30",
            color: "white",
            onClick: _cache[1] || (_cache[1] = ($event) => testYoloV8())
          }),
          vue.createElementVNode("view", { class: "title1" }, "识别结果"),
          vue.createElementVNode("view", { class: "result" }, [
            vue.createElementVNode(
              "view",
              { class: "title2" },
              vue.toDisplayString(vue.unref(dis)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "result_card" }, [
              vue.createElementVNode("image", {
                src: vue.unref(disss),
                mode: "aspectFill"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode(
                  "view",
                  { class: "jianjie" },
                  vue.toDisplayString(vue.unref(diss)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "detail" }, " 详情 > ")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "consultation" }, [
            vue.createElementVNode("view", { class: "title3" }),
            vue.createElementVNode("view", { class: "consultation_box" })
          ]),
          vue.createElementVNode("view", { class: "title4" }, "相关回答"),
          vue.createElementVNode("view", { class: "qa-card-home" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(qa_info), (qainfo) => {
                return vue.openBlock(), vue.createBlock(_component_qa_card, {
                  date: qainfo.date,
                  question: qainfo.question,
                  images: qainfo.images,
                  username: qainfo.username,
                  answer: qainfo.answer,
                  views: qainfo.views,
                  answers: qainfo.answers
                }, null, 8, ["date", "question", "images", "username", "answer", "views", "answers"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-07e72d3c"], ["__file", "E:/Graduation_Project/APP/demo1/pages/home/home.vue"]]);
  const _sfc_main$d = {
    __name: "expert-card",
    props: {
      avatarSrc: String,
      name: String,
      location: String,
      certification: String,
      questionCount: Number,
      bestAnswerCount: Number,
      research: String,
      bio: String,
      qa: String
    },
    setup(__props) {
      const props = __props;
      const activeTab = vue.ref("qa");
      function changeTab(tab) {
        activeTab.value = tab;
      }
      function onSwiperChange(e) {
        activeTab.value = e.detail.current === 0 ? "bio" : "qa";
      }
      const qwe = props.bio;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "expert-card pageBg" }, [
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("image", {
              class: "avatar",
              src: __props.avatarSrc
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode("view", { class: "name" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(__props.name),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "location" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(__props.location),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "box" }, [
            vue.createElementVNode(
              "view",
              { class: "certification" },
              vue.toDisplayString(__props.certification),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "stats" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createTextVNode("回答 "),
                vue.createElementVNode(
                  "text",
                  { class: "count" },
                  vue.toDisplayString(__props.questionCount),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createTextVNode("最佳回答 "),
                vue.createElementVNode(
                  "text",
                  { class: "count" },
                  vue.toDisplayString(__props.bestAnswerCount),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode(
              "text",
              { class: "research" },
              "研究方向 " + vue.toDisplayString(__props.research),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "tabs" }, [
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass({ active: vue.unref(activeTab) === "bio" }),
                onClick: _cache[0] || (_cache[0] = ($event) => changeTab("bio"))
              },
              "专家简介",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass({ active: vue.unref(activeTab) === "qa" }),
                onClick: _cache[1] || (_cache[1] = ($event) => changeTab("qa"))
              },
              "回复的问答",
              2
              /* CLASS */
            )
          ]),
          vue.createElementVNode("swiper", {
            current: vue.unref(activeTab) === "bio" ? 0 : 1,
            onChange: onSwiperChange
          }, [
            vue.createElementVNode("swiper-item", { style: { "display": "block" } }, [
              vue.createElementVNode("view", { class: "content1" }, [
                vue.renderSlot(_ctx.$slots, "bio", {}, () => [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "content",
                      style: { "display": "block" }
                    },
                    vue.toDisplayString(vue.unref(qwe)),
                    1
                    /* TEXT */
                  )
                ], true)
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("scroll-view", {
                class: "box1",
                "scroll-y": "true"
              }, [
                vue.renderSlot(_ctx.$slots, "qa", {}, void 0, true)
              ])
            ])
          ], 40, ["current"])
        ]);
      };
    }
  };
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-153c4fae"], ["__file", "E:/Graduation_Project/APP/demo1/components/expert-card/expert-card.vue"]]);
  const _sfc_main$c = {
    __name: "interpretation",
    setup(__props) {
      const experts = vue.ref([]);
      const qa_info = vue.ref([]);
      onLoad(() => {
        uni.request({
          url: "http://192.168.43.113:3000/expert"
          // header: {
          //         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
          //     },
          // success: res => {
          // 	const experts = ref (res.data.experts);
          // 	__f__('log','at pages/interpretation/interpretation.vue:50',experts);
          // 	__f__('log','at pages/interpretation/interpretation.vue:51',experts[0].avatarSrc)
          //}
        }).then((res) => {
          experts.value = res.data.experts;
        });
        uni.request({
          url: "http://192.168.43.113:3000/questionAnswer"
          // header: {
          //         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
          //     },
          // success: res => {
          // 	const experts = ref (res.data.experts);
          // 	__f__('log','at pages/interpretation/interpretation.vue:66',experts);
          // 	__f__('log','at pages/interpretation/interpretation.vue:67',experts[0].avatarSrc)
          //}
        }).then((res) => {
          qa_info.value = res.data.questionAnswers.map((info) => {
            return {
              ...info,
              images: info.images.split(",")
            };
          });
          formatAppLog("log", "at pages/interpretation/interpretation.vue:78", qa_info.value);
        });
      });
      return (_ctx, _cache) => {
        const _component_qa_card = resolveEasycom(vue.resolveDynamicComponent("qa-card"), __easycom_0$2);
        const _component_expert_card = resolveEasycom(vue.resolveDynamicComponent("expert-card"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout pageBg" }, [
          vue.createElementVNode("view"),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(vue.unref(experts), (expert) => {
              return vue.openBlock(), vue.createBlock(_component_expert_card, {
                key: expert.id,
                avatarSrc: expert.avatarSrc,
                name: expert.name,
                location: expert.location,
                certification: expert.certification,
                questionCount: expert.questionCount,
                bestAnswerCount: expert.bestAnswerCount,
                research: expert.research,
                bio: expert.bio,
                qa: expert.qa
              }, {
                bio: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(expert.bio),
                    1
                    /* TEXT */
                  )
                ]),
                qa: vue.withCtx(() => [
                  vue.createElementVNode("view", null, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(qa_info).filter((item) => item.expertId === expert.id), (qainfo) => {
                        return vue.openBlock(), vue.createBlock(_component_qa_card, {
                          date: qainfo.date,
                          question: qainfo.question,
                          images: qainfo.images,
                          username: qainfo.username,
                          answer: qainfo.answer,
                          views: qainfo.views,
                          answers: qainfo.answers
                        }, null, 8, ["date", "question", "images", "username", "answer", "views", "answers"]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["avatarSrc", "name", "location", "certification", "questionCount", "bestAnswerCount", "research", "bio", "qa"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const PagesInterpretationInterpretation = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "E:/Graduation_Project/APP/demo1/pages/interpretation/interpretation.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$b = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$5], ["__file", "E:/Graduation_Project/APP/demo1/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$a = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:298", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/Graduation_Project/APP/demo1/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$9 = {
    __name: "image-card",
    props: {
      imageSrc: String,
      imageText: String,
      description: String,
      price: String,
      type: String,
      targetPage: String,
      shunxv: Number
    },
    setup(__props) {
      let currentvideo = vue.ref();
      const props = __props;
      const mediaitems = vue.ref([
        { video: "../../static/videos/0.mp4", showVideo: "防治小麦赤霉病，记住这几点很关键" },
        { video: "../../static/videos/1.mp4", showVideo: "当前小麦田间管理指导建议" },
        { video: "../../static/videos/2.mp4", showVideo: "小麦突然发黄，千万不要盲目用药" },
        { video: "../../static/videos/3.mp4", showVideo: "小麦高产科普，病虫害防治技术，什么时间打药？打什么药" },
        { video: "../../static/videos/4.mp4", showVideo: "小麦苗期不同的病虫害，啥时间防治，以及如何防治效果好" },
        { video: "../../static/videos/5.mp4", showVideo: "小麦赤霉病的发生特点及防治方法" },
        { video: "../../static/videos/6.mp4", showVideo: "小麦锈病啥时候预防好？具体措施有哪些,三农,农业技术,好看视频" }
      ]);
      let videoContext = {};
      let videoTimes = {};
      vue.ref(null);
      const pauseVideo = (videoIndex) => {
        currentvideo.value = " ";
        videoTimes[videoIndex] = videoContext.currentTime;
      };
      const resumeVideo = (videoIndex) => {
        formatAppLog("log", "at components/image-card/image-card.vue:57", videoContext);
        videoContext.seeking(videoTimes[videoIndex] || 0);
        videoContext.play();
      };
      const asd = vue.ref(null);
      const showvideo = () => {
        currentvideo.value = mediaitems.value[props.shunxv].video;
        formatAppLog("log", "at components/image-card/image-card.vue:66", currentvideo);
        asd.value.open();
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "image-card" }, [
          vue.createElementVNode("view", { class: "image-container" }, [
            vue.createElementVNode("image", {
              src: props.imageSrc,
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createElementVNode("image", {
              src: "/static/images/video.png",
              class: "overlay-image",
              onClick: showvideo
            }),
            vue.createElementVNode(
              "view",
              { class: "image-text" },
              vue.toDisplayString(props.imageText),
              1
              /* TEXT */
            )
          ]),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "asd",
              ref: asd,
              onMaskClick: _cache[0] || (_cache[0] = ($event) => pauseVideo(__props.shunxv)),
              onOpen: _cache[1] || (_cache[1] = ($event) => resumeVideo(__props.shunxv))
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("video", {
                  id: "videoPlayer" + __props.shunxv,
                  src: vue.unref(currentvideo),
                  controls: ""
                }, null, 8, ["id", "src"])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createElementVNode(
            "view",
            { class: "description" },
            vue.toDisplayString(vue.unref(mediaitems)[__props.shunxv].showVideo),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode(
              "view",
              { class: "price" },
              vue.toDisplayString(props.price),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "type" },
              vue.toDisplayString(props.type),
              1
              /* TEXT */
            )
          ])
        ]);
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-78d2f6ec"], ["__file", "E:/Graduation_Project/APP/demo1/components/image-card/image-card.vue"]]);
  const _sfc_main$8 = {
    __name: "text-card",
    props: {
      textSrc: String,
      title: String,
      tag: String,
      num: Number
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "text-card" }, [
          vue.createElementVNode("view", { class: "text1" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode(
                "view",
                { class: "title" },
                vue.toDisplayString(__props.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode(
                  "view",
                  { class: "tag" },
                  vue.toDisplayString(__props.tag),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "watch_num" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "eye-filled",
                    size: "10"
                  }),
                  vue.createElementVNode(
                    "view",
                    { class: "num" },
                    vue.toDisplayString(__props.num),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("image", {
                src: __props.textSrc,
                mode: "aspectFill"
              }, null, 8, ["src"])
            ])
          ])
        ]);
      };
    }
  };
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-e03cb37f"], ["__file", "E:/Graduation_Project/APP/demo1/components/text-card/text-card.vue"]]);
  const _sfc_main$7 = {
    __name: "technology",
    setup(__props) {
      vue.ref();
      const mediaItems = vue.ref([
        { image: "../../static/videos/0.jpg" },
        { image: "../../static/videos/1.jpg" },
        { image: "../../static/videos/2.jpg" },
        { image: "../../static/videos/3.jpg" },
        { image: "../../static/videos/4.jpg" },
        { image: "../../static/videos/5.jpg" },
        { image: "../../static/videos/6.jpg" }
      ]);
      const activeTab = vue.ref("course");
      function changeTab(tab) {
        activeTab.value = tab;
      }
      const textCards = vue.ref([]);
      onLoad(() => {
        uni.request({
          url: "http://192.168.43.113:3000/text"
          // header: {
          //         'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
          //     },
          // success: res => {
          // 	const experts = ref (res.data.experts);
          // 	__f__('log','at pages/technology/technology.vue:138',experts);
          // 	__f__('log','at pages/technology/technology.vue:139',experts[0].avatarSrc)
          //}
        }).then((res) => {
          textCards.value = res.data.texts;
          formatAppLog("log", "at pages/technology/technology.vue:144", res.data);
          formatAppLog("log", "at pages/technology/technology.vue:145", textCards);
        });
      });
      const pets = vue.ref([]);
      const network = () => {
        uni.request({
          url: "https://api.thecatapi.com/v1/images/search",
          data: {
            limit: 10
          }
        }).then((res) => {
          pets.value = [...pets.value, ...res.data];
        });
      };
      network();
      onReachBottom(() => {
        network();
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        const _component_image_card = resolveEasycom(vue.resolveDynamicComponent("image-card"), __easycom_1);
        const _component_text_card = resolveEasycom(vue.resolveDynamicComponent("text-card"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout pageBg" }, [
          vue.createElementVNode("view", { class: "tabs" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass({ active: vue.unref(activeTab) === "course" }),
                onClick: _cache[0] || (_cache[0] = ($event) => changeTab("course"))
              },
              "课堂",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass({ active: vue.unref(activeTab) === "text" }),
                onClick: _cache[1] || (_cache[1] = ($event) => changeTab("text"))
              },
              "文章",
              2
              /* CLASS */
            )
          ]),
          vue.unref(activeTab) === "course" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            vue.createElementVNode("view", { class: "notice" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "sound-filled",
                  size: "20"
                }),
                vue.createElementVNode("text", { class: "text" }, "学员故事")
              ]),
              vue.createElementVNode("view", { class: "center" }, [
                vue.createElementVNode("swiper", {
                  vertical: "",
                  autoplay: "",
                  interval: "1500",
                  duration: "300",
                  circular: ""
                }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(4, (item) => {
                      return vue.createElementVNode("swiper-item", null, "卢世豪同学经过不懈的努力论文达到sci水准");
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "16",
                  color: "#333"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "course" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(mediaItems), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "course_images",
                    key: index
                  }, [
                    vue.createVNode(_component_image_card, {
                      imageSrc: item.image,
                      imageText: "视频",
                      shunxv: index,
                      description: "",
                      price: "¥10.0",
                      type: "金币 200",
                      targetPage: "/pages/target/target"
                    }, null, 8, ["imageSrc", "shunxv"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.unref(activeTab) === "text" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(textCards), (textCard) => {
                return vue.openBlock(), vue.createBlock(_component_text_card, {
                  class: "text_card",
                  textSrc: textCard.textSrc,
                  title: textCard.title,
                  tag: textCard.tag,
                  num: textCard.num
                }, null, 8, ["textSrc", "title", "tag", "num"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(' <view class="box" v-for="item in pets" :key="item.id">\r\n			<view class="pic">\r\n				<image :src="item.url" mode="widthFix"></image>\r\n			</view>\r\n			<view class="pic_text">{{item.width}}</view>\r\n		</view> ')
        ]);
      };
    }
  };
  const PagesTechnologyTechnology = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2e457882"], ["__file", "E:/Graduation_Project/APP/demo1/pages/technology/technology.vue"]]);
  const _sfc_main$6 = {
    __name: "user",
    setup(__props) {
      function recards() {
        uni.navigateTo({ url: "./record" });
      }
      function qas() {
        uni.navigateTo({ url: "./qa" });
      }
      let savedImagePaths = vue.ref([]);
      onShow(() => {
        formatAppLog("log", "at pages/user/user.vue:78", "我显示了");
        uni.getStorage({
          key: "savedImagePaths",
          success: function(res) {
            savedImagePaths.value = res.data;
            formatAppLog("log", "at pages/user/user.vue:83", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
          },
          fail: function() {
            formatAppLog("log", "at pages/user/user.vue:86", "本地存储中没有找到 savedImagePaths 数组，将初始化为空数组");
          }
        });
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "userlayout pageBg" }, [
          vue.createElementVNode("view", { class: "userinfo" }, [
            vue.createElementVNode("view", { class: "avatar" }, [
              vue.createElementVNode("image", { src: "/static/images/box1.png" })
            ]),
            vue.createElementVNode("view", { class: "nickname" }, "尊贵的麦小保用户"),
            vue.createElementVNode("view", { class: "address" }, "来自于：河南")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("view", {
                class: "row",
                onClick: recards
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "list",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "检测记录")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(vue.unref(savedImagePaths).length),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ]),
              vue.createElementVNode("view", {
                class: "row",
                onClick: qas
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "compose",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "我的问答")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }, "0"),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("view", {
                class: "row",
                onClick: qas
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "chatboxes-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "意见反馈")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ]),
              vue.createElementVNode("view", {
                class: "row",
                onClick: qas
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "auth-filled",
                    size: "20",
                    color: "#28b389"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "认证专家")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0f7520f0"], ["__file", "E:/Graduation_Project/APP/demo1/pages/user/user.vue"]]);
  const _sfc_main$5 = {
    __name: "record",
    setup(__props) {
      let savedImagePaths1 = vue.ref([]);
      let disease1 = vue.ref([]);
      vue.ref(["qwer", "qweqr", "qwrqwr", "qrwr", "qrwqwr"]);
      onShow(() => {
        formatAppLog("log", "at pages/user/record.vue:29", "我显示了");
        uni.getStorage({
          key: "savedImagePaths",
          success: function(res) {
            savedImagePaths1.value = res.data;
            formatAppLog("log", "at pages/user/record.vue:34", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
          },
          fail: function() {
            formatAppLog("log", "at pages/user/record.vue:37", "本地存储中没有找到 savedImagePaths 数组，将初始化为空数组");
          }
        });
        uni.getStorage({
          key: "disease",
          success: function(res) {
            disease1.value = res.data;
            formatAppLog("log", "at pages/user/record.vue:44", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
          },
          fail: function() {
            formatAppLog("log", "at pages/user/record.vue:47", "本地存储中没有找到 disease 数组，将初始化为空数组");
          }
        });
      });
      const deleteAllImages = () => {
        uni.getStorage({
          key: "savedImagePaths",
          success: function(res) {
            let savedImagePaths = res.data;
            formatAppLog("log", "at pages/user/record.vue:58", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
            for (let i = 0; i < savedImagePaths.length; i++) {
              plus.io.resolveLocalFileSystemURL(savedImagePaths[i], function(entry) {
                entry.remove(function() {
                  formatAppLog("log", "at pages/user/record.vue:64", "文件已成功删除");
                }, function(e) {
                  formatAppLog("log", "at pages/user/record.vue:66", "文件删除失败：" + e.message);
                });
              }, function(e) {
                formatAppLog("log", "at pages/user/record.vue:69", "Resolve file URL error: " + e.message);
              });
            }
            savedImagePaths = [];
            savedImagePaths1.value = [];
            uni.setStorage({
              key: "savedImagePaths",
              data: savedImagePaths,
              success: function() {
                formatAppLog("log", "at pages/user/record.vue:82", "图片路径已从本地存储中删除");
              }
            });
          },
          fail: function() {
            formatAppLog("log", "at pages/user/record.vue:88", "本地存储中没有找到 savedImagePaths 数组");
          }
        });
        uni.getStorage({
          key: "disease",
          success: function(res) {
            let disease = res.data;
            formatAppLog("log", "at pages/user/record.vue:95", "从本地存储中获取的图片路径：" + JSON.stringify(res.data));
            disease = [];
            disease1.value = [];
            uni.setStorage({
              key: "disease",
              data: disease,
              success: function() {
                formatAppLog("log", "at pages/user/record.vue:109", "图片路径已从本地存储中删除");
              }
            });
          },
          fail: function() {
            formatAppLog("log", "at pages/user/record.vue:115", "本地存储中没有找到 disease 数组");
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "recardlayout" }, [
          vue.createElementVNode("button", {
            onClick: deleteAllImages,
            class: "delete"
          }, "清空历史记录"),
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(savedImagePaths1), (savedImagePath, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "item" }, [
                  vue.createElementVNode("image", {
                    src: savedImagePath,
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    null,
                    vue.toDisplayString(vue.unref(disease1)[index]),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesUserRecord = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-36833523"], ["__file", "E:/Graduation_Project/APP/demo1/pages/user/record.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "title" }, " 还在研发中，尽情期待。。。"),
      vue.createElementVNode("view", { class: "support" }, [
        vue.createElementVNode("view", null, "如果喜欢请支持作者吧！"),
        vue.createElementVNode("image", {
          src: "/static/pay.jpg",
          mode: "aspectFill"
        })
      ])
    ]);
  }
  const PagesUserQa = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-eec5fa78"], ["__file", "E:/Graduation_Project/APP/demo1/pages/user/qa.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "3");
  }
  const PagesUserOpinion = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/Graduation_Project/APP/demo1/pages/user/opinion.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "4");
  }
  const PagesUserExpert = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/Graduation_Project/APP/demo1/pages/user/expert.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesQalistQalist = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/Graduation_Project/APP/demo1/pages/qalist/qalist.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/interpretation/interpretation", PagesInterpretationInterpretation);
  __definePage("pages/technology/technology", PagesTechnologyTechnology);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/user/record", PagesUserRecord);
  __definePage("pages/user/qa", PagesUserQa);
  __definePage("pages/user/opinion", PagesUserOpinion);
  __definePage("pages/user/expert", PagesUserExpert);
  __definePage("pages/qalist/qalist", PagesQalistQalist);
  function initPushNotification() {
    if (typeof plus !== "undefined" && plus.push) {
      plus.globalEvent.addEventListener("newPath", ({ path }) => {
        if (!path) {
          return;
        }
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        if (currentPage && currentPage.$page && currentPage.$page.fullPath === path) {
          return;
        }
        uni.navigateTo({
          url: path,
          fail(res) {
            if (res.errMsg.indexOf("tabbar") > -1) {
              uni.switchTab({
                url: path,
                fail(res2) {
                  console.error(res2.errMsg);
                }
              });
            } else {
              console.error(res.errMsg);
            }
          }
        });
      });
    }
  }
  uni.invokePushCallback({
    type: "enabled",
    offline: true
  });
  Promise.resolve().then(() => {
    initPushNotification();
    plus.push.setAutoNotification && plus.push.setAutoNotification(false);
  });
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.uvue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.uvue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.uvue:11", "App Hide");
    },
    onExit: function() {
      formatAppLog("log", "at App.uvue:32", "App Exit");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/Graduation_Project/APP/demo1/App.uvue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
