(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{Cb67:function(s,a,t){var r,v,l;v=[a,t("CyRr")],void 0===(l="function"==typeof(r=function(a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r,v=(r=t)&&r.__esModule?r:{default:r};a.default={data:function(){return{cesiumPath:"https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js",options:[{value:"https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult",label:"四川地图"},{value:"http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google",label:"谷歌地图"}],url:"https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult",alpha:1,brightness:1,contrast:1}},components:{SmCesiumViewer:v.default},methods:{ready:function(s){s.Cesium;var a=s.viewer;a.zoomTo(this.$refs.supermapLayer.providerContainer.imageryLayer)}}},s.exports=a.default})?r.apply(a,v):r)||(s.exports=l)},ZPzf:function(s,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return v});var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("SuperMap影像服务Provider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加SuperMapImageryProvider影像到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("sm-cesium-viewer",{attrs:{cesiumPath:s.cesiumPath,navigation:""}},[t("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[t("supermap-imagery-provider",{ref:"supermapLayer",attrs:{url:s.url},on:{ready:s.ready}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("透明度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("亮度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("对比度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}}),s._v(" "),t("span",[s._v("切换服务")]),s._v(" "),t("md-select",{attrs:{placeholder:"请选择服务"},model:{value:s.url,callback:function(a){s.url=a},expression:"url"}},s._l(s.options,function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},v=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("supermap-imagery-provider")]),this._v("加载超图iserver影像服务。只有超图WebGL包有此组件。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("sm-cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":cesiumPath")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cesiumPath"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("navigation")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("supermap-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"supermapLayer"')]),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("supermap-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("sm-cesium-viewer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("切换服务"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"请选择服务"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" CesiumViewer "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'../../../src/components/viewer/CesiumViewer.vue'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'四川地图'")]),s._v("\n        }, {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'谷歌地图'")]),s._v("\n        }],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("SmCesiumViewer")]),s._v(": CesiumViewer\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        viewer.zoomTo("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.supermapLayer.providerContainer.imageryLayer)\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v("超图iserver影像服务地址。")])]),s._v(" "),t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("超图iserver服务名称")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("影像图层名称。")])]),s._v(" "),t("tr",[t("td",[s._v("minimumLevel")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("最小层级。")])]),s._v(" "),t("tr",[t("td",[s._v("maximumLevel")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("20")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("最大层级。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。")])])])])}];r._withStripped=!0},bqYq:function(s,a,t){s.exports=t("xaFI")},xaFI:function(s,a,t){"use strict";t.r(a);var r=t("Cb67"),v=t.n(r);for(var l in r)"default"!==l&&function(s){t.d(a,s,function(){return r[s]})}(l);var n=t("ZPzf"),e=t("JFUb"),_=Object(e.a)(v.a,n.a,n.b,!1,null,null,null);_.options.__file="docs/md/zh/supermap-imagery-provider.md",a.default=_.exports}}]);