webpackJsonp([1],Array(235).concat([
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Error404": 236,
		"./Error404.vue": 236,
		"./layout/leftdrawer": 241,
		"./layout/leftdrawer.vue": 241,
		"./layout/rightdrawer": 249,
		"./layout/rightdrawer.vue": 249,
		"./layout/toolbar": 254,
		"./layout/toolbar.vue": 254,
		"./views/auth/login": 259,
		"./views/auth/login.vue": 259,
		"./views/auth/logoData": 336,
		"./views/auth/logoData.js": 336,
		"./views/auth/logout": 339,
		"./views/auth/logout.vue": 339,
		"./views/auth/register": 344,
		"./views/auth/register.vue": 344,
		"./views/home/cardAniversariosPorMes": 349,
		"./views/home/cardAniversariosPorMes.vue": 349,
		"./views/home/cardCadastrosPorMes": 401,
		"./views/home/cardCadastrosPorMes.vue": 401,
		"./views/home/cardPessoasPorBairro": 406,
		"./views/home/cardPessoasPorBairro.vue": 406,
		"./views/home/cardTotal": 411,
		"./views/home/cardTotal.vue": 411,
		"./views/home/home": 417,
		"./views/home/home.vue": 417,
		"./views/questiontype/questiontype": 422,
		"./views/questiontype/questiontype.vue": 422,
		"./views/user/user": 427,
		"./views/user/user.vue": 427
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 235;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(238),
	  /* template */
	  __webpack_require__(239),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\Error404.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Error404.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8acb829e", Component.options)
	  } else {
	    hotAPI.reload("data-v-8acb829e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 237 */,
/* 238 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      canGoBack: window.history.length > 1
	    };
	  },
	
	  methods: {
	    goBack: function goBack() {
	      window.history.go(-1);
	    }
	  }
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "error-page window-height window-width bg-light column items-center"
	  }, [_c('div', {
	    staticClass: "error-code bg-primary flex items-center justify-center"
	  }, [_vm._v("\n    404\n  ")]), _vm._v(" "), _c('div', [_c('div', {
	    staticClass: "error-card card bg-white column items-center justify-center"
	  }, [_c('i', {
	    staticClass: "text-grey-5"
	  }, [_vm._v("error_outline")]), _vm._v(" "), _c('p', {
	    staticClass: "caption text-center"
	  }, [_vm._v("Oops. Nothing here...")]), _vm._v(" "), _c('p', {
	    staticClass: "text-center group"
	  }, [(_vm.canGoBack) ? _c('button', {
	    staticClass: "grey push small",
	    on: {
	      "click": _vm.goBack
	    }
	  }, [_c('i', {
	    staticClass: "on-left"
	  }, [_vm._v("keyboard_arrow_left")]), _vm._v("\n          Go back\n        ")]) : _vm._e(), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, [_c('button', {
	    staticClass: "grey push small"
	  }, [_vm._v("\n            Go home\n            "), _c('i', {
	    staticClass: "on-right"
	  }, [_vm._v("home")])])])], 1)])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-8acb829e", module.exports)
	  }
	}

/***/ },
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(250)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(252),
	  /* template */
	  __webpack_require__(253),
	  /* scopeId */
	  "data-v-1c1f686e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\layout\\rightdrawer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] rightdrawer.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1c1f686e", Component.options)
	  } else {
	    hotAPI.reload("data-v-1c1f686e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(251);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("ada0bb90", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(251, function() {
	     var newContent = __webpack_require__(251);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toolbar[data-v-1c1f686e] {\r\n    min-height: 70px;\n}\r\n", "", {"version":3,"sources":["/./ClientApp/components/layout/rightdrawer.vue?5aa119c7"],"names":[],"mappings":";AAoBA;IACA,iBAAA;CACA","file":"rightdrawer.vue","sourcesContent":["<template>\r\n  <q-drawer right-side swipe-only ref=\"rightDrawer\">\r\n    <div class=\"toolbar light\">\r\n      <q-toolbar-title :padding=\"1\">\r\n          Right-side Drawer\r\n      </q-toolbar-title>\r\n    </div>\r\n\r\n    <p style=\"padding: 25px;\" class=\"text-grey-7\">\r\n      This is yet another Drawer that does not gets displayed alongside content on\r\n      bigger screens.\r\n    </p>\r\n  </q-drawer>\r\n</template>\r\n<script>\r\nexport default {\r\n\r\n}\r\n</script>\r\n<style scoped>\r\n.toolbar {\r\n    min-height: 70px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('q-drawer', {
	    ref: "rightDrawer",
	    attrs: {
	      "right-side": "",
	      "swipe-only": ""
	    }
	  }, [_c('div', {
	    staticClass: "toolbar light"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_vm._v("\n        Right-side Drawer\n    ")])], 1), _vm._v(" "), _c('p', {
	    staticClass: "text-grey-7",
	    staticStyle: {
	      "padding": "25px"
	    }
	  }, [_vm._v("\n    This is yet another Drawer that does not gets displayed alongside content on\n    bigger screens.\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-1c1f686e", module.exports)
	  }
	}

/***/ },
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(260)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(262),
	  /* template */
	  __webpack_require__(338),
	  /* scopeId */
	  "data-v-6b229064",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6b229064", Component.options)
	  } else {
	    hotAPI.reload("data-v-6b229064", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(261);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("281fb524", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(261, function() {
	     var newContent = __webpack_require__(261);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.card[data-v-6b229064] {\n  margin-bottom: 0px;\n  width: 100%;\n}\n.card-content[data-v-6b229064] {\n  min-height: 160px;\n}\nbutton[data-v-6b229064] {\n  margin-bottom: 4%;\n}\nh4[data-v-6b229064] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/auth/login.vue?780b5c21"],"names":[],"mappings":";AAuIA;EACA,mBAAA;EACA,YAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;CACA","file":"login.vue","sourcesContent":["<template>\r\n<div class=\"flex justify-center full-height\" :class=\"heightSize\">\r\n<div class=\"card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto \" id=\"login\">\r\n      <div class=\"card-title\" :class=\"finalBgColor\">\r\n        <svg id=\"logo\" viewBox=\"0 0 483 483\"\r\n             style=\"enable-background:new 0 0 460 460;\"\r\n             xml:space=\"preserve\" width=\"128px\" height=\"128px\"\r\n             v-html=\"logoMethod\">\r\n        </svg>\r\n        <h4>{{logo}}</h4>\r\n      </div>\r\n      <div class=\"card-content bg-white \">\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"email\" v-model=\"credentials.email\">\r\n          <label>Email</label>\r\n        </div>\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"password\" v-model=\"credentials.password\">\r\n          <label>Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-actions inline-block vertical-middle\">\r\n        <button class=\"teal fit \" :class=\"buttonClass\" @click=\"userLogin()\">Login</button>\r\n        <button class=\"red fit\" :class=\"buttonClass\" @click=\"userLogin()\">Login Google</button>\r\n        <button class=\"blue fit \" :class=\"buttonClass\" @click=\"sendSock()\">Send</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n</template>\r\n<script>\r\nimport {\r\n    mapGetters,\r\n    mapActions\r\n} from 'vuex'\r\n\r\nimport Stomp from 'stompjs'\r\nimport SockJS from 'sockjs-client'\r\nimport { Platform } from 'quasar-framework'\r\nimport logoData from './logoData'\r\nimport {mapMutations} from 'vuex'\r\nimport Vivus from 'vivus'\r\nlet sock = new SockJS('/broadcast')\r\nsock.onopen = function() {\r\n   console.log('open')\r\n   sock.send('test');\r\n}\r\nsock.onmessage = function(e) {\r\n   console.log('message', e)\r\n}\r\nsock.onclose = function() {\r\n   console.log('close')\r\n}\r\nexport default {\r\n    name: \"login\",\r\n    data: function data() {\r\n        return {\r\n            credentials: {\r\n                email: 'rto@rto.com',\r\n                password: '12345678'\r\n            },\r\n            logos: Object.keys(logoData),\r\n            logo: 'DotVueApp',\r\n            bgColor: 'blue',\r\n            toneColor: 10,\r\n            colors: ['purple', 'blue', 'red', 'green', 'amber'],\r\n            colorTones: ['2', '4', '6', '8', '10'],\r\n            buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],\r\n            buttonClass: 'normal',\r\n            vivus: ''\r\n        }\r\n    },\r\n    computed: {\r\n        ...mapGetters([\r\n            'getLayoutNeeded',\r\n            'getIsLoginPage',\r\n            'getMobileMode'\r\n        ]),\r\n        heightSize (){\r\n            if (Platform.is.desktop) {\r\n            return 'items-center'\r\n            }\r\n            return ''\r\n        },\r\n        finalBgColor () {\r\n            return `bg-${this.bgColor}-${this.toneColor}`\r\n        },\r\n        logoMethod () {\r\n            return logoData[this.logo]\r\n        }\r\n    },\r\n    methods: {\r\n      ...mapActions([\r\n          'setLayoutNeeded',\r\n          'setIsLoginPage',\r\n          'setMobileMode'\r\n      ]),\r\n        userLogin() {\r\n            // AUTH WILL BE CALLED with data\r\n            this.$store.dispatch('authenticateUser', this.credentials)\r\n                .then(res => {\r\n                    this.loading = false;\r\n                    this.$router.push({\r\n                        name: 'home',\r\n                        params: {\r\n                        }\r\n                    });\r\n                })\r\n                .catch(res => {\r\n                    this.loading = false;\r\n                    this.errors = res.errors;\r\n                });\r\n        },\r\n        startAnimation () {\r\n            this.vivus = new Vivus('logo', {\r\n                duration: 400,\r\n                forceRender: false\r\n            }, function(element) {\r\n                for (let item of element.el.children[0].children) {\r\n                    item.setAttribute('style', 'fill:white')\r\n                    item.setAttribute('style', 'fill:white')\r\n                }\r\n            })\r\n        },\r\n        sendSock(){\r\n          sock.send(+new Date)\r\n        }\r\n    },\r\n    mounted(){\r\n        this.setLayoutNeeded(false)\r\n        this.setIsLoginPage(true)\r\n        this.startAnimation()\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n  .card {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n  }\r\n  .card-content {\r\n    min-height: 160px;\r\n  }\r\n  button {\r\n    margin-bottom: 4%;\r\n  }\r\n  h4 {\r\n    font-weight: 300;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(263);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(215);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(224);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _vuex = __webpack_require__(142);
	
	var _stompjs = __webpack_require__(266);
	
	var _stompjs2 = _interopRequireDefault(_stompjs);
	
	var _sockjsClient = __webpack_require__(273);
	
	var _sockjsClient2 = _interopRequireDefault(_sockjsClient);
	
	var _quasarFramework = __webpack_require__(19);
	
	var _logoData = __webpack_require__(336);
	
	var _logoData2 = _interopRequireDefault(_logoData);
	
	var _vivus = __webpack_require__(337);
	
	var _vivus2 = _interopRequireDefault(_vivus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sock = new _sockjsClient2.default('/broadcast');
	sock.onopen = function () {
	    console.log('open');
	    sock.send('test');
	};
	sock.onmessage = function (e) {
	    console.log('message', e);
	};
	sock.onclose = function () {
	    console.log('close');
	};
	exports.default = {
	    name: "login",
	    data: function data() {
	        return {
	            credentials: {
	                email: 'rto@rto.com',
	                password: '12345678'
	            },
	            logos: (0, _keys2.default)(_logoData2.default),
	            logo: 'DotVueApp',
	            bgColor: 'blue',
	            toneColor: 10,
	            colors: ['purple', 'blue', 'red', 'green', 'amber'],
	            colorTones: ['2', '4', '6', '8', '10'],
	            buttonClasses: ['normal', 'outline', 'clear', 'push', 'bordered', 'round'],
	            buttonClass: 'normal',
	            vivus: ''
	        };
	    },
	    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['getLayoutNeeded', 'getIsLoginPage', 'getMobileMode']), {
	        heightSize: function heightSize() {
	            if (_quasarFramework.Platform.is.desktop) {
	                return 'items-center';
	            }
	            return '';
	        },
	        finalBgColor: function finalBgColor() {
	            return 'bg-' + this.bgColor + '-' + this.toneColor;
	        },
	        logoMethod: function logoMethod() {
	            return _logoData2.default[this.logo];
	        }
	    }),
	    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['setLayoutNeeded', 'setIsLoginPage', 'setMobileMode']), {
	        userLogin: function userLogin() {
	            var _this = this;
	
	            this.$store.dispatch('authenticateUser', this.credentials).then(function (res) {
	                _this.loading = false;
	                _this.$router.push({
	                    name: 'home',
	                    params: {}
	                });
	            }).catch(function (res) {
	                _this.loading = false;
	                _this.errors = res.errors;
	            });
	        },
	        startAnimation: function startAnimation() {
	            this.vivus = new _vivus2.default('logo', {
	                duration: 400,
	                forceRender: false
	            }, function (element) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = (0, _getIterator3.default)(element.el.children[0].children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;
	
	                        item.setAttribute('style', 'fill:white');
	                        item.setAttribute('style', 'fill:white');
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            });
	        },
	        sendSock: function sendSock() {
	            sock.send(+new Date());
	        }
	    }),
	    mounted: function mounted() {
	        this.setLayoutNeeded(false);
	        this.setIsLoginPage(true);
	        this.startAnimation();
	    }
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(197);
	__webpack_require__(168);
	module.exports = __webpack_require__(265);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(155)
	  , get      = __webpack_require__(207);
	module.exports = __webpack_require__(150).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
	//
	//   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
	//
	// The library can be used in node.js app to connect to STOMP brokers over TCP 
	// or Web sockets.
	
	// Root of the `stompjs module`
	
	var Stomp = __webpack_require__(267);
	var StompNode = __webpack_require__(268);
	
	module.exports = Stomp.Stomp;
	module.exports.overTCP = StompNode.overTCP;
	module.exports.overWS = StompNode.overWS;

/***/ },
/* 267 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	
	/*
	   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
	
	   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
	   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
	 */
	
	(function() {
	  var Byte, Client, Frame, Stomp,
	    __hasProp = {}.hasOwnProperty,
	    __slice = [].slice;
	
	  Byte = {
	    LF: '\x0A',
	    NULL: '\x00'
	  };
	
	  Frame = (function() {
	    var unmarshallSingle;
	
	    function Frame(command, headers, body) {
	      this.command = command;
	      this.headers = headers != null ? headers : {};
	      this.body = body != null ? body : '';
	    }
	
	    Frame.prototype.toString = function() {
	      var lines, name, skipContentLength, value, _ref;
	      lines = [this.command];
	      skipContentLength = this.headers['content-length'] === false ? true : false;
	      if (skipContentLength) {
	        delete this.headers['content-length'];
	      }
	      _ref = this.headers;
	      for (name in _ref) {
	        if (!__hasProp.call(_ref, name)) continue;
	        value = _ref[name];
	        lines.push("" + name + ":" + value);
	      }
	      if (this.body && !skipContentLength) {
	        lines.push("content-length:" + (Frame.sizeOfUTF8(this.body)));
	      }
	      lines.push(Byte.LF + this.body);
	      return lines.join(Byte.LF);
	    };
	
	    Frame.sizeOfUTF8 = function(s) {
	      if (s) {
	        return encodeURI(s).match(/%..|./g).length;
	      } else {
	        return 0;
	      }
	    };
	
	    unmarshallSingle = function(data) {
	      var body, chr, command, divider, headerLines, headers, i, idx, len, line, start, trim, _i, _j, _len, _ref, _ref1;
	      divider = data.search(RegExp("" + Byte.LF + Byte.LF));
	      headerLines = data.substring(0, divider).split(Byte.LF);
	      command = headerLines.shift();
	      headers = {};
	      trim = function(str) {
	        return str.replace(/^\s+|\s+$/g, '');
	      };
	      _ref = headerLines.reverse();
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        line = _ref[_i];
	        idx = line.indexOf(':');
	        headers[trim(line.substring(0, idx))] = trim(line.substring(idx + 1));
	      }
	      body = '';
	      start = divider + 2;
	      if (headers['content-length']) {
	        len = parseInt(headers['content-length']);
	        body = ('' + data).substring(start, start + len);
	      } else {
	        chr = null;
	        for (i = _j = start, _ref1 = data.length; start <= _ref1 ? _j < _ref1 : _j > _ref1; i = start <= _ref1 ? ++_j : --_j) {
	          chr = data.charAt(i);
	          if (chr === Byte.NULL) {
	            break;
	          }
	          body += chr;
	        }
	      }
	      return new Frame(command, headers, body);
	    };
	
	    Frame.unmarshall = function(datas) {
	      var data;
	      return (function() {
	        var _i, _len, _ref, _results;
	        _ref = datas.split(RegExp("" + Byte.NULL + Byte.LF + "*"));
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          data = _ref[_i];
	          if ((data != null ? data.length : void 0) > 0) {
	            _results.push(unmarshallSingle(data));
	          }
	        }
	        return _results;
	      })();
	    };
	
	    Frame.marshall = function(command, headers, body) {
	      var frame;
	      frame = new Frame(command, headers, body);
	      return frame.toString() + Byte.NULL;
	    };
	
	    return Frame;
	
	  })();
	
	  Client = (function() {
	    var now;
	
	    function Client(ws) {
	      this.ws = ws;
	      this.ws.binaryType = "arraybuffer";
	      this.counter = 0;
	      this.connected = false;
	      this.heartbeat = {
	        outgoing: 10000,
	        incoming: 10000
	      };
	      this.maxWebSocketFrameSize = 16 * 1024;
	      this.subscriptions = {};
	    }
	
	    Client.prototype.debug = function(message) {
	      var _ref;
	      return typeof window !== "undefined" && window !== null ? (_ref = window.console) != null ? _ref.log(message) : void 0 : void 0;
	    };
	
	    now = function() {
	      if (Date.now) {
	        return Date.now();
	      } else {
	        return new Date().valueOf;
	      }
	    };
	
	    Client.prototype._transmit = function(command, headers, body) {
	      var out;
	      out = Frame.marshall(command, headers, body);
	      if (typeof this.debug === "function") {
	        this.debug(">>> " + out);
	      }
	      while (true) {
	        if (out.length > this.maxWebSocketFrameSize) {
	          this.ws.send(out.substring(0, this.maxWebSocketFrameSize));
	          out = out.substring(this.maxWebSocketFrameSize);
	          if (typeof this.debug === "function") {
	            this.debug("remaining = " + out.length);
	          }
	        } else {
	          return this.ws.send(out);
	        }
	      }
	    };
	
	    Client.prototype._setupHeartbeat = function(headers) {
	      var serverIncoming, serverOutgoing, ttl, v, _ref, _ref1;
	      if ((_ref = headers.version) !== Stomp.VERSIONS.V1_1 && _ref !== Stomp.VERSIONS.V1_2) {
	        return;
	      }
	      _ref1 = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = headers['heart-beat'].split(",");
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          v = _ref1[_i];
	          _results.push(parseInt(v));
	        }
	        return _results;
	      })(), serverOutgoing = _ref1[0], serverIncoming = _ref1[1];
	      if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {
	        ttl = Math.max(this.heartbeat.outgoing, serverIncoming);
	        if (typeof this.debug === "function") {
	          this.debug("send PING every " + ttl + "ms");
	        }
	        this.pinger = Stomp.setInterval(ttl, (function(_this) {
	          return function() {
	            _this.ws.send(Byte.LF);
	            return typeof _this.debug === "function" ? _this.debug(">>> PING") : void 0;
	          };
	        })(this));
	      }
	      if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {
	        ttl = Math.max(this.heartbeat.incoming, serverOutgoing);
	        if (typeof this.debug === "function") {
	          this.debug("check PONG every " + ttl + "ms");
	        }
	        return this.ponger = Stomp.setInterval(ttl, (function(_this) {
	          return function() {
	            var delta;
	            delta = now() - _this.serverActivity;
	            if (delta > ttl * 2) {
	              if (typeof _this.debug === "function") {
	                _this.debug("did not receive server activity for the last " + delta + "ms");
	              }
	              return _this.ws.close();
	            }
	          };
	        })(this));
	      }
	    };
	
	    Client.prototype._parseConnect = function() {
	      var args, connectCallback, errorCallback, headers;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      headers = {};
	      switch (args.length) {
	        case 2:
	          headers = args[0], connectCallback = args[1];
	          break;
	        case 3:
	          if (args[1] instanceof Function) {
	            headers = args[0], connectCallback = args[1], errorCallback = args[2];
	          } else {
	            headers.login = args[0], headers.passcode = args[1], connectCallback = args[2];
	          }
	          break;
	        case 4:
	          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3];
	          break;
	        default:
	          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], headers.host = args[4];
	      }
	      return [headers, connectCallback, errorCallback];
	    };
	
	    Client.prototype.connect = function() {
	      var args, errorCallback, headers, out;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      out = this._parseConnect.apply(this, args);
	      headers = out[0], this.connectCallback = out[1], errorCallback = out[2];
	      if (typeof this.debug === "function") {
	        this.debug("Opening Web Socket...");
	      }
	      this.ws.onmessage = (function(_this) {
	        return function(evt) {
	          var arr, c, client, data, frame, messageID, onreceive, subscription, _i, _len, _ref, _results;
	          data = typeof ArrayBuffer !== 'undefined' && evt.data instanceof ArrayBuffer ? (arr = new Uint8Array(evt.data), typeof _this.debug === "function" ? _this.debug("--- got data length: " + arr.length) : void 0, ((function() {
	            var _i, _len, _results;
	            _results = [];
	            for (_i = 0, _len = arr.length; _i < _len; _i++) {
	              c = arr[_i];
	              _results.push(String.fromCharCode(c));
	            }
	            return _results;
	          })()).join('')) : evt.data;
	          _this.serverActivity = now();
	          if (data === Byte.LF) {
	            if (typeof _this.debug === "function") {
	              _this.debug("<<< PONG");
	            }
	            return;
	          }
	          if (typeof _this.debug === "function") {
	            _this.debug("<<< " + data);
	          }
	          _ref = Frame.unmarshall(data);
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            frame = _ref[_i];
	            switch (frame.command) {
	              case "CONNECTED":
	                if (typeof _this.debug === "function") {
	                  _this.debug("connected to server " + frame.headers.server);
	                }
	                _this.connected = true;
	                _this._setupHeartbeat(frame.headers);
	                _results.push(typeof _this.connectCallback === "function" ? _this.connectCallback(frame) : void 0);
	                break;
	              case "MESSAGE":
	                subscription = frame.headers.subscription;
	                onreceive = _this.subscriptions[subscription] || _this.onreceive;
	                if (onreceive) {
	                  client = _this;
	                  messageID = frame.headers["message-id"];
	                  frame.ack = function(headers) {
	                    if (headers == null) {
	                      headers = {};
	                    }
	                    return client.ack(messageID, subscription, headers);
	                  };
	                  frame.nack = function(headers) {
	                    if (headers == null) {
	                      headers = {};
	                    }
	                    return client.nack(messageID, subscription, headers);
	                  };
	                  _results.push(onreceive(frame));
	                } else {
	                  _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled received MESSAGE: " + frame) : void 0);
	                }
	                break;
	              case "RECEIPT":
	                _results.push(typeof _this.onreceipt === "function" ? _this.onreceipt(frame) : void 0);
	                break;
	              case "ERROR":
	                _results.push(typeof errorCallback === "function" ? errorCallback(frame) : void 0);
	                break;
	              default:
	                _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled frame: " + frame) : void 0);
	            }
	          }
	          return _results;
	        };
	      })(this);
	      this.ws.onclose = (function(_this) {
	        return function() {
	          var msg;
	          msg = "Whoops! Lost connection to " + _this.ws.url;
	          if (typeof _this.debug === "function") {
	            _this.debug(msg);
	          }
	          _this._cleanUp();
	          return typeof errorCallback === "function" ? errorCallback(msg) : void 0;
	        };
	      })(this);
	      return this.ws.onopen = (function(_this) {
	        return function() {
	          if (typeof _this.debug === "function") {
	            _this.debug('Web Socket Opened...');
	          }
	          headers["accept-version"] = Stomp.VERSIONS.supportedVersions();
	          headers["heart-beat"] = [_this.heartbeat.outgoing, _this.heartbeat.incoming].join(',');
	          return _this._transmit("CONNECT", headers);
	        };
	      })(this);
	    };
	
	    Client.prototype.disconnect = function(disconnectCallback, headers) {
	      if (headers == null) {
	        headers = {};
	      }
	      this._transmit("DISCONNECT", headers);
	      this.ws.onclose = null;
	      this.ws.close();
	      this._cleanUp();
	      return typeof disconnectCallback === "function" ? disconnectCallback() : void 0;
	    };
	
	    Client.prototype._cleanUp = function() {
	      this.connected = false;
	      if (this.pinger) {
	        Stomp.clearInterval(this.pinger);
	      }
	      if (this.ponger) {
	        return Stomp.clearInterval(this.ponger);
	      }
	    };
	
	    Client.prototype.send = function(destination, headers, body) {
	      if (headers == null) {
	        headers = {};
	      }
	      if (body == null) {
	        body = '';
	      }
	      headers.destination = destination;
	      return this._transmit("SEND", headers, body);
	    };
	
	    Client.prototype.subscribe = function(destination, callback, headers) {
	      var client;
	      if (headers == null) {
	        headers = {};
	      }
	      if (!headers.id) {
	        headers.id = "sub-" + this.counter++;
	      }
	      headers.destination = destination;
	      this.subscriptions[headers.id] = callback;
	      this._transmit("SUBSCRIBE", headers);
	      client = this;
	      return {
	        id: headers.id,
	        unsubscribe: function() {
	          return client.unsubscribe(headers.id);
	        }
	      };
	    };
	
	    Client.prototype.unsubscribe = function(id) {
	      delete this.subscriptions[id];
	      return this._transmit("UNSUBSCRIBE", {
	        id: id
	      });
	    };
	
	    Client.prototype.begin = function(transaction) {
	      var client, txid;
	      txid = transaction || "tx-" + this.counter++;
	      this._transmit("BEGIN", {
	        transaction: txid
	      });
	      client = this;
	      return {
	        id: txid,
	        commit: function() {
	          return client.commit(txid);
	        },
	        abort: function() {
	          return client.abort(txid);
	        }
	      };
	    };
	
	    Client.prototype.commit = function(transaction) {
	      return this._transmit("COMMIT", {
	        transaction: transaction
	      });
	    };
	
	    Client.prototype.abort = function(transaction) {
	      return this._transmit("ABORT", {
	        transaction: transaction
	      });
	    };
	
	    Client.prototype.ack = function(messageID, subscription, headers) {
	      if (headers == null) {
	        headers = {};
	      }
	      headers["message-id"] = messageID;
	      headers.subscription = subscription;
	      return this._transmit("ACK", headers);
	    };
	
	    Client.prototype.nack = function(messageID, subscription, headers) {
	      if (headers == null) {
	        headers = {};
	      }
	      headers["message-id"] = messageID;
	      headers.subscription = subscription;
	      return this._transmit("NACK", headers);
	    };
	
	    return Client;
	
	  })();
	
	  Stomp = {
	    VERSIONS: {
	      V1_0: '1.0',
	      V1_1: '1.1',
	      V1_2: '1.2',
	      supportedVersions: function() {
	        return '1.1,1.0';
	      }
	    },
	    client: function(url, protocols) {
	      var klass, ws;
	      if (protocols == null) {
	        protocols = ['v10.stomp', 'v11.stomp'];
	      }
	      klass = Stomp.WebSocketClass || WebSocket;
	      ws = new klass(url, protocols);
	      return new Client(ws);
	    },
	    over: function(ws) {
	      return new Client(ws);
	    },
	    Frame: Frame
	  };
	
	  if (typeof exports !== "undefined" && exports !== null) {
	    exports.Stomp = Stomp;
	  }
	
	  if (typeof window !== "undefined" && window !== null) {
	    Stomp.setInterval = function(interval, f) {
	      return window.setInterval(f, interval);
	    };
	    Stomp.clearInterval = function(id) {
	      return window.clearInterval(id);
	    };
	    window.Stomp = Stomp;
	  } else if (!exports) {
	    self.Stomp = Stomp;
	  }
	
	}).call(this);


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	
	/*
	   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
	
	   Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
	 */
	
	(function() {
	  var Stomp, net, overTCP, overWS, wrapTCP, wrapWS;
	
	  Stomp = __webpack_require__(267);
	
	  net = __webpack_require__(269);
	
	  Stomp.Stomp.setInterval = function(interval, f) {
	    return setInterval(f, interval);
	  };
	
	  Stomp.Stomp.clearInterval = function(id) {
	    return clearInterval(id);
	  };
	
	  wrapTCP = function(port, host) {
	    var socket, ws;
	    socket = null;
	    ws = {
	      url: 'tcp:// ' + host + ':' + port,
	      send: function(d) {
	        return socket.write(d);
	      },
	      close: function() {
	        return socket.end();
	      }
	    };
	    socket = net.connect(port, host, function(e) {
	      return ws.onopen();
	    });
	    socket.on('error', function(e) {
	      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
	    });
	    socket.on('close', function(e) {
	      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
	    });
	    socket.on('data', function(data) {
	      var event;
	      event = {
	        'data': data.toString()
	      };
	      return ws.onmessage(event);
	    });
	    return ws;
	  };
	
	  wrapWS = function(url) {
	    var WebSocketClient, connection, socket, ws;
	    WebSocketClient = __webpack_require__(270).client;
	    connection = null;
	    ws = {
	      url: url,
	      send: function(d) {
	        return connection.sendUTF(d);
	      },
	      close: function() {
	        return connection.close();
	      }
	    };
	    socket = new WebSocketClient();
	    socket.on('connect', function(conn) {
	      connection = conn;
	      ws.onopen();
	      connection.on('error', function(error) {
	        return typeof ws.onclose === "function" ? ws.onclose(error) : void 0;
	      });
	      connection.on('close', function() {
	        return typeof ws.onclose === "function" ? ws.onclose() : void 0;
	      });
	      return connection.on('message', function(message) {
	        var event;
	        if (message.type === 'utf8') {
	          event = {
	            'data': message.utf8Data
	          };
	          return ws.onmessage(event);
	        }
	      });
	    });
	    socket.connect(url);
	    return ws;
	  };
	
	  overTCP = function(host, port) {
	    var socket;
	    socket = wrapTCP(port, host);
	    return Stomp.Stomp.over(socket);
	  };
	
	  overWS = function(url) {
	    var socket;
	    socket = wrapWS(url);
	    return Stomp.Stomp.over(socket);
	  };
	
	  exports.overTCP = overTCP;
	
	  exports.overWS = overWS;
	
	}).call(this);


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	Copyright 2013 Sleepless Software Inc. All rights reserved.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to
	deal in the Software without restriction, including without limitation the
	rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	sell copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	IN THE SOFTWARE. 
	*/
	
	// yes, I know this seems stupid, but I have my reasons.
	
	var net = __webpack_require__(269)
	for(k in net)
		global[k] = net[k]
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var _global = (function() { return this; })();
	var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
	var websocket_version = __webpack_require__(271);
	
	
	/**
	 * Expose a W3C WebSocket class with just one or two arguments.
	 */
	function W3CWebSocket(uri, protocols) {
		var native_instance;
	
		if (protocols) {
			native_instance = new NativeWebSocket(uri, protocols);
		}
		else {
			native_instance = new NativeWebSocket(uri);
		}
	
		/**
		 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
		 * class). Since it is an Object it will be returned as it is when creating an
		 * instance of W3CWebSocket via 'new W3CWebSocket()'.
		 *
		 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
		 */
		return native_instance;
	}
	
	
	/**
	 * Module exports.
	 */
	module.exports = {
	    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
	    'version'      : websocket_version
	};


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(272).version;


/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "websocket@latest",
					"scope": null,
					"escapedName": "websocket",
					"name": "websocket",
					"rawSpec": "latest",
					"spec": "latest",
					"type": "tag"
				},
				"D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\node_modules\\stompjs"
			]
		],
		"_from": "websocket@latest",
		"_id": "websocket@1.0.24",
		"_inCache": true,
		"_location": "/websocket",
		"_nodeVersion": "7.3.0",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/websocket-1.0.24.tgz_1482977757939_0.1858439394272864"
		},
		"_npmUser": {
			"name": "theturtle32",
			"email": "brian@worlize.com"
		},
		"_npmVersion": "3.10.10",
		"_phantomChildren": {},
		"_requested": {
			"raw": "websocket@latest",
			"scope": null,
			"escapedName": "websocket",
			"name": "websocket",
			"rawSpec": "latest",
			"spec": "latest",
			"type": "tag"
		},
		"_requiredBy": [
			"/stompjs"
		],
		"_resolved": "https://registry.npmjs.org/websocket/-/websocket-1.0.24.tgz",
		"_shasum": "74903e75f2545b6b2e1de1425bc1c905917a1890",
		"_shrinkwrap": null,
		"_spec": "websocket@latest",
		"_where": "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\node_modules\\stompjs",
		"author": {
			"name": "Brian McKelvey",
			"email": "brian@worlize.com",
			"url": "https://www.worlize.com/"
		},
		"browser": "lib/browser.js",
		"bugs": {
			"url": "https://github.com/theturtle32/WebSocket-Node/issues"
		},
		"config": {
			"verbose": false
		},
		"contributors": [
			{
				"name": "Iñaki Baz Castillo",
				"email": "ibc@aliax.net",
				"url": "http://dev.sipdoc.net"
			}
		],
		"dependencies": {
			"debug": "^2.2.0",
			"nan": "^2.3.3",
			"typedarray-to-buffer": "^3.1.2",
			"yaeti": "^0.0.6"
		},
		"description": "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
		"devDependencies": {
			"buffer-equal": "^1.0.0",
			"faucet": "^0.0.1",
			"gulp": "git+https://github.com/gulpjs/gulp.git#4.0",
			"gulp-jshint": "^2.0.4",
			"jshint": "^2.0.0",
			"jshint-stylish": "^2.2.1",
			"tape": "^4.0.1"
		},
		"directories": {
			"lib": "./lib"
		},
		"dist": {
			"shasum": "74903e75f2545b6b2e1de1425bc1c905917a1890",
			"tarball": "https://registry.npmjs.org/websocket/-/websocket-1.0.24.tgz"
		},
		"engines": {
			"node": ">=0.8.0"
		},
		"gitHead": "0e15f9445953927c39ce84a232cb7dd6e3adf12e",
		"homepage": "https://github.com/theturtle32/WebSocket-Node",
		"keywords": [
			"websocket",
			"websockets",
			"socket",
			"networking",
			"comet",
			"push",
			"RFC-6455",
			"realtime",
			"server",
			"client"
		],
		"license": "Apache-2.0",
		"main": "index",
		"maintainers": [
			{
				"name": "theturtle32",
				"email": "brian@worlize.com"
			}
		],
		"name": "websocket",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/theturtle32/WebSocket-Node.git"
		},
		"scripts": {
			"gulp": "gulp",
			"install": "(node-gyp rebuild 2> builderror.log) || (exit 0)",
			"test": "faucet test/unit"
		},
		"version": "1.0.24"
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var transportList = __webpack_require__(274);
	
	module.exports = __webpack_require__(320)(transportList);
	
	// TODO can't get rid of this until all servers do
	if ('_sockjs_onload' in global) {
	  setTimeout(global._sockjs_onload, 1);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = [
	  // streaming transports
	  __webpack_require__(275)
	, __webpack_require__(291)
	, __webpack_require__(301)
	, __webpack_require__(303)
	, __webpack_require__(306)(__webpack_require__(303))
	
	  // polling transports
	, __webpack_require__(313)
	, __webpack_require__(306)(__webpack_require__(313))
	, __webpack_require__(315)
	, __webpack_require__(316)
	, __webpack_require__(306)(__webpack_require__(315))
	, __webpack_require__(317)
	];


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(276)
	  , urlUtils = __webpack_require__(279)
	  , inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  , WebsocketDriver = __webpack_require__(290)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:websocket');
	}
	
	function WebSocketTransport(transUrl, ignore, options) {
	  if (!WebSocketTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	
	  EventEmitter.call(this);
	  debug('constructor', transUrl);
	
	  var self = this;
	  var url = urlUtils.addPath(transUrl, '/websocket');
	  if (url.slice(0, 5) === 'https') {
	    url = 'wss' + url.slice(5);
	  } else {
	    url = 'ws' + url.slice(4);
	  }
	  this.url = url;
	
	  this.ws = new WebsocketDriver(this.url, [], options);
	  this.ws.onmessage = function(e) {
	    debug('message event', e.data);
	    self.emit('message', e.data);
	  };
	  // Firefox has an interesting bug. If a websocket connection is
	  // created after onunload, it stays alive even when user
	  // navigates away from the page. In such situation let's lie -
	  // let's not open the ws connection at all. See:
	  // https://github.com/sockjs/sockjs-client/issues/28
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
	  this.unloadRef = utils.unloadAdd(function() {
	    debug('unload');
	    self.ws.close();
	  });
	  this.ws.onclose = function(e) {
	    debug('close event', e.code, e.reason);
	    self.emit('close', e.code, e.reason);
	    self._cleanup();
	  };
	  this.ws.onerror = function(e) {
	    debug('error event', e);
	    self.emit('close', 1006, 'WebSocket connection broken');
	    self._cleanup();
	  };
	}
	
	inherits(WebSocketTransport, EventEmitter);
	
	WebSocketTransport.prototype.send = function(data) {
	  var msg = '[' + data + ']';
	  debug('send', msg);
	  this.ws.send(msg);
	};
	
	WebSocketTransport.prototype.close = function() {
	  debug('close');
	  var ws = this.ws;
	  this._cleanup();
	  if (ws) {
	    ws.close();
	  }
	};
	
	WebSocketTransport.prototype._cleanup = function() {
	  debug('_cleanup');
	  var ws = this.ws;
	  if (ws) {
	    ws.onmessage = ws.onclose = ws.onerror = null;
	  }
	  utils.unloadDel(this.unloadRef);
	  this.unloadRef = this.ws = null;
	  this.removeAllListeners();
	};
	
	WebSocketTransport.enabled = function() {
	  debug('enabled');
	  return !!WebsocketDriver;
	};
	WebSocketTransport.transportName = 'websocket';
	
	// In theory, ws should require 1 round trip. But in chrome, this is
	// not very stable over SSL. Most likely a ws connection requires a
	// separate SSL connection, in which case 2 round trips are an
	// absolute minumum.
	WebSocketTransport.roundTrips = 2;
	
	module.exports = WebSocketTransport;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var random = __webpack_require__(277);
	
	var onUnload = {}
	  , afterUnload = false
	    // detect google chrome packaged apps because they don't allow the 'unload' event
	  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
	  ;
	
	module.exports = {
	  attachEvent: function(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.addEventListener(event, listener, false);
	    } else if (global.document && global.attachEvent) {
	      // IE quirks.
	      // According to: http://stevesouders.com/misc/test-postmessage.php
	      // the message gets delivered only to 'document', not 'window'.
	      global.document.attachEvent('on' + event, listener);
	      // I get 'window' for ie8.
	      global.attachEvent('on' + event, listener);
	    }
	  }
	
	, detachEvent: function(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.removeEventListener(event, listener, false);
	    } else if (global.document && global.detachEvent) {
	      global.document.detachEvent('on' + event, listener);
	      global.detachEvent('on' + event, listener);
	    }
	  }
	
	, unloadAdd: function(listener) {
	    if (isChromePackagedApp) {
	      return null;
	    }
	
	    var ref = random.string(8);
	    onUnload[ref] = listener;
	    if (afterUnload) {
	      setTimeout(this.triggerUnloadCallbacks, 0);
	    }
	    return ref;
	  }
	
	, unloadDel: function(ref) {
	    if (ref in onUnload) {
	      delete onUnload[ref];
	    }
	  }
	
	, triggerUnloadCallbacks: function() {
	    for (var ref in onUnload) {
	      onUnload[ref]();
	      delete onUnload[ref];
	    }
	  }
	};
	
	var unloadTriggered = function() {
	  if (afterUnload) {
	    return;
	  }
	  afterUnload = true;
	  module.exports.triggerUnloadCallbacks();
	};
	
	// 'unload' alone is not reliable in opera within an iframe, but we
	// can't use `beforeunload` as IE fires it on javascript: links.
	if (!isChromePackagedApp) {
	  module.exports.attachEvent('unload', unloadTriggered);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* global crypto:true */
	var crypto = __webpack_require__(278);
	
	// This string has length 32, a power of 2, so the modulus doesn't introduce a
	// bias.
	var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
	module.exports = {
	  string: function(length) {
	    var max = _randomStringChars.length;
	    var bytes = crypto.randomBytes(length);
	    var ret = [];
	    for (var i = 0; i < length; i++) {
	      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
	    }
	    return ret.join('');
	  }
	
	, number: function(max) {
	    return Math.floor(Math.random() * max);
	  }
	
	, numberString: function(max) {
	    var t = ('' + (max - 1)).length;
	    var p = new Array(t + 1).join('0');
	    return (p + this.number(max)).slice(-t);
	  }
	};


/***/ },
/* 278 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	if (global.crypto && global.crypto.getRandomValues) {
	  module.exports.randomBytes = function(length) {
	    var bytes = new Uint8Array(length);
	    global.crypto.getRandomValues(bytes);
	    return bytes;
	  };
	} else {
	  module.exports.randomBytes = function(length) {
	    var bytes = new Array(length);
	    for (var i = 0; i < length; i++) {
	      bytes[i] = Math.floor(Math.random() * 256);
	    }
	    return bytes;
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var URL = __webpack_require__(280);
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:utils:url');
	}
	
	module.exports = {
	  getOrigin: function(url) {
	    if (!url) {
	      return null;
	    }
	
	    var p = new URL(url);
	    if (p.protocol === 'file:') {
	      return null;
	    }
	
	    var port = p.port;
	    if (!port) {
	      port = (p.protocol === 'https:') ? '443' : '80';
	    }
	
	    return p.protocol + '//' + p.hostname + ':' + port;
	  }
	
	, isOriginEqual: function(a, b) {
	    var res = this.getOrigin(a) === this.getOrigin(b);
	    debug('same', a, b, res);
	    return res;
	  }
	
	, isSchemeEqual: function(a, b) {
	    return (a.split(':')[0] === b.split(':')[0]);
	  }
	
	, addPath: function (url, path) {
	    var qs = url.split('?');
	    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
	  }
	
	, addQuery: function (url, q) {
	    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var required = __webpack_require__(281)
	  , lolcation = __webpack_require__(282)
	  , qs = __webpack_require__(283)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
	
	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];
	
	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */
	
	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);
	
	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}
	
	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;
	
	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }
	
	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');
	
	  return path.join('/');
	}
	
	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }
	
	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;
	
	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }
	
	  if (parser && 'function' !== typeof parser) parser = qs.parse;
	
	  location = lolcation(location);
	
	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;
	
	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];
	
	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];
	
	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if ((index = parse.exec(address))) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }
	
	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );
	
	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }
	
	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);
	
	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }
	
	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }
	
	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}
	
	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	function set(part, value, fn) {
	  var url = this;
	
	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }
	
	      url[part] = value;
	      break;
	
	    case 'port':
	      url[part] = value;
	
	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }
	
	      break;
	
	    case 'hostname':
	      url[part] = value;
	
	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;
	
	    case 'host':
	      url[part] = value;
	
	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }
	
	      break;
	
	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;
	
	    case 'pathname':
	      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;
	
	      break;
	
	    default:
	      url[part] = value;
	  }
	
	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];
	
	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  url.href = url.toString();
	
	  return url;
	};
	
	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
	
	  var query
	    , url = this
	    , protocol = url.protocol;
	
	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
	
	  var result = protocol + (url.slashes ? '//' : '');
	
	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }
	
	  result += url.host + url.pathname;
	
	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;
	
	  if (url.hash) result += url.hash;
	
	  return result;
	}
	
	URL.prototype = { set: set, toString: toString };
	
	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;
	
	module.exports = URL;


/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;
	
	  if (!port) return false;
	
	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;
	
	    case 'https':
	    case 'wss':
	    return port !== 443;
	
	    case 'ftp':
	    return port !== 21;
	
	    case 'gopher':
	    return port !== 70;
	
	    case 'file':
	    return false;
	  }
	
	  return port !== 0;
	};


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
	
	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 }
	  , URL;
	
	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	module.exports = function lolcation(loc) {
	  loc = loc || global.location || {};
	  URL = URL || __webpack_require__(280);
	
	  var finaldestination = {}
	    , type = typeof loc
	    , key;
	
	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }
	
	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }
	
	  return finaldestination;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;
	
	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
	  );
	
	  return result;
	}
	
	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';
	
	  var pairs = [];
	
	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';
	
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }
	
	  return pairs.length ? prefix + pairs.join('&') : '';
	}
	
	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(285);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(286);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0, i;
	
	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 286 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000
	var m = s * 60
	var h = m * 60
	var d = h * 24
	var y = d * 365.25
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {}
	  var type = typeof val
	  if (type === 'string' && val.length > 0) {
	    return parse(val)
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ?
				fmtLong(val) :
				fmtShort(val)
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
	}
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str)
	  if (str.length > 10000) {
	    return
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
	  if (!match) {
	    return
	  }
	  var n = parseFloat(match[1])
	  var type = (match[2] || 'ms').toLowerCase()
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n
	    default:
	      return undefined
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd'
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h'
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm'
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's'
	  }
	  return ms + 'ms'
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms'
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's'
	}


/***/ },
/* 287 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventTarget = __webpack_require__(289)
	  ;
	
	function EventEmitter() {
	  EventTarget.call(this);
	}
	
	inherits(EventEmitter, EventTarget);
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  if (type) {
	    delete this._listeners[type];
	  } else {
	    this._listeners = {};
	  }
	};
	
	EventEmitter.prototype.once = function(type, listener) {
	  var self = this
	    , fired = false;
	
	  function g() {
	    self.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  this.on(type, g);
	};
	
	EventEmitter.prototype.emit = function() {
	  var type = arguments[0];
	  var listeners = this._listeners[type];
	  if (!listeners) {
	    return;
	  }
	  // equivalent of Array.prototype.slice.call(arguments, 1);
	  var l = arguments.length;
	  var args = new Array(l - 1);
	  for (var ai = 1; ai < l; ai++) {
	    args[ai - 1] = arguments[ai];
	  }
	  for (var i = 0; i < listeners.length; i++) {
	    listeners[i].apply(this, args);
	  }
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
	EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
	
	module.exports.EventEmitter = EventEmitter;


/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	/* Simplified implementation of DOM2 EventTarget.
	 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
	 */
	
	function EventTarget() {
	  this._listeners = {};
	}
	
	EventTarget.prototype.addEventListener = function(eventType, listener) {
	  if (!(eventType in this._listeners)) {
	    this._listeners[eventType] = [];
	  }
	  var arr = this._listeners[eventType];
	  // #4
	  if (arr.indexOf(listener) === -1) {
	    // Make a copy so as not to interfere with a current dispatchEvent.
	    arr = arr.concat([listener]);
	  }
	  this._listeners[eventType] = arr;
	};
	
	EventTarget.prototype.removeEventListener = function(eventType, listener) {
	  var arr = this._listeners[eventType];
	  if (!arr) {
	    return;
	  }
	  var idx = arr.indexOf(listener);
	  if (idx !== -1) {
	    if (arr.length > 1) {
	      // Make a copy so as not to interfere with a current dispatchEvent.
	      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
	    } else {
	      delete this._listeners[eventType];
	    }
	    return;
	  }
	};
	
	EventTarget.prototype.dispatchEvent = function() {
	  var event = arguments[0];
	  var t = event.type;
	  // equivalent of Array.prototype.slice.call(arguments, 0);
	  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
	  // TODO: This doesn't match the real behavior; per spec, onfoo get
	  // their place in line from the /first/ time they're set from
	  // non-null. Although WebKit bumps it to the end every time it's
	  // set.
	  if (this['on' + t]) {
	    this['on' + t].apply(this, args);
	  }
	  if (t in this._listeners) {
	    // Grab a reference to the listeners list. removeEventListener may alter the list.
	    var listeners = this._listeners[t];
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	};
	
	module.exports = EventTarget;


/***/ },
/* 290 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var Driver = global.WebSocket || global.MozWebSocket;
	if (Driver) {
		module.exports = function WebSocketBrowserDriver(url) {
			return new Driver(url);
		};
	} else {
		module.exports = undefined;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , AjaxBasedTransport = __webpack_require__(292)
	  , XhrReceiver = __webpack_require__(296)
	  , XHRCorsObject = __webpack_require__(297)
	  , XHRLocalObject = __webpack_require__(299)
	  , browser = __webpack_require__(300)
	  ;
	
	function XhrStreamingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
	}
	
	inherits(XhrStreamingTransport, AjaxBasedTransport);
	
	XhrStreamingTransport.enabled = function(info) {
	  if (info.nullOrigin) {
	    return false;
	  }
	  // Opera doesn't support xhr-streaming #60
	  // But it might be able to #92
	  if (browser.isOpera()) {
	    return false;
	  }
	
	  return XHRCorsObject.enabled;
	};
	
	XhrStreamingTransport.transportName = 'xhr-streaming';
	XhrStreamingTransport.roundTrips = 2; // preflight, ajax
	
	// Safari gets confused when a streaming ajax request is started
	// before onload. This causes the load indicator to spin indefinetely.
	// Only require body when used in a browser
	XhrStreamingTransport.needBody = !!global.document;
	
	module.exports = XhrStreamingTransport;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , urlUtils = __webpack_require__(279)
	  , SenderReceiver = __webpack_require__(293)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:ajax-based');
	}
	
	function createAjaxSender(AjaxObject) {
	  return function(url, payload, callback) {
	    debug('create ajax sender', url, payload);
	    var opt = {};
	    if (typeof payload === 'string') {
	      opt.headers = {'Content-type': 'text/plain'};
	    }
	    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
	    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
	    xo.once('finish', function(status) {
	      debug('finish', status);
	      xo = null;
	
	      if (status !== 200 && status !== 204) {
	        return callback(new Error('http status ' + status));
	      }
	      callback();
	    });
	    return function() {
	      debug('abort');
	      xo.close();
	      xo = null;
	
	      var err = new Error('Aborted');
	      err.code = 1000;
	      callback(err);
	    };
	  };
	}
	
	function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
	  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
	}
	
	inherits(AjaxBasedTransport, SenderReceiver);
	
	module.exports = AjaxBasedTransport;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , urlUtils = __webpack_require__(279)
	  , BufferedSender = __webpack_require__(294)
	  , Polling = __webpack_require__(295)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:sender-receiver');
	}
	
	function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
	  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
	  debug(pollUrl);
	  var self = this;
	  BufferedSender.call(this, transUrl, senderFunc);
	
	  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
	  this.poll.on('message', function(msg) {
	    debug('poll message', msg);
	    self.emit('message', msg);
	  });
	  this.poll.once('close', function(code, reason) {
	    debug('poll close', code, reason);
	    self.poll = null;
	    self.emit('close', code, reason);
	    self.close();
	  });
	}
	
	inherits(SenderReceiver, BufferedSender);
	
	SenderReceiver.prototype.close = function() {
	  BufferedSender.prototype.close.call(this);
	  debug('close');
	  this.removeAllListeners();
	  if (this.poll) {
	    this.poll.abort();
	    this.poll = null;
	  }
	};
	
	module.exports = SenderReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:buffered-sender');
	}
	
	function BufferedSender(url, sender) {
	  debug(url);
	  EventEmitter.call(this);
	  this.sendBuffer = [];
	  this.sender = sender;
	  this.url = url;
	}
	
	inherits(BufferedSender, EventEmitter);
	
	BufferedSender.prototype.send = function(message) {
	  debug('send', message);
	  this.sendBuffer.push(message);
	  if (!this.sendStop) {
	    this.sendSchedule();
	  }
	};
	
	// For polling transports in a situation when in the message callback,
	// new message is being send. If the sending connection was started
	// before receiving one, it is possible to saturate the network and
	// timeout due to the lack of receiving socket. To avoid that we delay
	// sending messages by some small time, in order to let receiving
	// connection be started beforehand. This is only a halfmeasure and
	// does not fix the big problem, but it does make the tests go more
	// stable on slow networks.
	BufferedSender.prototype.sendScheduleWait = function() {
	  debug('sendScheduleWait');
	  var self = this;
	  var tref;
	  this.sendStop = function() {
	    debug('sendStop');
	    self.sendStop = null;
	    clearTimeout(tref);
	  };
	  tref = setTimeout(function() {
	    debug('timeout');
	    self.sendStop = null;
	    self.sendSchedule();
	  }, 25);
	};
	
	BufferedSender.prototype.sendSchedule = function() {
	  debug('sendSchedule', this.sendBuffer.length);
	  var self = this;
	  if (this.sendBuffer.length > 0) {
	    var payload = '[' + this.sendBuffer.join(',') + ']';
	    this.sendStop = this.sender(this.url, payload, function(err) {
	      self.sendStop = null;
	      if (err) {
	        debug('error', err);
	        self.emit('close', err.code || 1006, 'Sending error: ' + err);
	        self.close();
	      } else {
	        self.sendScheduleWait();
	      }
	    });
	    this.sendBuffer = [];
	  }
	};
	
	BufferedSender.prototype._cleanup = function() {
	  debug('_cleanup');
	  this.removeAllListeners();
	};
	
	BufferedSender.prototype.close = function() {
	  debug('close');
	  this._cleanup();
	  if (this.sendStop) {
	    this.sendStop();
	    this.sendStop = null;
	  }
	};
	
	module.exports = BufferedSender;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:polling');
	}
	
	function Polling(Receiver, receiveUrl, AjaxObject) {
	  debug(receiveUrl);
	  EventEmitter.call(this);
	  this.Receiver = Receiver;
	  this.receiveUrl = receiveUrl;
	  this.AjaxObject = AjaxObject;
	  this._scheduleReceiver();
	}
	
	inherits(Polling, EventEmitter);
	
	Polling.prototype._scheduleReceiver = function() {
	  debug('_scheduleReceiver');
	  var self = this;
	  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
	
	  poll.on('message', function(msg) {
	    debug('message', msg);
	    self.emit('message', msg);
	  });
	
	  poll.once('close', function(code, reason) {
	    debug('close', code, reason, self.pollIsClosing);
	    self.poll = poll = null;
	
	    if (!self.pollIsClosing) {
	      if (reason === 'network') {
	        self._scheduleReceiver();
	      } else {
	        self.emit('close', code || 1006, reason);
	        self.removeAllListeners();
	      }
	    }
	  });
	};
	
	Polling.prototype.abort = function() {
	  debug('abort');
	  this.removeAllListeners();
	  this.pollIsClosing = true;
	  if (this.poll) {
	    this.poll.abort();
	  }
	};
	
	module.exports = Polling;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:receiver:xhr');
	}
	
	function XhrReceiver(url, AjaxObject) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;
	
	  this.bufferPosition = 0;
	
	  this.xo = new AjaxObject('POST', url, null);
	  this.xo.on('chunk', this._chunkHandler.bind(this));
	  this.xo.once('finish', function(status, text) {
	    debug('finish', status, text);
	    self._chunkHandler(status, text);
	    self.xo = null;
	    var reason = status === 200 ? 'network' : 'permanent';
	    debug('close', reason);
	    self.emit('close', null, reason);
	    self._cleanup();
	  });
	}
	
	inherits(XhrReceiver, EventEmitter);
	
	XhrReceiver.prototype._chunkHandler = function(status, text) {
	  debug('_chunkHandler', status);
	  if (status !== 200 || !text) {
	    return;
	  }
	
	  for (var idx = -1; ; this.bufferPosition += idx + 1) {
	    var buf = text.slice(this.bufferPosition);
	    idx = buf.indexOf('\n');
	    if (idx === -1) {
	      break;
	    }
	    var msg = buf.slice(0, idx);
	    if (msg) {
	      debug('message', msg);
	      this.emit('message', msg);
	    }
	  }
	};
	
	XhrReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  this.removeAllListeners();
	};
	
	XhrReceiver.prototype.abort = function() {
	  debug('abort');
	  if (this.xo) {
	    this.xo.close();
	    debug('close');
	    this.emit('close', null, 'user');
	    this.xo = null;
	  }
	  this._cleanup();
	};
	
	module.exports = XhrReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , XhrDriver = __webpack_require__(298)
	  ;
	
	function XHRCorsObject(method, url, payload, opts) {
	  XhrDriver.call(this, method, url, payload, opts);
	}
	
	inherits(XHRCorsObject, XhrDriver);
	
	XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
	
	module.exports = XHRCorsObject;


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  , utils = __webpack_require__(276)
	  , urlUtils = __webpack_require__(279)
	  , XHR = global.XMLHttpRequest
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:browser:xhr');
	}
	
	function AbstractXHRObject(method, url, payload, opts) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);
	
	  setTimeout(function () {
	    self._start(method, url, payload, opts);
	  }, 0);
	}
	
	inherits(AbstractXHRObject, EventEmitter);
	
	AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
	  var self = this;
	
	  try {
	    this.xhr = new XHR();
	  } catch (x) {
	    // intentionally empty
	  }
	
	  if (!this.xhr) {
	    debug('no xhr');
	    this.emit('finish', 0, 'no xhr support');
	    this._cleanup();
	    return;
	  }
	
	  // several browsers cache POSTs
	  url = urlUtils.addQuery(url, 't=' + (+new Date()));
	
	  // Explorer tends to keep connection open, even after the
	  // tab gets closed: http://bugs.jquery.com/ticket/5280
	  this.unloadRef = utils.unloadAdd(function() {
	    debug('unload cleanup');
	    self._cleanup(true);
	  });
	  try {
	    this.xhr.open(method, url, true);
	    if (this.timeout && 'timeout' in this.xhr) {
	      this.xhr.timeout = this.timeout;
	      this.xhr.ontimeout = function() {
	        debug('xhr timeout');
	        self.emit('finish', 0, '');
	        self._cleanup(false);
	      };
	    }
	  } catch (e) {
	    debug('exception', e);
	    // IE raises an exception on wrong port.
	    this.emit('finish', 0, '');
	    this._cleanup(false);
	    return;
	  }
	
	  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
	    debug('withCredentials');
	    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
	    // "This never affects same-site requests."
	
	    this.xhr.withCredentials = 'true';
	  }
	  if (opts && opts.headers) {
	    for (var key in opts.headers) {
	      this.xhr.setRequestHeader(key, opts.headers[key]);
	    }
	  }
	
	  this.xhr.onreadystatechange = function() {
	    if (self.xhr) {
	      var x = self.xhr;
	      var text, status;
	      debug('readyState', x.readyState);
	      switch (x.readyState) {
	      case 3:
	        // IE doesn't like peeking into responseText or status
	        // on Microsoft.XMLHTTP and readystate=3
	        try {
	          status = x.status;
	          text = x.responseText;
	        } catch (e) {
	          // intentionally empty
	        }
	        debug('status', status);
	        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	        if (status === 1223) {
	          status = 204;
	        }
	
	        // IE does return readystate == 3 for 404 answers.
	        if (status === 200 && text && text.length > 0) {
	          debug('chunk');
	          self.emit('chunk', status, text);
	        }
	        break;
	      case 4:
	        status = x.status;
	        debug('status', status);
	        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	        if (status === 1223) {
	          status = 204;
	        }
	        // IE returns this for a bad port
	        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
	        if (status === 12005 || status === 12029) {
	          status = 0;
	        }
	
	        debug('finish', status, x.responseText);
	        self.emit('finish', status, x.responseText);
	        self._cleanup(false);
	        break;
	      }
	    }
	  };
	
	  try {
	    self.xhr.send(payload);
	  } catch (e) {
	    self.emit('finish', 0, '');
	    self._cleanup(false);
	  }
	};
	
	AbstractXHRObject.prototype._cleanup = function(abort) {
	  debug('cleanup');
	  if (!this.xhr) {
	    return;
	  }
	  this.removeAllListeners();
	  utils.unloadDel(this.unloadRef);
	
	  // IE needs this field to be a function
	  this.xhr.onreadystatechange = function() {};
	  if (this.xhr.ontimeout) {
	    this.xhr.ontimeout = null;
	  }
	
	  if (abort) {
	    try {
	      this.xhr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xhr = null;
	};
	
	AbstractXHRObject.prototype.close = function() {
	  debug('close');
	  this._cleanup(true);
	};
	
	AbstractXHRObject.enabled = !!XHR;
	// override XMLHttpRequest for IE6/7
	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (!AbstractXHRObject.enabled && (axo in global)) {
	  debug('overriding xmlhttprequest');
	  XHR = function() {
	    try {
	      return new global[axo]('Microsoft.XMLHTTP');
	    } catch (e) {
	      return null;
	    }
	  };
	  AbstractXHRObject.enabled = !!new XHR();
	}
	
	var cors = false;
	try {
	  cors = 'withCredentials' in new XHR();
	} catch (ignored) {
	  // intentionally empty
	}
	
	AbstractXHRObject.supportsCORS = cors;
	
	module.exports = AbstractXHRObject;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(140)))

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , XhrDriver = __webpack_require__(298)
	  ;
	
	function XHRLocalObject(method, url, payload /*, opts */) {
	  XhrDriver.call(this, method, url, payload, {
	    noCredentials: true
	  });
	}
	
	inherits(XHRLocalObject, XhrDriver);
	
	XHRLocalObject.enabled = XhrDriver.enabled;
	
	module.exports = XHRLocalObject;


/***/ },
/* 300 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	module.exports = {
	  isOpera: function() {
	    return global.navigator &&
	      /opera/i.test(global.navigator.userAgent);
	  }
	
	, isKonqueror: function() {
	    return global.navigator &&
	      /konqueror/i.test(global.navigator.userAgent);
	  }
	
	  // #187 wrap document.domain in try/catch because of WP8 from file:///
	, hasDomain: function () {
	    // non-browser client always has a domain
	    if (!global.document) {
	      return true;
	    }
	
	    try {
	      return !!global.document.domain;
	    } catch (e) {
	      return false;
	    }
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , AjaxBasedTransport = __webpack_require__(292)
	  , XhrReceiver = __webpack_require__(296)
	  , XDRObject = __webpack_require__(302)
	  ;
	
	// According to:
	//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
	//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
	
	function XdrStreamingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
	}
	
	inherits(XdrStreamingTransport, AjaxBasedTransport);
	
	XdrStreamingTransport.enabled = function(info) {
	  if (info.cookie_needed || info.nullOrigin) {
	    return false;
	  }
	  return XDRObject.enabled && info.sameScheme;
	};
	
	XdrStreamingTransport.transportName = 'xdr-streaming';
	XdrStreamingTransport.roundTrips = 2; // preflight, ajax
	
	module.exports = XdrStreamingTransport;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  , eventUtils = __webpack_require__(276)
	  , browser = __webpack_require__(300)
	  , urlUtils = __webpack_require__(279)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:sender:xdr');
	}
	
	// References:
	//   http://ajaxian.com/archives/100-line-ajax-wrapper
	//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx
	
	function XDRObject(method, url, payload) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);
	
	  setTimeout(function() {
	    self._start(method, url, payload);
	  }, 0);
	}
	
	inherits(XDRObject, EventEmitter);
	
	XDRObject.prototype._start = function(method, url, payload) {
	  debug('_start');
	  var self = this;
	  var xdr = new global.XDomainRequest();
	  // IE caches even POSTs
	  url = urlUtils.addQuery(url, 't=' + (+new Date()));
	
	  xdr.onerror = function() {
	    debug('onerror');
	    self._error();
	  };
	  xdr.ontimeout = function() {
	    debug('ontimeout');
	    self._error();
	  };
	  xdr.onprogress = function() {
	    debug('progress', xdr.responseText);
	    self.emit('chunk', 200, xdr.responseText);
	  };
	  xdr.onload = function() {
	    debug('load');
	    self.emit('finish', 200, xdr.responseText);
	    self._cleanup(false);
	  };
	  this.xdr = xdr;
	  this.unloadRef = eventUtils.unloadAdd(function() {
	    self._cleanup(true);
	  });
	  try {
	    // Fails with AccessDenied if port number is bogus
	    this.xdr.open(method, url);
	    if (this.timeout) {
	      this.xdr.timeout = this.timeout;
	    }
	    this.xdr.send(payload);
	  } catch (x) {
	    this._error();
	  }
	};
	
	XDRObject.prototype._error = function() {
	  this.emit('finish', 0, '');
	  this._cleanup(false);
	};
	
	XDRObject.prototype._cleanup = function(abort) {
	  debug('cleanup', abort);
	  if (!this.xdr) {
	    return;
	  }
	  this.removeAllListeners();
	  eventUtils.unloadDel(this.unloadRef);
	
	  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
	  if (abort) {
	    try {
	      this.xdr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xdr = null;
	};
	
	XDRObject.prototype.close = function() {
	  debug('close');
	  this._cleanup(true);
	};
	
	// IE 8/9 if the request target uses the same scheme - #79
	XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());
	
	module.exports = XDRObject;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , AjaxBasedTransport = __webpack_require__(292)
	  , EventSourceReceiver = __webpack_require__(304)
	  , XHRCorsObject = __webpack_require__(297)
	  , EventSourceDriver = __webpack_require__(305)
	  ;
	
	function EventSourceTransport(transUrl) {
	  if (!EventSourceTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	
	  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
	}
	
	inherits(EventSourceTransport, AjaxBasedTransport);
	
	EventSourceTransport.enabled = function() {
	  return !!EventSourceDriver;
	};
	
	EventSourceTransport.transportName = 'eventsource';
	EventSourceTransport.roundTrips = 2;
	
	module.exports = EventSourceTransport;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  , EventSourceDriver = __webpack_require__(305)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:receiver:eventsource');
	}
	
	function EventSourceReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);
	
	  var self = this;
	  var es = this.es = new EventSourceDriver(url);
	  es.onmessage = function(e) {
	    debug('message', e.data);
	    self.emit('message', decodeURI(e.data));
	  };
	  es.onerror = function(e) {
	    debug('error', es.readyState, e);
	    // ES on reconnection has readyState = 0 or 1.
	    // on network error it's CLOSED = 2
	    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
	    self._cleanup();
	    self._close(reason);
	  };
	}
	
	inherits(EventSourceReceiver, EventEmitter);
	
	EventSourceReceiver.prototype.abort = function() {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};
	
	EventSourceReceiver.prototype._cleanup = function() {
	  debug('cleanup');
	  var es = this.es;
	  if (es) {
	    es.onmessage = es.onerror = null;
	    es.close();
	    this.es = null;
	  }
	};
	
	EventSourceReceiver.prototype._close = function(reason) {
	  debug('close', reason);
	  var self = this;
	  // Safari and chrome < 15 crash if we close window before
	  // waiting for ES cleanup. See:
	  // https://code.google.com/p/chromium/issues/detail?id=89155
	  setTimeout(function() {
	    self.emit('close', null, reason);
	    self.removeAllListeners();
	  }, 200);
	};
	
	module.exports = EventSourceReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 305 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global.EventSource;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , IframeTransport = __webpack_require__(307)
	  , objectUtils = __webpack_require__(312)
	  ;
	
	module.exports = function(transport) {
	
	  function IframeWrapTransport(transUrl, baseUrl) {
	    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
	  }
	
	  inherits(IframeWrapTransport, IframeTransport);
	
	  IframeWrapTransport.enabled = function(url, info) {
	    if (!global.document) {
	      return false;
	    }
	
	    var iframeInfo = objectUtils.extend({}, info);
	    iframeInfo.sameOrigin = true;
	    return transport.enabled(iframeInfo) && IframeTransport.enabled();
	  };
	
	  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
	  IframeWrapTransport.needBody = true;
	  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)
	
	  IframeWrapTransport.facadeTransport = transport;
	
	  return IframeWrapTransport;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	// Few cool transports do work only for same-origin. In order to make
	// them work cross-domain we shall use iframe, served from the
	// remote domain. New browsers have capabilities to communicate with
	// cross domain iframe using postMessage(). In IE it was implemented
	// from IE 8+, but of course, IE got some details wrong:
	//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
	//    http://stevesouders.com/misc/test-postmessage.php
	
	var inherits = __webpack_require__(287)
	  , JSON3 = __webpack_require__(308)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  , version = __webpack_require__(310)
	  , urlUtils = __webpack_require__(279)
	  , iframeUtils = __webpack_require__(311)
	  , eventUtils = __webpack_require__(276)
	  , random = __webpack_require__(277)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:transport:iframe');
	}
	
	function IframeTransport(transport, transUrl, baseUrl) {
	  if (!IframeTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  EventEmitter.call(this);
	
	  var self = this;
	  this.origin = urlUtils.getOrigin(baseUrl);
	  this.baseUrl = baseUrl;
	  this.transUrl = transUrl;
	  this.transport = transport;
	  this.windowId = random.string(8);
	
	  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
	  debug(transport, transUrl, iframeUrl);
	
	  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
	    debug('err callback');
	    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
	    self.close();
	  });
	
	  this.onmessageCallback = this._message.bind(this);
	  eventUtils.attachEvent('message', this.onmessageCallback);
	}
	
	inherits(IframeTransport, EventEmitter);
	
	IframeTransport.prototype.close = function() {
	  debug('close');
	  this.removeAllListeners();
	  if (this.iframeObj) {
	    eventUtils.detachEvent('message', this.onmessageCallback);
	    try {
	      // When the iframe is not loaded, IE raises an exception
	      // on 'contentWindow'.
	      this.postMessage('c');
	    } catch (x) {
	      // intentionally empty
	    }
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	    this.onmessageCallback = this.iframeObj = null;
	  }
	};
	
	IframeTransport.prototype._message = function(e) {
	  debug('message', e.data);
	  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
	    debug('not same origin', e.origin, this.origin);
	    return;
	  }
	
	  var iframeMessage;
	  try {
	    iframeMessage = JSON3.parse(e.data);
	  } catch (ignored) {
	    debug('bad json', e.data);
	    return;
	  }
	
	  if (iframeMessage.windowId !== this.windowId) {
	    debug('mismatched window id', iframeMessage.windowId, this.windowId);
	    return;
	  }
	
	  switch (iframeMessage.type) {
	  case 's':
	    this.iframeObj.loaded();
	    // window global dependency
	    this.postMessage('s', JSON3.stringify([
	      version
	    , this.transport
	    , this.transUrl
	    , this.baseUrl
	    ]));
	    break;
	  case 't':
	    this.emit('message', iframeMessage.data);
	    break;
	  case 'c':
	    var cdata;
	    try {
	      cdata = JSON3.parse(iframeMessage.data);
	    } catch (ignored) {
	      debug('bad json', iframeMessage.data);
	      return;
	    }
	    this.emit('close', cdata[0], cdata[1]);
	    this.close();
	    break;
	  }
	};
	
	IframeTransport.prototype.postMessage = function(type, data) {
	  debug('postMessage', type, data);
	  this.iframeObj.post(JSON3.stringify({
	    windowId: this.windowId
	  , type: type
	  , data: data || ''
	  }), this.origin);
	};
	
	IframeTransport.prototype.send = function(message) {
	  debug('send', message);
	  this.postMessage('m', message);
	};
	
	IframeTransport.enabled = function() {
	  return iframeUtils.iframeEnabled;
	};
	
	IframeTransport.transportName = 'iframe';
	IframeTransport.roundTrips = 2;
	
	module.exports = IframeTransport;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(309);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), (function() { return this; }())))

/***/ },
/* 309 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = '1.1.2';


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var eventUtils = __webpack_require__(276)
	  , JSON3 = __webpack_require__(308)
	  , browser = __webpack_require__(300)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:utils:iframe');
	}
	
	module.exports = {
	  WPrefix: '_jp'
	, currentWindowId: null
	
	, polluteGlobalNamespace: function() {
	    if (!(module.exports.WPrefix in global)) {
	      global[module.exports.WPrefix] = {};
	    }
	  }
	
	, postMessage: function(type, data) {
	    if (global.parent !== global) {
	      global.parent.postMessage(JSON3.stringify({
	        windowId: module.exports.currentWindowId
	      , type: type
	      , data: data || ''
	      }), '*');
	    } else {
	      debug('Cannot postMessage, no parent window.', type, data);
	    }
	  }
	
	, createIframe: function(iframeUrl, errorCallback) {
	    var iframe = global.document.createElement('iframe');
	    var tref, unloadRef;
	    var unattach = function() {
	      debug('unattach');
	      clearTimeout(tref);
	      // Explorer had problems with that.
	      try {
	        iframe.onload = null;
	      } catch (x) {
	        // intentionally empty
	      }
	      iframe.onerror = null;
	    };
	    var cleanup = function() {
	      debug('cleanup');
	      if (iframe) {
	        unattach();
	        // This timeout makes chrome fire onbeforeunload event
	        // within iframe. Without the timeout it goes straight to
	        // onunload.
	        setTimeout(function() {
	          if (iframe) {
	            iframe.parentNode.removeChild(iframe);
	          }
	          iframe = null;
	        }, 0);
	        eventUtils.unloadDel(unloadRef);
	      }
	    };
	    var onerror = function(err) {
	      debug('onerror', err);
	      if (iframe) {
	        cleanup();
	        errorCallback(err);
	      }
	    };
	    var post = function(msg, origin) {
	      debug('post', msg, origin);
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function() {
	          if (iframe && iframe.contentWindow) {
	            iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };
	
	    iframe.src = iframeUrl;
	    iframe.style.display = 'none';
	    iframe.style.position = 'absolute';
	    iframe.onerror = function() {
	      onerror('onerror');
	    };
	    iframe.onload = function() {
	      debug('onload');
	      // `onload` is triggered before scripts on the iframe are
	      // executed. Give it few seconds to actually load stuff.
	      clearTimeout(tref);
	      tref = setTimeout(function() {
	        onerror('onload timeout');
	      }, 2000);
	    };
	    global.document.body.appendChild(iframe);
	    tref = setTimeout(function() {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post
	    , cleanup: cleanup
	    , loaded: unattach
	    };
	  }
	
	/* eslint no-undef: "off", new-cap: "off" */
	, createHtmlfile: function(iframeUrl, errorCallback) {
	    var axo = ['Active'].concat('Object').join('X');
	    var doc = new global[axo]('htmlfile');
	    var tref, unloadRef;
	    var iframe;
	    var unattach = function() {
	      clearTimeout(tref);
	      iframe.onerror = null;
	    };
	    var cleanup = function() {
	      if (doc) {
	        unattach();
	        eventUtils.unloadDel(unloadRef);
	        iframe.parentNode.removeChild(iframe);
	        iframe = doc = null;
	        CollectGarbage();
	      }
	    };
	    var onerror = function(r) {
	      debug('onerror', r);
	      if (doc) {
	        cleanup();
	        errorCallback(r);
	      }
	    };
	    var post = function(msg, origin) {
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function() {
	          if (iframe && iframe.contentWindow) {
	              iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };
	
	    doc.open();
	    doc.write('<html><s' + 'cript>' +
	              'document.domain="' + global.document.domain + '";' +
	              '</s' + 'cript></html>');
	    doc.close();
	    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
	    var c = doc.createElement('div');
	    doc.body.appendChild(c);
	    iframe = doc.createElement('iframe');
	    c.appendChild(iframe);
	    iframe.src = iframeUrl;
	    iframe.onerror = function() {
	      onerror('onerror');
	    };
	    tref = setTimeout(function() {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post
	    , cleanup: cleanup
	    , loaded: unattach
	    };
	  }
	};
	
	module.exports.iframeEnabled = false;
	if (global.document) {
	  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
	  // huge delay, or not at all.
	  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
	    typeof global.postMessage === 'object') && (!browser.isKonqueror());
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  isObject: function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  }
	
	, extend: function(obj) {
	    if (!this.isObject(obj)) {
	      return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (Object.prototype.hasOwnProperty.call(source, prop)) {
	          obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  }
	};


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , HtmlfileReceiver = __webpack_require__(314)
	  , XHRLocalObject = __webpack_require__(299)
	  , AjaxBasedTransport = __webpack_require__(292)
	  ;
	
	function HtmlFileTransport(transUrl) {
	  if (!HtmlfileReceiver.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
	}
	
	inherits(HtmlFileTransport, AjaxBasedTransport);
	
	HtmlFileTransport.enabled = function(info) {
	  return HtmlfileReceiver.enabled && info.sameOrigin;
	};
	
	HtmlFileTransport.transportName = 'htmlfile';
	HtmlFileTransport.roundTrips = 2;
	
	module.exports = HtmlFileTransport;


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var inherits = __webpack_require__(287)
	  , iframeUtils = __webpack_require__(311)
	  , urlUtils = __webpack_require__(279)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  , random = __webpack_require__(277)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:receiver:htmlfile');
	}
	
	function HtmlfileReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;
	  iframeUtils.polluteGlobalNamespace();
	
	  this.id = 'a' + random.string(6);
	  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
	
	  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
	  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
	      iframeUtils.createHtmlfile : iframeUtils.createIframe;
	
	  global[iframeUtils.WPrefix][this.id] = {
	    start: function() {
	      debug('start');
	      self.iframeObj.loaded();
	    }
	  , message: function(data) {
	      debug('message', data);
	      self.emit('message', data);
	    }
	  , stop: function() {
	      debug('stop');
	      self._cleanup();
	      self._close('network');
	    }
	  };
	  this.iframeObj = constructFunc(url, function() {
	    debug('callback');
	    self._cleanup();
	    self._close('permanent');
	  });
	}
	
	inherits(HtmlfileReceiver, EventEmitter);
	
	HtmlfileReceiver.prototype.abort = function() {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};
	
	HtmlfileReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  if (this.iframeObj) {
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	  }
	  delete global[iframeUtils.WPrefix][this.id];
	};
	
	HtmlfileReceiver.prototype._close = function(reason) {
	  debug('_close', reason);
	  this.emit('close', null, reason);
	  this.removeAllListeners();
	};
	
	HtmlfileReceiver.htmlfileEnabled = false;
	
	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (axo in global) {
	  try {
	    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
	  } catch (x) {
	    // intentionally empty
	  }
	}
	
	HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
	
	module.exports = HtmlfileReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , AjaxBasedTransport = __webpack_require__(292)
	  , XhrReceiver = __webpack_require__(296)
	  , XHRCorsObject = __webpack_require__(297)
	  , XHRLocalObject = __webpack_require__(299)
	  ;
	
	function XhrPollingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
	}
	
	inherits(XhrPollingTransport, AjaxBasedTransport);
	
	XhrPollingTransport.enabled = function(info) {
	  if (info.nullOrigin) {
	    return false;
	  }
	
	  if (XHRLocalObject.enabled && info.sameOrigin) {
	    return true;
	  }
	  return XHRCorsObject.enabled;
	};
	
	XhrPollingTransport.transportName = 'xhr-polling';
	XhrPollingTransport.roundTrips = 2; // preflight, ajax
	
	module.exports = XhrPollingTransport;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , AjaxBasedTransport = __webpack_require__(292)
	  , XdrStreamingTransport = __webpack_require__(301)
	  , XhrReceiver = __webpack_require__(296)
	  , XDRObject = __webpack_require__(302)
	  ;
	
	function XdrPollingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
	}
	
	inherits(XdrPollingTransport, AjaxBasedTransport);
	
	XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
	XdrPollingTransport.transportName = 'xdr-polling';
	XdrPollingTransport.roundTrips = 2; // preflight, ajax
	
	module.exports = XdrPollingTransport;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// The simplest and most robust transport, using the well-know cross
	// domain hack - JSONP. This transport is quite inefficient - one
	// message could use up to one http request. But at least it works almost
	// everywhere.
	// Known limitations:
	//   o you will get a spinning cursor
	//   o for Konqueror a dumb timer is needed to detect errors
	
	var inherits = __webpack_require__(287)
	  , SenderReceiver = __webpack_require__(293)
	  , JsonpReceiver = __webpack_require__(318)
	  , jsonpSender = __webpack_require__(319)
	  ;
	
	function JsonPTransport(transUrl) {
	  if (!JsonPTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
	}
	
	inherits(JsonPTransport, SenderReceiver);
	
	JsonPTransport.enabled = function() {
	  return !!global.document;
	};
	
	JsonPTransport.transportName = 'jsonp-polling';
	JsonPTransport.roundTrips = 1;
	JsonPTransport.needBody = true;
	
	module.exports = JsonPTransport;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var utils = __webpack_require__(311)
	  , random = __webpack_require__(277)
	  , browser = __webpack_require__(300)
	  , urlUtils = __webpack_require__(279)
	  , inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:receiver:jsonp');
	}
	
	function JsonpReceiver(url) {
	  debug(url);
	  var self = this;
	  EventEmitter.call(this);
	
	  utils.polluteGlobalNamespace();
	
	  this.id = 'a' + random.string(6);
	  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
	
	  global[utils.WPrefix][this.id] = this._callback.bind(this);
	  this._createScript(urlWithId);
	
	  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
	  this.timeoutId = setTimeout(function() {
	    debug('timeout');
	    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
	  }, JsonpReceiver.timeout);
	}
	
	inherits(JsonpReceiver, EventEmitter);
	
	JsonpReceiver.prototype.abort = function() {
	  debug('abort');
	  if (global[utils.WPrefix][this.id]) {
	    var err = new Error('JSONP user aborted read');
	    err.code = 1000;
	    this._abort(err);
	  }
	};
	
	JsonpReceiver.timeout = 35000;
	JsonpReceiver.scriptErrorTimeout = 1000;
	
	JsonpReceiver.prototype._callback = function(data) {
	  debug('_callback', data);
	  this._cleanup();
	
	  if (this.aborting) {
	    return;
	  }
	
	  if (data) {
	    debug('message', data);
	    this.emit('message', data);
	  }
	  this.emit('close', null, 'network');
	  this.removeAllListeners();
	};
	
	JsonpReceiver.prototype._abort = function(err) {
	  debug('_abort', err);
	  this._cleanup();
	  this.aborting = true;
	  this.emit('close', err.code, err.message);
	  this.removeAllListeners();
	};
	
	JsonpReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  clearTimeout(this.timeoutId);
	  if (this.script2) {
	    this.script2.parentNode.removeChild(this.script2);
	    this.script2 = null;
	  }
	  if (this.script) {
	    var script = this.script;
	    // Unfortunately, you can't really abort script loading of
	    // the script.
	    script.parentNode.removeChild(script);
	    script.onreadystatechange = script.onerror =
	        script.onload = script.onclick = null;
	    this.script = null;
	  }
	  delete global[utils.WPrefix][this.id];
	};
	
	JsonpReceiver.prototype._scriptError = function() {
	  debug('_scriptError');
	  var self = this;
	  if (this.errorTimer) {
	    return;
	  }
	
	  this.errorTimer = setTimeout(function() {
	    if (!self.loadedOkay) {
	      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
	    }
	  }, JsonpReceiver.scriptErrorTimeout);
	};
	
	JsonpReceiver.prototype._createScript = function(url) {
	  debug('_createScript', url);
	  var self = this;
	  var script = this.script = global.document.createElement('script');
	  var script2;  // Opera synchronous load trick.
	
	  script.id = 'a' + random.string(8);
	  script.src = url;
	  script.type = 'text/javascript';
	  script.charset = 'UTF-8';
	  script.onerror = this._scriptError.bind(this);
	  script.onload = function() {
	    debug('onload');
	    self._abort(new Error('JSONP script loaded abnormally (onload)'));
	  };
	
	  // IE9 fires 'error' event after onreadystatechange or before, in random order.
	  // Use loadedOkay to determine if actually errored
	  script.onreadystatechange = function() {
	    debug('onreadystatechange', script.readyState);
	    if (/loaded|closed/.test(script.readyState)) {
	      if (script && script.htmlFor && script.onclick) {
	        self.loadedOkay = true;
	        try {
	          // In IE, actually execute the script.
	          script.onclick();
	        } catch (x) {
	          // intentionally empty
	        }
	      }
	      if (script) {
	        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
	      }
	    }
	  };
	  // IE: event/htmlFor/onclick trick.
	  // One can't rely on proper order for onreadystatechange. In order to
	  // make sure, set a 'htmlFor' and 'event' properties, so that
	  // script code will be installed as 'onclick' handler for the
	  // script object. Later, onreadystatechange, manually execute this
	  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
	  // set. For reference see:
	  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	  // Also, read on that about script ordering:
	  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
	  if (typeof script.async === 'undefined' && global.document.attachEvent) {
	    // According to mozilla docs, in recent browsers script.async defaults
	    // to 'true', so we may use it to detect a good browser:
	    // https://developer.mozilla.org/en/HTML/Element/script
	    if (!browser.isOpera()) {
	      // Naively assume we're in IE
	      try {
	        script.htmlFor = script.id;
	        script.event = 'onclick';
	      } catch (x) {
	        // intentionally empty
	      }
	      script.async = true;
	    } else {
	      // Opera, second sync script hack
	      script2 = this.script2 = global.document.createElement('script');
	      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
	      script.async = script2.async = false;
	    }
	  }
	  if (typeof script.async !== 'undefined') {
	    script.async = true;
	  }
	
	  var head = global.document.getElementsByTagName('head')[0];
	  head.insertBefore(script, head.firstChild);
	  if (script2) {
	    head.insertBefore(script2, head.firstChild);
	  }
	};
	
	module.exports = JsonpReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var random = __webpack_require__(277)
	  , urlUtils = __webpack_require__(279)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:sender:jsonp');
	}
	
	var form, area;
	
	function createIframe(id) {
	  debug('createIframe', id);
	  try {
	    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	    return global.document.createElement('<iframe name="' + id + '">');
	  } catch (x) {
	    var iframe = global.document.createElement('iframe');
	    iframe.name = id;
	    return iframe;
	  }
	}
	
	function createForm() {
	  debug('createForm');
	  form = global.document.createElement('form');
	  form.style.display = 'none';
	  form.style.position = 'absolute';
	  form.method = 'POST';
	  form.enctype = 'application/x-www-form-urlencoded';
	  form.acceptCharset = 'UTF-8';
	
	  area = global.document.createElement('textarea');
	  area.name = 'd';
	  form.appendChild(area);
	
	  global.document.body.appendChild(form);
	}
	
	module.exports = function(url, payload, callback) {
	  debug(url, payload);
	  if (!form) {
	    createForm();
	  }
	  var id = 'a' + random.string(8);
	  form.target = id;
	  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
	
	  var iframe = createIframe(id);
	  iframe.id = id;
	  iframe.style.display = 'none';
	  form.appendChild(iframe);
	
	  try {
	    area.value = payload;
	  } catch (e) {
	    // seriously broken browsers get here
	  }
	  form.submit();
	
	  var completed = function(err) {
	    debug('completed', id, err);
	    if (!iframe.onerror) {
	      return;
	    }
	    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
	    // Opera mini doesn't like if we GC iframe
	    // immediately, thus this timeout.
	    setTimeout(function() {
	      debug('cleaning up', id);
	      iframe.parentNode.removeChild(iframe);
	      iframe = null;
	    }, 500);
	    area.value = '';
	    // It is not possible to detect if the iframe succeeded or
	    // failed to submit our form.
	    callback(err);
	  };
	  iframe.onerror = function() {
	    debug('onerror', id);
	    completed();
	  };
	  iframe.onload = function() {
	    debug('onload', id);
	    completed();
	  };
	  iframe.onreadystatechange = function(e) {
	    debug('onreadystatechange', id, iframe.readyState, e);
	    if (iframe.readyState === 'complete') {
	      completed();
	    }
	  };
	  return function() {
	    debug('aborted', id);
	    completed(new Error('Aborted'));
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	__webpack_require__(321);
	
	var URL = __webpack_require__(280)
	  , inherits = __webpack_require__(287)
	  , JSON3 = __webpack_require__(308)
	  , random = __webpack_require__(277)
	  , escape = __webpack_require__(322)
	  , urlUtils = __webpack_require__(279)
	  , eventUtils = __webpack_require__(276)
	  , transport = __webpack_require__(323)
	  , objectUtils = __webpack_require__(312)
	  , browser = __webpack_require__(300)
	  , log = __webpack_require__(324)
	  , Event = __webpack_require__(325)
	  , EventTarget = __webpack_require__(289)
	  , loc = __webpack_require__(326)
	  , CloseEvent = __webpack_require__(327)
	  , TransportMessageEvent = __webpack_require__(328)
	  , InfoReceiver = __webpack_require__(329)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:main');
	}
	
	var transports;
	
	// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
	function SockJS(url, protocols, options) {
	  if (!(this instanceof SockJS)) {
	    return new SockJS(url, protocols, options);
	  }
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
	  }
	  EventTarget.call(this);
	
	  this.readyState = SockJS.CONNECTING;
	  this.extensions = '';
	  this.protocol = '';
	
	  // non-standard extension
	  options = options || {};
	  if (options.protocols_whitelist) {
	    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
	  }
	  this._transportsWhitelist = options.transports;
	  this._transportOptions = options.transportOptions || {};
	
	  var sessionId = options.sessionId || 8;
	  if (typeof sessionId === 'function') {
	    this._generateSessionId = sessionId;
	  } else if (typeof sessionId === 'number') {
	    this._generateSessionId = function() {
	      return random.string(sessionId);
	    };
	  } else {
	    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
	  }
	
	  this._server = options.server || random.numberString(1000);
	
	  // Step 1 of WS spec - parse and validate the url. Issue #8
	  var parsedUrl = new URL(url);
	  if (!parsedUrl.host || !parsedUrl.protocol) {
	    throw new SyntaxError("The URL '" + url + "' is invalid");
	  } else if (parsedUrl.hash) {
	    throw new SyntaxError('The URL must not contain a fragment');
	  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
	    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
	  }
	
	  var secure = parsedUrl.protocol === 'https:';
	  // Step 2 - don't allow secure origin with an insecure protocol
	  if (loc.protocol === 'https' && !secure) {
	    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
	  }
	
	  // Step 3 - check port access - no need here
	  // Step 4 - parse protocols argument
	  if (!protocols) {
	    protocols = [];
	  } else if (!Array.isArray(protocols)) {
	    protocols = [protocols];
	  }
	
	  // Step 5 - check protocols argument
	  var sortedProtocols = protocols.sort();
	  sortedProtocols.forEach(function(proto, i) {
	    if (!proto) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
	    }
	    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
	    }
	  });
	
	  // Step 6 - convert origin
	  var o = urlUtils.getOrigin(loc.href);
	  this._origin = o ? o.toLowerCase() : null;
	
	  // remove the trailing slash
	  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));
	
	  // store the sanitized url
	  this.url = parsedUrl.href;
	  debug('using url', this.url);
	
	  // Step 7 - start connection in background
	  // obtain server info
	  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
	  this._urlInfo = {
	    nullOrigin: !browser.hasDomain()
	  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
	  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
	  };
	
	  this._ir = new InfoReceiver(this.url, this._urlInfo);
	  this._ir.once('finish', this._receiveInfo.bind(this));
	}
	
	inherits(SockJS, EventTarget);
	
	function userSetCode(code) {
	  return code === 1000 || (code >= 3000 && code <= 4999);
	}
	
	SockJS.prototype.close = function(code, reason) {
	  // Step 1
	  if (code && !userSetCode(code)) {
	    throw new Error('InvalidAccessError: Invalid code');
	  }
	  // Step 2.4 states the max is 123 bytes, but we are just checking length
	  if (reason && reason.length > 123) {
	    throw new SyntaxError('reason argument has an invalid length');
	  }
	
	  // Step 3.1
	  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
	    return;
	  }
	
	  // TODO look at docs to determine how to set this
	  var wasClean = true;
	  this._close(code || 1000, reason || 'Normal closure', wasClean);
	};
	
	SockJS.prototype.send = function(data) {
	  // #13 - convert anything non-string to string
	  // TODO this currently turns objects into [object Object]
	  if (typeof data !== 'string') {
	    data = '' + data;
	  }
	  if (this.readyState === SockJS.CONNECTING) {
	    throw new Error('InvalidStateError: The connection has not been established yet');
	  }
	  if (this.readyState !== SockJS.OPEN) {
	    return;
	  }
	  this._transport.send(escape.quote(data));
	};
	
	SockJS.version = __webpack_require__(310);
	
	SockJS.CONNECTING = 0;
	SockJS.OPEN = 1;
	SockJS.CLOSING = 2;
	SockJS.CLOSED = 3;
	
	SockJS.prototype._receiveInfo = function(info, rtt) {
	  debug('_receiveInfo', rtt);
	  this._ir = null;
	  if (!info) {
	    this._close(1002, 'Cannot connect to server');
	    return;
	  }
	
	  // establish a round-trip timeout (RTO) based on the
	  // round-trip time (RTT)
	  this._rto = this.countRTO(rtt);
	  // allow server to override url used for the actual transport
	  this._transUrl = info.base_url ? info.base_url : this.url;
	  info = objectUtils.extend(info, this._urlInfo);
	  debug('info', info);
	  // determine list of desired and supported transports
	  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
	  this._transports = enabledTransports.main;
	  debug(this._transports.length + ' enabled transports');
	
	  this._connect();
	};
	
	SockJS.prototype._connect = function() {
	  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
	    debug('attempt', Transport.transportName);
	    if (Transport.needBody) {
	      if (!global.document.body ||
	          (typeof global.document.readyState !== 'undefined' &&
	            global.document.readyState !== 'complete' &&
	            global.document.readyState !== 'interactive')) {
	        debug('waiting for body');
	        this._transports.unshift(Transport);
	        eventUtils.attachEvent('load', this._connect.bind(this));
	        return;
	      }
	    }
	
	    // calculate timeout based on RTO and round trips. Default to 5s
	    var timeoutMs = (this._rto * Transport.roundTrips) || 5000;
	    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
	    debug('using timeout', timeoutMs);
	
	    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
	    var options = this._transportOptions[Transport.transportName];
	    debug('transport url', transportUrl);
	    var transportObj = new Transport(transportUrl, this._transUrl, options);
	    transportObj.on('message', this._transportMessage.bind(this));
	    transportObj.once('close', this._transportClose.bind(this));
	    transportObj.transportName = Transport.transportName;
	    this._transport = transportObj;
	
	    return;
	  }
	  this._close(2000, 'All transports failed', false);
	};
	
	SockJS.prototype._transportTimeout = function() {
	  debug('_transportTimeout');
	  if (this.readyState === SockJS.CONNECTING) {
	    this._transportClose(2007, 'Transport timed out');
	  }
	};
	
	SockJS.prototype._transportMessage = function(msg) {
	  debug('_transportMessage', msg);
	  var self = this
	    , type = msg.slice(0, 1)
	    , content = msg.slice(1)
	    , payload
	    ;
	
	  // first check for messages that don't need a payload
	  switch (type) {
	    case 'o':
	      this._open();
	      return;
	    case 'h':
	      this.dispatchEvent(new Event('heartbeat'));
	      debug('heartbeat', this.transport);
	      return;
	  }
	
	  if (content) {
	    try {
	      payload = JSON3.parse(content);
	    } catch (e) {
	      debug('bad json', content);
	    }
	  }
	
	  if (typeof payload === 'undefined') {
	    debug('empty payload', content);
	    return;
	  }
	
	  switch (type) {
	    case 'a':
	      if (Array.isArray(payload)) {
	        payload.forEach(function(p) {
	          debug('message', self.transport, p);
	          self.dispatchEvent(new TransportMessageEvent(p));
	        });
	      }
	      break;
	    case 'm':
	      debug('message', this.transport, payload);
	      this.dispatchEvent(new TransportMessageEvent(payload));
	      break;
	    case 'c':
	      if (Array.isArray(payload) && payload.length === 2) {
	        this._close(payload[0], payload[1], true);
	      }
	      break;
	  }
	};
	
	SockJS.prototype._transportClose = function(code, reason) {
	  debug('_transportClose', this.transport, code, reason);
	  if (this._transport) {
	    this._transport.removeAllListeners();
	    this._transport = null;
	    this.transport = null;
	  }
	
	  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
	    this._connect();
	    return;
	  }
	
	  this._close(code, reason);
	};
	
	SockJS.prototype._open = function() {
	  debug('_open', this._transport.transportName, this.readyState);
	  if (this.readyState === SockJS.CONNECTING) {
	    if (this._transportTimeoutId) {
	      clearTimeout(this._transportTimeoutId);
	      this._transportTimeoutId = null;
	    }
	    this.readyState = SockJS.OPEN;
	    this.transport = this._transport.transportName;
	    this.dispatchEvent(new Event('open'));
	    debug('connected', this.transport);
	  } else {
	    // The server might have been restarted, and lost track of our
	    // connection.
	    this._close(1006, 'Server lost session');
	  }
	};
	
	SockJS.prototype._close = function(code, reason, wasClean) {
	  debug('_close', this.transport, code, reason, wasClean, this.readyState);
	  var forceFail = false;
	
	  if (this._ir) {
	    forceFail = true;
	    this._ir.close();
	    this._ir = null;
	  }
	  if (this._transport) {
	    this._transport.close();
	    this._transport = null;
	    this.transport = null;
	  }
	
	  if (this.readyState === SockJS.CLOSED) {
	    throw new Error('InvalidStateError: SockJS has already been closed');
	  }
	
	  this.readyState = SockJS.CLOSING;
	  setTimeout(function() {
	    this.readyState = SockJS.CLOSED;
	
	    if (forceFail) {
	      this.dispatchEvent(new Event('error'));
	    }
	
	    var e = new CloseEvent('close');
	    e.wasClean = wasClean || false;
	    e.code = code || 1000;
	    e.reason = reason;
	
	    this.dispatchEvent(e);
	    this.onmessage = this.onclose = this.onerror = null;
	    debug('disconnected');
	  }.bind(this), 0);
	};
	
	// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
	// and RFC 2988.
	SockJS.prototype.countRTO = function(rtt) {
	  // In a local environment, when using IE8/9 and the `jsonp-polling`
	  // transport the time needed to establish a connection (the time that pass
	  // from the opening of the transport to the call of `_dispatchOpen`) is
	  // around 200msec (the lower bound used in the article above) and this
	  // causes spurious timeouts. For this reason we calculate a value slightly
	  // larger than that used in the article.
	  if (rtt > 100) {
	    return 4 * rtt; // rto > 400msec
	  }
	  return 300 + rtt; // 300msec < rto <= 400msec
	};
	
	module.exports = function(availableTransports) {
	  transports = transport(availableTransports);
	  __webpack_require__(334)(SockJS, availableTransports);
	  return SockJS;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 321 */
/***/ function(module, exports) {

	/* eslint-disable */
	/* jscs: disable */
	'use strict';
	
	// pulled specific shims from https://github.com/es-shims/es5-shim
	
	var ArrayPrototype = Array.prototype;
	var ObjectPrototype = Object.prototype;
	var FunctionPrototype = Function.prototype;
	var StringPrototype = String.prototype;
	var array_slice = ArrayPrototype.slice;
	
	var _toString = ObjectPrototype.toString;
	var isFunction = function (val) {
	    return ObjectPrototype.toString.call(val) === '[object Function]';
	};
	var isArray = function isArray(obj) {
	    return _toString.call(obj) === '[object Array]';
	};
	var isString = function isString(obj) {
	    return _toString.call(obj) === '[object String]';
	};
	
	var supportsDescriptors = Object.defineProperty && (function () {
	    try {
	        Object.defineProperty({}, 'x', {});
	        return true;
	    } catch (e) { /* this is ES3 */
	        return false;
	    }
	}());
	
	// Define configurable, writable and non-enumerable props
	// if they don't exist.
	var defineProperty;
	if (supportsDescriptors) {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        Object.defineProperty(object, name, {
	            configurable: true,
	            enumerable: false,
	            writable: true,
	            value: method
	        });
	    };
	} else {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        object[name] = method;
	    };
	}
	var defineProperties = function (object, map, forceAssign) {
	    for (var name in map) {
	        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
	          defineProperty(object, name, map[name], forceAssign);
	        }
	    }
	};
	
	var toObject = function (o) {
	    if (o == null) { // this matches both null and undefined
	        throw new TypeError("can't convert " + o + ' to object');
	    }
	    return Object(o);
	};
	
	//
	// Util
	// ======
	//
	
	// ES5 9.4
	// http://es5.github.com/#x9.4
	// http://jsperf.com/to-integer
	
	function toInteger(num) {
	    var n = +num;
	    if (n !== n) { // isNaN
	        n = 0;
	    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	    }
	    return n;
	}
	
	function ToUint32(x) {
	    return x >>> 0;
	}
	
	//
	// Function
	// ========
	//
	
	// ES-5 15.3.4.5
	// http://es5.github.com/#x15.3.4.5
	
	function Empty() {}
	
	defineProperties(FunctionPrototype, {
	    bind: function bind(that) { // .length is 1
	        // 1. Let Target be the this value.
	        var target = this;
	        // 2. If IsCallable(Target) is false, throw a TypeError exception.
	        if (!isFunction(target)) {
	            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	        }
	        // 3. Let A be a new (possibly empty) internal list of all of the
	        //   argument values provided after thisArg (arg1, arg2 etc), in order.
	        // XXX slicedArgs will stand in for "A" if used
	        var args = array_slice.call(arguments, 1); // for normal call
	        // 4. Let F be a new native ECMAScript object.
	        // 11. Set the [[Prototype]] internal property of F to the standard
	        //   built-in Function prototype object as specified in 15.3.3.1.
	        // 12. Set the [[Call]] internal property of F as described in
	        //   15.3.4.5.1.
	        // 13. Set the [[Construct]] internal property of F as described in
	        //   15.3.4.5.2.
	        // 14. Set the [[HasInstance]] internal property of F as described in
	        //   15.3.4.5.3.
	        var binder = function () {
	
	            if (this instanceof bound) {
	                // 15.3.4.5.2 [[Construct]]
	                // When the [[Construct]] internal method of a function object,
	                // F that was created using the bind function is called with a
	                // list of arguments ExtraArgs, the following steps are taken:
	                // 1. Let target be the value of F's [[TargetFunction]]
	                //   internal property.
	                // 2. If target has no [[Construct]] internal method, a
	                //   TypeError exception is thrown.
	                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Construct]] internal
	                //   method of target providing args as the arguments.
	
	                var result = target.apply(
	                    this,
	                    args.concat(array_slice.call(arguments))
	                );
	                if (Object(result) === result) {
	                    return result;
	                }
	                return this;
	
	            } else {
	                // 15.3.4.5.1 [[Call]]
	                // When the [[Call]] internal method of a function object, F,
	                // which was created using the bind function is called with a
	                // this value and a list of arguments ExtraArgs, the following
	                // steps are taken:
	                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                //   property.
	                // 3. Let target be the value of F's [[TargetFunction]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Call]] internal method
	                //   of target providing boundThis as the this value and
	                //   providing args as the arguments.
	
	                // equiv: target.call(this, ...boundArgs, ...args)
	                return target.apply(
	                    that,
	                    args.concat(array_slice.call(arguments))
	                );
	
	            }
	
	        };
	
	        // 15. If the [[Class]] internal property of Target is "Function", then
	        //     a. Let L be the length property of Target minus the length of A.
	        //     b. Set the length own property of F to either 0 or L, whichever is
	        //       larger.
	        // 16. Else set the length own property of F to 0.
	
	        var boundLength = Math.max(0, target.length - args.length);
	
	        // 17. Set the attributes of the length own property of F to the values
	        //   specified in 15.3.5.1.
	        var boundArgs = [];
	        for (var i = 0; i < boundLength; i++) {
	            boundArgs.push('$' + i);
	        }
	
	        // XXX Build a dynamic function with desired amount of arguments is the only
	        // way to set the length property of a function.
	        // In environments where Content Security Policies enabled (Chrome extensions,
	        // for ex.) all use of eval or Function costructor throws an exception.
	        // However in all of these environments Function.prototype.bind exists
	        // and so this code will never be executed.
	        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
	
	        if (target.prototype) {
	            Empty.prototype = target.prototype;
	            bound.prototype = new Empty();
	            // Clean up dangling references.
	            Empty.prototype = null;
	        }
	
	        // TODO
	        // 18. Set the [[Extensible]] internal property of F to true.
	
	        // TODO
	        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	        // 20. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	        //   false.
	        // 21. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	        //   and false.
	
	        // TODO
	        // NOTE Function objects created using Function.prototype.bind do not
	        // have a prototype property or the [[Code]], [[FormalParameters]], and
	        // [[Scope]] internal properties.
	        // XXX can't delete prototype in pure-js.
	
	        // 22. Return F.
	        return bound;
	    }
	});
	
	//
	// Array
	// =====
	//
	
	// ES5 15.4.3.2
	// http://es5.github.com/#x15.4.3.2
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	defineProperties(Array, { isArray: isArray });
	
	
	var boxedString = Object('a');
	var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
	
	var properlyBoxesContext = function properlyBoxed(method) {
	    // Check node 0.6.21 bug where third parameter is not boxed
	    var properlyBoxesNonStrict = true;
	    var properlyBoxesStrict = true;
	    if (method) {
	        method.call('foo', function (_, __, context) {
	            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
	        });
	
	        method.call([1], function () {
	            'use strict';
	            properlyBoxesStrict = typeof this === 'string';
	        }, 'x');
	    }
	    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
	};
	
	defineProperties(ArrayPrototype, {
	    forEach: function forEach(fun /*, thisp*/) {
	        var object = toObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            thisp = arguments[1],
	            i = -1,
	            length = self.length >>> 0;
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(); // TODO message
	        }
	
	        while (++i < length) {
	            if (i in self) {
	                // Invoke the callback function with call, passing arguments:
	                // context, property value, property key, thisArg object
	                // context
	                fun.call(thisp, self[i], i, object);
	            }
	        }
	    }
	}, !properlyBoxesContext(ArrayPrototype.forEach));
	
	// ES5 15.4.4.14
	// http://es5.github.com/#x15.4.4.14
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	defineProperties(ArrayPrototype, {
	    indexOf: function indexOf(sought /*, fromIndex */ ) {
	        var self = splitString && isString(this) ? this.split('') : toObject(this),
	            length = self.length >>> 0;
	
	        if (!length) {
	            return -1;
	        }
	
	        var i = 0;
	        if (arguments.length > 1) {
	            i = toInteger(arguments[1]);
	        }
	
	        // handle negative indices
	        i = i >= 0 ? i : Math.max(0, length + i);
	        for (; i < length; i++) {
	            if (i in self && self[i] === sought) {
	                return i;
	            }
	        }
	        return -1;
	    }
	}, hasFirefox2IndexOfBug);
	
	//
	// String
	// ======
	//
	
	// ES5 15.5.4.14
	// http://es5.github.com/#x15.5.4.14
	
	// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	// Many browsers do not split properly with regular expressions or they
	// do not perform the split correctly under obscure conditions.
	// See http://blog.stevenlevithan.com/archives/cross-browser-split
	// I've tested in many browsers and this seems to cover the deviant ones:
	//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	//       [undefined, "t", undefined, "e", ...]
	//    ''.split(/.?/) should be [], not [""]
	//    '.'.split(/()()/) should be ["."], not ["", "", "."]
	
	var string_split = StringPrototype.split;
	if (
	    'ab'.split(/(?:ab)*/).length !== 2 ||
	    '.'.split(/(.?)(.?)/).length !== 4 ||
	    'tesst'.split(/(s)*/)[1] === 't' ||
	    'test'.split(/(?:)/, -1).length !== 4 ||
	    ''.split(/.?/).length ||
	    '.'.split(/()()/).length > 1
	) {
	    (function () {
	        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group
	
	        StringPrototype.split = function (separator, limit) {
	            var string = this;
	            if (separator === void 0 && limit === 0) {
	                return [];
	            }
	
	            // If `separator` is not a regex, use native split
	            if (_toString.call(separator) !== '[object RegExp]') {
	                return string_split.call(this, separator, limit);
	            }
	
	            var output = [],
	                flags = (separator.ignoreCase ? 'i' : '') +
	                        (separator.multiline  ? 'm' : '') +
	                        (separator.extended   ? 'x' : '') + // Proposed for ES6
	                        (separator.sticky     ? 'y' : ''), // Firefox 3+
	                lastLastIndex = 0,
	                // Make `global` and avoid `lastIndex` issues by working with a copy
	                separator2, match, lastIndex, lastLength;
	            separator = new RegExp(separator.source, flags + 'g');
	            string += ''; // Type-convert
	            if (!compliantExecNpcg) {
	                // Doesn't need flags gy, but they don't hurt
	                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
	            }
	            /* Values for `limit`, per the spec:
	             * If undefined: 4294967295 // Math.pow(2, 32) - 1
	             * If 0, Infinity, or NaN: 0
	             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	             * If other: Type-convert, then use the above rules
	             */
	            limit = limit === void 0 ?
	                -1 >>> 0 : // Math.pow(2, 32) - 1
	                ToUint32(limit);
	            while (match = separator.exec(string)) {
	                // `separator.lastIndex` is not reliable cross-browser
	                lastIndex = match.index + match[0].length;
	                if (lastIndex > lastLastIndex) {
	                    output.push(string.slice(lastLastIndex, match.index));
	                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                    // nonparticipating capturing groups
	                    if (!compliantExecNpcg && match.length > 1) {
	                        match[0].replace(separator2, function () {
	                            for (var i = 1; i < arguments.length - 2; i++) {
	                                if (arguments[i] === void 0) {
	                                    match[i] = void 0;
	                                }
	                            }
	                        });
	                    }
	                    if (match.length > 1 && match.index < string.length) {
	                        ArrayPrototype.push.apply(output, match.slice(1));
	                    }
	                    lastLength = match[0].length;
	                    lastLastIndex = lastIndex;
	                    if (output.length >= limit) {
	                        break;
	                    }
	                }
	                if (separator.lastIndex === match.index) {
	                    separator.lastIndex++; // Avoid an infinite loop
	                }
	            }
	            if (lastLastIndex === string.length) {
	                if (lastLength || !separator.test('')) {
	                    output.push('');
	                }
	            } else {
	                output.push(string.slice(lastLastIndex));
	            }
	            return output.length > limit ? output.slice(0, limit) : output;
	        };
	    }());
	
	// [bugfix, chrome]
	// If separator is undefined, then the result array contains just one String,
	// which is the this value (converted to a String). If limit is not undefined,
	// then the output array is truncated so that it contains no more than limit
	// elements.
	// "0".split(undefined, 0) -> []
	} else if ('0'.split(void 0, 0).length) {
	    StringPrototype.split = function split(separator, limit) {
	        if (separator === void 0 && limit === 0) { return []; }
	        return string_split.call(this, separator, limit);
	    };
	}
	
	// ECMA-262, 3rd B.2.3
	// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	// non-normative section suggesting uniform semantics and it should be
	// normalized across all browsers
	// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	var string_substr = StringPrototype.substr;
	var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	defineProperties(StringPrototype, {
	    substr: function substr(start, length) {
	        return string_substr.call(
	            this,
	            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
	            length
	        );
	    }
	}, hasNegativeSubstrBug);


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var JSON3 = __webpack_require__(308);
	
	// Some extra characters that Chrome gets wrong, and substitutes with
	// something else on the wire.
	// eslint-disable-next-line no-control-regex
	var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
	  , extraLookup;
	
	// This may be quite slow, so let's delay until user actually uses bad
	// characters.
	var unrollLookup = function(escapable) {
	  var i;
	  var unrolled = {};
	  var c = [];
	  for (i = 0; i < 65536; i++) {
	    c.push( String.fromCharCode(i) );
	  }
	  escapable.lastIndex = 0;
	  c.join('').replace(escapable, function(a) {
	    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	    return '';
	  });
	  escapable.lastIndex = 0;
	  return unrolled;
	};
	
	// Quote string, also taking care of unicode characters that browsers
	// often break. Especially, take care of unicode surrogates:
	// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
	module.exports = {
	  quote: function(string) {
	    var quoted = JSON3.stringify(string);
	
	    // In most cases this should be very fast and good enough.
	    extraEscapable.lastIndex = 0;
	    if (!extraEscapable.test(quoted)) {
	      return quoted;
	    }
	
	    if (!extraLookup) {
	      extraLookup = unrollLookup(extraEscapable);
	    }
	
	    return quoted.replace(extraEscapable, function(a) {
	      return extraLookup[a];
	    });
	  }
	};


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:utils:transport');
	}
	
	module.exports = function(availableTransports) {
	  return {
	    filterToEnabled: function(transportsWhitelist, info) {
	      var transports = {
	        main: []
	      , facade: []
	      };
	      if (!transportsWhitelist) {
	        transportsWhitelist = [];
	      } else if (typeof transportsWhitelist === 'string') {
	        transportsWhitelist = [transportsWhitelist];
	      }
	
	      availableTransports.forEach(function(trans) {
	        if (!trans) {
	          return;
	        }
	
	        if (trans.transportName === 'websocket' && info.websocket === false) {
	          debug('disabled from server', 'websocket');
	          return;
	        }
	
	        if (transportsWhitelist.length &&
	            transportsWhitelist.indexOf(trans.transportName) === -1) {
	          debug('not in whitelist', trans.transportName);
	          return;
	        }
	
	        if (trans.enabled(info)) {
	          debug('enabled', trans.transportName);
	          transports.main.push(trans);
	          if (trans.facadeTransport) {
	            transports.facade.push(trans.facadeTransport);
	          }
	        } else {
	          debug('disabled', trans.transportName);
	        }
	      });
	      return transports;
	    }
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 324 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var logObject = {};
	['log', 'debug', 'warn'].forEach(function (level) {
	  var levelExists;
	
	  try {
	    levelExists = global.console && global.console[level] && global.console[level].apply;
	  } catch(e) {
	    // do nothing
	  }
	
	  logObject[level] = levelExists ? function () {
	    return global.console[level].apply(global.console, arguments);
	  } : (level === 'log' ? function () {} : logObject.log);
	});
	
	module.exports = logObject;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 325 */
/***/ function(module, exports) {

	'use strict';
	
	function Event(eventType) {
	  this.type = eventType;
	}
	
	Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
	  this.type = eventType;
	  this.bubbles = canBubble;
	  this.cancelable = cancelable;
	  this.timeStamp = +new Date();
	  return this;
	};
	
	Event.prototype.stopPropagation = function() {};
	Event.prototype.preventDefault = function() {};
	
	Event.CAPTURING_PHASE = 1;
	Event.AT_TARGET = 2;
	Event.BUBBLING_PHASE = 3;
	
	module.exports = Event;


/***/ },
/* 326 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	module.exports = global.location || {
	  origin: 'http://localhost:80'
	, protocol: 'http'
	, host: 'localhost'
	, port: 80
	, href: 'http://localhost/'
	, hash: ''
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , Event = __webpack_require__(325)
	  ;
	
	function CloseEvent() {
	  Event.call(this);
	  this.initEvent('close', false, false);
	  this.wasClean = false;
	  this.code = 0;
	  this.reason = '';
	}
	
	inherits(CloseEvent, Event);
	
	module.exports = CloseEvent;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , Event = __webpack_require__(325)
	  ;
	
	function TransportMessageEvent(data) {
	  Event.call(this);
	  this.initEvent('message', false, false);
	  this.data = data;
	}
	
	inherits(TransportMessageEvent, Event);
	
	module.exports = TransportMessageEvent;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  , urlUtils = __webpack_require__(279)
	  , XDR = __webpack_require__(302)
	  , XHRCors = __webpack_require__(297)
	  , XHRLocal = __webpack_require__(299)
	  , XHRFake = __webpack_require__(330)
	  , InfoIframe = __webpack_require__(331)
	  , InfoAjax = __webpack_require__(333)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:info-receiver');
	}
	
	function InfoReceiver(baseUrl, urlInfo) {
	  debug(baseUrl);
	  var self = this;
	  EventEmitter.call(this);
	
	  setTimeout(function() {
	    self.doXhr(baseUrl, urlInfo);
	  }, 0);
	}
	
	inherits(InfoReceiver, EventEmitter);
	
	// TODO this is currently ignoring the list of available transports and the whitelist
	
	InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
	  // determine method of CORS support (if needed)
	  if (urlInfo.sameOrigin) {
	    return new InfoAjax(url, XHRLocal);
	  }
	  if (XHRCors.enabled) {
	    return new InfoAjax(url, XHRCors);
	  }
	  if (XDR.enabled && urlInfo.sameScheme) {
	    return new InfoAjax(url, XDR);
	  }
	  if (InfoIframe.enabled()) {
	    return new InfoIframe(baseUrl, url);
	  }
	  return new InfoAjax(url, XHRFake);
	};
	
	InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
	  var self = this
	    , url = urlUtils.addPath(baseUrl, '/info')
	    ;
	  debug('doXhr', url);
	
	  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
	
	  this.timeoutRef = setTimeout(function() {
	    debug('timeout');
	    self._cleanup(false);
	    self.emit('finish');
	  }, InfoReceiver.timeout);
	
	  this.xo.once('finish', function(info, rtt) {
	    debug('finish', info, rtt);
	    self._cleanup(true);
	    self.emit('finish', info, rtt);
	  });
	};
	
	InfoReceiver.prototype._cleanup = function(wasClean) {
	  debug('_cleanup');
	  clearTimeout(this.timeoutRef);
	  this.timeoutRef = null;
	  if (!wasClean && this.xo) {
	    this.xo.close();
	  }
	  this.xo = null;
	};
	
	InfoReceiver.prototype.close = function() {
	  debug('close');
	  this.removeAllListeners();
	  this._cleanup(false);
	};
	
	InfoReceiver.timeout = 8000;
	
	module.exports = InfoReceiver;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  ;
	
	function XHRFake(/* method, url, payload, opts */) {
	  var self = this;
	  EventEmitter.call(this);
	
	  this.to = setTimeout(function() {
	    self.emit('finish', 200, '{}');
	  }, XHRFake.timeout);
	}
	
	inherits(XHRFake, EventEmitter);
	
	XHRFake.prototype.close = function() {
	  clearTimeout(this.to);
	};
	
	XHRFake.timeout = 2000;
	
	module.exports = XHRFake;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  , JSON3 = __webpack_require__(308)
	  , utils = __webpack_require__(276)
	  , IframeTransport = __webpack_require__(307)
	  , InfoReceiverIframe = __webpack_require__(332)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:info-iframe');
	}
	
	function InfoIframe(baseUrl, url) {
	  var self = this;
	  EventEmitter.call(this);
	
	  var go = function() {
	    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
	
	    ifr.once('message', function(msg) {
	      if (msg) {
	        var d;
	        try {
	          d = JSON3.parse(msg);
	        } catch (e) {
	          debug('bad json', msg);
	          self.emit('finish');
	          self.close();
	          return;
	        }
	
	        var info = d[0], rtt = d[1];
	        self.emit('finish', info, rtt);
	      }
	      self.close();
	    });
	
	    ifr.once('close', function() {
	      self.emit('finish');
	      self.close();
	    });
	  };
	
	  // TODO this seems the same as the 'needBody' from transports
	  if (!global.document.body) {
	    utils.attachEvent('load', go);
	  } else {
	    go();
	  }
	}
	
	inherits(InfoIframe, EventEmitter);
	
	InfoIframe.enabled = function() {
	  return IframeTransport.enabled();
	};
	
	InfoIframe.prototype.close = function() {
	  if (this.ifr) {
	    this.ifr.close();
	  }
	  this.removeAllListeners();
	  this.ifr = null;
	};
	
	module.exports = InfoIframe;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140), (function() { return this; }())))

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(287)
	  , EventEmitter = __webpack_require__(288).EventEmitter
	  , JSON3 = __webpack_require__(308)
	  , XHRLocalObject = __webpack_require__(299)
	  , InfoAjax = __webpack_require__(333)
	  ;
	
	function InfoReceiverIframe(transUrl) {
	  var self = this;
	  EventEmitter.call(this);
	
	  this.ir = new InfoAjax(transUrl, XHRLocalObject);
	  this.ir.once('finish', function(info, rtt) {
	    self.ir = null;
	    self.emit('message', JSON3.stringify([info, rtt]));
	  });
	}
	
	inherits(InfoReceiverIframe, EventEmitter);
	
	InfoReceiverIframe.transportName = 'iframe-info-receiver';
	
	InfoReceiverIframe.prototype.close = function() {
	  if (this.ir) {
	    this.ir.close();
	    this.ir = null;
	  }
	  this.removeAllListeners();
	};
	
	module.exports = InfoReceiverIframe;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var EventEmitter = __webpack_require__(288).EventEmitter
	  , inherits = __webpack_require__(287)
	  , JSON3 = __webpack_require__(308)
	  , objectUtils = __webpack_require__(312)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:info-ajax');
	}
	
	function InfoAjax(url, AjaxObject) {
	  EventEmitter.call(this);
	
	  var self = this;
	  var t0 = +new Date();
	  this.xo = new AjaxObject('GET', url);
	
	  this.xo.once('finish', function(status, text) {
	    var info, rtt;
	    if (status === 200) {
	      rtt = (+new Date()) - t0;
	      if (text) {
	        try {
	          info = JSON3.parse(text);
	        } catch (e) {
	          debug('bad json', text);
	        }
	      }
	
	      if (!objectUtils.isObject(info)) {
	        info = {};
	      }
	    }
	    self.emit('finish', info, rtt);
	    self.removeAllListeners();
	  });
	}
	
	inherits(InfoAjax, EventEmitter);
	
	InfoAjax.prototype.close = function() {
	  this.removeAllListeners();
	  this.xo.close();
	};
	
	module.exports = InfoAjax;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var urlUtils = __webpack_require__(279)
	  , eventUtils = __webpack_require__(276)
	  , JSON3 = __webpack_require__(308)
	  , FacadeJS = __webpack_require__(335)
	  , InfoIframeReceiver = __webpack_require__(332)
	  , iframeUtils = __webpack_require__(311)
	  , loc = __webpack_require__(326)
	  ;
	
	var debug = function() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(284)('sockjs-client:iframe-bootstrap');
	}
	
	module.exports = function(SockJS, availableTransports) {
	  var transportMap = {};
	  availableTransports.forEach(function(at) {
	    if (at.facadeTransport) {
	      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
	    }
	  });
	
	  // hard-coded for the info iframe
	  // TODO see if we can make this more dynamic
	  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
	  var parentOrigin;
	
	  /* eslint-disable camelcase */
	  SockJS.bootstrap_iframe = function() {
	    /* eslint-enable camelcase */
	    var facade;
	    iframeUtils.currentWindowId = loc.hash.slice(1);
	    var onMessage = function(e) {
	      if (e.source !== parent) {
	        return;
	      }
	      if (typeof parentOrigin === 'undefined') {
	        parentOrigin = e.origin;
	      }
	      if (e.origin !== parentOrigin) {
	        return;
	      }
	
	      var iframeMessage;
	      try {
	        iframeMessage = JSON3.parse(e.data);
	      } catch (ignored) {
	        debug('bad json', e.data);
	        return;
	      }
	
	      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
	        return;
	      }
	      switch (iframeMessage.type) {
	      case 's':
	        var p;
	        try {
	          p = JSON3.parse(iframeMessage.data);
	        } catch (ignored) {
	          debug('bad json', iframeMessage.data);
	          break;
	        }
	        var version = p[0];
	        var transport = p[1];
	        var transUrl = p[2];
	        var baseUrl = p[3];
	        debug(version, transport, transUrl, baseUrl);
	        // change this to semver logic
	        if (version !== SockJS.version) {
	          throw new Error('Incompatible SockJS! Main site uses:' +
	                    ' "' + version + '", the iframe:' +
	                    ' "' + SockJS.version + '".');
	        }
	
	        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
	            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
	          throw new Error('Can\'t connect to different domain from within an ' +
	                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
	        }
	        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
	        break;
	      case 'm':
	        facade._send(iframeMessage.data);
	        break;
	      case 'c':
	        if (facade) {
	          facade._close();
	        }
	        facade = null;
	        break;
	      }
	    };
	
	    eventUtils.attachEvent('message', onMessage);
	
	    // Start
	    iframeUtils.postMessage('s');
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var JSON3 = __webpack_require__(308)
	  , iframeUtils = __webpack_require__(311)
	  ;
	
	function FacadeJS(transport) {
	  this._transport = transport;
	  transport.on('message', this._transportMessage.bind(this));
	  transport.on('close', this._transportClose.bind(this));
	}
	
	FacadeJS.prototype._transportClose = function(code, reason) {
	  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
	};
	FacadeJS.prototype._transportMessage = function(frame) {
	  iframeUtils.postMessage('t', frame);
	};
	FacadeJS.prototype._send = function(data) {
	  this._transport.send(data);
	};
	FacadeJS.prototype._close = function() {
	  this._transport.close();
	  this._transport.removeAllListeners();
	};
	
	module.exports = FacadeJS;


/***/ },
/* 336 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		DotVueApp: "<g>\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M259.476,280.364V247.5c0-12.958-10.542-23.5-23.5-23.5s-23.5,10.542-23.5,23.5v29.672   c0,35.757-13.173,70.087-37.094,96.665l-32.981,36.646c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.82,2.521,10.592-0.558   l32.981-36.646c26.403-29.338,40.944-67.231,40.944-106.7V247.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5v32.864   c0,44.003-16.301,86.167-45.901,118.727l-32.149,35.364c-2.786,3.064-2.56,7.809,0.505,10.595c1.437,1.307,3.242,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l32.148-35.364C241.789,373.854,259.476,328.106,259.476,280.364z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M291.476,247.5c0-30.603-24.897-55.5-55.5-55.5s-55.5,24.897-55.5,55.5v29.672c0,27.839-10.256,54.566-28.879,75.258   l-23.447,26.053c-2.771,3.079-2.521,7.821,0.558,10.593c3.079,2.771,7.82,2.519,10.592-0.558l23.447-26.053   c21.106-23.451,32.73-53.742,32.73-85.293V247.5c0-22.332,18.168-40.5,40.5-40.5c22.332,0,40.5,18.168,40.5,40.5v32.864   c0,51.979-19.256,101.789-54.223,140.252l-27.125,29.839c-2.787,3.064-2.561,7.809,0.504,10.595c1.437,1.307,3.242,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l27.126-29.839c37.481-41.23,58.123-94.622,58.123-150.342V247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M323.476,247.5c0-48.248-39.252-87.5-87.5-87.5s-87.5,39.252-87.5,87.5v29.672c0,19.92-7.339,39.045-20.665,53.851   l-21.112,23.458c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.821,2.519,10.592-0.558l21.112-23.458   c15.809-17.565,24.515-40.254,24.515-63.886V247.5c0-39.977,32.523-72.5,72.5-72.5s72.5,32.523,72.5,72.5v32.864   c0,59.958-22.212,117.412-62.545,161.777l-7.507,8.258c-2.786,3.065-2.56,7.809,0.505,10.595c1.437,1.306,3.243,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l7.506-8.258c42.848-47.133,66.446-108.169,66.446-171.867V247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M116.476,247.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5c0-25.255,9.169-49.651,25.819-68.695   c16.495-18.867,39.134-31.205,63.746-34.741c4.1-0.589,6.946-4.391,6.357-8.49c-0.589-4.1-4.394-6.942-8.49-6.357   c-28.16,4.046-54.052,18.15-72.906,39.716C126.962,190.71,116.476,218.613,116.476,247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M131.476,277.172c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,12.002-4.421,23.523-12.449,32.443l-18.779,20.867   c-2.771,3.078-2.521,7.82,0.558,10.592c1.434,1.29,3.227,1.925,5.015,1.925c2.052,0,4.097-0.838,5.577-2.483l18.779-20.866   C125.687,307.971,131.476,292.886,131.476,277.172z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M340.755,344.123c-4.009-1.044-8.105,1.351-9.155,5.357c-2.769,10.579-6.213,21.096-10.24,31.258   c-1.526,3.851,0.359,8.21,4.21,9.735c0.907,0.359,1.841,0.529,2.761,0.529c2.985,0,5.808-1.795,6.975-4.739   c4.249-10.725,7.884-21.822,10.806-32.986C347.16,349.271,344.761,345.172,340.755,344.123z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M315.791,158.632c-3.081-2.771-7.823-2.517-10.592,0.563s-2.517,7.822,0.563,10.591   c22.061,19.832,34.713,48.157,34.713,77.714v32.864c0,12.473-0.86,25.042-2.557,37.359c-0.565,4.104,2.303,7.888,6.406,8.453   c0.347,0.048,0.692,0.071,1.033,0.071c3.688,0,6.903-2.722,7.42-6.478c1.79-12.993,2.698-26.251,2.698-39.406V247.5   C355.476,213.695,341.011,181.304,315.791,158.632z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M280.729,153.076c1.041,0.496,2.138,0.73,3.219,0.73c2.803,0,5.492-1.579,6.777-4.278c1.781-3.739,0.192-8.215-3.547-9.995   c-10.806-5.145-22.291-8.616-34.136-10.317c-4.106-0.585-7.901,2.258-8.49,6.357s2.257,7.901,6.357,8.49   C261.257,145.55,271.289,148.582,280.729,153.076z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M235.976,96c-2.806,0-5.644,0.078-8.437,0.232c-4.136,0.228-7.304,3.766-7.076,7.901c0.229,4.136,3.763,7.321,7.902,7.075   c2.519-0.139,5.079-0.209,7.61-0.209c75.266,0,136.5,61.233,136.5,136.5v32.864c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V247.5   C387.476,163.963,319.513,96,235.976,96z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M153.972,136.693c1.477,0,2.97-0.436,4.275-1.343c12.478-8.677,26.182-15.155,40.733-19.258   c3.987-1.124,6.308-5.268,5.184-9.254s-5.269-6.304-9.254-5.184c-16.16,4.556-31.376,11.749-45.226,21.379   c-3.401,2.365-4.241,7.039-1.876,10.439C149.265,135.57,151.599,136.693,153.972,136.693z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M99.476,277.172V247.5c0-34.89,13.213-68.118,37.205-93.565c2.841-3.014,2.702-7.76-0.312-10.602   s-7.761-2.701-10.602,0.312C99.14,171.886,84.476,208.77,84.476,247.5v29.672c0,4.083-1.504,8.002-4.234,11.035l-9.248,10.275   c-2.771,3.079-2.521,7.821,0.558,10.592c1.433,1.291,3.227,1.926,5.015,1.926c2.052,0,4.096-0.837,5.577-2.482l9.248-10.275   C96.605,292.449,99.476,284.966,99.476,277.172z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M409.951,189.104c-8.226-24.446-21.299-46.531-38.856-65.642c-2.803-3.05-7.547-3.252-10.597-0.449   c-3.05,2.803-3.251,7.547-0.449,10.598c16.127,17.554,28.134,37.834,35.686,60.276c1.054,3.133,3.976,5.11,7.107,5.11   c0.793,0,1.6-0.127,2.393-0.394C409.16,197.282,411.272,193.029,409.951,189.104z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M295.247,73.822c-3.917-1.341-8.183,0.748-9.524,4.668c-1.341,3.919,0.749,8.183,4.668,9.523   c16.538,5.659,32.065,13.857,46.15,24.369c1.347,1.005,2.92,1.489,4.48,1.489c2.286,0,4.544-1.041,6.017-3.015   c2.478-3.319,1.794-8.019-1.525-10.496C330.176,88.916,313.264,79.986,295.247,73.822z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M119.442,125.908C150.991,95.659,192.377,79,235.976,79c8.096,0,16.237,0.583,24.196,1.731   c4.103,0.598,7.903-2.252,8.495-6.352c0.592-4.1-2.251-7.902-6.351-8.494C253.648,64.635,244.786,64,235.976,64   c-47.487,0-92.56,18.141-126.915,51.081c-34.248,32.838-54.277,76.905-56.397,124.084c-0.186,4.138,3.018,7.644,7.155,7.829   c0.115,0.006,0.229,0.008,0.343,0.008c3.987,0,7.306-3.14,7.487-7.163C69.594,196.527,87.988,156.066,119.442,125.908z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M235.976,32c-16.772,0-33.485,1.944-49.674,5.778c-4.031,0.954-6.524,4.996-5.57,9.026c0.955,4.03,4.997,6.524,9.027,5.569   C204.817,48.809,220.366,47,235.976,47c54.996,0,106.332,21.911,144.55,61.695c1.473,1.533,3.439,2.305,5.41,2.305   c1.869,0,3.741-0.694,5.195-2.091c2.987-2.87,3.083-7.618,0.213-10.604c-19.913-20.729-43.304-37.036-69.522-48.465   C294.666,38.002,265.783,32,235.976,32z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M67.507,125.404c1.372,1.074,3.001,1.595,4.619,1.595c2.227,0,4.431-0.987,5.91-2.876   c21.375-27.302,49.515-48.717,81.377-61.932c3.826-1.587,5.642-5.975,4.055-9.801s-5.977-5.644-9.801-4.055   c-34.241,14.201-64.478,37.21-87.441,66.539C63.672,118.137,64.246,122.851,67.507,125.404z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M131.983,38.725c1.094,0,2.205-0.24,3.255-0.748C166.816,22.73,200.709,15,235.976,15c18.378,0,36.682,2.162,54.401,6.426   c4.025,0.966,8.077-1.51,9.046-5.537c0.969-4.027-1.51-8.078-5.538-9.047C275.019,2.302,255.535,0,235.976,0   c-37.544,0-73.631,8.232-107.259,24.469c-3.73,1.801-5.294,6.285-3.493,10.015C126.517,37.163,129.195,38.725,131.983,38.725z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M321.724,31.383c7.732,3.079,15.385,6.619,22.746,10.52c1.119,0.594,2.321,0.875,3.505,0.875   c2.688,0,5.287-1.449,6.633-3.99c1.939-3.66,0.545-8.199-3.115-10.139c-7.837-4.153-15.986-7.922-24.22-11.201   c-3.849-1.533-8.21,0.345-9.743,4.192C315.998,25.488,317.876,29.851,321.724,31.383z\" />\n    </svg>",
		Keytronic: "<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M478.665,72c0-39.704-32.296-72-72-72c-19.704,0-38.496,8.184-52,22.288C341.161,8.184,322.369,0,302.665,0    c-39.704,0-72,32.296-72,72c0,24.752,12.456,47.36,33.376,60.688L275.353,144L134.665,284.688l-26.344-26.344    c-3.128-3.128-8.184-3.128-11.312,0l-32,32c-3.128,3.128-3.128,8.184,0,11.312L91.353,328l-12.688,12.688l-26.344-26.344    c-3.128-3.128-8.184-3.128-11.312,0l-33,33c-3.128,3.128-3.128,8.184,0,11.312L34.353,385L4.345,415.008    c-3.128,3.128-3.128,8.184,0,11.312l52,52c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l51.008-51.008    l26.344,26.344c3.128,3.128,8.184,3.128,11.312,0l40-40c3.128-3.128,3.128-8.184,0-11.312L169.977,376l168.688-168.688    l7.312,7.312C359.305,235.544,381.913,248,406.665,248c39.704,0,72-32.296,72-72c0-19.704-8.184-38.496-22.288-52    C470.481,110.496,478.665,91.704,478.665,72z M462.665,176c0,30.872-25.128,56-56,56c-19.488,0-37.272-9.944-47.584-26.6    c-0.328-0.52-0.712-1.008-1.152-1.448l-13.608-13.608c-3.128-3.128-8.184-3.128-11.312,0l-180,180    c-3.128,3.128-3.128,8.184,0,11.312L179.353,408l-28.688,28.688l-26.344-26.344c-3.128-3.128-8.184-3.128-11.312,0l-51.008,51.008    l-40.688-40.688l30.008-30.008c3.128-3.128,3.128-8.184,0-11.312L24.977,353l21.688-21.688l26.344,26.344    c3.128,3.128,8.184,3.128,11.312,0l24-24c3.128-3.128,3.128-8.184,0-11.312L81.977,296l20.688-20.688l26.344,26.344    c3.128,3.128,8.184,3.128,11.312,0l152-152c3.128-3.128,3.128-8.184,0-11.312l-17.608-17.608c-0.44-0.44-0.92-0.824-1.448-1.152    c-16.656-10.312-26.6-28.096-26.6-47.584c0-30.872,25.128-56,56-56c17.96,0,34.968,8.768,45.504,23.456c3,4.184,10,4.184,13,0    C371.697,24.768,388.705,16,406.665,16c30.872,0,56,25.128,56,56c0,17.96-8.768,34.968-23.456,45.504    c-2.096,1.504-3.336,3.92-3.336,6.496s1.24,5,3.336,6.496C453.897,141.032,462.665,158.04,462.665,176z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"173.811\" y=\"228.009\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -91.1265 252.0189)\" width=\"169.678\" height=\"16\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"163.35\" y=\"311.983\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -175.1045 217.2252)\" width=\"22.624\" height=\"16\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M406.665,40c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S424.313,40,406.665,40z M406.665,88    c-8.824,0-16-7.176-16-16s7.176-16,16-16c8.824,0,16,7.176,16,16S415.489,88,406.665,88z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"310.663\" y=\"92.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 19.8046 255.7854)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"342.661\" y=\"124.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 6.5493 287.7842)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"374.659\" y=\"156.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -6.706 319.7831)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M470.665,344h-14.032c-0.44-1.112-0.896-2.216-1.392-3.328l9.928-9.928c3.128-3.128,3.128-8.184,0-11.312l-33.936-33.936    c-3.128-3.128-8.184-3.128-11.312,0l-9.928,9.928c-1.112-0.496-2.216-0.952-3.328-1.392V280c0-4.424-3.576-8-8-8h-48    c-4.424,0-8,3.576-8,8v14.032c-1.112,0.44-2.216,0.896-3.328,1.392l-9.928-9.928c-3.128-3.128-8.184-3.128-11.312,0    l-33.936,33.936c-3.128,3.128-3.128,8.184,0,11.312l9.928,9.928c-0.496,1.112-0.952,2.216-1.392,3.328h-14.032    c-4.424,0-8,3.576-8,8v48c0,4.424,3.576,8,8,8h14.032c0.44,1.112,0.896,2.216,1.392,3.328l-9.928,9.928    c-3.128,3.128-3.128,8.184,0,11.312l33.936,33.936c3.128,3.128,8.184,3.128,11.312,0l9.928-9.928    c1.112,0.496,2.216,0.952,3.328,1.392V472c0,4.424,3.576,8,8,8h48c4.424,0,8-3.576,8-8v-14.032    c1.112-0.44,2.216-0.896,3.328-1.392l9.928,9.928c3.128,3.128,8.184,3.128,11.312,0l33.936-33.936    c3.128-3.128,3.128-8.184,0-11.312l-9.928-9.928c0.496-1.112,0.952-2.216,1.392-3.328h14.032c4.424,0,8-3.576,8-8v-48    C478.665,347.576,475.089,344,470.665,344z M462.665,392h-11.672c-3.496,0-6.576,2.264-7.632,5.592    c-1.216,3.864-2.856,7.8-4.88,11.672c-1.616,3.104-1.032,6.888,1.44,9.36l8.288,8.288l-22.624,22.624l-8.288-8.288    c-2.472-2.472-6.256-3.056-9.36-1.44c-3.872,2.024-7.808,3.664-11.672,4.88c-3.336,1.064-5.6,4.144-5.6,7.64V464h-32v-11.672    c0-3.496-2.264-6.576-5.592-7.632c-3.864-1.216-7.8-2.856-11.672-4.88c-3.104-1.616-6.88-1.032-9.36,1.44l-8.288,8.288    l-22.624-22.624l8.288-8.288c2.472-2.472,3.056-6.256,1.44-9.36c-2.024-3.872-3.664-7.808-4.88-11.672    c-1.064-3.336-4.144-5.6-7.64-5.6h-11.672v-32h11.672c3.496,0,6.576-2.264,7.632-5.592c1.216-3.864,2.856-7.8,4.88-11.672    c1.616-3.104,1.032-6.888-1.44-9.36l-8.288-8.288l22.624-22.624l8.288,8.288c2.48,2.48,6.256,3.048,9.36,1.44    c3.872-2.024,7.808-3.664,11.672-4.88c3.336-1.064,5.6-4.144,5.6-7.64V288h32v11.672c0,3.496,2.264,6.576,5.592,7.632    c3.864,1.216,7.8,2.856,11.672,4.88c3.104,1.608,6.888,1.04,9.36-1.44l8.288-8.288l22.624,22.624l-8.288,8.288    c-2.472,2.472-3.056,6.256-1.44,9.36c2.024,3.872,3.664,7.808,4.88,11.672c1.064,3.336,4.144,5.6,7.64,5.6h11.672V392z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M374.665,328c-26.472,0-48,21.528-48,48s21.528,48,48,48s48-21.528,48-48S401.137,328,374.665,328z M374.665,408    c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S392.313,408,374.665,408z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M54.665,168h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24v-16    C65.433,192,54.665,181.232,54.665,168z M46.665,208.248c-2.336-3.144-5.104-5.912-8.248-8.248    c3.144-2.336,5.912-5.104,8.248-8.248c2.336,3.144,5.104,5.912,8.248,8.248C51.769,202.336,49.001,205.104,46.665,208.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M150.665,120h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24v-16    C161.433,144,150.665,133.232,150.665,120z M142.665,160.248c-2.336-3.144-5.104-5.912-8.248-8.248    c3.144-2.336,5.912-5.104,8.248-8.248c2.336,3.144,5.104,5.912,8.248,8.248C147.769,154.336,145.001,157.104,142.665,160.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M70.665,48h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24V72    C81.433,72,70.665,61.232,70.665,48z M62.665,88.248c-2.336-3.144-5.104-5.912-8.248-8.248c3.144-2.336,5.912-5.104,8.248-8.248    c2.336,3.144,5.104,5.912,8.248,8.248C67.769,82.336,65.001,85.104,62.665,88.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n  ",
		Molectron: "\n    <path stroke=\"#FFFFFF\" fill=\"none\" stroke-width=\"6\" d=\"m398.559,166.02c-8.85-3.404-18.292-6.493-28.22-9.265 2.563-9.984 4.609-19.706 6.087-29.073 7.689-48.757-0.808-82.959-23.925-96.306-6.72-3.88-14.443-5.848-22.954-5.848-26.882,0-60.85,19.965-95.118,53.681-7.486-7.352-15.006-14.105-22.502-20.167-38.379-31.038-72.25-40.781-95.365-27.434-14.856,8.577-23.891,26.093-26.126,50.652-0.376,4.125 2.664,7.773 6.789,8.148 4.138,0.382 7.772-2.664 8.148-6.789 1.238-13.594 5.484-31.398 18.688-39.021 17.11-9.881 45.699-0.365 78.434,26.106 7.143,5.776 14.314,12.217 21.461,19.233-14.373,15.293-28.676,32.894-42.41,52.347-24.16,2.199-47.172,5.888-68.291,10.948-3.698-14.376-6.238-28.093-7.491-40.827-0.405-4.122-4.059-7.134-8.198-6.729-4.122,0.405-7.135,4.076-6.729,8.198 1.326,13.474 4.008,27.966 7.917,43.133-9.596,2.706-18.73,5.712-27.311,9.012-46.072,17.72-71.443,42.18-71.443,68.873s25.371,51.153 71.441,68.872c8.85,3.404 18.292,6.493 28.22,9.265-2.563,9.984-4.609,19.706-6.087,29.073-7.689,48.757 0.808,82.959 23.925,96.306 6.72,3.88 14.443,5.848 22.954,5.848 26.573,0 60.071-19.516 93.938-52.531 7.255,7.086 14.54,13.609 21.803,19.482 27.161,21.966 52.059,33.266 72.489,33.265 8.438-0.001 16.119-1.93 22.876-5.831 23.117-13.347 31.614-47.549 23.925-96.306-1.477-9.366-3.523-19.087-6.086-29.07 15.439-4.252 29.64-9.26 42.218-14.96 3.773-1.71 5.445-6.154 3.735-9.927-1.71-3.773-6.155-5.446-9.927-3.735-11.912,5.398-25.377,10.15-40.042,14.192-6.063-20.261-14.137-41.412-23.976-62.808 10.281-22.122 18.685-44.004 24.943-64.936 55.665,15.586 88.651,40.202 88.651,63.801 0,15.247-13.296,27.827-24.45,35.694-3.385,2.388-4.193,7.067-1.806,10.452 2.388,3.386 7.067,4.193 10.452,1.806 20.153-14.215 30.804-30.797 30.804-47.952 0-26.693-25.371-51.153-71.441-68.872zm-69.013-125.491c5.844,7.10543e-15 11.044,1.291 15.454,3.838 17.112,9.88 23.166,39.396 16.607,80.979-1.405,8.907-3.35,18.159-5.789,27.669-21.207-5.028-44.299-8.68-68.532-10.835-13.596-19.242-27.866-36.839-42.375-52.253 2.655-2.618 5.312-5.158 7.964-7.602 29.252-26.953 56.48-41.796 76.671-41.796zm-95.096,60.152c11.317,12.062 22.5,25.517 33.323,40.102-10.769-0.587-21.712-0.891-32.773-0.891-11.431,0-22.738,0.321-33.855,0.947 10.808-14.56 22.006-28.07 33.305-40.158zm-.053,269.657c-11.718-12.42-23.296-26.341-34.486-41.466 11.514,0.674 23.234,1.02 35.089,1.02 11.419,0 22.732-0.333 33.871-0.969-11.18,15.064-22.777,29.01-34.474,41.415zm.603-55.446c-16.115,0-31.578-0.624-46.314-1.784-8.277-12.076-16.284-24.78-23.907-37.984-7.503-12.995-14.405-26.107-20.657-39.155 6.49-13.661 13.707-27.412 21.596-41.077 7.64-13.232 15.75-26.063 24.177-38.307 14.374-1.099 29.429-1.693 45.105-1.693 15.273,0 29.956,0.564 43.994,1.609 8.434,12.267 16.59,25.185 24.349,38.623 7.85,13.597 15.034,27.279 21.5,40.873-6.219,12.942-13.091,25.957-20.56,38.894-7.625,13.207-15.72,26.015-24.13,38.239-14.716,1.158-29.83,1.762-45.153,1.762zm-65.615-3.655c-18.453-2.132-35.582-5.129-51.205-8.81 4.744-15.789 10.758-32.16 17.929-48.79 4.898,9.688 10.128,19.373 15.679,28.987 5.668,9.818 11.549,19.371 17.597,28.613zm1.19-152.829c-6.111,9.318-12.078,18.991-17.847,28.984-5.933,10.276-11.499,20.61-16.677,30.928-7.543-17.318-13.858-34.376-18.788-50.749 16.203-3.859 34.042-6.983 53.312-9.163zm-155.575,76.484c0-23.472 32.634-47.951 87.757-63.55 6.235,20.802 14.601,42.62 24.805,64.647-9.813,21.362-17.865,42.477-23.913,62.705-55.663-15.587-88.649-40.203-88.649-63.802zm125.454,194.363c-5.844,0-11.044-1.291-15.454-3.838-17.112-9.88-23.166-39.396-16.607-80.979 1.405-8.907 3.35-18.159 5.789-27.669 20.518,4.865 42.8,8.441 66.173,10.619 13.951,19.807 28.618,37.883 43.53,53.648-2.254,2.201-4.509,4.348-6.76,6.423-29.252,26.954-56.48,41.796-76.671,41.796zm220.214-84.584c6.559,41.583 0.505,71.099-16.607,80.979-17.113,9.879-45.699,0.364-78.434-26.106-6.893-5.574-13.814-11.767-20.712-18.499 14.761-15.578 29.462-33.603 43.563-53.579 23.432-2.151 45.822-5.697 66.389-10.509 2.445,9.526 4.394,18.793 5.801,27.714zm-9.83-42.153c-16.064,3.733-33.311,6.67-51.339,8.745 6.085-9.283 12.027-18.918 17.773-28.871 5.517-9.556 10.713-19.161 15.579-28.757 7.195,16.66 13.228,33.063 17.987,48.883zm-17.918-84.145c-5.152-10.259-10.688-20.532-16.587-30.749-5.818-10.078-11.859-19.878-18.077-29.348 19.355,2.146 37.276,5.243 53.564,9.081-4.955,16.493-11.302,33.623-18.9,51.016z\"/>\n    <path stroke=\"#FFFFFF\" fill=\"none\" stroke-width=\"6\" d=\"m235,197.392c-20.678,0-37.5,16.822-37.5,37.5s16.822,37.5 37.5,37.5 37.5-16.822 37.5-37.5-16.822-37.5-37.5-37.5zm0,60c-12.406,0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5,10.094 22.5,22.5-10.094,22.5-22.5,22.5z\"/>\n  "
	
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * vivus - JavaScript library to make drawing animation on SVG
	 * @version v0.4.0
	 * @link https://github.com/maxwellito/vivus
	 * @license MIT
	 */
	
	'use strict';
	
	(function (window, document) {
	
	  'use strict';
	
	/**
	 * Pathformer
	 * Beta version
	 *
	 * Take any SVG version 1.1 and transform
	 * child elements to 'path' elements
	 *
	 * This code is purely forked from
	 * https://github.com/Waest/SVGPathConverter
	 */
	
	/**
	 * Class constructor
	 *
	 * @param {DOM|String} element Dom element of the SVG or id of it
	 */
	function Pathformer(element) {
	  // Test params
	  if (typeof element === 'undefined') {
	    throw new Error('Pathformer [constructor]: "element" parameter is required');
	  }
	
	  // Set the element
	  if (element.constructor === String) {
	    element = document.getElementById(element);
	    if (!element) {
	      throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
	    }
	  }
	  if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
	    this.el = element;
	  } else {
	    throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
	  }
	
	  // Start
	  this.scan(element);
	}
	
	/**
	 * List of tags which can be transformed
	 * to path elements
	 *
	 * @type {Array}
	 */
	Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];
	
	/**
	 * List of attribute names which contain
	 * data. This array list them to check if
	 * they contain bad values, like percentage.
	 *
	 * @type {Array}
	 */
	Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];
	
	/**
	 * Finds the elements compatible for transform
	 * and apply the liked method
	 *
	 * @param  {object} options Object from the constructor
	 */
	Pathformer.prototype.scan = function (svg) {
	  var fn, element, pathData, pathDom,
	      elements = svg.querySelectorAll(this.TYPES.join(','));
	
	  for (var i = 0; i < elements.length; i++) {
	    element = elements[i];
	    fn = this[element.tagName.toLowerCase() + 'ToPath'];
	    pathData = fn(this.parseAttr(element.attributes));
	    pathDom = this.pathMaker(element, pathData);
	    element.parentNode.replaceChild(pathDom, element);
	  }
	};
	
	
	/**
	 * Read `line` element to extract and transform
	 * data, to make it ready for a `path` object.
	 *
	 * @param  {DOMelement} element Line element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.lineToPath = function (element) {
	  var newElement = {},
	      x1 = element.x1 || 0,
	      y1 = element.y1 || 0,
	      x2 = element.x2 || 0,
	      y2 = element.y2 || 0;
	
	  newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
	  return newElement;
	};
	
	/**
	 * Read `rect` element to extract and transform
	 * data, to make it ready for a `path` object.
	 * The radius-border is not taken in charge yet.
	 * (your help is more than welcomed)
	 *
	 * @param  {DOMelement} element Rect element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.rectToPath = function (element) {
	  var newElement = {},
	      x      = parseFloat(element.x)      || 0,
	      y      = parseFloat(element.y)      || 0,
	      width  = parseFloat(element.width)  || 0,
	      height = parseFloat(element.height) || 0;
	
	  newElement.d  = 'M' + x + ' ' + y + ' ';
	  newElement.d += 'L' + (x + width) + ' ' + y + ' ';
	  newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
	  newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
	  return newElement;
	};
	
	/**
	 * Read `polyline` element to extract and transform
	 * data, to make it ready for a `path` object.
	 *
	 * @param  {DOMelement} element Polyline element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.polylineToPath = function (element) {
	  var newElement = {},
	      points = element.points.trim().split(' '),
	      i, path;
	
	  // Reformatting if points are defined without commas
	  if (element.points.indexOf(',') === -1) {
	    var formattedPoints = [];
	    for (i = 0; i < points.length; i+=2) {
	      formattedPoints.push(points[i] + ',' + points[i+1]);
	    }
	    points = formattedPoints;
	  }
	
	  // Generate the path.d value
	  path = 'M' + points[0];
	  for(i = 1; i < points.length; i++) {
	    if (points[i].indexOf(',') !== -1) {
	      path += 'L' + points[i];
	    }
	  }
	  newElement.d = path;
	  return newElement;
	};
	
	/**
	 * Read `polygon` element to extract and transform
	 * data, to make it ready for a `path` object.
	 * This method rely on polylineToPath, because the
	 * logic is similar. The path created is just closed,
	 * so it needs an 'Z' at the end.
	 *
	 * @param  {DOMelement} element Polygon element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.polygonToPath = function (element) {
	  var newElement = Pathformer.prototype.polylineToPath(element);
	
	  newElement.d += 'Z';
	  return newElement;
	};
	
	/**
	 * Read `ellipse` element to extract and transform
	 * data, to make it ready for a `path` object.
	 *
	 * @param  {DOMelement} element ellipse element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.ellipseToPath = function (element) {
	  var newElement = {},
	      rx = parseFloat(element.rx) || 0,
	      ry = parseFloat(element.ry) || 0,
	      cx = parseFloat(element.cx) || 0,
	      cy = parseFloat(element.cy) || 0,
	      startX = cx - rx,
	      startY = cy,
	      endX = parseFloat(cx) + parseFloat(rx),
	      endY = cy;
	
	  newElement.d = 'M' + startX + ',' + startY +
	                 'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY +
	                 'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
	  return newElement;
	};
	
	/**
	 * Read `circle` element to extract and transform
	 * data, to make it ready for a `path` object.
	 *
	 * @param  {DOMelement} element Circle element to transform
	 * @return {object}             Data for a `path` element
	 */
	Pathformer.prototype.circleToPath = function (element) {
	  var newElement = {},
	      r  = parseFloat(element.r)  || 0,
	      cx = parseFloat(element.cx) || 0,
	      cy = parseFloat(element.cy) || 0,
	      startX = cx - r,
	      startY = cy,
	      endX = parseFloat(cx) + parseFloat(r),
	      endY = cy;
	      
	  newElement.d =  'M' + startX + ',' + startY +
	                  'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY +
	                  'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
	  return newElement;
	};
	
	/**
	 * Create `path` elements form original element
	 * and prepared objects
	 *
	 * @param  {DOMelement} element  Original element to transform
	 * @param  {object} pathData     Path data (from `toPath` methods)
	 * @return {DOMelement}          Path element
	 */
	Pathformer.prototype.pathMaker = function (element, pathData) {
	  var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg','path');
	  for(i = 0; i < element.attributes.length; i++) {
	    attr = element.attributes[i];
	    if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
	      pathTag.setAttribute(attr.name, attr.value);
	    }
	  }
	  for(i in pathData) {
	    pathTag.setAttribute(i, pathData[i]);
	  }
	  return pathTag;
	};
	
	/**
	 * Parse attributes of a DOM element to
	 * get an object of attribute => value
	 *
	 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
	 * @return {object}                  Object of attributes
	 */
	Pathformer.prototype.parseAttr = function (element) {
	  var attr, output = {};
	  for (var i = 0; i < element.length; i++) {
	    attr = element[i];
	    // Check if no data attribute contains '%', or the transformation is impossible
	    if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
	      throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
	    }
	    output[attr.name] = attr.value;
	  }
	  return output;
	};
	
	  'use strict';
	
	var requestAnimFrame, cancelAnimFrame, parsePositiveInt;
	
	/**
	 * Vivus
	 * Beta version
	 *
	 * Take any SVG and make the animation
	 * to give give the impression of live drawing
	 *
	 * This in more than just inspired from codrops
	 * At that point, it's a pure fork.
	 */
	
	/**
	 * Class constructor
	 * option structure
	 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
	 *   duration: <int> (in frames)
	 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
	 *   delay: <int> (delay between the drawing of first and last path)
	 *   dashGap <integer> whitespace extra margin between dashes
	 *   pathTimingFunction <function> timing animation function for each path element of the SVG
	 *   animTimingFunction <function> timing animation function for the complete SVG
	 *   forceRender <boolean> force the browser to re-render all updated path items
	 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
	 *
	 * The attribute 'type' is by default on 'delayed'.
	 *  - 'delayed'
	 *    all paths are draw at the same time but with a
	 *    little delay between them before start
	 *  - 'sync'
	 *    all path are start and finish at the same time
	 *  - 'oneByOne'
	 *    only one path is draw at the time
	 *    the end of the first one will trigger the draw
	 *    of the next one
	 *
	 * All these values can be overwritten individually
	 * for each path item in the SVG
	 * The value of frames will always take the advantage of
	 * the duration value.
	 * If you fail somewhere, an error will be thrown.
	 * Good luck.
	 *
	 * @constructor
	 * @this {Vivus}
	 * @param {DOM|String}   element  Dom element of the SVG or id of it
	 * @param {Object}       options  Options about the animation
	 * @param {Function}     callback Callback for the end of the animation
	 */
	function Vivus (element, options, callback) {
	
	  // Setup
	  this.isReady = false;
	  this.setElement(element, options);
	  this.setOptions(options);
	  this.setCallback(callback);
	
	  if (this.isReady) {
	    this.init();
	  }
	}
	
	/**
	 * Timing functions
	 **************************************
	 *
	 * Default functions to help developers.
	 * It always take a number as parameter (between 0 to 1) then
	 * return a number (between 0 and 1)
	 */
	Vivus.LINEAR          = function (x) {return x;};
	Vivus.EASE            = function (x) {return -Math.cos(x * Math.PI) / 2 + 0.5;};
	Vivus.EASE_OUT        = function (x) {return 1 - Math.pow(1-x, 3);};
	Vivus.EASE_IN         = function (x) {return Math.pow(x, 3);};
	Vivus.EASE_OUT_BOUNCE = function (x) {
	  var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
	    rate = Math.pow(base,1.5),
	    rateR = Math.pow(1 - x, 2),
	    progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
	  return (1- rateR) + (progress * rateR);
	};
	
	
	/**
	 * Setters
	 **************************************
	 */
	
	/**
	 * Check and set the element in the instance
	 * The method will not return anything, but will throw an
	 * error if the parameter is invalid
	 *
	 * @param {DOM|String}   element  SVG Dom element or id of it
	 */
	Vivus.prototype.setElement = function (element, options) {
	  // Basic check
	  if (typeof element === 'undefined') {
	    throw new Error('Vivus [constructor]: "element" parameter is required');
	  }
	
	  // Set the element
	  if (element.constructor === String) {
	    element = document.getElementById(element);
	    if (!element) {
	      throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
	    }
	  }
	  this.parentEl = element;
	
	  // Create the object element if the property `file` exists in the options object
	  if (options && options.file) {
	    var objElm = document.createElement('object');
	    objElm.setAttribute('type', 'image/svg+xml');
	    objElm.setAttribute('data', options.file);
	    objElm.setAttribute('built-by-vivus', 'true');
	    element.appendChild(objElm);
	    element = objElm;
	  }
	
	  switch (element.constructor) {
	  case window.SVGSVGElement:
	  case window.SVGElement:
	    this.el = element;
	    this.isReady = true;
	    break;
	
	  case window.HTMLObjectElement:
	    // If we have to wait for it
	    var onLoad, self;
	
	    self = this;
	    onLoad = function (e) {
	      if (self.isReady) {
	        return;
	      }
	      self.el = element.contentDocument && element.contentDocument.querySelector('svg');
	      if (!self.el && e) {
	        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
	      }
	      else if (self.el) {
	        if (element.getAttribute('built-by-vivus')) {
	          self.parentEl.insertBefore(self.el, element);
	          self.parentEl.removeChild(element);
	          self.el.setAttribute('width', '100%');
	          self.el.setAttribute('height', '100%');
	        }
	        self.isReady = true;
	        self.init();
	        return true;
	      }
	    };
	
	    if (!onLoad()) {
	      element.addEventListener('load', onLoad);
	    }
	    break;
	
	  default:
	    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
	  }
	};
	
	/**
	 * Set up user option to the instance
	 * The method will not return anything, but will throw an
	 * error if the parameter is invalid
	 *
	 * @param  {object} options Object from the constructor
	 */
	Vivus.prototype.setOptions = function (options) {
	  var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
	  var allowedStarts =  ['inViewport', 'manual', 'autostart'];
	
	  // Basic check
	  if (options !== undefined && options.constructor !== Object) {
	    throw new Error('Vivus [constructor]: "options" parameter must be an object');
	  }
	  else {
	    options = options || {};
	  }
	
	  // Set the animation type
	  if (options.type && allowedTypes.indexOf(options.type) === -1) {
	    throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
	  }
	  else {
	    this.type = options.type || allowedTypes[0];
	  }
	
	  // Set the start type
	  if (options.start && allowedStarts.indexOf(options.start) === -1) {
	    throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
	  }
	  else {
	    this.start = options.start || allowedStarts[0];
	  }
	
	  this.isIE         = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1 );
	  this.duration     = parsePositiveInt(options.duration, 120);
	  this.delay        = parsePositiveInt(options.delay, null);
	  this.dashGap      = parsePositiveInt(options.dashGap, 1);
	  this.forceRender  = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
	  this.reverseStack = !!options.reverseStack;
	  this.selfDestroy  = !!options.selfDestroy;
	  this.onReady      = options.onReady;
	  this.map          = [];
	  this.frameLength  = this.currentFrame = this.delayUnit = this.speed = this.handle = null;
	
	  this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;
	
	  this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
	  this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;
	
	  if (this.delay >= this.duration) {
	    throw new Error('Vivus [constructor]: delay must be shorter than duration');
	  }
	};
	
	/**
	 * Set up callback to the instance
	 * The method will not return enything, but will throw an
	 * error if the parameter is invalid
	 *
	 * @param  {Function} callback Callback for the animation end
	 */
	Vivus.prototype.setCallback = function (callback) {
	  // Basic check
	  if (!!callback && callback.constructor !== Function) {
	    throw new Error('Vivus [constructor]: "callback" parameter must be a function');
	  }
	  this.callback = callback || function () {};
	};
	
	
	/**
	 * Core
	 **************************************
	 */
	
	/**
	 * Map the svg, path by path.
	 * The method return nothing, it just fill the
	 * `map` array. Each item in this array represent
	 * a path element from the SVG, with informations for
	 * the animation.
	 *
	 * ```
	 * [
	 *   {
	 *     el: <DOMobj> the path element
	 *     length: <number> length of the path line
	 *     startAt: <number> time start of the path animation (in frames)
	 *     duration: <number> path animation duration (in frames)
	 *   },
	 *   ...
	 * ]
	 * ```
	 *
	 */
	Vivus.prototype.mapping = function () {
	  var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
	  timePoint = totalLength = lengthMeter = 0;
	  paths = this.el.querySelectorAll('path');
	
	  for (i = 0; i < paths.length; i++) {
	    path = paths[i];
	    if (this.isInvisible(path)) {
	      continue;
	    }
	    pathObj = {
	      el: path,
	      length: Math.ceil(path.getTotalLength())
	    };
	    // Test if the path length is correct
	    if (isNaN(pathObj.length)) {
	      if (window.console && console.warn) {
	        console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
	      }
	      continue;
	    }
	    this.map.push(pathObj);
	    path.style.strokeDasharray  = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
	    path.style.strokeDashoffset = pathObj.length + this.dashGap;
	    pathObj.length += this.dashGap;
	    totalLength += pathObj.length;
	
	    this.renderPath(i);
	  }
	
	  totalLength = totalLength === 0 ? 1 : totalLength;
	  this.delay = this.delay === null ? this.duration / 3 : this.delay;
	  this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
	
	  // Reverse stack if asked
	  if (this.reverseStack) {
	    this.map.reverse();
	  }
	
	  for (i = 0; i < this.map.length; i++) {
	    pathObj = this.map[i];
	
	    switch (this.type) {
	    case 'delayed':
	      pathObj.startAt = this.delayUnit * i;
	      pathObj.duration = this.duration - this.delay;
	      break;
	
	    case 'oneByOne':
	      pathObj.startAt = lengthMeter / totalLength * this.duration;
	      pathObj.duration = pathObj.length / totalLength * this.duration;
	      break;
	
	    case 'sync':
	    case 'async':
	    case 'nsync':
	      pathObj.startAt = 0;
	      pathObj.duration = this.duration;
	      break;
	
	    case 'scenario-sync':
	      path = pathObj.el;
	      pAttrs = this.parseAttr(path);
	      pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
	      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
	      timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
	      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
	      break;
	
	    case 'scenario':
	      path = pathObj.el;
	      pAttrs = this.parseAttr(path);
	      pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
	      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
	      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
	      break;
	    }
	    lengthMeter += pathObj.length;
	    this.frameLength = this.frameLength || this.duration;
	  }
	};
	
	/**
	 * Interval method to draw the SVG from current
	 * position of the animation. It update the value of
	 * `currentFrame` and re-trace the SVG.
	 *
	 * It use this.handle to store the requestAnimationFrame
	 * and clear it one the animation is stopped. So this
	 * attribute can be used to know if the animation is
	 * playing.
	 *
	 * Once the animation at the end, this method will
	 * trigger the Vivus callback.
	 *
	 */
	Vivus.prototype.drawer = function () {
	  var self = this;
	  this.currentFrame += this.speed;
	
	  if (this.currentFrame <= 0) {
	    this.stop();
	    this.reset();
	  } else if (this.currentFrame >= this.frameLength) {
	    this.stop();
	    this.currentFrame = this.frameLength;
	    this.trace();
	    if (this.selfDestroy) {
	      this.destroy();
	    }
	  } else {
	    this.trace();
	    this.handle = requestAnimFrame(function () {
	      self.drawer();
	    });
	    return;
	  }
	
	  this.callback(this);
	  if (this.instanceCallback) {
	    this.instanceCallback(this);
	    this.instanceCallback = null;
	  }
	};
	
	/**
	 * Draw the SVG at the current instant from the
	 * `currentFrame` value. Here is where most of the magic is.
	 * The trick is to use the `strokeDashoffset` style property.
	 *
	 * For optimisation reasons, a new property called `progress`
	 * is added in each item of `map`. This one contain the current
	 * progress of the path element. Only if the new value is different
	 * the new value will be applied to the DOM element. This
	 * method save a lot of resources to re-render the SVG. And could
	 * be improved if the animation couldn't be played forward.
	 *
	 */
	Vivus.prototype.trace = function () {
	  var i, progress, path, currentFrame;
	  currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
	  for (i = 0; i < this.map.length; i++) {
	    path = this.map[i];
	    progress = (currentFrame - path.startAt) / path.duration;
	    progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
	    if (path.progress !== progress) {
	      path.progress = progress;
	      path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
	      this.renderPath(i);
	    }
	  }
	};
	
	/**
	 * Method forcing the browser to re-render a path element
	 * from it's index in the map. Depending on the `forceRender`
	 * value.
	 * The trick is to replace the path element by it's clone.
	 * This practice is not recommended because it's asking more
	 * ressources, too much DOM manupulation..
	 * but it's the only way to let the magic happen on IE.
	 * By default, this fallback is only applied on IE.
	 *
	 * @param  {Number} index Path index
	 */
	Vivus.prototype.renderPath = function (index) {
	  if (this.forceRender && this.map && this.map[index]) {
	    var pathObj = this.map[index],
	        newPath = pathObj.el.cloneNode(true);
	    pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
	    pathObj.el = newPath;
	  }
	};
	
	/**
	 * When the SVG object is loaded and ready,
	 * this method will continue the initialisation.
	 *
	 * This this mainly due to the case of passing an
	 * object tag in the constructor. It will wait
	 * the end of the loading to initialise.
	 *
	 */
	Vivus.prototype.init = function () {
	  // Set object variables
	  this.frameLength = 0;
	  this.currentFrame = 0;
	  this.map = [];
	
	  // Start
	  new Pathformer(this.el);
	  this.mapping();
	  this.starter();
	
	  if (this.onReady) {
	    this.onReady(this);
	  }
	};
	
	/**
	 * Trigger to start of the animation.
	 * Depending on the `start` value, a different script
	 * will be applied.
	 *
	 * If the `start` value is not valid, an error will be thrown.
	 * Even if technically, this is impossible.
	 *
	 */
	Vivus.prototype.starter = function () {
	  switch (this.start) {
	  case 'manual':
	    return;
	
	  case 'autostart':
	    this.play();
	    break;
	
	  case 'inViewport':
	    var self = this,
	    listener = function () {
	      if (self.isInViewport(self.parentEl, 1)) {
	        self.play();
	        window.removeEventListener('scroll', listener);
	      }
	    };
	    window.addEventListener('scroll', listener);
	    listener();
	    break;
	  }
	};
	
	
	/**
	 * Controls
	 **************************************
	 */
	
	/**
	 * Get the current status of the animation between
	 * three different states: 'start', 'progress', 'end'.
	 * @return {string} Instance status
	 */
	Vivus.prototype.getStatus = function () {
	  return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
	};
	
	/**
	 * Reset the instance to the initial state : undraw
	 * Be careful, it just reset the animation, if you're
	 * playing the animation, this won't stop it. But just
	 * make it start from start.
	 *
	 */
	Vivus.prototype.reset = function () {
	  return this.setFrameProgress(0);
	};
	
	/**
	 * Set the instance to the final state : drawn
	 * Be careful, it just set the animation, if you're
	 * playing the animation on rewind, this won't stop it.
	 * But just make it start from the end.
	 *
	 */
	Vivus.prototype.finish = function () {
	  return this.setFrameProgress(1);
	};
	
	/**
	 * Set the level of progress of the drawing.
	 *
	 * @param {number} progress Level of progress to set
	 */
	Vivus.prototype.setFrameProgress = function (progress) {
	  progress = Math.min(1, Math.max(0, progress));
	  this.currentFrame = Math.round(this.frameLength * progress);
	  this.trace();
	  return this;
	};
	
	/**
	 * Play the animation at the desired speed.
	 * Speed must be a valid number (no zero).
	 * By default, the speed value is 1.
	 * But a negative value is accepted to go forward.
	 *
	 * And works with float too.
	 * But don't forget we are in JavaScript, se be nice
	 * with him and give him a 1/2^x value.
	 *
	 * @param  {number} speed Animation speed [optional]
	 */
	Vivus.prototype.play = function (speed, callback) {
	  this.instanceCallback = null;
	
	  if (speed && typeof speed === 'function') {
	    this.instanceCallback = speed; // first parameter is actually the callback function
	    speed = null;
	  }
	  else if (speed && typeof speed !== 'number') {
	    throw new Error('Vivus [play]: invalid speed');
	  }
	  // if the first parameter wasn't the callback, check if the seconds was
	  if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
	    this.instanceCallback = callback;
	  }
	
	
	  this.speed = speed || 1;
	  if (!this.handle) {
	    this.drawer();
	  }
	  return this;
	};
	
	/**
	 * Stop the current animation, if on progress.
	 * Should not trigger any error.
	 *
	 */
	Vivus.prototype.stop = function () {
	  if (this.handle) {
	    cancelAnimFrame(this.handle);
	    this.handle = null;
	  }
	  return this;
	};
	
	/**
	 * Destroy the instance.
	 * Remove all bad styling attributes on all
	 * path tags
	 *
	 */
	Vivus.prototype.destroy = function () {
	  this.stop();
	  var i, path;
	  for (i = 0; i < this.map.length; i++) {
	    path = this.map[i];
	    path.el.style.strokeDashoffset = null;
	    path.el.style.strokeDasharray = null;
	    this.renderPath(i);
	  }
	};
	
	
	/**
	 * Utils methods
	 * include methods from Codrops
	 **************************************
	 */
	
	/**
	 * Method to best guess if a path should added into
	 * the animation or not.
	 *
	 * 1. Use the `data-vivus-ignore` attribute if set
	 * 2. Check if the instance must ignore invisible paths
	 * 3. Check if the path is visible
	 *
	 * For now the visibility checking is unstable.
	 * It will be used for a beta phase.
	 *
	 * Other improvments are planned. Like detecting
	 * is the path got a stroke or a valid opacity.
	 */
	Vivus.prototype.isInvisible = function (el) {
	  var rect,
	    ignoreAttr = el.getAttribute('data-ignore');
	
	  if (ignoreAttr !== null) {
	    return ignoreAttr !== 'false';
	  }
	
	  if (this.ignoreInvisible) {
	    rect = el.getBoundingClientRect();
	    return !rect.width && !rect.height;
	  }
	  else {
	    return false;
	  }
	};
	
	/**
	 * Parse attributes of a DOM element to
	 * get an object of {attributeName => attributeValue}
	 *
	 * @param  {object} element DOM element to parse
	 * @return {object}         Object of attributes
	 */
	Vivus.prototype.parseAttr = function (element) {
	  var attr, output = {};
	  if (element && element.attributes) {
	    for (var i = 0; i < element.attributes.length; i++) {
	      attr = element.attributes[i];
	      output[attr.name] = attr.value;
	    }
	  }
	  return output;
	};
	
	/**
	 * Reply if an element is in the page viewport
	 *
	 * @param  {object} el Element to observe
	 * @param  {number} h  Percentage of height
	 * @return {boolean}
	 */
	Vivus.prototype.isInViewport = function (el, h) {
	  var scrolled   = this.scrollY(),
	    viewed       = scrolled + this.getViewportH(),
	    elBCR        = el.getBoundingClientRect(),
	    elHeight     = elBCR.height,
	    elTop        = scrolled + elBCR.top,
	    elBottom     = elTop + elHeight;
	
	  // if 0, the element is considered in the viewport as soon as it enters.
	  // if 1, the element is considered in the viewport only when it's fully inside
	  // value in percentage (1 >= h >= 0)
	  h = h || 0;
	
	  return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
	};
	
	/**
	 * Alias for document element
	 *
	 * @type {DOMelement}
	 */
	Vivus.prototype.docElem = window.document.documentElement;
	
	/**
	 * Get the viewport height in pixels
	 *
	 * @return {integer} Viewport height
	 */
	Vivus.prototype.getViewportH = function () {
	  var client = this.docElem.clientHeight,
	    inner = window.innerHeight;
	
	  if (client < inner) {
	    return inner;
	  }
	  else {
	    return client;
	  }
	};
	
	/**
	 * Get the page Y offset
	 *
	 * @return {integer} Page Y offset
	 */
	Vivus.prototype.scrollY = function () {
	  return window.pageYOffset || this.docElem.scrollTop;
	};
	
	/**
	 * Alias for `requestAnimationFrame` or
	 * `setTimeout` function for deprecated browsers.
	 *
	 */
	requestAnimFrame = (function () {
	  return (
	    window.requestAnimationFrame       ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame    ||
	    window.oRequestAnimationFrame      ||
	    window.msRequestAnimationFrame     ||
	    function(/* function */ callback){
	      return window.setTimeout(callback, 1000 / 60);
	    }
	  );
	})();
	
	/**
	 * Alias for `cancelAnimationFrame` or
	 * `cancelTimeout` function for deprecated browsers.
	 *
	 */
	cancelAnimFrame = (function () {
	  return (
	    window.cancelAnimationFrame       ||
	    window.webkitCancelAnimationFrame ||
	    window.mozCancelAnimationFrame    ||
	    window.oCancelAnimationFrame      ||
	    window.msCancelAnimationFrame     ||
	    function(id){
	      return window.clearTimeout(id);
	    }
	  );
	})();
	
	/**
	 * Parse string to integer.
	 * If the number is not positive or null
	 * the method will return the default value
	 * or 0 if undefined
	 *
	 * @param {string} value String to parse
	 * @param {*} defaultValue Value to return if the result parsed is invalid
	 * @return {number}
	 *
	 */
	parsePositiveInt = function (value, defaultValue) {
	  var output = parseInt(value, 10);
	  return (output >= 0) ? output : defaultValue;
	};
	
	
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Vivus;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Vivus;
	  } else {
	    // Browser globals
	    window.Vivus = Vivus;
	  }
	
	}(window, document));


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex justify-center full-height",
	    class: _vm.heightSize
	  }, [_c('div', {
	    staticClass: "card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto ",
	    attrs: {
	      "id": "login"
	    }
	  }, [_c('div', {
	    staticClass: "card-title",
	    class: _vm.finalBgColor
	  }, [_c('svg', {
	    staticStyle: {
	      "enable-background": "new 0 0 460 460"
	    },
	    attrs: {
	      "id": "logo",
	      "viewBox": "0 0 483 483",
	      "xml:space": "preserve",
	      "width": "128px",
	      "height": "128px"
	    },
	    domProps: {
	      "innerHTML": _vm._s(_vm.logoMethod)
	    }
	  }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.logo))])]), _vm._v(" "), _c('div', {
	    staticClass: "card-content bg-white "
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.email),
	      expression: "credentials.email"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "type": "email"
	    },
	    domProps: {
	      "value": (_vm.credentials.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.email = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Email")])]), _vm._v(" "), _c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.password),
	      expression: "credentials.password"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.credentials.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Password")])])]), _vm._v(" "), _c('div', {
	    staticClass: "card-actions inline-block vertical-middle"
	  }, [_c('button', {
	    staticClass: "teal fit ",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.userLogin()
	      }
	    }
	  }, [_vm._v("Login")]), _vm._v(" "), _c('button', {
	    staticClass: "red fit",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.userLogin()
	      }
	    }
	  }, [_vm._v("Login Google")]), _vm._v(" "), _c('button', {
	    staticClass: "blue fit ",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.sendSock()
	      }
	    }
	  }, [_vm._v("Send")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-6b229064", module.exports)
	  }
	}

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(340)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(342),
	  /* template */
	  __webpack_require__(343),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\logout.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] logout.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4640849f", Component.options)
	  } else {
	    hotAPI.reload("data-v-4640849f", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("4019d224", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(341, function() {
	     var newContent = __webpack_require__(341);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"logout.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(215);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(142);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'logout',
	    data: function data() {
	        return {};
	    },
	    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['deauthenticateUser'])),
	    mounted: function mounted() {
	        this.deauthenticateUser();
	        this.$router.push({
	            name: 'login'
	        });
	    }
	};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "logout"
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-4640849f", module.exports)
	  }
	}

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(345)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(347),
	  /* template */
	  __webpack_require__(348),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\register.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2991fdf8", Component.options)
	  } else {
	    hotAPI.reload("data-v-2991fdf8", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(346);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("02b4265a", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(346, function() {
	     var newContent = __webpack_require__(346);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"register.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 347 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: "register",
	    data: function data() {
	        return {
	            credentials: {
	                name: '',
	                email: '',
	                password: ''
	            }
	        };
	    },
	    methods: {
	        submit: function submit() {
	            var credentials = {
	                name: this.credentials.name,
	                email: this.credentials.email,
	                password: this.credentials.password
	            };
	            auth.signup(this, credentials, 'jokes');
	        }
	    }
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Register\r\n      ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-view layout-padding"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("face")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.name),
	      expression: "credentials.name"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "placeholder": "Your name"
	    },
	    domProps: {
	      "value": (_vm.credentials.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.name = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Name")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("mail")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.email),
	      expression: "credentials.email"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "placeholder": "Your email"
	    },
	    domProps: {
	      "value": (_vm.credentials.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.email = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Email")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("vpn_key")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.password),
	      expression: "credentials.password"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "type": "password",
	      "required": "",
	      "placeholder": "Your password"
	    },
	    domProps: {
	      "value": (_vm.credentials.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Password")])])])])]), _vm._v(" "), _c('button', {
	    staticClass: "primary full-width",
	    on: {
	      "click": function($event) {
	        _vm.submit()
	      }
	    }
	  }, [_vm._v("Register")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-2991fdf8", module.exports)
	  }
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(350)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(352),
	  /* template */
	  __webpack_require__(400),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardAniversariosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardAniversariosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d773706", Component.options)
	  } else {
	    hotAPI.reload("data-v-7d773706", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(351);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("1ed61eb6", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(351, function() {
	     var newContent = __webpack_require__(351);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardAniversariosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(224);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(263);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _chart = __webpack_require__(353);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getBairrosAgrupados();
	  },
	
	  computed: {
	    nomeBairros: function nomeBairros() {
	      var bairros = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this.bairrosAgrupados)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          bairros.push(format(new Date(item), 'MMM', { locale: ptLocale }));
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return bairros;
	    },
	    valoresPorBairro: function valoresPorBairro() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.bairrosAgrupados).map(function (key) {
	        return _this.bairrosAgrupados[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        labels: this.nomeBairros,
	        datasets: [{
	          data: this.valoresPorBairro,
	          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
	          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
	        }]
	      };
	    }
	  },
	  watch: {
	    bairrosAgrupados: function bairrosAgrupados() {
	      this.criarChart();
	    },
	    tipoGrafico: function tipoGrafico() {
	      this.chart.destroy();
	      this.criarChart();
	    }
	  },
	  data: function data() {
	    return {
	      bairrosAgrupados: {},
	      tipoGrafico: 'bar',
	      chart: ''
	    };
	  },
	
	  methods: {
	    getBairrosAgrupados: function getBairrosAgrupados() {
	      var vm = this;
	      vm.$http.get('/relatorio/aniversariantes-mes').then(function (response) {
	        vm.bairrosAgrupados = response.data;
	      });
	    },
	    criarChart: function criarChart() {
	      var ctx = document.getElementById("aniversarios-mes");
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    }
	  }
	};

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @namespace Chart
	 */
	var Chart = __webpack_require__(354)();
	
	__webpack_require__(355)(Chart);
	__webpack_require__(361)(Chart);
	__webpack_require__(363)(Chart);
	__webpack_require__(364)(Chart);
	__webpack_require__(365)(Chart);
	__webpack_require__(366)(Chart);
	__webpack_require__(367)(Chart);
	__webpack_require__(368)(Chart);
	__webpack_require__(369)(Chart);
	__webpack_require__(370)(Chart);
	__webpack_require__(371)(Chart);
	__webpack_require__(372)(Chart);
	__webpack_require__(373)(Chart);
	__webpack_require__(374)(Chart);
	__webpack_require__(375)(Chart);
	__webpack_require__(376)(Chart);
	
	__webpack_require__(377)(Chart);
	__webpack_require__(378)(Chart);
	__webpack_require__(379)(Chart);
	__webpack_require__(380)(Chart);
	
	__webpack_require__(381)(Chart);
	__webpack_require__(382)(Chart);
	__webpack_require__(383)(Chart);
	__webpack_require__(384)(Chart);
	__webpack_require__(385)(Chart);
	__webpack_require__(386)(Chart);
	
	// Controllers must be loaded after elements
	// See Chart.core.datasetController.dataElementType
	__webpack_require__(387)(Chart);
	__webpack_require__(388)(Chart);
	__webpack_require__(389)(Chart);
	__webpack_require__(390)(Chart);
	__webpack_require__(391)(Chart);
	__webpack_require__(392)(Chart);
	
	__webpack_require__(393)(Chart);
	__webpack_require__(394)(Chart);
	__webpack_require__(395)(Chart);
	__webpack_require__(396)(Chart);
	__webpack_require__(397)(Chart);
	__webpack_require__(398)(Chart);
	__webpack_require__(399)(Chart);
	
	window.Chart = module.exports = Chart;


/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function() {
	
		// Occupy the global variable of Chart, and create a simple base class
		var Chart = function(item, config) {
			this.controller = new Chart.Controller(item, config, this);
			return this.controller;
		};
	
		// Globally expose the defaults to allow for user updating/changing
		Chart.defaults = {
			global: {
				responsive: true,
				responsiveAnimationDuration: 0,
				maintainAspectRatio: true,
				events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
				hover: {
					onHover: null,
					mode: 'nearest',
					intersect: true,
					animationDuration: 400
				},
				onClick: null,
				defaultColor: 'rgba(0,0,0,0.1)',
				defaultFontColor: '#666',
				defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				defaultFontSize: 12,
				defaultFontStyle: 'normal',
				showLines: true,
	
				// Element defaults defined in element extensions
				elements: {},
	
				// Legend callback string
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</li>');
					}
					text.push('</ul>');
	
					return text.join('');
				}
			}
		};
	
		Chart.Chart = Chart;
	
		return Chart;
	};


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/* global window: false */
	/* global document: false */
	'use strict';
	
	var color = __webpack_require__(356);
	
	module.exports = function(Chart) {
		// Global Chart helpers object for utility methods and classes
		var helpers = Chart.helpers = {};
	
		// -- Basic js utility methods
		helpers.each = function(loopable, callback, self, reverse) {
			// Check to see if null or undefined firstly.
			var i, len;
			if (helpers.isArray(loopable)) {
				len = loopable.length;
				if (reverse) {
					for (i = len - 1; i >= 0; i--) {
						callback.call(self, loopable[i], i);
					}
				} else {
					for (i = 0; i < len; i++) {
						callback.call(self, loopable[i], i);
					}
				}
			} else if (typeof loopable === 'object') {
				var keys = Object.keys(loopable);
				len = keys.length;
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[keys[i]], keys[i]);
				}
			}
		};
		helpers.clone = function(obj) {
			var objClone = {};
			helpers.each(obj, function(value, key) {
				if (helpers.isArray(value)) {
					objClone[key] = value.slice(0);
				} else if (typeof value === 'object' && value !== null) {
					objClone[key] = helpers.clone(value);
				} else {
					objClone[key] = value;
				}
			});
			return objClone;
		};
		helpers.extend = function(base) {
			var setFn = function(value, key) {
				base[key] = value;
			};
			for (var i = 1, ilen = arguments.length; i < ilen; i++) {
				helpers.each(arguments[i], setFn);
			}
			return base;
		};
		// Need a special merge function to chart configs since they are now grouped
		helpers.configMerge = function(_base) {
			var base = helpers.clone(_base);
			helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
				helpers.each(extension, function(value, key) {
					var baseHasProperty = base.hasOwnProperty(key);
					var baseVal = baseHasProperty ? base[key] : {};
	
					if (key === 'scales') {
						// Scale config merging is complex. Add our own function here for that
						base[key] = helpers.scaleMerge(baseVal, value);
					} else if (key === 'scale') {
						// Used in polar area & radar charts since there is only one scale
						base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
					} else if (baseHasProperty
							&& typeof baseVal === 'object'
							&& !helpers.isArray(baseVal)
							&& baseVal !== null
							&& typeof value === 'object'
							&& !helpers.isArray(value)) {
						// If we are overwriting an object with an object, do a merge of the properties.
						base[key] = helpers.configMerge(baseVal, value);
					} else {
						// can just overwrite the value in this case
						base[key] = value;
					}
				});
			});
	
			return base;
		};
		helpers.scaleMerge = function(_base, extension) {
			var base = helpers.clone(_base);
	
			helpers.each(extension, function(value, key) {
				if (key === 'xAxes' || key === 'yAxes') {
					// These properties are arrays of items
					if (base.hasOwnProperty(key)) {
						helpers.each(value, function(valueObj, index) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
							if (index >= base[key].length || !base[key][index].type) {
								base[key].push(helpers.configMerge(axisDefaults, valueObj));
							} else if (valueObj.type && valueObj.type !== base[key][index].type) {
								// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
								base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
							} else {
								// Type is the same
								base[key][index] = helpers.configMerge(base[key][index], valueObj);
							}
						});
					} else {
						base[key] = [];
						helpers.each(value, function(valueObj) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
						});
					}
				} else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(base[key], value);
	
				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			});
	
			return base;
		};
		helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
			if (value === undefined || value === null) {
				return defaultValue;
			}
	
			if (helpers.isArray(value)) {
				return index < value.length ? value[index] : defaultValue;
			}
	
			return value;
		};
		helpers.getValueOrDefault = function(value, defaultValue) {
			return value === undefined ? defaultValue : value;
		};
		helpers.indexOf = Array.prototype.indexOf?
			function(array, item) {
				return array.indexOf(item);
			}:
			function(array, item) {
				for (var i = 0, ilen = array.length; i < ilen; ++i) {
					if (array[i] === item) {
						return i;
					}
				}
				return -1;
			};
		helpers.where = function(collection, filterCallback) {
			if (helpers.isArray(collection) && Array.prototype.filter) {
				return collection.filter(filterCallback);
			}
			var filtered = [];
	
			helpers.each(collection, function(item) {
				if (filterCallback(item)) {
					filtered.push(item);
				}
			});
	
			return filtered;
		};
		helpers.findIndex = Array.prototype.findIndex?
			function(array, callback, scope) {
				return array.findIndex(callback, scope);
			} :
			function(array, callback, scope) {
				scope = scope === undefined? array : scope;
				for (var i = 0, ilen = array.length; i < ilen; ++i) {
					if (callback.call(scope, array[i], i, array)) {
						return i;
					}
				}
				return -1;
			};
		helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
			// Default to start of the array
			if (startIndex === undefined || startIndex === null) {
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)) {
					return currentItem;
				}
			}
		};
		helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
			// Default to end of the array
			if (startIndex === undefined || startIndex === null) {
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)) {
					return currentItem;
				}
			}
		};
		helpers.inherits = function(extensions) {
			// Basic javascript inheritance based on the model created in Backbone.js
			var me = this;
			var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
				return me.apply(this, arguments);
			};
	
			var Surrogate = function() {
				this.constructor = ChartElement;
			};
			Surrogate.prototype = me.prototype;
			ChartElement.prototype = new Surrogate();
	
			ChartElement.extend = helpers.inherits;
	
			if (extensions) {
				helpers.extend(ChartElement.prototype, extensions);
			}
	
			ChartElement.__super__ = me.prototype;
	
			return ChartElement;
		};
		helpers.noop = function() {};
		helpers.uid = (function() {
			var id = 0;
			return function() {
				return id++;
			};
		}());
		// -- Math methods
		helpers.isNumber = function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		};
		helpers.almostEquals = function(x, y, epsilon) {
			return Math.abs(x - y) < epsilon;
		};
		helpers.almostWhole = function(x, epsilon) {
			var rounded = Math.round(x);
			return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
		};
		helpers.max = function(array) {
			return array.reduce(function(max, value) {
				if (!isNaN(value)) {
					return Math.max(max, value);
				}
				return max;
			}, Number.NEGATIVE_INFINITY);
		};
		helpers.min = function(array) {
			return array.reduce(function(min, value) {
				if (!isNaN(value)) {
					return Math.min(min, value);
				}
				return min;
			}, Number.POSITIVE_INFINITY);
		};
		helpers.sign = Math.sign?
			function(x) {
				return Math.sign(x);
			} :
			function(x) {
				x = +x; // convert to a number
				if (x === 0 || isNaN(x)) {
					return x;
				}
				return x > 0 ? 1 : -1;
			};
		helpers.log10 = Math.log10?
			function(x) {
				return Math.log10(x);
			} :
			function(x) {
				return Math.log(x) / Math.LN10;
			};
		helpers.toRadians = function(degrees) {
			return degrees * (Math.PI / 180);
		};
		helpers.toDegrees = function(radians) {
			return radians * (180 / Math.PI);
		};
		// Gets the angle from vertical upright to the point about a centre.
		helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
	
			var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
	
			if (angle < (-0.5 * Math.PI)) {
				angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
			}
	
			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		};
		helpers.distanceBetweenPoints = function(pt1, pt2) {
			return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
		};
		helpers.aliasPixel = function(pixelWidth) {
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		};
		helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
			// Props to Rob Spencer at scaled innovation for his post on splining between points
			// http://scaledinnovation.com/analytics/splines/aboutSplines.html
	
			// This function must also respect "skipped" points
	
			var previous = firstPoint.skip ? middlePoint : firstPoint,
				current = middlePoint,
				next = afterPoint.skip ? middlePoint : afterPoint;
	
			var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
			var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
	
			var s01 = d01 / (d01 + d12);
			var s12 = d12 / (d01 + d12);
	
			// If all points are the same, s01 & s02 will be inf
			s01 = isNaN(s01) ? 0 : s01;
			s12 = isNaN(s12) ? 0 : s12;
	
			var fa = t * s01; // scaling factor for triangle Ta
			var fb = t * s12;
	
			return {
				previous: {
					x: current.x - fa * (next.x - previous.x),
					y: current.y - fa * (next.y - previous.y)
				},
				next: {
					x: current.x + fb * (next.x - previous.x),
					y: current.y + fb * (next.y - previous.y)
				}
			};
		};
		helpers.EPSILON = Number.EPSILON || 1e-14;
		helpers.splineCurveMonotone = function(points) {
			// This function calculates Bézier control points in a similar way than |splineCurve|,
			// but preserves monotonicity of the provided data and ensures no local extremums are added
			// between the dataset discrete points due to the interpolation.
			// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
	
			var pointsWithTangents = (points || []).map(function(point) {
				return {
					model: point._model,
					deltaK: 0,
					mK: 0
				};
			});
	
			// Calculate slopes (deltaK) and initialize tangents (mK)
			var pointsLen = pointsWithTangents.length;
			var i, pointBefore, pointCurrent, pointAfter;
			for (i = 0; i < pointsLen; ++i) {
				pointCurrent = pointsWithTangents[i];
				if (pointCurrent.model.skip) {
					continue;
				}
	
				pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
				pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
				if (pointAfter && !pointAfter.model.skip) {
					var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);
	
					// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
					pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
				}
	
				if (!pointBefore || pointBefore.model.skip) {
					pointCurrent.mK = pointCurrent.deltaK;
				} else if (!pointAfter || pointAfter.model.skip) {
					pointCurrent.mK = pointBefore.deltaK;
				} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
					pointCurrent.mK = 0;
				} else {
					pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
				}
			}
	
			// Adjust tangents to ensure monotonic properties
			var alphaK, betaK, tauK, squaredMagnitude;
			for (i = 0; i < pointsLen - 1; ++i) {
				pointCurrent = pointsWithTangents[i];
				pointAfter = pointsWithTangents[i + 1];
				if (pointCurrent.model.skip || pointAfter.model.skip) {
					continue;
				}
	
				if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
					pointCurrent.mK = pointAfter.mK = 0;
					continue;
				}
	
				alphaK = pointCurrent.mK / pointCurrent.deltaK;
				betaK = pointAfter.mK / pointCurrent.deltaK;
				squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
				if (squaredMagnitude <= 9) {
					continue;
				}
	
				tauK = 3 / Math.sqrt(squaredMagnitude);
				pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
				pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
			}
	
			// Compute control points
			var deltaX;
			for (i = 0; i < pointsLen; ++i) {
				pointCurrent = pointsWithTangents[i];
				if (pointCurrent.model.skip) {
					continue;
				}
	
				pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
				pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
				if (pointBefore && !pointBefore.model.skip) {
					deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
					pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
					pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
				}
				if (pointAfter && !pointAfter.model.skip) {
					deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
					pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
					pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
				}
			}
		};
		helpers.nextItem = function(collection, index, loop) {
			if (loop) {
				return index >= collection.length - 1 ? collection[0] : collection[index + 1];
			}
			return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
		};
		helpers.previousItem = function(collection, index, loop) {
			if (loop) {
				return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
			}
			return index <= 0 ? collection[0] : collection[index - 1];
		};
		// Implementation of the nice number algorithm used in determining where axis labels will go
		helpers.niceNum = function(range, round) {
			var exponent = Math.floor(helpers.log10(range));
			var fraction = range / Math.pow(10, exponent);
			var niceFraction;
	
			if (round) {
				if (fraction < 1.5) {
					niceFraction = 1;
				} else if (fraction < 3) {
					niceFraction = 2;
				} else if (fraction < 7) {
					niceFraction = 5;
				} else {
					niceFraction = 10;
				}
			} else if (fraction <= 1.0) {
				niceFraction = 1;
			} else if (fraction <= 2) {
				niceFraction = 2;
			} else if (fraction <= 5) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
	
			return niceFraction * Math.pow(10, exponent);
		};
		// Easing functions adapted from Robert Penner's easing equations
		// http://www.robertpenner.com/easing/
		var easingEffects = helpers.easingEffects = {
			linear: function(t) {
				return t;
			},
			easeInQuad: function(t) {
				return t * t;
			},
			easeOutQuad: function(t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t;
				}
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function(t) {
				return t * t * t;
			},
			easeOutCubic: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function(t) {
				return t * t * t * t;
			},
			easeOutQuart: function(t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t * t;
				}
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function(t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function(t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function(t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function(t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function(t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function(t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function(t) {
				if (t === 0) {
					return 0;
				}
				if (t === 1) {
					return 1;
				}
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * Math.pow(2, 10 * (t - 1));
				}
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function(t) {
				if (t >= 1) {
					return t;
				}
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function(t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function(t) {
				if ((t /= 1 / 2) < 1) {
					return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				}
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1) === 1) {
					return 1;
				}
				if (!p) {
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1) === 1) {
					return 1;
				}
				if (!p) {
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1 / 2) === 2) {
					return 1;
				}
				if (!p) {
					p = 1 * (0.3 * 1.5);
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				if (t < 1) {
					return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				}
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function(t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function(t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function(t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				}
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function(t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function(t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				}
				return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
			},
			easeInOutBounce: function(t) {
				if (t < 1 / 2) {
					return easingEffects.easeInBounce(t * 2) * 0.5;
				}
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		};
		// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		helpers.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		}());
		// -- DOM methods
		helpers.getRelativePosition = function(evt, chart) {
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();
	
			var touches = e.touches;
			if (touches && touches.length > 0) {
				mouseX = touches[0].clientX;
				mouseY = touches[0].clientY;
	
			} else {
				mouseX = e.clientX;
				mouseY = e.clientY;
			}
	
			// Scale mouse coordinates into canvas coordinates
			// by following the pattern laid out by 'jerryj' in the comments of
			// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
			var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
			var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
			var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
			var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
			var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
			var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
	
			// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
			// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
			mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
			mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);
	
			return {
				x: mouseX,
				y: mouseY
			};
	
		};
		helpers.addEvent = function(node, eventType, method) {
			if (node.addEventListener) {
				node.addEventListener(eventType, method);
			} else if (node.attachEvent) {
				node.attachEvent('on' + eventType, method);
			} else {
				node['on' + eventType] = method;
			}
		};
		helpers.removeEvent = function(node, eventType, handler) {
			if (node.removeEventListener) {
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent) {
				node.detachEvent('on' + eventType, handler);
			} else {
				node['on' + eventType] = helpers.noop;
			}
		};
	
		// Private helper function to convert max-width/max-height values that may be percentages into a number
		function parseMaxStyle(styleValue, node, parentProperty) {
			var valueInPixels;
			if (typeof(styleValue) === 'string') {
				valueInPixels = parseInt(styleValue, 10);
	
				if (styleValue.indexOf('%') !== -1) {
					// percentage * size in dimension
					valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
				}
			} else {
				valueInPixels = styleValue;
			}
	
			return valueInPixels;
		}
	
		/**
		 * Returns if the given value contains an effective constraint.
		 * @private
		 */
		function isConstrainedValue(value) {
			return value !== undefined && value !== null && value !== 'none';
		}
	
		// Private helper to get a constraint dimension
		// @param domNode : the node to check the constraint on
		// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
		// @param percentageProperty : property of parent to use when calculating width as a percentage
		// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
		function getConstraintDimension(domNode, maxStyle, percentageProperty) {
			var view = document.defaultView;
			var parentNode = domNode.parentNode;
			var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
			var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
			var hasCNode = isConstrainedValue(constrainedNode);
			var hasCContainer = isConstrainedValue(constrainedContainer);
			var infinity = Number.POSITIVE_INFINITY;
	
			if (hasCNode || hasCContainer) {
				return Math.min(
					hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
					hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
			}
	
			return 'none';
		}
		// returns Number or undefined if no constraint
		helpers.getConstraintWidth = function(domNode) {
			return getConstraintDimension(domNode, 'max-width', 'clientWidth');
		};
		// returns Number or undefined if no constraint
		helpers.getConstraintHeight = function(domNode) {
			return getConstraintDimension(domNode, 'max-height', 'clientHeight');
		};
		helpers.getMaximumWidth = function(domNode) {
			var container = domNode.parentNode;
			var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
			var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
			var w = container.clientWidth - paddingLeft - paddingRight;
			var cw = helpers.getConstraintWidth(domNode);
			return isNaN(cw)? w : Math.min(w, cw);
		};
		helpers.getMaximumHeight = function(domNode) {
			var container = domNode.parentNode;
			var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
			var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
			var h = container.clientHeight - paddingTop - paddingBottom;
			var ch = helpers.getConstraintHeight(domNode);
			return isNaN(ch)? h : Math.min(h, ch);
		};
		helpers.getStyle = function(el, property) {
			return el.currentStyle ?
				el.currentStyle[property] :
				document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
		};
		helpers.retinaScale = function(chart) {
			var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
			if (pixelRatio === 1) {
				return;
			}
	
			var canvas = chart.canvas;
			var height = chart.height;
			var width = chart.width;
	
			canvas.height = height * pixelRatio;
			canvas.width = width * pixelRatio;
			chart.ctx.scale(pixelRatio, pixelRatio);
	
			// If no style has been set on the canvas, the render size is used as display size,
			// making the chart visually bigger, so let's enforce it to the "correct" values.
			// See https://github.com/chartjs/Chart.js/issues/3575
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		};
		// -- Canvas methods
		helpers.clear = function(chart) {
			chart.ctx.clearRect(0, 0, chart.width, chart.height);
		};
		helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
			return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
		};
		helpers.longestText = function(ctx, font, arrayOfThings, cache) {
			cache = cache || {};
			var data = cache.data = cache.data || {};
			var gc = cache.garbageCollect = cache.garbageCollect || [];
	
			if (cache.font !== font) {
				data = cache.data = {};
				gc = cache.garbageCollect = [];
				cache.font = font;
			}
	
			ctx.font = font;
			var longest = 0;
			helpers.each(arrayOfThings, function(thing) {
				// Undefined strings and arrays should not be measured
				if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
					longest = helpers.measureText(ctx, data, gc, longest, thing);
				} else if (helpers.isArray(thing)) {
					// if it is an array lets measure each element
					// to do maybe simplify this function a bit so we can do this more recursively?
					helpers.each(thing, function(nestedThing) {
						// Undefined strings and arrays should not be measured
						if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
							longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
						}
					});
				}
			});
	
			var gcLen = gc.length / 2;
			if (gcLen > arrayOfThings.length) {
				for (var i = 0; i < gcLen; i++) {
					delete data[gc[i]];
				}
				gc.splice(0, gcLen);
			}
			return longest;
		};
		helpers.measureText = function(ctx, data, gc, longest, string) {
			var textWidth = data[string];
			if (!textWidth) {
				textWidth = data[string] = ctx.measureText(string).width;
				gc.push(string);
			}
			if (textWidth > longest) {
				longest = textWidth;
			}
			return longest;
		};
		helpers.numberOfLabelLines = function(arrayOfThings) {
			var numberOfLines = 1;
			helpers.each(arrayOfThings, function(thing) {
				if (helpers.isArray(thing)) {
					if (thing.length > numberOfLines) {
						numberOfLines = thing.length;
					}
				}
			});
			return numberOfLines;
		};
		helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};
		helpers.color = function(c) {
			if (!color) {
				console.error('Color.js not found!');
				return c;
			}
	
			/* global CanvasGradient */
			if (c instanceof CanvasGradient) {
				return color(Chart.defaults.global.defaultColor);
			}
	
			return color(c);
		};
		helpers.isArray = Array.isArray?
			function(obj) {
				return Array.isArray(obj);
			} :
			function(obj) {
				return Object.prototype.toString.call(obj) === '[object Array]';
			};
		// ! @see http://stackoverflow.com/a/14853974
		helpers.arrayEquals = function(a0, a1) {
			var i, ilen, v0, v1;
	
			if (!a0 || !a1 || a0.length !== a1.length) {
				return false;
			}
	
			for (i = 0, ilen=a0.length; i < ilen; ++i) {
				v0 = a0[i];
				v1 = a1[i];
	
				if (v0 instanceof Array && v1 instanceof Array) {
					if (!helpers.arrayEquals(v0, v1)) {
						return false;
					}
				} else if (v0 !== v1) {
					// NOTE: two different object instances will never be equal: {x:20} != {x:20}
					return false;
				}
			}
	
			return true;
		};
		helpers.callCallback = function(fn, args, _tArg) {
			if (fn && typeof fn.call === 'function') {
				fn.apply(_tArg, args);
			}
		};
		helpers.getHoverColor = function(colorValue) {
			/* global CanvasPattern */
			return (colorValue instanceof CanvasPattern) ?
				colorValue :
				helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
		};
	};


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(357);
	var string = __webpack_require__(359);
	
	var Color = function (obj) {
		if (obj instanceof Color) {
			return obj;
		}
		if (!(this instanceof Color)) {
			return new Color(obj);
		}
	
		this.valid = false;
		this.values = {
			rgb: [0, 0, 0],
			hsl: [0, 0, 0],
			hsv: [0, 0, 0],
			hwb: [0, 0, 0],
			cmyk: [0, 0, 0, 0],
			alpha: 1
		};
	
		// parse Color() argument
		var vals;
		if (typeof obj === 'string') {
			vals = string.getRgba(obj);
			if (vals) {
				this.setValues('rgb', vals);
			} else if (vals = string.getHsla(obj)) {
				this.setValues('hsl', vals);
			} else if (vals = string.getHwb(obj)) {
				this.setValues('hwb', vals);
			}
		} else if (typeof obj === 'object') {
			vals = obj;
			if (vals.r !== undefined || vals.red !== undefined) {
				this.setValues('rgb', vals);
			} else if (vals.l !== undefined || vals.lightness !== undefined) {
				this.setValues('hsl', vals);
			} else if (vals.v !== undefined || vals.value !== undefined) {
				this.setValues('hsv', vals);
			} else if (vals.w !== undefined || vals.whiteness !== undefined) {
				this.setValues('hwb', vals);
			} else if (vals.c !== undefined || vals.cyan !== undefined) {
				this.setValues('cmyk', vals);
			}
		}
	};
	
	Color.prototype = {
		isValid: function () {
			return this.valid;
		},
		rgb: function () {
			return this.setSpace('rgb', arguments);
		},
		hsl: function () {
			return this.setSpace('hsl', arguments);
		},
		hsv: function () {
			return this.setSpace('hsv', arguments);
		},
		hwb: function () {
			return this.setSpace('hwb', arguments);
		},
		cmyk: function () {
			return this.setSpace('cmyk', arguments);
		},
	
		rgbArray: function () {
			return this.values.rgb;
		},
		hslArray: function () {
			return this.values.hsl;
		},
		hsvArray: function () {
			return this.values.hsv;
		},
		hwbArray: function () {
			var values = this.values;
			if (values.alpha !== 1) {
				return values.hwb.concat([values.alpha]);
			}
			return values.hwb;
		},
		cmykArray: function () {
			return this.values.cmyk;
		},
		rgbaArray: function () {
			var values = this.values;
			return values.rgb.concat([values.alpha]);
		},
		hslaArray: function () {
			var values = this.values;
			return values.hsl.concat([values.alpha]);
		},
		alpha: function (val) {
			if (val === undefined) {
				return this.values.alpha;
			}
			this.setValues('alpha', val);
			return this;
		},
	
		red: function (val) {
			return this.setChannel('rgb', 0, val);
		},
		green: function (val) {
			return this.setChannel('rgb', 1, val);
		},
		blue: function (val) {
			return this.setChannel('rgb', 2, val);
		},
		hue: function (val) {
			if (val) {
				val %= 360;
				val = val < 0 ? 360 + val : val;
			}
			return this.setChannel('hsl', 0, val);
		},
		saturation: function (val) {
			return this.setChannel('hsl', 1, val);
		},
		lightness: function (val) {
			return this.setChannel('hsl', 2, val);
		},
		saturationv: function (val) {
			return this.setChannel('hsv', 1, val);
		},
		whiteness: function (val) {
			return this.setChannel('hwb', 1, val);
		},
		blackness: function (val) {
			return this.setChannel('hwb', 2, val);
		},
		value: function (val) {
			return this.setChannel('hsv', 2, val);
		},
		cyan: function (val) {
			return this.setChannel('cmyk', 0, val);
		},
		magenta: function (val) {
			return this.setChannel('cmyk', 1, val);
		},
		yellow: function (val) {
			return this.setChannel('cmyk', 2, val);
		},
		black: function (val) {
			return this.setChannel('cmyk', 3, val);
		},
	
		hexString: function () {
			return string.hexString(this.values.rgb);
		},
		rgbString: function () {
			return string.rgbString(this.values.rgb, this.values.alpha);
		},
		rgbaString: function () {
			return string.rgbaString(this.values.rgb, this.values.alpha);
		},
		percentString: function () {
			return string.percentString(this.values.rgb, this.values.alpha);
		},
		hslString: function () {
			return string.hslString(this.values.hsl, this.values.alpha);
		},
		hslaString: function () {
			return string.hslaString(this.values.hsl, this.values.alpha);
		},
		hwbString: function () {
			return string.hwbString(this.values.hwb, this.values.alpha);
		},
		keyword: function () {
			return string.keyword(this.values.rgb, this.values.alpha);
		},
	
		rgbNumber: function () {
			var rgb = this.values.rgb;
			return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
		},
	
		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.values.rgb;
			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}
			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},
	
		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();
			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}
			return (lum2 + 0.05) / (lum1 + 0.05);
		},
	
		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}
	
			return (contrastRatio >= 4.5) ? 'AA' : '';
		},
	
		dark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.values.rgb;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},
	
		light: function () {
			return !this.dark();
		},
	
		negate: function () {
			var rgb = [];
			for (var i = 0; i < 3; i++) {
				rgb[i] = 255 - this.values.rgb[i];
			}
			this.setValues('rgb', rgb);
			return this;
		},
	
		lighten: function (ratio) {
			var hsl = this.values.hsl;
			hsl[2] += hsl[2] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		darken: function (ratio) {
			var hsl = this.values.hsl;
			hsl[2] -= hsl[2] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		saturate: function (ratio) {
			var hsl = this.values.hsl;
			hsl[1] += hsl[1] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		desaturate: function (ratio) {
			var hsl = this.values.hsl;
			hsl[1] -= hsl[1] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		whiten: function (ratio) {
			var hwb = this.values.hwb;
			hwb[1] += hwb[1] * ratio;
			this.setValues('hwb', hwb);
			return this;
		},
	
		blacken: function (ratio) {
			var hwb = this.values.hwb;
			hwb[2] += hwb[2] * ratio;
			this.setValues('hwb', hwb);
			return this;
		},
	
		greyscale: function () {
			var rgb = this.values.rgb;
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			this.setValues('rgb', [val, val, val]);
			return this;
		},
	
		clearer: function (ratio) {
			var alpha = this.values.alpha;
			this.setValues('alpha', alpha - (alpha * ratio));
			return this;
		},
	
		opaquer: function (ratio) {
			var alpha = this.values.alpha;
			this.setValues('alpha', alpha + (alpha * ratio));
			return this;
		},
	
		rotate: function (degrees) {
			var hsl = this.values.hsl;
			var hue = (hsl[0] + degrees) % 360;
			hsl[0] = hue < 0 ? 360 + hue : hue;
			this.setValues('hsl', hsl);
			return this;
		},
	
		/**
		 * Ported from sass implementation in C
		 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		 */
		mix: function (mixinColor, weight) {
			var color1 = this;
			var color2 = mixinColor;
			var p = weight === undefined ? 0.5 : weight;
	
			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();
	
			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;
	
			return this
				.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue()
				)
				.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
		},
	
		toJSON: function () {
			return this.rgb();
		},
	
		clone: function () {
			// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
			// making the final build way to big to embed in Chart.js. So let's do it manually,
			// assuming that values to clone are 1 dimension arrays containing only numbers,
			// except 'alpha' which is a number.
			var result = new Color();
			var source = this.values;
			var target = result.values;
			var value, type;
	
			for (var prop in source) {
				if (source.hasOwnProperty(prop)) {
					value = source[prop];
					type = ({}).toString.call(value);
					if (type === '[object Array]') {
						target[prop] = value.slice(0);
					} else if (type === '[object Number]') {
						target[prop] = value;
					} else {
						console.error('unexpected color value:', value);
					}
				}
			}
	
			return result;
		}
	};
	
	Color.prototype.spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};
	
	Color.prototype.maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};
	
	Color.prototype.getValues = function (space) {
		var values = this.values;
		var vals = {};
	
		for (var i = 0; i < space.length; i++) {
			vals[space.charAt(i)] = values[space][i];
		}
	
		if (values.alpha !== 1) {
			vals.a = values.alpha;
		}
	
		// {r: 255, g: 255, b: 255, a: 0.4}
		return vals;
	};
	
	Color.prototype.setValues = function (space, vals) {
		var values = this.values;
		var spaces = this.spaces;
		var maxes = this.maxes;
		var alpha = 1;
		var i;
	
		this.valid = true;
	
		if (space === 'alpha') {
			alpha = vals;
		} else if (vals.length) {
			// [10, 10, 10]
			values[space] = vals.slice(0, space.length);
			alpha = vals[space.length];
		} else if (vals[space.charAt(0)] !== undefined) {
			// {r: 10, g: 10, b: 10}
			for (i = 0; i < space.length; i++) {
				values[space][i] = vals[space.charAt(i)];
			}
	
			alpha = vals.a;
		} else if (vals[spaces[space][0]] !== undefined) {
			// {red: 10, green: 10, blue: 10}
			var chans = spaces[space];
	
			for (i = 0; i < space.length; i++) {
				values[space][i] = vals[chans[i]];
			}
	
			alpha = vals.alpha;
		}
	
		values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));
	
		if (space === 'alpha') {
			return false;
		}
	
		var capped;
	
		// cap values of the space prior converting all values
		for (i = 0; i < space.length; i++) {
			capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
			values[space][i] = Math.round(capped);
		}
	
		// convert to all the other color spaces
		for (var sname in spaces) {
			if (sname !== space) {
				values[sname] = convert[space][sname](values[space]);
			}
		}
	
		return true;
	};
	
	Color.prototype.setSpace = function (space, args) {
		var vals = args[0];
	
		if (vals === undefined) {
			// color.rgb()
			return this.getValues(space);
		}
	
		// color.rgb(10, 10, 10)
		if (typeof vals === 'number') {
			vals = Array.prototype.slice.call(args);
		}
	
		this.setValues(space, vals);
		return this;
	};
	
	Color.prototype.setChannel = function (space, index, val) {
		var svalues = this.values[space];
		if (val === undefined) {
			// color.red()
			return svalues[index];
		} else if (val === svalues[index]) {
			// color.red(color.red())
			return this;
		}
	
		// color.red(100)
		svalues[index] = val;
		this.setValues(space, svalues);
	
		return this;
	};
	
	if (typeof window !== 'undefined') {
		window.Color = Color;
	}
	
	module.exports = Color;


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(358);
	
	var convert = function() {
	   return new Converter();
	}
	
	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);
	
	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];
	
	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};
	
	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword
	
	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}
	
	
	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};
	
	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }
	
	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};
	
	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);
	
	      this.convs[space] = vals;
	   }
	  return vals;
	};
	
	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});
	
	module.exports = convert;

/***/ },
/* 358 */
/***/ function(module, exports) {

	/* MIT license */
	
	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,
	
	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,
	
	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,
	
	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,
	
	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,
	
	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,
	
	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,
	
	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,
	
	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}
	
	
	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  l = (min + max) / 2;
	
	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);
	
	  return [h, s * 100, l * 100];
	}
	
	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;
	
	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  v = ((max / 255) * 1000) / 10;
	
	  return [h, s, v];
	}
	
	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));
	
	  return [h, w * 100, b * 100];
	}
	
	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;
	
	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}
	
	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}
	
	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;
	
	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	
	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	
	  return [x * 100, y *100, z * 100];
	}
	
	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}
	
	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;
	
	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }
	
	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;
	
	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;
	
	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;
	
	    rgb[i] = val * 255;
	  }
	
	  return rgb;
	}
	
	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;
	
	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }
	
	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}
	
	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}
	
	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}
	
	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}
	
	
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;
	
	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;
	
	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	
	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;
	
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	
	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}
	
	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}
	
	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}
	
	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;
	
	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }
	
	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation
	
	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}
	
	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}
	
	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}
	
	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}
	
	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;
	
	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}
	
	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}
	
	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}
	
	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}
	
	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}
	
	
	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;
	
	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	
	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);
	
	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);
	
	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);
	
	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}
	
	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;
	
	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }
	
	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
	
	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
	
	  return [x, y, z];
	}
	
	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;
	
	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}
	
	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}
	
	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;
	
	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}
	
	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}
	
	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}
	
	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}
	
	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}
	
	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}
	
	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}
	
	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}
	
	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}
	
	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}
	
	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};
	
	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(360);
	
	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,
	
	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}
	
	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\w+)/;
	
	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }
	
	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}
	
	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}
	
	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}
	
	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}
	
	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}
	
	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}
	
	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}
	
	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}
	
	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}
	
	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	
	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}
	
	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}
	
	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}
	
	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}
	
	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}
	
	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}
	
	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}
	
	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}
	
	
	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },
/* 360 */
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// By default, select the browser (DOM) platform.
	// @TODO Make possible to select another platform at build time.
	var implementation = __webpack_require__(362);
	
	module.exports = function(Chart) {
		/**
		 * @namespace Chart.platform
		 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
		 * @since 2.4.0
		 */
		Chart.platform = {
			/**
			 * Called at chart construction time, returns a context2d instance implementing
			 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
			 * @param {*} item - The native item from which to acquire context (platform specific)
			 * @param {Object} options - The chart options
			 * @returns {CanvasRenderingContext2D} context2d instance
			 */
			acquireContext: function() {},
	
			/**
			 * Called at chart destruction time, releases any resources associated to the context
			 * previously returned by the acquireContext() method.
			 * @param {CanvasRenderingContext2D} context - The context2d instance
			 * @returns {Boolean} true if the method succeeded, else false
			 */
			releaseContext: function() {},
	
			/**
			 * Registers the specified listener on the given chart.
			 * @param {Chart} chart - Chart from which to listen for event
			 * @param {String} type - The ({@link IEvent}) type to listen for
			 * @param {Function} listener - Receives a notification (an object that implements
			 * the {@link IEvent} interface) when an event of the specified type occurs.
			 */
			addEventListener: function() {},
	
			/**
			 * Removes the specified listener previously registered with addEventListener.
			 * @param {Chart} chart -Chart from which to remove the listener
			 * @param {String} type - The ({@link IEvent}) type to remove
			 * @param {Function} listener - The listener function to remove from the event target.
			 */
			removeEventListener: function() {}
		};
	
		/**
		 * @interface IPlatform
		 * Allows abstracting platform dependencies away from the chart
		 * @borrows Chart.platform.acquireContext as acquireContext
		 * @borrows Chart.platform.releaseContext as releaseContext
		 * @borrows Chart.platform.addEventListener as addEventListener
		 * @borrows Chart.platform.removeEventListener as removeEventListener
		 */
	
		/**
		 * @interface IEvent
		 * @prop {String} type - The event type name, possible values are:
		 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
		 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
		 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
		 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
		 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
		 */
	
		Chart.helpers.extend(Chart.platform, implementation(Chart));
	};


/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';
	
	// Chart.Platform implementation for targeting a web browser
	module.exports = function(Chart) {
		var helpers = Chart.helpers;
	
		// DOM event types -> Chart.js event types.
		// Note: only events with different types are mapped.
		// https://developer.mozilla.org/en-US/docs/Web/Events
		var eventTypeMap = {
			// Touch events
			touchstart: 'mousedown',
			touchmove: 'mousemove',
			touchend: 'mouseup',
	
			// Pointer events
			pointerenter: 'mouseenter',
			pointerdown: 'mousedown',
			pointermove: 'mousemove',
			pointerup: 'mouseup',
			pointerleave: 'mouseout',
			pointerout: 'mouseout'
		};
	
		/**
		 * The "used" size is the final value of a dimension property after all calculations have
		 * been performed. This method uses the computed style of `element` but returns undefined
		 * if the computed style is not expressed in pixels. That can happen in some cases where
		 * `element` has a size relative to its parent and this last one is not yet displayed,
		 * for example because of `display: none` on a parent node.
		 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
		 * @returns {Number} Size in pixels or undefined if unknown.
		 */
		function readUsedSize(element, property) {
			var value = helpers.getStyle(element, property);
			var matches = value && value.match(/(\d+)px/);
			return matches? Number(matches[1]) : undefined;
		}
	
		/**
		 * Initializes the canvas style and render size without modifying the canvas display size,
		 * since responsiveness is handled by the controller.resize() method. The config is used
		 * to determine the aspect ratio to apply in case no explicit height has been specified.
		 */
		function initCanvas(canvas, config) {
			var style = canvas.style;
	
			// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
			// returns null or '' if no explicit value has been set to the canvas attribute.
			var renderHeight = canvas.getAttribute('height');
			var renderWidth = canvas.getAttribute('width');
	
			// Chart.js modifies some canvas values that we want to restore on destroy
			canvas._chartjs = {
				initial: {
					height: renderHeight,
					width: renderWidth,
					style: {
						display: style.display,
						height: style.height,
						width: style.width
					}
				}
			};
	
			// Force canvas to display as block to avoid extra space caused by inline
			// elements, which would interfere with the responsive resize process.
			// https://github.com/chartjs/Chart.js/issues/2538
			style.display = style.display || 'block';
	
			if (renderWidth === null || renderWidth === '') {
				var displayWidth = readUsedSize(canvas, 'width');
				if (displayWidth !== undefined) {
					canvas.width = displayWidth;
				}
			}
	
			if (renderHeight === null || renderHeight === '') {
				if (canvas.style.height === '') {
					// If no explicit render height and style height, let's apply the aspect ratio,
					// which one can be specified by the user but also by charts as default option
					// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
					canvas.height = canvas.width / (config.options.aspectRatio || 2);
				} else {
					var displayHeight = readUsedSize(canvas, 'height');
					if (displayWidth !== undefined) {
						canvas.height = displayHeight;
					}
				}
			}
	
			return canvas;
		}
	
		function createEvent(type, chart, x, y, native) {
			return {
				type: type,
				chart: chart,
				native: native || null,
				x: x !== undefined? x : null,
				y: y !== undefined? y : null,
			};
		}
	
		function fromNativeEvent(event, chart) {
			var type = eventTypeMap[event.type] || event.type;
			var pos = helpers.getRelativePosition(event, chart);
			return createEvent(type, chart, pos.x, pos.y, event);
		}
	
		function createResizer(handler) {
			var iframe = document.createElement('iframe');
			iframe.className = 'chartjs-hidden-iframe';
			iframe.style.cssText =
				'display:block;'+
				'overflow:hidden;'+
				'border:0;'+
				'margin:0;'+
				'top:0;'+
				'left:0;'+
				'bottom:0;'+
				'right:0;'+
				'height:100%;'+
				'width:100%;'+
				'position:absolute;'+
				'pointer-events:none;'+
				'z-index:-1;';
	
			// Prevent the iframe to gain focus on tab.
			// https://github.com/chartjs/Chart.js/issues/3090
			iframe.tabIndex = -1;
	
			// If the iframe is re-attached to the DOM, the resize listener is removed because the
			// content is reloaded, so make sure to install the handler after the iframe is loaded.
			// https://github.com/chartjs/Chart.js/issues/3521
			helpers.addEvent(iframe, 'load', function() {
				helpers.addEvent(iframe.contentWindow || iframe, 'resize', handler);
	
				// The iframe size might have changed while loading, which can also
				// happen if the size has been changed while detached from the DOM.
				handler();
			});
	
			return iframe;
		}
	
		function addResizeListener(node, listener, chart) {
			var stub = node._chartjs = {
				ticking: false
			};
	
			// Throttle the callback notification until the next animation frame.
			var notify = function() {
				if (!stub.ticking) {
					stub.ticking = true;
					helpers.requestAnimFrame.call(window, function() {
						if (stub.resizer) {
							stub.ticking = false;
							return listener(createEvent('resize', chart));
						}
					});
				}
			};
	
			// Let's keep track of this added iframe and thus avoid DOM query when removing it.
			stub.resizer = createResizer(notify);
	
			node.insertBefore(stub.resizer, node.firstChild);
		}
	
		function removeResizeListener(node) {
			if (!node || !node._chartjs) {
				return;
			}
	
			var resizer = node._chartjs.resizer;
			if (resizer) {
				resizer.parentNode.removeChild(resizer);
				node._chartjs.resizer = null;
			}
	
			delete node._chartjs;
		}
	
		return {
			acquireContext: function(item, config) {
				if (typeof item === 'string') {
					item = document.getElementById(item);
				} else if (item.length) {
					// Support for array based queries (such as jQuery)
					item = item[0];
				}
	
				if (item && item.canvas) {
					// Support for any object associated to a canvas (including a context2d)
					item = item.canvas;
				}
	
				if (item instanceof HTMLCanvasElement) {
					// To prevent canvas fingerprinting, some add-ons undefine the getContext
					// method, for example: https://github.com/kkapsner/CanvasBlocker
					// https://github.com/chartjs/Chart.js/issues/2807
					var context = item.getContext && item.getContext('2d');
					if (context instanceof CanvasRenderingContext2D) {
						initCanvas(item, config);
						return context;
					}
				}
	
				return null;
			},
	
			releaseContext: function(context) {
				var canvas = context.canvas;
				if (!canvas._chartjs) {
					return;
				}
	
				var initial = canvas._chartjs.initial;
				['height', 'width'].forEach(function(prop) {
					var value = initial[prop];
					if (value === undefined || value === null) {
						canvas.removeAttribute(prop);
					} else {
						canvas.setAttribute(prop, value);
					}
				});
	
				helpers.each(initial.style || {}, function(value, key) {
					canvas.style[key] = value;
				});
	
				// The canvas render size might have been changed (and thus the state stack discarded),
				// we can't use save() and restore() to restore the initial state. So make sure that at
				// least the canvas context is reset to the default state by setting the canvas width.
				// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
				canvas.width = canvas.width;
	
				delete canvas._chartjs;
			},
	
			addEventListener: function(chart, type, listener) {
				var canvas = chart.chart.canvas;
				if (type === 'resize') {
					// Note: the resize event is not supported on all browsers.
					addResizeListener(canvas.parentNode, listener, chart.chart);
					return;
				}
	
				var stub = listener._chartjs || (listener._chartjs = {});
				var proxies = stub.proxies || (stub.proxies = {});
				var proxy = proxies[chart.id + '_' + type] = function(event) {
					listener(fromNativeEvent(event, chart.chart));
				};
	
				helpers.addEvent(canvas, type, proxy);
			},
	
			removeEventListener: function(chart, type, listener) {
				var canvas = chart.chart.canvas;
				if (type === 'resize') {
					// Note: the resize event is not supported on all browsers.
					removeResizeListener(canvas.parentNode, listener);
					return;
				}
	
				var stub = listener._chartjs || {};
				var proxies = stub.proxies || {};
				var proxy = proxies[chart.id + '_' + type];
				if (!proxy) {
					return;
				}
	
				helpers.removeEvent(canvas, type, proxy);
			}
		};
	};


/***/ },
/* 363 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
		// Global Chart canvas helpers object for drawing items to canvas
		var helpers = Chart.canvasHelpers = {};
	
		helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
			var type, edgeLength, xOffset, yOffset, height, size;
	
			if (typeof pointStyle === 'object') {
				type = pointStyle.toString();
				if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
					ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
					return;
				}
			}
	
			if (isNaN(radius) || radius <= 0) {
				return;
			}
	
			switch (pointStyle) {
			// Default includes circle
			default:
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
				break;
			case 'triangle':
				ctx.beginPath();
				edgeLength = 3 * radius / Math.sqrt(3);
				height = edgeLength * Math.sqrt(3) / 2;
				ctx.moveTo(x - edgeLength / 2, y + height / 3);
				ctx.lineTo(x + edgeLength / 2, y + height / 3);
				ctx.lineTo(x, y - 2 * height / 3);
				ctx.closePath();
				ctx.fill();
				break;
			case 'rect':
				size = 1 / Math.SQRT2 * radius;
				ctx.beginPath();
				ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
				ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
				break;
			case 'rectRounded':
				var offset = radius / Math.SQRT2;
				var leftX = x - offset;
				var topY = y - offset;
				var sideSize = Math.SQRT2 * radius;
				Chart.helpers.drawRoundedRectangle(ctx, leftX, topY, sideSize, sideSize, radius / 2);
				ctx.fill();
				break;
			case 'rectRot':
				size = 1 / Math.SQRT2 * radius;
				ctx.beginPath();
				ctx.moveTo(x - size, y);
				ctx.lineTo(x, y + size);
				ctx.lineTo(x + size, y);
				ctx.lineTo(x, y - size);
				ctx.closePath();
				ctx.fill();
				break;
			case 'cross':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'crossRot':
				ctx.beginPath();
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'star':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'line':
				ctx.beginPath();
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'dash':
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			}
	
			ctx.stroke();
		};
	
		helpers.clipArea = function(ctx, clipArea) {
			ctx.save();
			ctx.beginPath();
			ctx.rect(clipArea.left, clipArea.top, clipArea.right - clipArea.left, clipArea.bottom - clipArea.top);
			ctx.clip();
		};
	
		helpers.unclipArea = function(ctx) {
			ctx.restore();
		};
	
	};


/***/ },
/* 364 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.plugins = {};
	
		/**
		 * The plugin service singleton
		 * @namespace Chart.plugins
		 * @since 2.1.0
		 */
		Chart.plugins = {
			/**
			 * Globally registered plugins.
			 * @private
			 */
			_plugins: [],
	
			/**
			 * This identifier is used to invalidate the descriptors cache attached to each chart
			 * when a global plugin is registered or unregistered. In this case, the cache ID is
			 * incremented and descriptors are regenerated during following API calls.
			 * @private
			 */
			_cacheId: 0,
	
			/**
			 * Registers the given plugin(s) if not already registered.
			 * @param {Array|Object} plugins plugin instance(s).
			 */
			register: function(plugins) {
				var p = this._plugins;
				([]).concat(plugins).forEach(function(plugin) {
					if (p.indexOf(plugin) === -1) {
						p.push(plugin);
					}
				});
	
				this._cacheId++;
			},
	
			/**
			 * Unregisters the given plugin(s) only if registered.
			 * @param {Array|Object} plugins plugin instance(s).
			 */
			unregister: function(plugins) {
				var p = this._plugins;
				([]).concat(plugins).forEach(function(plugin) {
					var idx = p.indexOf(plugin);
					if (idx !== -1) {
						p.splice(idx, 1);
					}
				});
	
				this._cacheId++;
			},
	
			/**
			 * Remove all registered plugins.
			 * @since 2.1.5
			 */
			clear: function() {
				this._plugins = [];
				this._cacheId++;
			},
	
			/**
			 * Returns the number of registered plugins?
			 * @returns {Number}
			 * @since 2.1.5
			 */
			count: function() {
				return this._plugins.length;
			},
	
			/**
			 * Returns all registered plugin instances.
			 * @returns {Array} array of plugin objects.
			 * @since 2.1.5
			 */
			getAll: function() {
				return this._plugins;
			},
	
			/**
			 * Calls enabled plugins for `chart` on the specified hook and with the given args.
			 * This method immediately returns as soon as a plugin explicitly returns false. The
			 * returned value can be used, for instance, to interrupt the current action.
			 * @param {Object} chart - The chart instance for which plugins should be called.
			 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
			 * @param {Array} [args] - Extra arguments to apply to the hook call.
			 * @returns {Boolean} false if any of the plugins return false, else returns true.
			 */
			notify: function(chart, hook, args) {
				var descriptors = this.descriptors(chart);
				var ilen = descriptors.length;
				var i, descriptor, plugin, params, method;
	
				for (i=0; i<ilen; ++i) {
					descriptor = descriptors[i];
					plugin = descriptor.plugin;
					method = plugin[hook];
					if (typeof method === 'function') {
						params = [chart].concat(args || []);
						params.push(descriptor.options);
						if (method.apply(plugin, params) === false) {
							return false;
						}
					}
				}
	
				return true;
			},
	
			/**
			 * Returns descriptors of enabled plugins for the given chart.
			 * @returns {Array} [{ plugin, options }]
			 * @private
			 */
			descriptors: function(chart) {
				var cache = chart._plugins || (chart._plugins = {});
				if (cache.id === this._cacheId) {
					return cache.descriptors;
				}
	
				var plugins = [];
				var descriptors = [];
				var config = (chart && chart.config) || {};
				var defaults = Chart.defaults.global.plugins;
				var options = (config.options && config.options.plugins) || {};
	
				this._plugins.concat(config.plugins || []).forEach(function(plugin) {
					var idx = plugins.indexOf(plugin);
					if (idx !== -1) {
						return;
					}
	
					var id = plugin.id;
					var opts = options[id];
					if (opts === false) {
						return;
					}
	
					if (opts === true) {
						opts = helpers.clone(defaults[id]);
					}
	
					plugins.push(plugin);
					descriptors.push({
						plugin: plugin,
						options: opts || {}
					});
				});
	
				cache.descriptors = descriptors;
				cache.id = this._cacheId;
				return descriptors;
			}
		};
	
		/**
		 * Plugin extension hooks.
		 * @interface IPlugin
		 * @since 2.1.0
		 */
		/**
		 * @method IPlugin#beforeInit
		 * @desc Called before initializing `chart`.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#afterInit
		 * @desc Called after `chart` has been initialized and before the first update.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeUpdate
		 * @desc Called before updating `chart`. If any plugin returns `false`, the update
		 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart update.
		 */
		/**
		 * @method IPlugin#afterUpdate
		 * @desc Called after `chart` has been updated and before rendering. Note that this
		 * hook will not be called if the chart update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDatasetsUpdate
	 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
		 * the datasets update is cancelled until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} false to cancel the datasets update.
		 * @since version 2.1.5
		 */
		/**
		 * @method IPlugin#afterDatasetsUpdate
		 * @desc Called after the `chart` datasets have been updated. Note that this hook
		 * will not be called if the datasets update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @since version 2.1.5
		 */
		/**
		 * @method IPlugin#beforeLayout
		 * @desc Called before laying out `chart`. If any plugin returns `false`,
		 * the layout update is cancelled until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart layout.
		 */
		/**
		 * @method IPlugin#afterLayout
		 * @desc Called after the `chart` has been layed out. Note that this hook will not
		 * be called if the layout update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeRender
		 * @desc Called before rendering `chart`. If any plugin returns `false`,
		 * the rendering is cancelled until another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart rendering.
		 */
		/**
		 * @method IPlugin#afterRender
		 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
		 * that this hook will not be called if the rendering has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDraw
		 * @desc Called before drawing `chart` at every animation frame specified by the given
		 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
		 * another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart drawing.
		 */
		/**
		 * @method IPlugin#afterDraw
		 * @desc Called after the `chart` has been drawn for the specific easing value. Note
		 * that this hook will not be called if the drawing has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDatasetsDraw
	 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
		 * the datasets drawing is cancelled until another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart datasets drawing.
		 */
		/**
		 * @method IPlugin#afterDatasetsDraw
		 * @desc Called after the `chart` datasets have been drawn. Note that this hook
		 * will not be called if the datasets drawing has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeEvent
	 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
		 * the event will be discarded.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {IEvent} event - The event object.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#afterEvent
		 * @desc Called after the `event` has been consumed. Note that this hook
		 * will not be called if the `event` has been previously discarded.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {IEvent} event - The event object.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#resize
		 * @desc Called after the chart as been resized.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#destroy
		 * @desc Called after the chart as been destroyed.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
	
		/**
		 * Provided for backward compatibility, use Chart.plugins instead
		 * @namespace Chart.pluginService
		 * @deprecated since version 2.1.5
		 * @todo remove at version 3
		 * @private
		 */
		Chart.pluginService = Chart.plugins;
	
		/**
		 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
		 * effect, instead simply create/register plugins via plain JavaScript objects.
		 * @interface Chart.PluginBase
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		Chart.PluginBase = helpers.inherits({});
	};


/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.elements = {};
	
		Chart.Element = function(configuration) {
			helpers.extend(this, configuration);
			this.initialize.apply(this, arguments);
		};
	
		helpers.extend(Chart.Element.prototype, {
	
			initialize: function() {
				this.hidden = false;
			},
	
			pivot: function() {
				var me = this;
				if (!me._view) {
					me._view = helpers.clone(me._model);
				}
				me._start = helpers.clone(me._view);
				return me;
			},
	
			transition: function(ease) {
				var me = this;
	
				if (!me._view) {
					me._view = helpers.clone(me._model);
				}
	
				// No animation -> No Transition
				if (ease === 1) {
					me._view = me._model;
					me._start = null;
					return me;
				}
	
				if (!me._start) {
					me.pivot();
				}
	
				helpers.each(me._model, function(value, key) {
	
					if (key[0] === '_') {
						// Only non-underscored properties
					// Init if doesn't exist
					} else if (!me._view.hasOwnProperty(key)) {
						if (typeof value === 'number' && !isNaN(me._view[key])) {
							me._view[key] = value * ease;
						} else {
							me._view[key] = value;
						}
					// No unnecessary computations
					} else if (value === me._view[key]) {
						// It's the same! Woohoo!
					// Color transitions if possible
					} else if (typeof value === 'string') {
						try {
							var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
							me._view[key] = color.rgbString();
						} catch (err) {
							me._view[key] = value;
						}
					// Number transitions
					} else if (typeof value === 'number') {
						var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
						me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
					// Everything else
					} else {
						me._view[key] = value;
					}
				}, me);
	
				return me;
			},
	
			tooltipPosition: function() {
				return {
					x: this._model.x,
					y: this._model.y
				};
			},
	
			hasValue: function() {
				return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
			}
		});
	
		Chart.Element.extend = helpers.inherits;
	
	};


/***/ },
/* 366 */
/***/ function(module, exports) {

	/* global window: false */
	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.animation = {
			duration: 1000,
			easing: 'easeOutQuart',
			onProgress: helpers.noop,
			onComplete: helpers.noop
		};
	
		Chart.Animation = Chart.Element.extend({
			currentStep: null, // the current animation step
			numSteps: 60, // default number of steps
			easing: '', // the easing to use for this animation
			render: null, // render function used by the animation service
	
			onAnimationProgress: null, // user specified callback to fire on each step of the animation
			onAnimationComplete: null // user specified callback to fire when the animation finishes
		});
	
		Chart.animationService = {
			frameDuration: 17,
			animations: [],
			dropFrames: 0,
			request: null,
	
			/**
			 * @function Chart.animationService.addAnimation
			 * @param chartInstance {ChartController} the chart to animate
			 * @param animationObject {IAnimation} the animation that we will animate
			 * @param duration {Number} length of animation in ms
			 * @param lazy {Boolean} if true, the chart is not marked as animating to enable more responsive interactions
			 */
			addAnimation: function(chartInstance, animationObject, duration, lazy) {
				var me = this;
	
				if (!lazy) {
					chartInstance.animating = true;
				}
	
				for (var index = 0; index < me.animations.length; ++index) {
					if (me.animations[index].chartInstance === chartInstance) {
						// replacing an in progress animation
						me.animations[index].animationObject = animationObject;
						return;
					}
				}
	
				me.animations.push({
					chartInstance: chartInstance,
					animationObject: animationObject
				});
	
				// If there are no animations queued, manually kickstart a digest, for lack of a better word
				if (me.animations.length === 1) {
					me.requestAnimationFrame();
				}
			},
			// Cancel the animation for a given chart instance
			cancelAnimation: function(chartInstance) {
				var index = helpers.findIndex(this.animations, function(animationWrapper) {
					return animationWrapper.chartInstance === chartInstance;
				});
	
				if (index !== -1) {
					this.animations.splice(index, 1);
					chartInstance.animating = false;
				}
			},
			requestAnimationFrame: function() {
				var me = this;
				if (me.request === null) {
					// Skip animation frame requests until the active one is executed.
					// This can happen when processing mouse events, e.g. 'mousemove'
					// and 'mouseout' events will trigger multiple renders.
					me.request = helpers.requestAnimFrame.call(window, function() {
						me.request = null;
						me.startDigest();
					});
				}
			},
			startDigest: function() {
				var me = this;
	
				var startTime = Date.now();
				var framesToDrop = 0;
	
				if (me.dropFrames > 1) {
					framesToDrop = Math.floor(me.dropFrames);
					me.dropFrames = me.dropFrames % 1;
				}
	
				var i = 0;
				while (i < me.animations.length) {
					if (me.animations[i].animationObject.currentStep === null) {
						me.animations[i].animationObject.currentStep = 0;
					}
	
					me.animations[i].animationObject.currentStep += 1 + framesToDrop;
	
					if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
						me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
					}
	
					me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
					if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
						me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
					}
	
					if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
						if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
							me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
						}
	
						// executed the last frame. Remove the animation.
						me.animations[i].chartInstance.animating = false;
	
						me.animations.splice(i, 1);
					} else {
						++i;
					}
				}
	
				var endTime = Date.now();
				var dropFrames = (endTime - startTime) / me.frameDuration;
	
				me.dropFrames += dropFrames;
	
				// Do we have more stuff to animate?
				if (me.animations.length > 0) {
					me.requestAnimationFrame();
				}
			}
		};
	};


/***/ },
/* 367 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var plugins = Chart.plugins;
		var platform = Chart.platform;
	
		// Create a dictionary of chart types, to allow for extension of existing types
		Chart.types = {};
	
		// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
		// Destroy method on the chart will remove the instance of the chart from this reference.
		Chart.instances = {};
	
		// Controllers available for dataset visualization eg. bar, line, slice, etc.
		Chart.controllers = {};
	
		/**
		 * Initializes the given config with global and chart default values.
		 */
		function initConfig(config) {
			config = config || {};
	
			// Do NOT use configMerge() for the data object because this method merges arrays
			// and so would change references to labels and datasets, preventing data updates.
			var data = config.data = config.data || {};
			data.datasets = data.datasets || [];
			data.labels = data.labels || [];
	
			config.options = helpers.configMerge(
				Chart.defaults.global,
				Chart.defaults[config.type],
				config.options || {});
	
			return config;
		}
	
		/**
		 * Updates the config of the chart
		 * @param chart {Chart.Controller} chart to update the options for
		 */
		function updateConfig(chart) {
			var newOptions = chart.options;
	
			// Update Scale(s) with options
			if (newOptions.scale) {
				chart.scale.options = newOptions.scale;
			} else if (newOptions.scales) {
				newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
					chart.scales[scaleOptions.id].options = scaleOptions;
				});
			}
	
			// Tooltip
			chart.tooltip._options = newOptions.tooltips;
		}
	
		/**
		 * @class Chart.Controller
		 * The main controller of a chart.
		 */
		Chart.Controller = function(item, config, instance) {
			var me = this;
	
			config = initConfig(config);
	
			var context = platform.acquireContext(item, config);
			var canvas = context && context.canvas;
			var height = canvas && canvas.height;
			var width = canvas && canvas.width;
	
			instance.ctx = context;
			instance.canvas = canvas;
			instance.config = config;
			instance.width = width;
			instance.height = height;
			instance.aspectRatio = height? width / height : null;
	
			me.id = helpers.uid();
			me.chart = instance;
			me.config = config;
			me.options = config.options;
			me._bufferedRender = false;
	
			// Add the chart instance to the global namespace
			Chart.instances[me.id] = me;
	
			Object.defineProperty(me, 'data', {
				get: function() {
					return me.config.data;
				}
			});
	
			if (!context || !canvas) {
				// The given item is not a compatible context2d element, let's return before finalizing
				// the chart initialization but after setting basic chart / controller properties that
				// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
				// https://github.com/chartjs/Chart.js/issues/2807
				console.error("Failed to create chart: can't acquire context from the given item");
				return me;
			}
	
			me.initialize();
			me.update();
	
			return me;
		};
	
		helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller.prototype */ {
			initialize: function() {
				var me = this;
	
				// Before init plugin notification
				plugins.notify(me, 'beforeInit');
	
				helpers.retinaScale(me.chart);
	
				me.bindEvents();
	
				if (me.options.responsive) {
					// Initial resize before chart draws (must be silent to preserve initial animations).
					me.resize(true);
				}
	
				// Make sure scales have IDs and are built before we build any controllers.
				me.ensureScalesHaveIDs();
				me.buildScales();
				me.initToolTip();
	
				// After init plugin notification
				plugins.notify(me, 'afterInit');
	
				return me;
			},
	
			clear: function() {
				helpers.clear(this.chart);
				return this;
			},
	
			stop: function() {
				// Stops any current animation loop occurring
				Chart.animationService.cancelAnimation(this);
				return this;
			},
	
			resize: function(silent) {
				var me = this;
				var chart = me.chart;
				var options = me.options;
				var canvas = chart.canvas;
				var aspectRatio = (options.maintainAspectRatio && chart.aspectRatio) || null;
	
				// the canvas render width and height will be casted to integers so make sure that
				// the canvas display style uses the same integer values to avoid blurring effect.
				var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
				var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));
	
				if (chart.width === newWidth && chart.height === newHeight) {
					return;
				}
	
				canvas.width = chart.width = newWidth;
				canvas.height = chart.height = newHeight;
				canvas.style.width = newWidth + 'px';
				canvas.style.height = newHeight + 'px';
	
				helpers.retinaScale(chart);
	
				if (!silent) {
					// Notify any plugins about the resize
					var newSize = {width: newWidth, height: newHeight};
					plugins.notify(me, 'resize', [newSize]);
	
					// Notify of resize
					if (me.options.onResize) {
						me.options.onResize(me, newSize);
					}
	
					me.stop();
					me.update(me.options.responsiveAnimationDuration);
				}
			},
	
			ensureScalesHaveIDs: function() {
				var options = this.options;
				var scalesOptions = options.scales || {};
				var scaleOptions = options.scale;
	
				helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
					xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
				});
	
				helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
					yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
				});
	
				if (scaleOptions) {
					scaleOptions.id = scaleOptions.id || 'scale';
				}
			},
	
			/**
			 * Builds a map of scale ID to scale object for future lookup.
			 */
			buildScales: function() {
				var me = this;
				var options = me.options;
				var scales = me.scales = {};
				var items = [];
	
				if (options.scales) {
					items = items.concat(
						(options.scales.xAxes || []).map(function(xAxisOptions) {
							return {options: xAxisOptions, dtype: 'category'};
						}),
						(options.scales.yAxes || []).map(function(yAxisOptions) {
							return {options: yAxisOptions, dtype: 'linear'};
						})
					);
				}
	
				if (options.scale) {
					items.push({options: options.scale, dtype: 'radialLinear', isDefault: true});
				}
	
				helpers.each(items, function(item) {
					var scaleOptions = item.options;
					var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
					var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
					if (!scaleClass) {
						return;
					}
	
					var scale = new scaleClass({
						id: scaleOptions.id,
						options: scaleOptions,
						ctx: me.chart.ctx,
						chart: me
					});
	
					scales[scale.id] = scale;
	
					// TODO(SB): I think we should be able to remove this custom case (options.scale)
					// and consider it as a regular scale part of the "scales"" map only! This would
					// make the logic easier and remove some useless? custom code.
					if (item.isDefault) {
						me.scale = scale;
					}
				});
	
				Chart.scaleService.addScalesToLayout(this);
			},
	
			buildOrUpdateControllers: function() {
				var me = this;
				var types = [];
				var newControllers = [];
	
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					var meta = me.getDatasetMeta(datasetIndex);
					if (!meta.type) {
						meta.type = dataset.type || me.config.type;
					}
	
					types.push(meta.type);
	
					if (meta.controller) {
						meta.controller.updateIndex(datasetIndex);
					} else {
						meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
						newControllers.push(meta.controller);
					}
				}, me);
	
				if (types.length > 1) {
					for (var i = 1; i < types.length; i++) {
						if (types[i] !== types[i - 1]) {
							me.isCombo = true;
							break;
						}
					}
				}
	
				return newControllers;
			},
	
			/**
			 * Reset the elements of all datasets
			 * @private
			 */
			resetElements: function() {
				var me = this;
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					me.getDatasetMeta(datasetIndex).controller.reset();
				}, me);
			},
	
			/**
			* Resets the chart back to it's state before the initial animation
			*/
			reset: function() {
				this.resetElements();
				this.tooltip.initialize();
			},
	
			update: function(animationDuration, lazy) {
				var me = this;
	
				updateConfig(me);
	
				if (plugins.notify(me, 'beforeUpdate') === false) {
					return;
				}
	
				// In case the entire data object changed
				me.tooltip._data = me.data;
	
				// Make sure dataset controllers are updated and new controllers are reset
				var newControllers = me.buildOrUpdateControllers();
	
				// Make sure all dataset controllers have correct meta data counts
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
				}, me);
	
				me.updateLayout();
	
				// Can only reset the new controllers after the scales have been updated
				helpers.each(newControllers, function(controller) {
					controller.reset();
				});
	
				me.updateDatasets();
	
				// Do this before render so that any plugins that need final scale updates can use it
				plugins.notify(me, 'afterUpdate');
	
				if (me._bufferedRender) {
					me._bufferedRequest = {
						lazy: lazy,
						duration: animationDuration
					};
				} else {
					me.render(animationDuration, lazy);
				}
			},
	
			/**
			 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
			 * hook, in which case, plugins will not be called on `afterLayout`.
			 * @private
			 */
			updateLayout: function() {
				var me = this;
	
				if (plugins.notify(me, 'beforeLayout') === false) {
					return;
				}
	
				Chart.layoutService.update(this, this.chart.width, this.chart.height);
	
				/**
				 * Provided for backward compatibility, use `afterLayout` instead.
				 * @method IPlugin#afterScaleUpdate
				 * @deprecated since version 2.5.0
				 * @todo remove at version 3
				 */
				plugins.notify(me, 'afterScaleUpdate');
				plugins.notify(me, 'afterLayout');
			},
	
			/**
			 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
			 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
			 * @private
			 */
			updateDatasets: function() {
				var me = this;
	
				if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
					return;
				}
	
				for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
					me.getDatasetMeta(i).controller.update();
				}
	
				plugins.notify(me, 'afterDatasetsUpdate');
			},
	
			render: function(duration, lazy) {
				var me = this;
	
				if (plugins.notify(me, 'beforeRender') === false) {
					return;
				}
	
				var animationOptions = me.options.animation;
				var onComplete = function() {
					plugins.notify(me, 'afterRender');
					var callback = animationOptions && animationOptions.onComplete;
					if (callback && callback.call) {
						callback.call(me);
					}
				};
	
				if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
					var animation = new Chart.Animation();
					animation.numSteps = (duration || animationOptions.duration) / 16.66; // 60 fps
					animation.easing = animationOptions.easing;
	
					// render function
					animation.render = function(chartInstance, animationObject) {
						var easingFunction = helpers.easingEffects[animationObject.easing];
						var stepDecimal = animationObject.currentStep / animationObject.numSteps;
						var easeDecimal = easingFunction(stepDecimal);
	
						chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
					};
	
					// user events
					animation.onAnimationProgress = animationOptions.onProgress;
					animation.onAnimationComplete = onComplete;
	
					Chart.animationService.addAnimation(me, animation, duration, lazy);
				} else {
					me.draw();
					onComplete();
				}
	
				return me;
			},
	
			draw: function(easingValue) {
				var me = this;
	
				me.clear();
	
				if (easingValue === undefined || easingValue === null) {
					easingValue = 1;
				}
	
				if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
					return;
				}
	
				// Draw all the scales
				helpers.each(me.boxes, function(box) {
					box.draw(me.chartArea);
				}, me);
	
				if (me.scale) {
					me.scale.draw();
				}
	
				me.drawDatasets(easingValue);
	
				// Finally draw the tooltip
				me.tooltip.transition(easingValue).draw();
	
				plugins.notify(me, 'afterDraw', [easingValue]);
			},
	
			/**
			 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
			 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
			 * @private
			 */
			drawDatasets: function(easingValue) {
				var me = this;
	
				if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
					return;
				}
	
				// Draw each dataset via its respective controller (reversed to support proper line stacking)
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					if (me.isDatasetVisible(datasetIndex)) {
						me.getDatasetMeta(datasetIndex).controller.draw(easingValue);
					}
				}, me, true);
	
				plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
			},
	
			// Get the single element that was clicked on
			// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
			getElementAtEvent: function(e) {
				return Chart.Interaction.modes.single(this, e);
			},
	
			getElementsAtEvent: function(e) {
				return Chart.Interaction.modes.label(this, e, {intersect: true});
			},
	
			getElementsAtXAxis: function(e) {
				return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
			},
	
			getElementsAtEventForMode: function(e, mode, options) {
				var method = Chart.Interaction.modes[mode];
				if (typeof method === 'function') {
					return method(this, e, options);
				}
	
				return [];
			},
	
			getDatasetAtEvent: function(e) {
				return Chart.Interaction.modes.dataset(this, e, {intersect: true});
			},
	
			getDatasetMeta: function(datasetIndex) {
				var me = this;
				var dataset = me.data.datasets[datasetIndex];
				if (!dataset._meta) {
					dataset._meta = {};
				}
	
				var meta = dataset._meta[me.id];
				if (!meta) {
					meta = dataset._meta[me.id] = {
						type: null,
						data: [],
						dataset: null,
						controller: null,
						hidden: null,			// See isDatasetVisible() comment
						xAxisID: null,
						yAxisID: null
					};
				}
	
				return meta;
			},
	
			getVisibleDatasetCount: function() {
				var count = 0;
				for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
					if (this.isDatasetVisible(i)) {
						count++;
					}
				}
				return count;
			},
	
			isDatasetVisible: function(datasetIndex) {
				var meta = this.getDatasetMeta(datasetIndex);
	
				// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
				// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
				return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
			},
	
			generateLegend: function() {
				return this.options.legendCallback(this);
			},
	
			destroy: function() {
				var me = this;
				var canvas = me.chart.canvas;
				var meta, i, ilen;
	
				me.stop();
	
				// dataset controllers need to cleanup associated data
				for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
					meta = me.getDatasetMeta(i);
					if (meta.controller) {
						meta.controller.destroy();
						meta.controller = null;
					}
				}
	
				if (canvas) {
					me.unbindEvents();
					helpers.clear(me.chart);
					platform.releaseContext(me.chart.ctx);
					me.chart.canvas = null;
					me.chart.ctx = null;
				}
	
				plugins.notify(me, 'destroy');
	
				delete Chart.instances[me.id];
			},
	
			toBase64Image: function() {
				return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
			},
	
			initToolTip: function() {
				var me = this;
				me.tooltip = new Chart.Tooltip({
					_chart: me.chart,
					_chartInstance: me,
					_data: me.data,
					_options: me.options.tooltips
				}, me);
				me.tooltip.initialize();
			},
	
			/**
			 * @private
			 */
			bindEvents: function() {
				var me = this;
				var listeners = me._listeners = {};
				var listener = function() {
					me.eventHandler.apply(me, arguments);
				};
	
				helpers.each(me.options.events, function(type) {
					platform.addEventListener(me, type, listener);
					listeners[type] = listener;
				});
	
				// Responsiveness is currently based on the use of an iframe, however this method causes
				// performance issues and could be troublesome when used with ad blockers. So make sure
				// that the user is still able to create a chart without iframe when responsive is false.
				// See https://github.com/chartjs/Chart.js/issues/2210
				if (me.options.responsive) {
					listener = function() {
						me.resize();
					};
	
					platform.addEventListener(me, 'resize', listener);
					listeners.resize = listener;
				}
			},
	
			/**
			 * @private
			 */
			unbindEvents: function() {
				var me = this;
				var listeners = me._listeners;
				if (!listeners) {
					return;
				}
	
				delete me._listeners;
				helpers.each(listeners, function(listener, type) {
					platform.removeEventListener(me, type, listener);
				});
			},
	
			updateHoverStyle: function(elements, mode, enabled) {
				var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
				var element, i, ilen;
	
				for (i=0, ilen=elements.length; i<ilen; ++i) {
					element = elements[i];
					if (element) {
						this.getDatasetMeta(element._datasetIndex).controller[method](element);
					}
				}
			},
	
			/**
			 * @private
			 */
			eventHandler: function(e) {
				var me = this;
				var tooltip = me.tooltip;
	
				if (plugins.notify(me, 'beforeEvent', [e]) === false) {
					return;
				}
	
				// Buffer any update calls so that renders do not occur
				me._bufferedRender = true;
				me._bufferedRequest = null;
	
				var changed = me.handleEvent(e);
				changed |= tooltip && tooltip.handleEvent(e);
	
				plugins.notify(me, 'afterEvent', [e]);
	
				var bufferedRequest = me._bufferedRequest;
				if (bufferedRequest) {
					// If we have an update that was triggered, we need to do a normal render
					me.render(bufferedRequest.duration, bufferedRequest.lazy);
				} else if (changed && !me.animating) {
					// If entering, leaving, or changing elements, animate the change via pivot
					me.stop();
	
					// We only need to render at this point. Updating will cause scales to be
					// recomputed generating flicker & using more memory than necessary.
					me.render(me.options.hover.animationDuration, true);
				}
	
				me._bufferedRender = false;
				me._bufferedRequest = null;
	
				return me;
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event the event to handle
			 * @return {Boolean} true if the chart needs to re-render
			 */
			handleEvent: function(e) {
				var me = this;
				var options = me.options || {};
				var hoverOptions = options.hover;
				var changed = false;
	
				me.lastActive = me.lastActive || [];
	
				// Find Active Elements for hover and tooltips
				if (e.type === 'mouseout') {
					me.active = [];
				} else {
					me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
				}
	
				// On Hover hook
				if (hoverOptions.onHover) {
					// Need to call with native event here to not break backwards compatibility
					hoverOptions.onHover.call(me, e.native, me.active);
				}
	
				if (e.type === 'mouseup' || e.type === 'click') {
					if (options.onClick) {
						// Use e.native here for backwards compatibility
						options.onClick.call(me, e.native, me.active);
					}
				}
	
				// Remove styling for last active (even if it may still be active)
				if (me.lastActive.length) {
					me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
				}
	
				// Built in hover styling
				if (me.active.length && hoverOptions.mode) {
					me.updateHoverStyle(me.active, hoverOptions.mode, true);
				}
	
				changed = !helpers.arrayEquals(me.active, me.lastActive);
	
				// Remember Last Actives
				me.lastActive = me.active;
	
				return changed;
			}
		});
	};


/***/ },
/* 368 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
	
		/**
		 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
		 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
		 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
		 */
		function listenArrayEvents(array, listener) {
			if (array._chartjs) {
				array._chartjs.listeners.push(listener);
				return;
			}
	
			Object.defineProperty(array, '_chartjs', {
				configurable: true,
				enumerable: false,
				value: {
					listeners: [listener]
				}
			});
	
			arrayEvents.forEach(function(key) {
				var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
				var base = array[key];
	
				Object.defineProperty(array, key, {
					configurable: true,
					enumerable: false,
					value: function() {
						var args = Array.prototype.slice.call(arguments);
						var res = base.apply(this, args);
	
						helpers.each(array._chartjs.listeners, function(object) {
							if (typeof object[method] === 'function') {
								object[method].apply(object, args);
							}
						});
	
						return res;
					}
				});
			});
		}
	
		/**
		 * Removes the given array event listener and cleanup extra attached properties (such as
		 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
		 */
		function unlistenArrayEvents(array, listener) {
			var stub = array._chartjs;
			if (!stub) {
				return;
			}
	
			var listeners = stub.listeners;
			var index = listeners.indexOf(listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
	
			if (listeners.length > 0) {
				return;
			}
	
			arrayEvents.forEach(function(key) {
				delete array[key];
			});
	
			delete array._chartjs;
		}
	
		// Base class for all dataset controllers (line, bar, etc)
		Chart.DatasetController = function(chart, datasetIndex) {
			this.initialize(chart, datasetIndex);
		};
	
		helpers.extend(Chart.DatasetController.prototype, {
	
			/**
			 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
			 * @type {Chart.core.element}
			 */
			datasetElementType: null,
	
			/**
			 * Element type used to generate a meta data (e.g. Chart.element.Point).
			 * @type {Chart.core.element}
			 */
			dataElementType: null,
	
			initialize: function(chart, datasetIndex) {
				var me = this;
				me.chart = chart;
				me.index = datasetIndex;
				me.linkScales();
				me.addElements();
			},
	
			updateIndex: function(datasetIndex) {
				this.index = datasetIndex;
			},
	
			linkScales: function() {
				var me = this;
				var meta = me.getMeta();
				var dataset = me.getDataset();
	
				if (meta.xAxisID === null) {
					meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
				}
				if (meta.yAxisID === null) {
					meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
				}
			},
	
			getDataset: function() {
				return this.chart.data.datasets[this.index];
			},
	
			getMeta: function() {
				return this.chart.getDatasetMeta(this.index);
			},
	
			getScaleForId: function(scaleID) {
				return this.chart.scales[scaleID];
			},
	
			reset: function() {
				this.update(true);
			},
	
			/**
			 * @private
			 */
			destroy: function() {
				if (this._data) {
					unlistenArrayEvents(this._data, this);
				}
			},
	
			createMetaDataset: function() {
				var me = this;
				var type = me.datasetElementType;
				return type && new type({
					_chart: me.chart.chart,
					_datasetIndex: me.index
				});
			},
	
			createMetaData: function(index) {
				var me = this;
				var type = me.dataElementType;
				return type && new type({
					_chart: me.chart.chart,
					_datasetIndex: me.index,
					_index: index
				});
			},
	
			addElements: function() {
				var me = this;
				var meta = me.getMeta();
				var data = me.getDataset().data || [];
				var metaData = meta.data;
				var i, ilen;
	
				for (i=0, ilen=data.length; i<ilen; ++i) {
					metaData[i] = metaData[i] || me.createMetaData(i);
				}
	
				meta.dataset = meta.dataset || me.createMetaDataset();
			},
	
			addElementAndReset: function(index) {
				var element = this.createMetaData(index);
				this.getMeta().data.splice(index, 0, element);
				this.updateElement(element, index, true);
			},
	
			buildOrUpdateElements: function() {
				var me = this;
				var dataset = me.getDataset();
				var data = dataset.data || (dataset.data = []);
	
				// In order to correctly handle data addition/deletion animation (an thus simulate
				// real-time charts), we need to monitor these data modifications and synchronize
				// the internal meta data accordingly.
				if (me._data !== data) {
					if (me._data) {
						// This case happens when the user replaced the data array instance.
						unlistenArrayEvents(me._data, me);
					}
	
					listenArrayEvents(data, me);
					me._data = data;
				}
	
				// Re-sync meta data in case the user replaced the data array or if we missed
				// any updates and so make sure that we handle number of datapoints changing.
				me.resyncElements();
			},
	
			update: helpers.noop,
	
			draw: function(ease) {
				var easingDecimal = ease || 1;
				var i, len;
				var metaData = this.getMeta().data;
				for (i = 0, len = metaData.length; i < len; ++i) {
					metaData[i].transition(easingDecimal).draw();
				}
			},
	
			removeHoverStyle: function(element, elementOpts) {
				var dataset = this.chart.data.datasets[element._datasetIndex],
					index = element._index,
					custom = element.custom || {},
					valueOrDefault = helpers.getValueAtIndexOrDefault,
					model = element._model;
	
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
			},
	
			setHoverStyle: function(element) {
				var dataset = this.chart.data.datasets[element._datasetIndex],
					index = element._index,
					custom = element.custom || {},
					valueOrDefault = helpers.getValueAtIndexOrDefault,
					getHoverColor = helpers.getHoverColor,
					model = element._model;
	
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
			},
	
			/**
			 * @private
			 */
			resyncElements: function() {
				var me = this;
				var meta = me.getMeta();
				var data = me.getDataset().data;
				var numMeta = meta.data.length;
				var numData = data.length;
	
				if (numData < numMeta) {
					meta.data.splice(numData, numMeta - numData);
				} else if (numData > numMeta) {
					me.insertElements(numMeta, numData - numMeta);
				}
			},
	
			/**
			 * @private
			 */
			insertElements: function(start, count) {
				for (var i=0; i<count; ++i) {
					this.addElementAndReset(start + i);
				}
			},
	
			/**
			 * @private
			 */
			onDataPush: function() {
				this.insertElements(this.getDataset().data.length-1, arguments.length);
			},
	
			/**
			 * @private
			 */
			onDataPop: function() {
				this.getMeta().data.pop();
			},
	
			/**
			 * @private
			 */
			onDataShift: function() {
				this.getMeta().data.shift();
			},
	
			/**
			 * @private
			 */
			onDataSplice: function(start, count) {
				this.getMeta().data.splice(start, count);
				this.insertElements(start, arguments.length - 2);
			},
	
			/**
			 * @private
			 */
			onDataUnshift: function() {
				this.insertElements(0, arguments.length);
			}
		});
	
		Chart.DatasetController.extend = helpers.inherits;
	};


/***/ },
/* 369 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		// The layout service is very self explanatory.  It's responsible for the layout within a chart.
		// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
		// It is this service's responsibility of carrying out that layout.
		Chart.layoutService = {
			defaults: {},
	
			// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
			addBox: function(chartInstance, box) {
				if (!chartInstance.boxes) {
					chartInstance.boxes = [];
				}
				chartInstance.boxes.push(box);
			},
	
			removeBox: function(chartInstance, box) {
				if (!chartInstance.boxes) {
					return;
				}
				chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
			},
	
			// The most important function
			update: function(chartInstance, width, height) {
	
				if (!chartInstance) {
					return;
				}
	
				var layoutOptions = chartInstance.options.layout;
				var padding = layoutOptions ? layoutOptions.padding : null;
	
				var leftPadding = 0;
				var rightPadding = 0;
				var topPadding = 0;
				var bottomPadding = 0;
	
				if (!isNaN(padding)) {
					// options.layout.padding is a number. assign to all
					leftPadding = padding;
					rightPadding = padding;
					topPadding = padding;
					bottomPadding = padding;
				} else {
					leftPadding = padding.left || 0;
					rightPadding = padding.right || 0;
					topPadding = padding.top || 0;
					bottomPadding = padding.bottom || 0;
				}
	
				var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'left';
				});
				var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'right';
				});
				var topBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'top';
				});
				var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'bottom';
				});
	
				// Boxes that overlay the chartarea such as the radialLinear scale
				var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'chartArea';
				});
	
				// Ensure that full width boxes are at the very top / bottom
				topBoxes.sort(function(a, b) {
					return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
				});
				bottomBoxes.sort(function(a, b) {
					return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
				});
	
				// Essentially we now have any number of boxes on each of the 4 sides.
				// Our canvas looks like the following.
				// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
				// B1 is the bottom axis
				// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
				// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
				// an error will be thrown.
				//
				// |----------------------------------------------------|
				// |                  T1 (Full Width)                   |
				// |----------------------------------------------------|
				// |    |    |                 T2                  |    |
				// |    |----|-------------------------------------|----|
				// |    |    | C1 |                           | C2 |    |
				// |    |    |----|                           |----|    |
				// |    |    |                                     |    |
				// | L1 | L2 |           ChartArea (C0)            | R1 |
				// |    |    |                                     |    |
				// |    |    |----|                           |----|    |
				// |    |    | C3 |                           | C4 |    |
				// |    |----|-------------------------------------|----|
				// |    |    |                 B1                  |    |
				// |----------------------------------------------------|
				// |                  B2 (Full Width)                   |
				// |----------------------------------------------------|
				//
				// What we do to find the best sizing, we do the following
				// 1. Determine the minimum size of the chart area.
				// 2. Split the remaining width equally between each vertical axis
				// 3. Split the remaining height equally between each horizontal axis
				// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
				// 5. Adjust the sizes of each axis based on it's minimum reported size.
				// 6. Refit each axis
				// 7. Position each axis in the final location
				// 8. Tell the chart the final location of the chart area
				// 9. Tell any axes that overlay the chart area the positions of the chart area
	
				// Step 1
				var chartWidth = width - leftPadding - rightPadding;
				var chartHeight = height - topPadding - bottomPadding;
				var chartAreaWidth = chartWidth / 2; // min 50%
				var chartAreaHeight = chartHeight / 2; // min 50%
	
				// Step 2
				var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);
	
				// Step 3
				var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);
	
				// Step 4
				var maxChartAreaWidth = chartWidth;
				var maxChartAreaHeight = chartHeight;
				var minBoxSizes = [];
	
				function getMinimumBoxSize(box) {
					var minSize;
					var isHorizontal = box.isHorizontal();
	
					if (isHorizontal) {
						minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
						maxChartAreaHeight -= minSize.height;
					} else {
						minSize = box.update(verticalBoxWidth, chartAreaHeight);
						maxChartAreaWidth -= minSize.width;
					}
	
					minBoxSizes.push({
						horizontal: isHorizontal,
						minSize: minSize,
						box: box,
					});
				}
	
				helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);
	
				// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
				var maxHorizontalLeftPadding = 0;
				var maxHorizontalRightPadding = 0;
				var maxVerticalTopPadding = 0;
				var maxVerticalBottomPadding = 0;
	
				helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
					if (horizontalBox.getPadding) {
						var boxPadding = horizontalBox.getPadding();
						maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
						maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
					}
				});
	
				helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
					if (verticalBox.getPadding) {
						var boxPadding = verticalBox.getPadding();
						maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
						maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
					}
				});
	
				// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
				// be if the axes are drawn at their minimum sizes.
				// Steps 5 & 6
				var totalLeftBoxesWidth = leftPadding;
				var totalRightBoxesWidth = rightPadding;
				var totalTopBoxesHeight = topPadding;
				var totalBottomBoxesHeight = bottomPadding;
	
				// Function to fit a box
				function fitBox(box) {
					var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
						return minBox.box === box;
					});
	
					if (minBoxSize) {
						if (box.isHorizontal()) {
							var scaleMargin = {
								left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
								right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
								top: 0,
								bottom: 0
							};
	
							// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
							// on the margin. Sometimes they need to increase in size slightly
							box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
						} else {
							box.update(minBoxSize.minSize.width, maxChartAreaHeight);
						}
					}
				}
	
				// Update, and calculate the left and right margins for the horizontal boxes
				helpers.each(leftBoxes.concat(rightBoxes), fitBox);
	
				helpers.each(leftBoxes, function(box) {
					totalLeftBoxesWidth += box.width;
				});
	
				helpers.each(rightBoxes, function(box) {
					totalRightBoxesWidth += box.width;
				});
	
				// Set the Left and Right margins for the horizontal boxes
				helpers.each(topBoxes.concat(bottomBoxes), fitBox);
	
				// Figure out how much margin is on the top and bottom of the vertical boxes
				helpers.each(topBoxes, function(box) {
					totalTopBoxesHeight += box.height;
				});
	
				helpers.each(bottomBoxes, function(box) {
					totalBottomBoxesHeight += box.height;
				});
	
				function finalFitVerticalBox(box) {
					var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
						return minSize.box === box;
					});
	
					var scaleMargin = {
						left: 0,
						right: 0,
						top: totalTopBoxesHeight,
						bottom: totalBottomBoxesHeight
					};
	
					if (minBoxSize) {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
					}
				}
	
				// Let the left layout know the final margin
				helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);
	
				// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
				totalLeftBoxesWidth = leftPadding;
				totalRightBoxesWidth = rightPadding;
				totalTopBoxesHeight = topPadding;
				totalBottomBoxesHeight = bottomPadding;
	
				helpers.each(leftBoxes, function(box) {
					totalLeftBoxesWidth += box.width;
				});
	
				helpers.each(rightBoxes, function(box) {
					totalRightBoxesWidth += box.width;
				});
	
				helpers.each(topBoxes, function(box) {
					totalTopBoxesHeight += box.height;
				});
				helpers.each(bottomBoxes, function(box) {
					totalBottomBoxesHeight += box.height;
				});
	
				// We may be adding some padding to account for rotated x axis labels
				var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
				totalLeftBoxesWidth += leftPaddingAddition;
				totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);
	
				var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
				totalTopBoxesHeight += topPaddingAddition;
				totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);
	
				// Figure out if our chart area changed. This would occur if the dataset layout label rotation
				// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
				// without calling `fit` again
				var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
				var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;
	
				if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
					helpers.each(leftBoxes, function(box) {
						box.height = newMaxChartAreaHeight;
					});
	
					helpers.each(rightBoxes, function(box) {
						box.height = newMaxChartAreaHeight;
					});
	
					helpers.each(topBoxes, function(box) {
						if (!box.options.fullWidth) {
							box.width = newMaxChartAreaWidth;
						}
					});
	
					helpers.each(bottomBoxes, function(box) {
						if (!box.options.fullWidth) {
							box.width = newMaxChartAreaWidth;
						}
					});
	
					maxChartAreaHeight = newMaxChartAreaHeight;
					maxChartAreaWidth = newMaxChartAreaWidth;
				}
	
				// Step 7 - Position the boxes
				var left = leftPadding + leftPaddingAddition;
				var top = topPadding + topPaddingAddition;
	
				function placeBox(box) {
					if (box.isHorizontal()) {
						box.left = box.options.fullWidth ? leftPadding : totalLeftBoxesWidth;
						box.right = box.options.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
						box.top = top;
						box.bottom = top + box.height;
	
						// Move to next point
						top = box.bottom;
	
					} else {
	
						box.left = left;
						box.right = left + box.width;
						box.top = totalTopBoxesHeight;
						box.bottom = totalTopBoxesHeight + maxChartAreaHeight;
	
						// Move to next point
						left = box.right;
					}
				}
	
				helpers.each(leftBoxes.concat(topBoxes), placeBox);
	
				// Account for chart width and height
				left += maxChartAreaWidth;
				top += maxChartAreaHeight;
	
				helpers.each(rightBoxes, placeBox);
				helpers.each(bottomBoxes, placeBox);
	
				// Step 8
				chartInstance.chartArea = {
					left: totalLeftBoxesWidth,
					top: totalTopBoxesHeight,
					right: totalLeftBoxesWidth + maxChartAreaWidth,
					bottom: totalTopBoxesHeight + maxChartAreaHeight
				};
	
				// Step 9
				helpers.each(chartAreaBoxes, function(box) {
					box.left = chartInstance.chartArea.left;
					box.top = chartInstance.chartArea.top;
					box.right = chartInstance.chartArea.right;
					box.bottom = chartInstance.chartArea.bottom;
	
					box.update(maxChartAreaWidth, maxChartAreaHeight);
				});
			}
		};
	};


/***/ },
/* 370 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.scaleService = {
			// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
			// use the new chart options to grab the correct scale
			constructors: {},
			// Use a registration function so that we can move to an ES6 map when we no longer need to support
			// old browsers
	
			// Scale config defaults
			defaults: {},
			registerScaleType: function(type, scaleConstructor, defaults) {
				this.constructors[type] = scaleConstructor;
				this.defaults[type] = helpers.clone(defaults);
			},
			getScaleConstructor: function(type) {
				return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
			},
			getScaleDefaults: function(type) {
				// Return the scale defaults merged with the global settings so that we always use the latest ones
				return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
			},
			updateScaleDefaults: function(type, additions) {
				var defaults = this.defaults;
				if (defaults.hasOwnProperty(type)) {
					defaults[type] = helpers.extend(defaults[type], additions);
				}
			},
			addScalesToLayout: function(chartInstance) {
				// Adds each scale to the chart.boxes array to be sized accordingly
				helpers.each(chartInstance.scales, function(scale) {
					Chart.layoutService.addBox(chartInstance, scale);
				});
			}
		};
	};


/***/ },
/* 371 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		/**
		 * Namespace to hold static tick generation functions
		 * @namespace Chart.Ticks
		 */
		Chart.Ticks = {
			/**
			 * Namespace to hold generators for different types of ticks
			 * @namespace Chart.Ticks.generators
			 */
			generators: {
				/**
				 * Interface for the options provided to the numeric tick generator
				 * @interface INumericTickGenerationOptions
				 */
				/**
				 * The maximum number of ticks to display
				 * @name INumericTickGenerationOptions#maxTicks
				 * @type Number
				 */
				/**
				 * The distance between each tick.
				 * @name INumericTickGenerationOptions#stepSize
				 * @type Number
				 * @optional
				 */
				/**
				 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
				 * @name INumericTickGenerationOptions#min
				 * @type Number
				 * @optional
				 */
				/**
				 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
				 * @name INumericTickGenerationOptions#max
				 * @type Number
				 * @optional
				 */
	
				/**
				 * Generate a set of linear ticks
				 * @method Chart.Ticks.generators.linear
				 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
				 * @param dataRange {IRange} the range of the data
				 * @returns {Array<Number>} array of tick values
				 */
				linear: function(generationOptions, dataRange) {
					var ticks = [];
					// To get a "nice" value for the tick spacing, we will use the appropriately named
					// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
					// for details.
	
					var spacing;
					if (generationOptions.stepSize && generationOptions.stepSize > 0) {
						spacing = generationOptions.stepSize;
					} else {
						var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
						spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
					}
					var niceMin = Math.floor(dataRange.min / spacing) * spacing;
					var niceMax = Math.ceil(dataRange.max / spacing) * spacing;
	
					// If min, max and stepSize is set and they make an evenly spaced scale use it.
					if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
						// If very close to our whole number, use it.
						if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
							niceMin = generationOptions.min;
							niceMax = generationOptions.max;
						}
					}
	
					var numSpaces = (niceMax - niceMin) / spacing;
					// If very close to our rounded value, use it.
					if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
						numSpaces = Math.round(numSpaces);
					} else {
						numSpaces = Math.ceil(numSpaces);
					}
	
					// Put the values into the ticks array
					ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
					for (var j = 1; j < numSpaces; ++j) {
						ticks.push(niceMin + (j * spacing));
					}
					ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);
	
					return ticks;
				},
	
				/**
				 * Generate a set of logarithmic ticks
				 * @method Chart.Ticks.generators.logarithmic
				 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
				 * @param dataRange {IRange} the range of the data
				 * @returns {Array<Number>} array of tick values
				 */
				logarithmic: function(generationOptions, dataRange) {
					var ticks = [];
					var getValueOrDefault = helpers.getValueOrDefault;
	
					// Figure out what the max number of ticks we can support it is based on the size of
					// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
					// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
					// the graph
					var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));
	
					var endExp = Math.floor(helpers.log10(dataRange.max));
					var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
					var exp;
					var significand;
	
					if (tickVal === 0) {
						exp = Math.floor(helpers.log10(dataRange.minNotZero));
						significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
	
						ticks.push(tickVal);
						tickVal = significand * Math.pow(10, exp);
					} else {
						exp = Math.floor(helpers.log10(tickVal));
						significand = Math.floor(tickVal / Math.pow(10, exp));
					}
	
					do {
						ticks.push(tickVal);
	
						++significand;
						if (significand === 10) {
							significand = 1;
							++exp;
						}
	
						tickVal = significand * Math.pow(10, exp);
					} while (exp < endExp || (exp === endExp && significand < endSignificand));
	
					var lastTick = getValueOrDefault(generationOptions.max, tickVal);
					ticks.push(lastTick);
	
					return ticks;
				}
			},
	
			/**
			 * Namespace to hold formatters for different types of ticks
			 * @namespace Chart.Ticks.formatters
			 */
			formatters: {
				/**
				 * Formatter for value labels
				 * @method Chart.Ticks.formatters.values
				 * @param value the value to display
				 * @return {String|Array} the label to display
				 */
				values: function(value) {
					return helpers.isArray(value) ? value : '' + value;
				},
	
				/**
				 * Formatter for linear numeric ticks
				 * @method Chart.Ticks.formatters.linear
				 * @param tickValue {Number} the value to be formatted
				 * @param index {Number} the position of the tickValue parameter in the ticks array
				 * @param ticks {Array<Number>} the list of ticks being converted
				 * @return {String} string representation of the tickValue parameter
				 */
				linear: function(tickValue, index, ticks) {
					// If we have lots of ticks, don't use the ones
					var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];
	
					// If we have a number like 2.5 as the delta, figure out how many decimal places we need
					if (Math.abs(delta) > 1) {
						if (tickValue !== Math.floor(tickValue)) {
							// not an integer
							delta = tickValue - Math.floor(tickValue);
						}
					}
	
					var logDelta = helpers.log10(Math.abs(delta));
					var tickString = '';
	
					if (tickValue !== 0) {
						var numDecimal = -1 * Math.floor(logDelta);
						numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
						tickString = tickValue.toFixed(numDecimal);
					} else {
						tickString = '0'; // never show decimal places for 0
					}
	
					return tickString;
				},
	
				logarithmic: function(tickValue, index, ticks) {
					var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));
	
					if (tickValue === 0) {
						return '0';
					} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
						return tickValue.toExponential();
					}
					return '';
				}
			}
		};
	};


/***/ },
/* 372 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.scale = {
			display: true,
			position: 'left',
	
			// grid line settings
			gridLines: {
				display: true,
				color: 'rgba(0, 0, 0, 0.1)',
				lineWidth: 1,
				drawBorder: true,
				drawOnChartArea: true,
				drawTicks: true,
				tickMarkLength: 10,
				zeroLineWidth: 1,
				zeroLineColor: 'rgba(0,0,0,0.25)',
				offsetGridLines: false,
				borderDash: [],
				borderDashOffset: 0.0
			},
	
			// scale label
			scaleLabel: {
				// actual label
				labelString: '',
	
				// display property
				display: false
			},
	
			// label settings
			ticks: {
				beginAtZero: false,
				minRotation: 0,
				maxRotation: 50,
				mirror: false,
				padding: 0,
				reverse: false,
				display: true,
				autoSkip: true,
				autoSkipPadding: 0,
				labelOffset: 0,
				// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
				callback: Chart.Ticks.formatters.values
			}
		};
	
		function computeTextSize(context, tick, font) {
			return helpers.isArray(tick) ?
				helpers.longestText(context, font, tick) :
				context.measureText(tick).width;
		}
	
		function parseFontOptions(options) {
			var getValueOrDefault = helpers.getValueOrDefault;
			var globalDefaults = Chart.defaults.global;
			var size = getValueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
			var style = getValueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
			var family = getValueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);
	
			return {
				size: size,
				style: style,
				family: family,
				font: helpers.fontString(size, style, family)
			};
		}
	
		Chart.Scale = Chart.Element.extend({
			/**
			 * Get the padding needed for the scale
			 * @method getPadding
			 * @private
			 * @returns {Padding} the necessary padding
			 */
			getPadding: function() {
				var me = this;
				return {
					left: me.paddingLeft || 0,
					top: me.paddingTop || 0,
					right: me.paddingRight || 0,
					bottom: me.paddingBottom || 0
				};
			},
	
			// These methods are ordered by lifecyle. Utilities then follow.
			// Any function defined here is inherited by all scale types.
			// Any function can be extended by the scale type
	
			beforeUpdate: function() {
				helpers.callCallback(this.options.beforeUpdate, [this]);
			},
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = helpers.extend({
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, margins);
				me.longestTextCache = me.longestTextCache || {};
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
	
				// Data min/max
				me.beforeDataLimits();
				me.determineDataLimits();
				me.afterDataLimits();
	
				// Ticks
				me.beforeBuildTicks();
				me.buildTicks();
				me.afterBuildTicks();
	
				me.beforeTickToLabelConversion();
				me.convertTicksToLabels();
				me.afterTickToLabelConversion();
	
				// Tick Rotation
				me.beforeCalculateTickRotation();
				me.calculateTickRotation();
				me.afterCalculateTickRotation();
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
	
			},
			afterUpdate: function() {
				helpers.callCallback(this.options.afterUpdate, [this]);
			},
	
			//
	
			beforeSetDimensions: function() {
				helpers.callCallback(this.options.beforeSetDimensions, [this]);
			},
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
			},
			afterSetDimensions: function() {
				helpers.callCallback(this.options.afterSetDimensions, [this]);
			},
	
			// Data limits
			beforeDataLimits: function() {
				helpers.callCallback(this.options.beforeDataLimits, [this]);
			},
			determineDataLimits: helpers.noop,
			afterDataLimits: function() {
				helpers.callCallback(this.options.afterDataLimits, [this]);
			},
	
			//
			beforeBuildTicks: function() {
				helpers.callCallback(this.options.beforeBuildTicks, [this]);
			},
			buildTicks: helpers.noop,
			afterBuildTicks: function() {
				helpers.callCallback(this.options.afterBuildTicks, [this]);
			},
	
			beforeTickToLabelConversion: function() {
				helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
			},
			convertTicksToLabels: function() {
				var me = this;
				// Convert ticks to strings
				var tickOpts = me.options.ticks;
				me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
			},
			afterTickToLabelConversion: function() {
				helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
			},
	
			//
	
			beforeCalculateTickRotation: function() {
				helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
			},
			calculateTickRotation: function() {
				var me = this;
				var context = me.ctx;
				var tickOpts = me.options.ticks;
	
				// Get the width of each grid by calculating the difference
				// between x offsets between 0 and 1.
				var tickFont = parseFontOptions(tickOpts);
				context.font = tickFont.font;
	
				var labelRotation = tickOpts.minRotation || 0;
	
				if (me.options.display && me.isHorizontal()) {
					var originalLabelWidth = helpers.longestText(context, tickFont.font, me.ticks, me.longestTextCache);
					var labelWidth = originalLabelWidth;
					var cosRotation;
					var sinRotation;
	
					// Allow 3 pixels x2 padding either side for label readability
					var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;
	
					// Max label rotation can be set or default to 90 - also act as a loop counter
					while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
						var angleRadians = helpers.toRadians(labelRotation);
						cosRotation = Math.cos(angleRadians);
						sinRotation = Math.sin(angleRadians);
	
						if (sinRotation * originalLabelWidth > me.maxHeight) {
							// go back one step
							labelRotation--;
							break;
						}
	
						labelRotation++;
						labelWidth = cosRotation * originalLabelWidth;
					}
				}
	
				me.labelRotation = labelRotation;
			},
			afterCalculateTickRotation: function() {
				helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
			},
	
			//
	
			beforeFit: function() {
				helpers.callCallback(this.options.beforeFit, [this]);
			},
			fit: function() {
				var me = this;
				// Reset
				var minSize = me.minSize = {
					width: 0,
					height: 0
				};
	
				var opts = me.options;
				var tickOpts = opts.ticks;
				var scaleLabelOpts = opts.scaleLabel;
				var gridLineOpts = opts.gridLines;
				var display = opts.display;
				var isHorizontal = me.isHorizontal();
	
				var tickFont = parseFontOptions(tickOpts);
				var scaleLabelFontSize = parseFontOptions(scaleLabelOpts).size * 1.5;
				var tickMarkLength = opts.gridLines.tickMarkLength;
	
				// Width
				if (isHorizontal) {
					// subtract the margins to line up with the chartArea if we are a full width scale
					minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
				} else {
					minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
				}
	
				// height
				if (isHorizontal) {
					minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
				} else {
					minSize.height = me.maxHeight; // fill all the height
				}
	
				// Are we showing a title for the scale?
				if (scaleLabelOpts.display && display) {
					if (isHorizontal) {
						minSize.height += scaleLabelFontSize;
					} else {
						minSize.width += scaleLabelFontSize;
					}
				}
	
				// Don't bother fitting the ticks if we are not showing them
				if (tickOpts.display && display) {
					var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, me.ticks, me.longestTextCache);
					var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
					var lineSpace = tickFont.size * 0.5;
	
					if (isHorizontal) {
						// A horizontal axis is more constrained by the height.
						me.longestLabelWidth = largestTextWidth;
	
						var angleRadians = helpers.toRadians(me.labelRotation);
						var cosRotation = Math.cos(angleRadians);
						var sinRotation = Math.sin(angleRadians);
	
						// TODO - improve this calculation
						var labelHeight = (sinRotation * largestTextWidth)
							+ (tickFont.size * tallestLabelHeightInLines)
							+ (lineSpace * tallestLabelHeightInLines);
	
						minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
						me.ctx.font = tickFont.font;
	
						var firstTick = me.ticks[0];
						var firstLabelWidth = computeTextSize(me.ctx, firstTick, tickFont.font);
	
						var lastTick = me.ticks[me.ticks.length - 1];
						var lastLabelWidth = computeTextSize(me.ctx, lastTick, tickFont.font);
	
						// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
						// by the font height
						if (me.labelRotation !== 0) {
							me.paddingLeft = opts.position === 'bottom'? (cosRotation * firstLabelWidth) + 3: (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
							me.paddingRight = opts.position === 'bottom'? (cosRotation * lineSpace) + 3: (cosRotation * lastLabelWidth) + 3;
						} else {
							me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
							me.paddingRight = lastLabelWidth / 2 + 3;
						}
					} else {
						// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
						// Account for padding
	
						if (tickOpts.mirror) {
							largestTextWidth = 0;
						} else {
							largestTextWidth += me.options.ticks.padding;
						}
						minSize.width += largestTextWidth;
						me.paddingTop = tickFont.size / 2;
						me.paddingBottom = tickFont.size / 2;
					}
				}
	
				me.handleMargins();
	
				me.width = minSize.width;
				me.height = minSize.height;
			},
	
			/**
			 * Handle margins and padding interactions
			 * @private
			 */
			handleMargins: function() {
				var me = this;
				if (me.margins) {
					me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
					me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
					me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
					me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
				}
			},
	
			afterFit: function() {
				helpers.callCallback(this.options.afterFit, [this]);
			},
	
			// Shared Methods
			isHorizontal: function() {
				return this.options.position === 'top' || this.options.position === 'bottom';
			},
			isFullWidth: function() {
				return (this.options.fullWidth);
			},
	
			// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
			getRightValue: function(rawValue) {
				// Null and undefined values first
				if (rawValue === null || typeof(rawValue) === 'undefined') {
					return NaN;
				}
				// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
				if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
					return NaN;
				}
				// If it is in fact an object, dive in one more level
				if (typeof(rawValue) === 'object') {
					if ((rawValue instanceof Date) || (rawValue.isValid)) {
						return rawValue;
					}
					return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
				}
	
				// Value is good, return it
				return rawValue;
			},
	
			// Used to get the value to display in the tooltip for the data at the given index
			// function getLabelForIndex(index, datasetIndex)
			getLabelForIndex: helpers.noop,
	
			// Used to get data value locations.  Value can either be an index or a numerical value
			getPixelForValue: helpers.noop,
	
			// Used to get the data value from a given pixel. This is the inverse of getPixelForValue
			getValueForPixel: helpers.noop,
	
			// Used for tick location, should
			getPixelForTick: function(index, includeOffset) {
				var me = this;
				if (me.isHorizontal()) {
					var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
					var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
					var pixel = (tickWidth * index) + me.paddingLeft;
	
					if (includeOffset) {
						pixel += tickWidth / 2;
					}
	
					var finalVal = me.left + Math.round(pixel);
					finalVal += me.isFullWidth() ? me.margins.left : 0;
					return finalVal;
				}
				var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
				return me.top + (index * (innerHeight / (me.ticks.length - 1)));
			},
	
			// Utility for getting the pixel location of a percentage of scale
			getPixelForDecimal: function(decimal /* , includeOffset*/) {
				var me = this;
				if (me.isHorizontal()) {
					var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
					var valueOffset = (innerWidth * decimal) + me.paddingLeft;
	
					var finalVal = me.left + Math.round(valueOffset);
					finalVal += me.isFullWidth() ? me.margins.left : 0;
					return finalVal;
				}
				return me.top + (decimal * me.height);
			},
	
			getBasePixel: function() {
				return this.getPixelForValue(this.getBaseValue());
			},
	
			getBaseValue: function() {
				var me = this;
				var min = me.min;
				var max = me.max;
	
				return me.beginAtZero ? 0:
					min < 0 && max < 0? max :
					min > 0 && max > 0? min :
					0;
			},
	
			// Actually draw the scale on the canvas
			// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
			draw: function(chartArea) {
				var me = this;
				var options = me.options;
				if (!options.display) {
					return;
				}
	
				var context = me.ctx;
				var globalDefaults = Chart.defaults.global;
				var optionTicks = options.ticks;
				var gridLines = options.gridLines;
				var scaleLabel = options.scaleLabel;
	
				var isRotated = me.labelRotation !== 0;
				var skipRatio;
				var useAutoskipper = optionTicks.autoSkip;
				var isHorizontal = me.isHorizontal();
	
				// figure out the maximum number of gridlines to show
				var maxTicks;
				if (optionTicks.maxTicksLimit) {
					maxTicks = optionTicks.maxTicksLimit;
				}
	
				var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
				var tickFont = parseFontOptions(optionTicks);
	
				var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;
				var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
				var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
	
				var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
				var scaleLabelFont = parseFontOptions(scaleLabel);
	
				var labelRotationRadians = helpers.toRadians(me.labelRotation);
				var cosRotation = Math.cos(labelRotationRadians);
				var longestRotatedLabel = me.longestLabelWidth * cosRotation;
	
				// Make sure we draw text in the correct color and font
				context.fillStyle = tickFontColor;
	
				var itemsToDraw = [];
	
				if (isHorizontal) {
					skipRatio = false;
	
					// Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
					// See #2584
					if (isRotated) {
						longestRotatedLabel /= 2;
					}
	
					if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
						skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
					}
	
					// if they defined a max number of optionTicks,
					// increase skipRatio until that number is met
					if (maxTicks && me.ticks.length > maxTicks) {
						while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
							if (!skipRatio) {
								skipRatio = 1;
							}
							skipRatio += 1;
						}
					}
	
					if (!useAutoskipper) {
						skipRatio = false;
					}
				}
	
	
				var xTickStart = options.position === 'right' ? me.left : me.right - tl;
				var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
				var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
				var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;
	
				helpers.each(me.ticks, function(label, index) {
					// If the callback returned a null or undefined value, do not draw this line
					if (label === undefined || label === null) {
						return;
					}
	
					var isLastTick = me.ticks.length === index + 1;
	
					// Since we always show the last tick,we need may need to hide the last shown one before
					var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
					if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
						return;
					}
	
					var lineWidth, lineColor;
					if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
						// Draw the first index specially
						lineWidth = gridLines.zeroLineWidth;
						lineColor = gridLines.zeroLineColor;
					} else {
						lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
						lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
					}
	
					// Common properties
					var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
					var textAlign = 'middle';
					var textBaseline = 'middle';
	
					if (isHorizontal) {
	
						if (options.position === 'bottom') {
							// bottom
							textBaseline = !isRotated? 'top':'middle';
							textAlign = !isRotated? 'center': 'right';
							labelY = me.top + tl;
						} else {
							// top
							textBaseline = !isRotated? 'bottom':'middle';
							textAlign = !isRotated? 'center': 'left';
							labelY = me.bottom - tl;
						}
	
						var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
						labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)
	
						tx1 = tx2 = x1 = x2 = xLineValue;
						ty1 = yTickStart;
						ty2 = yTickEnd;
						y1 = chartArea.top;
						y2 = chartArea.bottom;
					} else {
						var isLeft = options.position === 'left';
						var tickPadding = optionTicks.padding;
						var labelXOffset;
	
						if (optionTicks.mirror) {
							textAlign = isLeft ? 'left' : 'right';
							labelXOffset = tickPadding;
						} else {
							textAlign = isLeft ? 'right' : 'left';
							labelXOffset = tl + tickPadding;
						}
	
						labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;
	
						var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
						yLineValue += helpers.aliasPixel(lineWidth);
						labelY = me.getPixelForTick(index, gridLines.offsetGridLines);
	
						tx1 = xTickStart;
						tx2 = xTickEnd;
						x1 = chartArea.left;
						x2 = chartArea.right;
						ty1 = ty2 = y1 = y2 = yLineValue;
					}
	
					itemsToDraw.push({
						tx1: tx1,
						ty1: ty1,
						tx2: tx2,
						ty2: ty2,
						x1: x1,
						y1: y1,
						x2: x2,
						y2: y2,
						labelX: labelX,
						labelY: labelY,
						glWidth: lineWidth,
						glColor: lineColor,
						glBorderDash: borderDash,
						glBorderDashOffset: borderDashOffset,
						rotation: -1 * labelRotationRadians,
						label: label,
						textBaseline: textBaseline,
						textAlign: textAlign
					});
				});
	
				// Draw all of the tick labels, tick marks, and grid lines at the correct places
				helpers.each(itemsToDraw, function(itemToDraw) {
					if (gridLines.display) {
						context.save();
						context.lineWidth = itemToDraw.glWidth;
						context.strokeStyle = itemToDraw.glColor;
						if (context.setLineDash) {
							context.setLineDash(itemToDraw.glBorderDash);
							context.lineDashOffset = itemToDraw.glBorderDashOffset;
						}
	
						context.beginPath();
	
						if (gridLines.drawTicks) {
							context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
							context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
						}
	
						if (gridLines.drawOnChartArea) {
							context.moveTo(itemToDraw.x1, itemToDraw.y1);
							context.lineTo(itemToDraw.x2, itemToDraw.y2);
						}
	
						context.stroke();
						context.restore();
					}
	
					if (optionTicks.display) {
						context.save();
						context.translate(itemToDraw.labelX, itemToDraw.labelY);
						context.rotate(itemToDraw.rotation);
						context.font = tickFont.font;
						context.textBaseline = itemToDraw.textBaseline;
						context.textAlign = itemToDraw.textAlign;
	
						var label = itemToDraw.label;
						if (helpers.isArray(label)) {
							for (var i = 0, y = 0; i < label.length; ++i) {
								// We just make sure the multiline element is a string here..
								context.fillText('' + label[i], 0, y);
								// apply same lineSpacing as calculated @ L#320
								y += (tickFont.size * 1.5);
							}
						} else {
							context.fillText(label, 0, 0);
						}
						context.restore();
					}
				});
	
				if (scaleLabel.display) {
					// Draw the scale label
					var scaleLabelX;
					var scaleLabelY;
					var rotation = 0;
	
					if (isHorizontal) {
						scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
						scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFont.size / 2) : me.top + (scaleLabelFont.size / 2);
					} else {
						var isLeft = options.position === 'left';
						scaleLabelX = isLeft ? me.left + (scaleLabelFont.size / 2) : me.right - (scaleLabelFont.size / 2);
						scaleLabelY = me.top + ((me.bottom - me.top) / 2);
						rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
					}
	
					context.save();
					context.translate(scaleLabelX, scaleLabelY);
					context.rotate(rotation);
					context.textAlign = 'center';
					context.textBaseline = 'middle';
					context.fillStyle = scaleLabelFontColor; // render in correct colour
					context.font = scaleLabelFont.font;
					context.fillText(scaleLabel.labelString, 0, 0);
					context.restore();
				}
	
				if (gridLines.drawBorder) {
					// Draw the line at the edge of the axis
					context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
					context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
					var x1 = me.left,
						x2 = me.right,
						y1 = me.top,
						y2 = me.bottom;
	
					var aliasPixel = helpers.aliasPixel(context.lineWidth);
					if (isHorizontal) {
						y1 = y2 = options.position === 'top' ? me.bottom : me.top;
						y1 += aliasPixel;
						y2 += aliasPixel;
					} else {
						x1 = x2 = options.position === 'left' ? me.right : me.left;
						x1 += aliasPixel;
						x2 += aliasPixel;
					}
	
					context.beginPath();
					context.moveTo(x1, y1);
					context.lineTo(x2, y2);
					context.stroke();
				}
			}
		});
	};


/***/ },
/* 373 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.title = {
			display: false,
			position: 'top',
			fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
	
			fontStyle: 'bold',
			padding: 10,
	
			// actual title
			text: ''
		};
	
		var noop = helpers.noop;
		Chart.Title = Chart.Element.extend({
	
			initialize: function(config) {
				var me = this;
				helpers.extend(me, config);
	
				// Contains hit boxes for each dataset (in dataset order)
				me.legendHitBoxes = [];
			},
	
			// These methods are ordered by lifecycle. Utilities then follow.
	
			beforeUpdate: noop,
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = margins;
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
				// Labels
				me.beforeBuildLabels();
				me.buildLabels();
				me.afterBuildLabels();
	
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
	
			},
			afterUpdate: noop,
	
			//
	
			beforeSetDimensions: noop,
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
	
				// Reset minSize
				me.minSize = {
					width: 0,
					height: 0
				};
			},
			afterSetDimensions: noop,
	
			//
	
			beforeBuildLabels: noop,
			buildLabels: noop,
			afterBuildLabels: noop,
	
			//
	
			beforeFit: noop,
			fit: function() {
				var me = this,
					valueOrDefault = helpers.getValueOrDefault,
					opts = me.options,
					globalDefaults = Chart.defaults.global,
					display = opts.display,
					fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
					minSize = me.minSize;
	
				if (me.isHorizontal()) {
					minSize.width = me.maxWidth; // fill all the width
					minSize.height = display ? fontSize + (opts.padding * 2) : 0;
				} else {
					minSize.width = display ? fontSize + (opts.padding * 2) : 0;
					minSize.height = me.maxHeight; // fill all the height
				}
	
				me.width = minSize.width;
				me.height = minSize.height;
	
			},
			afterFit: noop,
	
			// Shared Methods
			isHorizontal: function() {
				var pos = this.options.position;
				return pos === 'top' || pos === 'bottom';
			},
	
			// Actually draw the title block on the canvas
			draw: function() {
				var me = this,
					ctx = me.ctx,
					valueOrDefault = helpers.getValueOrDefault,
					opts = me.options,
					globalDefaults = Chart.defaults.global;
	
				if (opts.display) {
					var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
						fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
						fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
						titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
						rotation = 0,
						titleX,
						titleY,
						top = me.top,
						left = me.left,
						bottom = me.bottom,
						right = me.right,
						maxWidth;
	
					ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
					ctx.font = titleFont;
	
					// Horizontal
					if (me.isHorizontal()) {
						titleX = left + ((right - left) / 2); // midpoint of the width
						titleY = top + ((bottom - top) / 2); // midpoint of the height
						maxWidth = right - left;
					} else {
						titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
						titleY = top + ((bottom - top) / 2);
						maxWidth = bottom - top;
						rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
					}
	
					ctx.save();
					ctx.translate(titleX, titleY);
					ctx.rotate(rotation);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText(opts.text, 0, 0, maxWidth);
					ctx.restore();
				}
			}
		});
	
		function createNewTitleBlockAndAttach(chartInstance, titleOpts) {
			var title = new Chart.Title({
				ctx: chartInstance.chart.ctx,
				options: titleOpts,
				chart: chartInstance
			});
			chartInstance.titleBlock = title;
			Chart.layoutService.addBox(chartInstance, title);
		}
	
		// Register the title plugin
		Chart.plugins.register({
			beforeInit: function(chartInstance) {
				var titleOpts = chartInstance.options.title;
	
				if (titleOpts) {
					createNewTitleBlockAndAttach(chartInstance, titleOpts);
				}
			},
			beforeUpdate: function(chartInstance) {
				var titleOpts = chartInstance.options.title;
	
				if (titleOpts) {
					titleOpts = helpers.configMerge(Chart.defaults.global.title, titleOpts);
	
					if (chartInstance.titleBlock) {
						chartInstance.titleBlock.options = titleOpts;
					} else {
						createNewTitleBlockAndAttach(chartInstance, titleOpts);
					}
				} else {
					Chart.layoutService.removeBox(chartInstance, chartInstance.titleBlock);
					delete chartInstance.titleBlock;
				}
			}
		});
	};


/***/ },
/* 374 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var noop = helpers.noop;
	
		Chart.defaults.global.legend = {
	
			display: true,
			position: 'top',
			fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
			reverse: false,
	
			// a callback that will handle
			onClick: function(e, legendItem) {
				var index = legendItem.datasetIndex;
				var ci = this.chart;
				var meta = ci.getDatasetMeta(index);
	
				// See controller.isDatasetVisible comment
				meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;
	
				// We hid a dataset ... rerender the chart
				ci.update();
			},
	
			onHover: null,
	
			labels: {
				boxWidth: 40,
				padding: 10,
				// Generates labels shown in the legend
				// Valid properties to return:
				// text : text to display
				// fillStyle : fill of coloured box
				// strokeStyle: stroke of coloured box
				// hidden : if this legend item refers to a hidden item
				// lineCap : cap style for line
				// lineDash
				// lineDashOffset :
				// lineJoin :
				// lineWidth :
				generateLabels: function(chart) {
					var data = chart.data;
					return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
						return {
							text: dataset.label,
							fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
							hidden: !chart.isDatasetVisible(i),
							lineCap: dataset.borderCapStyle,
							lineDash: dataset.borderDash,
							lineDashOffset: dataset.borderDashOffset,
							lineJoin: dataset.borderJoinStyle,
							lineWidth: dataset.borderWidth,
							strokeStyle: dataset.borderColor,
							pointStyle: dataset.pointStyle,
	
							// Below is extra data used for toggling the datasets
							datasetIndex: i
						};
					}, this) : [];
				}
			}
		};
	
		/**
		 * Helper function to get the box width based on the usePointStyle option
		 * @param labelopts {Object} the label options on the legend
		 * @param fontSize {Number} the label font size
		 * @return {Number} width of the color box area
		 */
		function getBoxWidth(labelOpts, fontSize) {
			return labelOpts.usePointStyle ?
				fontSize * Math.SQRT2 :
				labelOpts.boxWidth;
		}
	
		Chart.Legend = Chart.Element.extend({
	
			initialize: function(config) {
				helpers.extend(this, config);
	
				// Contains hit boxes for each dataset (in dataset order)
				this.legendHitBoxes = [];
	
				// Are we in doughnut mode which has a different data type
				this.doughnutMode = false;
			},
	
			// These methods are ordered by lifecycle. Utilities then follow.
			// Any function defined here is inherited by all legend types.
			// Any function can be extended by the legend type
	
			beforeUpdate: noop,
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = margins;
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
				// Labels
				me.beforeBuildLabels();
				me.buildLabels();
				me.afterBuildLabels();
	
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
			},
			afterUpdate: noop,
	
			//
	
			beforeSetDimensions: noop,
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
	
				// Reset minSize
				me.minSize = {
					width: 0,
					height: 0
				};
			},
			afterSetDimensions: noop,
	
			//
	
			beforeBuildLabels: noop,
			buildLabels: function() {
				var me = this;
				var labelOpts = me.options.labels;
				var legendItems = labelOpts.generateLabels.call(me, me.chart);
	
				if (labelOpts.filter) {
					legendItems = legendItems.filter(function(item) {
						return labelOpts.filter(item, me.chart.data);
					});
				}
	
				if (me.options.reverse) {
					legendItems.reverse();
				}
	
				me.legendItems = legendItems;
			},
			afterBuildLabels: noop,
	
			//
	
			beforeFit: noop,
			fit: function() {
				var me = this;
				var opts = me.options;
				var labelOpts = opts.labels;
				var display = opts.display;
	
				var ctx = me.ctx;
	
				var globalDefault = Chart.defaults.global,
					itemOrDefault = helpers.getValueOrDefault,
					fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
					fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
					fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
					labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	
				// Reset hit boxes
				var hitboxes = me.legendHitBoxes = [];
	
				var minSize = me.minSize;
				var isHorizontal = me.isHorizontal();
	
				if (isHorizontal) {
					minSize.width = me.maxWidth; // fill all the width
					minSize.height = display ? 10 : 0;
				} else {
					minSize.width = display ? 10 : 0;
					minSize.height = me.maxHeight; // fill all the height
				}
	
				// Increase sizes here
				if (display) {
					ctx.font = labelFont;
	
					if (isHorizontal) {
						// Labels
	
						// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
						var lineWidths = me.lineWidths = [0];
						var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;
	
						ctx.textAlign = 'left';
						ctx.textBaseline = 'top';
	
						helpers.each(me.legendItems, function(legendItem, i) {
							var boxWidth = getBoxWidth(labelOpts, fontSize);
							var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	
							if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
								totalHeight += fontSize + (labelOpts.padding);
								lineWidths[lineWidths.length] = me.left;
							}
	
							// Store the hitbox width and height here. Final position will be updated in `draw`
							hitboxes[i] = {
								left: 0,
								top: 0,
								width: width,
								height: fontSize
							};
	
							lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
						});
	
						minSize.height += totalHeight;
	
					} else {
						var vPadding = labelOpts.padding;
						var columnWidths = me.columnWidths = [];
						var totalWidth = labelOpts.padding;
						var currentColWidth = 0;
						var currentColHeight = 0;
						var itemHeight = fontSize + vPadding;
	
						helpers.each(me.legendItems, function(legendItem, i) {
							var boxWidth = getBoxWidth(labelOpts, fontSize);
							var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	
							// If too tall, go to new column
							if (currentColHeight + itemHeight > minSize.height) {
								totalWidth += currentColWidth + labelOpts.padding;
								columnWidths.push(currentColWidth); // previous column width
	
								currentColWidth = 0;
								currentColHeight = 0;
							}
	
							// Get max width
							currentColWidth = Math.max(currentColWidth, itemWidth);
							currentColHeight += itemHeight;
	
							// Store the hitbox width and height here. Final position will be updated in `draw`
							hitboxes[i] = {
								left: 0,
								top: 0,
								width: itemWidth,
								height: fontSize
							};
						});
	
						totalWidth += currentColWidth;
						columnWidths.push(currentColWidth);
						minSize.width += totalWidth;
					}
				}
	
				me.width = minSize.width;
				me.height = minSize.height;
			},
			afterFit: noop,
	
			// Shared Methods
			isHorizontal: function() {
				return this.options.position === 'top' || this.options.position === 'bottom';
			},
	
			// Actually draw the legend on the canvas
			draw: function() {
				var me = this;
				var opts = me.options;
				var labelOpts = opts.labels;
				var globalDefault = Chart.defaults.global,
					lineDefault = globalDefault.elements.line,
					legendWidth = me.width,
					lineWidths = me.lineWidths;
	
				if (opts.display) {
					var ctx = me.ctx,
						cursor,
						itemOrDefault = helpers.getValueOrDefault,
						fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
						fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
						fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
						fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
						labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	
					// Canvas setup
					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';
					ctx.lineWidth = 0.5;
					ctx.strokeStyle = fontColor; // for strikethrough effect
					ctx.fillStyle = fontColor; // render in correct colour
					ctx.font = labelFont;
	
					var boxWidth = getBoxWidth(labelOpts, fontSize),
						hitboxes = me.legendHitBoxes;
	
					// current position
					var drawLegendBox = function(x, y, legendItem) {
						if (isNaN(boxWidth) || boxWidth <= 0) {
							return;
						}
	
						// Set the ctx for the box
						ctx.save();
	
						ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
						ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
						ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
						ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
						ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
						ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
						var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);
	
						if (ctx.setLineDash) {
							// IE 9 and 10 do not support line dash
							ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
						}
	
						if (opts.labels && opts.labels.usePointStyle) {
							// Recalculate x and y for drawPoint() because its expecting
							// x and y to be center of figure (instead of top left)
							var radius = fontSize * Math.SQRT2 / 2;
							var offSet = radius / Math.SQRT2;
							var centerX = x + offSet;
							var centerY = y + offSet;
	
							// Draw pointStyle as legend symbol
							Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
						} else {
							// Draw box as legend symbol
							if (!isLineWidthZero) {
								ctx.strokeRect(x, y, boxWidth, fontSize);
							}
							ctx.fillRect(x, y, boxWidth, fontSize);
						}
	
						ctx.restore();
					};
					var fillText = function(x, y, legendItem, textWidth) {
						ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);
	
						if (legendItem.hidden) {
							// Strikethrough the text if hidden
							ctx.beginPath();
							ctx.lineWidth = 2;
							ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
							ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
							ctx.stroke();
						}
					};
	
					// Horizontal
					var isHorizontal = me.isHorizontal();
					if (isHorizontal) {
						cursor = {
							x: me.left + ((legendWidth - lineWidths[0]) / 2),
							y: me.top + labelOpts.padding,
							line: 0
						};
					} else {
						cursor = {
							x: me.left + labelOpts.padding,
							y: me.top + labelOpts.padding,
							line: 0
						};
					}
	
					var itemHeight = fontSize + labelOpts.padding;
					helpers.each(me.legendItems, function(legendItem, i) {
						var textWidth = ctx.measureText(legendItem.text).width,
							width = boxWidth + (fontSize / 2) + textWidth,
							x = cursor.x,
							y = cursor.y;
	
						if (isHorizontal) {
							if (x + width >= legendWidth) {
								y = cursor.y += itemHeight;
								cursor.line++;
								x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
							}
						} else if (y + itemHeight > me.bottom) {
							x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
							y = cursor.y = me.top + labelOpts.padding;
							cursor.line++;
						}
	
						drawLegendBox(x, y, legendItem);
	
						hitboxes[i].left = x;
						hitboxes[i].top = y;
	
						// Fill the actual label
						fillText(x, y, legendItem, textWidth);
	
						if (isHorizontal) {
							cursor.x += width + (labelOpts.padding);
						} else {
							cursor.y += itemHeight;
						}
	
					});
				}
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event - The event to handle
			 * @return {Boolean} true if a change occured
			 */
			handleEvent: function(e) {
				var me = this;
				var opts = me.options;
				var type = e.type === 'mouseup' ? 'click' : e.type;
				var changed = false;
	
				if (type === 'mousemove') {
					if (!opts.onHover) {
						return;
					}
				} else if (type === 'click') {
					if (!opts.onClick) {
						return;
					}
				} else {
					return;
				}
	
				// Chart event already has relative position in it
				var x = e.x,
					y = e.y;
	
				if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
					// See if we are touching one of the dataset boxes
					var lh = me.legendHitBoxes;
					for (var i = 0; i < lh.length; ++i) {
						var hitBox = lh[i];
	
						if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
							// Touching an element
							if (type === 'click') {
								// use e.native for backwards compatibility
								opts.onClick.call(me, e.native, me.legendItems[i]);
								changed = true;
								break;
							} else if (type === 'mousemove') {
								// use e.native for backwards compatibility
								opts.onHover.call(me, e.native, me.legendItems[i]);
								changed = true;
								break;
							}
						}
					}
				}
	
				return changed;
			}
		});
	
		function createNewLegendAndAttach(chartInstance, legendOpts) {
			var legend = new Chart.Legend({
				ctx: chartInstance.chart.ctx,
				options: legendOpts,
				chart: chartInstance
			});
			chartInstance.legend = legend;
			Chart.layoutService.addBox(chartInstance, legend);
		}
	
		// Register the legend plugin
		Chart.plugins.register({
			beforeInit: function(chartInstance) {
				var legendOpts = chartInstance.options.legend;
	
				if (legendOpts) {
					createNewLegendAndAttach(chartInstance, legendOpts);
				}
			},
			beforeUpdate: function(chartInstance) {
				var legendOpts = chartInstance.options.legend;
	
				if (legendOpts) {
					legendOpts = helpers.configMerge(Chart.defaults.global.legend, legendOpts);
	
					if (chartInstance.legend) {
						chartInstance.legend.options = legendOpts;
					} else {
						createNewLegendAndAttach(chartInstance, legendOpts);
					}
				} else {
					Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
					delete chartInstance.legend;
				}
			},
			afterEvent: function(chartInstance, e) {
				var legend = chartInstance.legend;
				if (legend) {
					legend.handleEvent(e);
				}
			}
		});
	};


/***/ },
/* 375 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
		var helpers = Chart.helpers;
	
		/**
		 * Helper function to get relative position for an event
		 * @param {Event|IEvent} event - The event to get the position for
		 * @param {Chart} chart - The chart
		 * @returns {Point} the event position
		 */
		function getRelativePosition(e, chart) {
			if (e.native) {
				return {
					x: e.x,
					y: e.y
				};
			}
	
			return helpers.getRelativePosition(e, chart);
		}
	
		/**
		 * Helper function to traverse all of the visible elements in the chart
		 * @param chart {chart} the chart
		 * @param handler {Function} the callback to execute for each visible item
		 */
		function parseVisibleItems(chart, handler) {
			var datasets = chart.data.datasets;
			var meta, i, j, ilen, jlen;
	
			for (i = 0, ilen = datasets.length; i < ilen; ++i) {
				if (!chart.isDatasetVisible(i)) {
					continue;
				}
	
				meta = chart.getDatasetMeta(i);
				for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
					var element = meta.data[j];
					if (!element._view.skip) {
						handler(element);
					}
				}
			}
		}
	
		/**
		 * Helper function to get the items that intersect the event position
		 * @param items {ChartElement[]} elements to filter
		 * @param position {Point} the point to be nearest to
		 * @return {ChartElement[]} the nearest items
		 */
		function getIntersectItems(chart, position) {
			var elements = [];
	
			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
				}
			});
	
			return elements;
		}
	
		/**
		 * Helper function to get the items nearest to the event position considering all visible items in teh chart
		 * @param chart {Chart} the chart to look at elements from
		 * @param position {Point} the point to be nearest to
		 * @param intersect {Boolean} if true, only consider items that intersect the position
		 * @param distanceMetric {Function} Optional function to provide the distance between
		 * @return {ChartElement[]} the nearest items
		 */
		function getNearestItems(chart, position, intersect, distanceMetric) {
			var minDistance = Number.POSITIVE_INFINITY;
			var nearestItems = [];
	
			if (!distanceMetric) {
				distanceMetric = helpers.distanceBetweenPoints;
			}
	
			parseVisibleItems(chart, function(element) {
				if (intersect && !element.inRange(position.x, position.y)) {
					return;
				}
	
				var center = element.getCenterPoint();
				var distance = distanceMetric(position, center);
	
				if (distance < minDistance) {
					nearestItems = [element];
					minDistance = distance;
				} else if (distance === minDistance) {
					// Can have multiple items at the same distance in which case we sort by size
					nearestItems.push(element);
				}
			});
	
			return nearestItems;
		}
	
		function indexMode(chart, e, options) {
			var position = getRelativePosition(e, chart.chart);
			var distanceMetric = function(pt1, pt2) {
				return Math.abs(pt1.x - pt2.x);
			};
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
			var elements = [];
	
			if (!items.length) {
				return [];
			}
	
			chart.data.datasets.forEach(function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex),
						element = meta.data[items[0]._index];
	
					// don't count items that are skipped (null data)
					if (element && !element._view.skip) {
						elements.push(element);
					}
				}
			});
	
			return elements;
		}
	
		/**
		 * @interface IInteractionOptions
		 */
		/**
		 * If true, only consider items that intersect the point
		 * @name IInterfaceOptions#boolean
		 * @type Boolean
		 */
	
		/**
		 * Contains interaction related functions
		 * @namespace Chart.Interaction
		 */
		Chart.Interaction = {
			// Helper function for different modes
			modes: {
				single: function(chart, e) {
					var position = getRelativePosition(e, chart.chart);
					var elements = [];
	
					parseVisibleItems(chart, function(element) {
						if (element.inRange(position.x, position.y)) {
							elements.push(element);
							return elements;
						}
					});
	
					return elements.slice(0, 1);
				},
	
				/**
				 * @function Chart.Interaction.modes.label
				 * @deprecated since version 2.4.0
				 */
				label: indexMode,
	
				/**
				 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
				 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
				 * @function Chart.Interaction.modes.index
				 * @since v2.4.0
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use during interaction
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				index: indexMode,
	
				/**
				 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
				 * If the options.intersect is false, we find the nearest item and return the items in that dataset
				 * @function Chart.Interaction.modes.dataset
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use during interaction
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				dataset: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);
	
					if (items.length > 0) {
						items = chart.getDatasetMeta(items[0]._datasetIndex).data;
					}
	
					return items;
				},
	
				/**
				 * @function Chart.Interaction.modes.x-axis
				 * @deprecated since version 2.4.0. Use index mode and intersect == true
				 */
				'x-axis': function(chart, e) {
					return indexMode(chart, e, true);
				},
	
				/**
				 * Point mode returns all elements that hit test based on the event position
				 * of the event
				 * @function Chart.Interaction.modes.intersect
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				point: function(chart, e) {
					var position = getRelativePosition(e, chart.chart);
					return getIntersectItems(chart, position);
				},
	
				/**
				 * nearest mode returns the element closest to the point
				 * @function Chart.Interaction.modes.intersect
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				nearest: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var nearestItems = getNearestItems(chart, position, options.intersect);
	
					// We have multiple items at the same distance from the event. Now sort by smallest
					if (nearestItems.length > 1) {
						nearestItems.sort(function(a, b) {
							var sizeA = a.getArea();
							var sizeB = b.getArea();
							var ret = sizeA - sizeB;
	
							if (ret === 0) {
								// if equal sort by dataset index
								ret = a._datasetIndex - b._datasetIndex;
							}
	
							return ret;
						});
					}
	
					// Return only 1 item
					return nearestItems.slice(0, 1);
				},
	
				/**
				 * x mode returns the elements that hit-test at the current x coordinate
				 * @function Chart.Interaction.modes.x
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				x: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = [];
					var intersectsItem = false;
	
					parseVisibleItems(chart, function(element) {
						if (element.inXRange(position.x)) {
							items.push(element);
						}
	
						if (element.inRange(position.x, position.y)) {
							intersectsItem = true;
						}
					});
	
					// If we want to trigger on an intersect and we don't have any items
					// that intersect the position, return nothing
					if (options.intersect && !intersectsItem) {
						items = [];
					}
					return items;
				},
	
				/**
				 * y mode returns the elements that hit-test at the current y coordinate
				 * @function Chart.Interaction.modes.y
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				y: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = [];
					var intersectsItem = false;
	
					parseVisibleItems(chart, function(element) {
						if (element.inYRange(position.y)) {
							items.push(element);
						}
	
						if (element.inRange(position.x, position.y)) {
							intersectsItem = true;
						}
					});
	
					// If we want to trigger on an intersect and we don't have any items
					// that intersect the position, return nothing
					if (options.intersect && !intersectsItem) {
						items = [];
					}
					return items;
				}
			}
		};
	};


/***/ },
/* 376 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		/**
	 	 * Helper method to merge the opacity into a color
	 	 */
		function mergeOpacity(colorString, opacity) {
			var color = helpers.color(colorString);
			return color.alpha(opacity * color.alpha()).rgbaString();
		}
	
		Chart.defaults.global.tooltips = {
			enabled: true,
			custom: null,
			mode: 'nearest',
			position: 'average',
			intersect: true,
			backgroundColor: 'rgba(0,0,0,0.8)',
			titleFontStyle: 'bold',
			titleSpacing: 2,
			titleMarginBottom: 6,
			titleFontColor: '#fff',
			titleAlign: 'left',
			bodySpacing: 2,
			bodyFontColor: '#fff',
			bodyAlign: 'left',
			footerFontStyle: 'bold',
			footerSpacing: 2,
			footerMarginTop: 6,
			footerFontColor: '#fff',
			footerAlign: 'left',
			yPadding: 6,
			xPadding: 6,
			caretSize: 5,
			cornerRadius: 6,
			multiKeyBackground: '#fff',
			displayColors: true,
			callbacks: {
				// Args are: (tooltipItems, data)
				beforeTitle: helpers.noop,
				title: function(tooltipItems, data) {
					// Pick first xLabel for now
					var title = '';
					var labels = data.labels;
					var labelCount = labels ? labels.length : 0;
	
					if (tooltipItems.length > 0) {
						var item = tooltipItems[0];
	
						if (item.xLabel) {
							title = item.xLabel;
						} else if (labelCount > 0 && item.index < labelCount) {
							title = labels[item.index];
						}
					}
	
					return title;
				},
				afterTitle: helpers.noop,
	
				// Args are: (tooltipItems, data)
				beforeBody: helpers.noop,
	
				// Args are: (tooltipItem, data)
				beforeLabel: helpers.noop,
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					return datasetLabel + ': ' + tooltipItem.yLabel;
				},
				labelColor: function(tooltipItem, chartInstance) {
					var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
					var activeElement = meta.data[tooltipItem.index];
					var view = activeElement._view;
					return {
						borderColor: view.borderColor,
						backgroundColor: view.backgroundColor
					};
				},
				afterLabel: helpers.noop,
	
				// Args are: (tooltipItems, data)
				afterBody: helpers.noop,
	
				// Args are: (tooltipItems, data)
				beforeFooter: helpers.noop,
				footer: helpers.noop,
				afterFooter: helpers.noop
			}
		};
	
		// Helper to push or concat based on if the 2nd parameter is an array or not
		function pushOrConcat(base, toPush) {
			if (toPush) {
				if (helpers.isArray(toPush)) {
					// base = base.concat(toPush);
					Array.prototype.push.apply(base, toPush);
				} else {
					base.push(toPush);
				}
			}
	
			return base;
		}
	
		// Private helper to create a tooltip item model
		// @param element : the chart element (point, arc, bar) to create the tooltip item for
		// @return : new tooltip item
		function createTooltipItem(element) {
			var xScale = element._xScale;
			var yScale = element._yScale || element._scale; // handle radar || polarArea charts
			var index = element._index,
				datasetIndex = element._datasetIndex;
	
			return {
				xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
				yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
				index: index,
				datasetIndex: datasetIndex,
				x: element._model.x,
				y: element._model.y
			};
		}
	
		/**
		 * Helper to get the reset model for the tooltip
		 * @param tooltipOpts {Object} the tooltip options
		 */
		function getBaseModel(tooltipOpts) {
			var globalDefaults = Chart.defaults.global;
			var getValueOrDefault = helpers.getValueOrDefault;
	
			return {
				// Positioning
				xPadding: tooltipOpts.xPadding,
				yPadding: tooltipOpts.yPadding,
				xAlign: tooltipOpts.xAlign,
				yAlign: tooltipOpts.yAlign,
	
				// Body
				bodyFontColor: tooltipOpts.bodyFontColor,
				_bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
				_bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
				_bodyAlign: tooltipOpts.bodyAlign,
				bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
				bodySpacing: tooltipOpts.bodySpacing,
	
				// Title
				titleFontColor: tooltipOpts.titleFontColor,
				_titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
				_titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
				titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
				_titleAlign: tooltipOpts.titleAlign,
				titleSpacing: tooltipOpts.titleSpacing,
				titleMarginBottom: tooltipOpts.titleMarginBottom,
	
				// Footer
				footerFontColor: tooltipOpts.footerFontColor,
				_footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
				_footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
				footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
				_footerAlign: tooltipOpts.footerAlign,
				footerSpacing: tooltipOpts.footerSpacing,
				footerMarginTop: tooltipOpts.footerMarginTop,
	
				// Appearance
				caretSize: tooltipOpts.caretSize,
				cornerRadius: tooltipOpts.cornerRadius,
				backgroundColor: tooltipOpts.backgroundColor,
				opacity: 0,
				legendColorBackground: tooltipOpts.multiKeyBackground,
				displayColors: tooltipOpts.displayColors
			};
		}
	
		/**
		 * Get the size of the tooltip
		 */
		function getTooltipSize(tooltip, model) {
			var ctx = tooltip._chart.ctx;
	
			var height = model.yPadding * 2; // Tooltip Padding
			var width = 0;
	
			// Count of all lines in the body
			var body = model.body;
			var combinedBodyLength = body.reduce(function(count, bodyItem) {
				return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
			}, 0);
			combinedBodyLength += model.beforeBody.length + model.afterBody.length;
	
			var titleLineCount = model.title.length;
			var footerLineCount = model.footer.length;
			var titleFontSize = model.titleFontSize,
				bodyFontSize = model.bodyFontSize,
				footerFontSize = model.footerFontSize;
	
			height += titleLineCount * titleFontSize; // Title Lines
			height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
			height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
			height += combinedBodyLength * bodyFontSize; // Body Lines
			height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
			height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
			height += footerLineCount * (footerFontSize); // Footer Lines
			height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
	
			// Title width
			var widthPadding = 0;
			var maxLineWidth = function(line) {
				width = Math.max(width, ctx.measureText(line).width + widthPadding);
			};
	
			ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
			helpers.each(model.title, maxLineWidth);
	
			// Body width
			ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
			helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);
	
			// Body lines may include some extra width due to the color box
			widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
			helpers.each(body, function(bodyItem) {
				helpers.each(bodyItem.before, maxLineWidth);
				helpers.each(bodyItem.lines, maxLineWidth);
				helpers.each(bodyItem.after, maxLineWidth);
			});
	
			// Reset back to 0
			widthPadding = 0;
	
			// Footer width
			ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
			helpers.each(model.footer, maxLineWidth);
	
			// Add padding
			width += 2 * model.xPadding;
	
			return {
				width: width,
				height: height
			};
		}
	
		/**
		 * Helper to get the alignment of a tooltip given the size
		 */
		function determineAlignment(tooltip, size) {
			var model = tooltip._model;
			var chart = tooltip._chart;
			var chartArea = tooltip._chartInstance.chartArea;
			var xAlign = 'center';
			var yAlign = 'center';
	
			if (model.y < size.height) {
				yAlign = 'top';
			} else if (model.y > (chart.height - size.height)) {
				yAlign = 'bottom';
			}
	
			var lf, rf; // functions to determine left, right alignment
			var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
			var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
			var midX = (chartArea.left + chartArea.right) / 2;
			var midY = (chartArea.top + chartArea.bottom) / 2;
	
			if (yAlign === 'center') {
				lf = function(x) {
					return x <= midX;
				};
				rf = function(x) {
					return x > midX;
				};
			} else {
				lf = function(x) {
					return x <= (size.width / 2);
				};
				rf = function(x) {
					return x >= (chart.width - (size.width / 2));
				};
			}
	
			olf = function(x) {
				return x + size.width > chart.width;
			};
			orf = function(x) {
				return x - size.width < 0;
			};
			yf = function(y) {
				return y <= midY ? 'top' : 'bottom';
			};
	
			if (lf(model.x)) {
				xAlign = 'left';
	
				// Is tooltip too wide and goes over the right side of the chart.?
				if (olf(model.x)) {
					xAlign = 'center';
					yAlign = yf(model.y);
				}
			} else if (rf(model.x)) {
				xAlign = 'right';
	
				// Is tooltip too wide and goes outside left edge of canvas?
				if (orf(model.x)) {
					xAlign = 'center';
					yAlign = yf(model.y);
				}
			}
	
			var opts = tooltip._options;
			return {
				xAlign: opts.xAlign ? opts.xAlign : xAlign,
				yAlign: opts.yAlign ? opts.yAlign : yAlign
			};
		}
	
		/**
		 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
		 */
		function getBackgroundPoint(vm, size, alignment) {
			// Background Position
			var x = vm.x;
			var y = vm.y;
	
			var caretSize = vm.caretSize,
				caretPadding = vm.caretPadding,
				cornerRadius = vm.cornerRadius,
				xAlign = alignment.xAlign,
				yAlign = alignment.yAlign,
				paddingAndSize = caretSize + caretPadding,
				radiusAndPadding = cornerRadius + caretPadding;
	
			if (xAlign === 'right') {
				x -= size.width;
			} else if (xAlign === 'center') {
				x -= (size.width / 2);
			}
	
			if (yAlign === 'top') {
				y += paddingAndSize;
			} else if (yAlign === 'bottom') {
				y -= size.height + paddingAndSize;
			} else {
				y -= (size.height / 2);
			}
	
			if (yAlign === 'center') {
				if (xAlign === 'left') {
					x += paddingAndSize;
				} else if (xAlign === 'right') {
					x -= paddingAndSize;
				}
			} else if (xAlign === 'left') {
				x -= radiusAndPadding;
			} else if (xAlign === 'right') {
				x += radiusAndPadding;
			}
	
			return {
				x: x,
				y: y
			};
		}
	
		Chart.Tooltip = Chart.Element.extend({
			initialize: function() {
				this._model = getBaseModel(this._options);
			},
	
			// Get the title
			// Args are: (tooltipItem, data)
			getTitle: function() {
				var me = this;
				var opts = me._options;
				var callbacks = opts.callbacks;
	
				var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
					title = callbacks.title.apply(me, arguments),
					afterTitle = callbacks.afterTitle.apply(me, arguments);
	
				var lines = [];
				lines = pushOrConcat(lines, beforeTitle);
				lines = pushOrConcat(lines, title);
				lines = pushOrConcat(lines, afterTitle);
	
				return lines;
			},
	
			// Args are: (tooltipItem, data)
			getBeforeBody: function() {
				var lines = this._options.callbacks.beforeBody.apply(this, arguments);
				return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
			},
	
			// Args are: (tooltipItem, data)
			getBody: function(tooltipItems, data) {
				var me = this;
				var callbacks = me._options.callbacks;
				var bodyItems = [];
	
				helpers.each(tooltipItems, function(tooltipItem) {
					var bodyItem = {
						before: [],
						lines: [],
						after: []
					};
					pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
					pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
					pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));
	
					bodyItems.push(bodyItem);
				});
	
				return bodyItems;
			},
	
			// Args are: (tooltipItem, data)
			getAfterBody: function() {
				var lines = this._options.callbacks.afterBody.apply(this, arguments);
				return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
			},
	
			// Get the footer and beforeFooter and afterFooter lines
			// Args are: (tooltipItem, data)
			getFooter: function() {
				var me = this;
				var callbacks = me._options.callbacks;
	
				var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
				var footer = callbacks.footer.apply(me, arguments);
				var afterFooter = callbacks.afterFooter.apply(me, arguments);
	
				var lines = [];
				lines = pushOrConcat(lines, beforeFooter);
				lines = pushOrConcat(lines, footer);
				lines = pushOrConcat(lines, afterFooter);
	
				return lines;
			},
	
			update: function(changed) {
				var me = this;
				var opts = me._options;
	
				// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
				// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
				// which breaks any animations.
				var existingModel = me._model;
				var model = me._model = getBaseModel(opts);
				var active = me._active;
	
				var data = me._data;
				var chartInstance = me._chartInstance;
	
				// In the case where active.length === 0 we need to keep these at existing values for good animations
				var alignment = {
					xAlign: existingModel.xAlign,
					yAlign: existingModel.yAlign
				};
				var backgroundPoint = {
					x: existingModel.x,
					y: existingModel.y
				};
				var tooltipSize = {
					width: existingModel.width,
					height: existingModel.height
				};
				var tooltipPosition = {
					x: existingModel.caretX,
					y: existingModel.caretY
				};
	
				var i, len;
	
				if (active.length) {
					model.opacity = 1;
	
					var labelColors = [];
					tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);
	
					var tooltipItems = [];
					for (i = 0, len = active.length; i < len; ++i) {
						tooltipItems.push(createTooltipItem(active[i]));
					}
	
					// If the user provided a filter function, use it to modify the tooltip items
					if (opts.filter) {
						tooltipItems = tooltipItems.filter(function(a) {
							return opts.filter(a, data);
						});
					}
	
					// If the user provided a sorting function, use it to modify the tooltip items
					if (opts.itemSort) {
						tooltipItems = tooltipItems.sort(function(a, b) {
							return opts.itemSort(a, b, data);
						});
					}
	
					// Determine colors for boxes
					helpers.each(tooltipItems, function(tooltipItem) {
						labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
					});
	
					// Build the Text Lines
					model.title = me.getTitle(tooltipItems, data);
					model.beforeBody = me.getBeforeBody(tooltipItems, data);
					model.body = me.getBody(tooltipItems, data);
					model.afterBody = me.getAfterBody(tooltipItems, data);
					model.footer = me.getFooter(tooltipItems, data);
	
					// Initial positioning and colors
					model.x = Math.round(tooltipPosition.x);
					model.y = Math.round(tooltipPosition.y);
					model.caretPadding = helpers.getValueOrDefault(tooltipPosition.padding, 2);
					model.labelColors = labelColors;
	
					// data points
					model.dataPoints = tooltipItems;
	
					// We need to determine alignment of the tooltip
					tooltipSize = getTooltipSize(this, model);
					alignment = determineAlignment(this, tooltipSize);
					// Final Size and Position
					backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
				} else {
					model.opacity = 0;
				}
	
				model.xAlign = alignment.xAlign;
				model.yAlign = alignment.yAlign;
				model.x = backgroundPoint.x;
				model.y = backgroundPoint.y;
				model.width = tooltipSize.width;
				model.height = tooltipSize.height;
	
				// Point where the caret on the tooltip points to
				model.caretX = tooltipPosition.x;
				model.caretY = tooltipPosition.y;
	
				me._model = model;
	
				if (changed && opts.custom) {
					opts.custom.call(me, model);
				}
	
				return me;
			},
			drawCaret: function(tooltipPoint, size, opacity) {
				var vm = this._view;
				var ctx = this._chart.ctx;
				var x1, x2, x3;
				var y1, y2, y3;
				var caretSize = vm.caretSize;
				var cornerRadius = vm.cornerRadius;
				var xAlign = vm.xAlign,
					yAlign = vm.yAlign;
				var ptX = tooltipPoint.x,
					ptY = tooltipPoint.y;
				var width = size.width,
					height = size.height;
	
				if (yAlign === 'center') {
					// Left or right side
					if (xAlign === 'left') {
						x1 = ptX;
						x2 = x1 - caretSize;
						x3 = x1;
					} else {
						x1 = ptX + width;
						x2 = x1 + caretSize;
						x3 = x1;
					}
	
					y2 = ptY + (height / 2);
					y1 = y2 - caretSize;
					y3 = y2 + caretSize;
				} else {
					if (xAlign === 'left') {
						x1 = ptX + cornerRadius;
						x2 = x1 + caretSize;
						x3 = x2 + caretSize;
					} else if (xAlign === 'right') {
						x1 = ptX + width - cornerRadius;
						x2 = x1 - caretSize;
						x3 = x2 - caretSize;
					} else {
						x2 = ptX + (width / 2);
						x1 = x2 - caretSize;
						x3 = x2 + caretSize;
					}
	
					if (yAlign === 'top') {
						y1 = ptY;
						y2 = y1 - caretSize;
						y3 = y1;
					} else {
						y1 = ptY + height;
						y2 = y1 + caretSize;
						y3 = y1;
					}
				}
	
				ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.lineTo(x3, y3);
				ctx.closePath();
				ctx.fill();
			},
			drawTitle: function(pt, vm, ctx, opacity) {
				var title = vm.title;
	
				if (title.length) {
					ctx.textAlign = vm._titleAlign;
					ctx.textBaseline = 'top';
	
					var titleFontSize = vm.titleFontSize,
						titleSpacing = vm.titleSpacing;
	
					ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
					ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
	
					var i, len;
					for (i = 0, len = title.length; i < len; ++i) {
						ctx.fillText(title[i], pt.x, pt.y);
						pt.y += titleFontSize + titleSpacing; // Line Height and spacing
	
						if (i + 1 === title.length) {
							pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
						}
					}
				}
			},
			drawBody: function(pt, vm, ctx, opacity) {
				var bodyFontSize = vm.bodyFontSize;
				var bodySpacing = vm.bodySpacing;
				var body = vm.body;
	
				ctx.textAlign = vm._bodyAlign;
				ctx.textBaseline = 'top';
	
				var textColor = mergeOpacity(vm.bodyFontColor, opacity);
				ctx.fillStyle = textColor;
				ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
	
				// Before Body
				var xLinePadding = 0;
				var fillLineOfText = function(line) {
					ctx.fillText(line, pt.x + xLinePadding, pt.y);
					pt.y += bodyFontSize + bodySpacing;
				};
	
				// Before body lines
				helpers.each(vm.beforeBody, fillLineOfText);
	
				var drawColorBoxes = vm.displayColors;
				xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;
	
				// Draw body lines now
				helpers.each(body, function(bodyItem, i) {
					helpers.each(bodyItem.before, fillLineOfText);
	
					helpers.each(bodyItem.lines, function(line) {
						// Draw Legend-like boxes if needed
						if (drawColorBoxes) {
							// Fill a white rect so that colours merge nicely if the opacity is < 1
							ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
							ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	
							// Border
							ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
							ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	
							// Inner square
							ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
							ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
	
							ctx.fillStyle = textColor;
						}
	
						fillLineOfText(line);
					});
	
					helpers.each(bodyItem.after, fillLineOfText);
				});
	
				// Reset back to 0 for after body
				xLinePadding = 0;
	
				// After body lines
				helpers.each(vm.afterBody, fillLineOfText);
				pt.y -= bodySpacing; // Remove last body spacing
			},
			drawFooter: function(pt, vm, ctx, opacity) {
				var footer = vm.footer;
	
				if (footer.length) {
					pt.y += vm.footerMarginTop;
	
					ctx.textAlign = vm._footerAlign;
					ctx.textBaseline = 'top';
	
					ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
					ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
	
					helpers.each(footer, function(line) {
						ctx.fillText(line, pt.x, pt.y);
						pt.y += vm.footerFontSize + vm.footerSpacing;
					});
				}
			},
			drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
				ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
				helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
				ctx.fill();
			},
			draw: function() {
				var ctx = this._chart.ctx;
				var vm = this._view;
	
				if (vm.opacity === 0) {
					return;
				}
	
				var tooltipSize = {
					width: vm.width,
					height: vm.height
				};
				var pt = {
					x: vm.x,
					y: vm.y
				};
	
				// IE11/Edge does not like very small opacities, so snap to 0
				var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;
	
				if (this._options.enabled) {
					// Draw Background
					this.drawBackground(pt, vm, ctx, tooltipSize, opacity);
	
					// Draw Caret
					this.drawCaret(pt, tooltipSize, opacity);
	
					// Draw Title, Body, and Footer
					pt.x += vm.xPadding;
					pt.y += vm.yPadding;
	
					// Titles
					this.drawTitle(pt, vm, ctx, opacity);
	
					// Body
					this.drawBody(pt, vm, ctx, opacity);
	
					// Footer
					this.drawFooter(pt, vm, ctx, opacity);
				}
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event - The event to handle
			 * @returns {Boolean} true if the tooltip changed
			 */
			handleEvent: function(e) {
				var me = this;
				var options = me._options;
				var changed = false;
	
				me._lastActive = me._lastActive || [];
	
				// Find Active Elements for tooltips
				if (e.type === 'mouseout') {
					me._active = [];
				} else {
					me._active = me._chartInstance.getElementsAtEventForMode(e, options.mode, options);
				}
	
				// Remember Last Actives
				changed = !helpers.arrayEquals(me._active, me._lastActive);
				me._lastActive = me._active;
	
				if (options.enabled || options.custom) {
					me._eventPosition = {
						x: e.x,
						y: e.y
					};
	
					var model = me._model;
					me.update(true);
					me.pivot();
	
					// See if our tooltip position changed
					changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
				}
	
				return changed;
			}
		});
	
		/**
		 * @namespace Chart.Tooltip.positioners
		 */
		Chart.Tooltip.positioners = {
			/**
			 * Average mode places the tooltip at the average position of the elements shown
			 * @function Chart.Tooltip.positioners.average
			 * @param elements {ChartElement[]} the elements being displayed in the tooltip
			 * @returns {Point} tooltip position
			 */
			average: function(elements) {
				if (!elements.length) {
					return false;
				}
	
				var i, len;
				var x = 0;
				var y = 0;
				var count = 0;
	
				for (i = 0, len = elements.length; i < len; ++i) {
					var el = elements[i];
					if (el && el.hasValue()) {
						var pos = el.tooltipPosition();
						x += pos.x;
						y += pos.y;
						++count;
					}
				}
	
				return {
					x: Math.round(x / count),
					y: Math.round(y / count)
				};
			},
	
			/**
			 * Gets the tooltip position nearest of the item nearest to the event position
			 * @function Chart.Tooltip.positioners.nearest
			 * @param elements {Chart.Element[]} the tooltip elements
			 * @param eventPosition {Point} the position of the event in canvas coordinates
			 * @returns {Point} the tooltip position
			 */
			nearest: function(elements, eventPosition) {
				var x = eventPosition.x;
				var y = eventPosition.y;
	
				var nearestElement;
				var minDistance = Number.POSITIVE_INFINITY;
				var i, len;
				for (i = 0, len = elements.length; i < len; ++i) {
					var el = elements[i];
					if (el && el.hasValue()) {
						var center = el.getCenterPoint();
						var d = helpers.distanceBetweenPoints(eventPosition, center);
	
						if (d < minDistance) {
							minDistance = d;
							nearestElement = el;
						}
					}
				}
	
				if (nearestElement) {
					var tp = nearestElement.tooltipPosition();
					x = tp.x;
					y = tp.y;
				}
	
				return {
					x: x,
					y: y
				};
			}
		};
	};


/***/ },
/* 377 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			globalOpts = Chart.defaults.global;
	
		globalOpts.elements.arc = {
			backgroundColor: globalOpts.defaultColor,
			borderColor: '#fff',
			borderWidth: 2
		};
	
		Chart.elements.Arc = Chart.Element.extend({
			inLabelRange: function(mouseX) {
				var vm = this._view;
	
				if (vm) {
					return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
				}
				return false;
			},
			inRange: function(chartX, chartY) {
				var vm = this._view;
	
				if (vm) {
					var pointRelativePosition = helpers.getAngleFromPoint(vm, {
							x: chartX,
							y: chartY
						}),
						angle = pointRelativePosition.angle,
						distance = pointRelativePosition.distance;
	
					// Sanitise angle range
					var startAngle = vm.startAngle;
					var endAngle = vm.endAngle;
					while (endAngle < startAngle) {
						endAngle += 2.0 * Math.PI;
					}
					while (angle > endAngle) {
						angle -= 2.0 * Math.PI;
					}
					while (angle < startAngle) {
						angle += 2.0 * Math.PI;
					}
	
					// Check if within the range of the open/close angle
					var betweenAngles = (angle >= startAngle && angle <= endAngle),
						withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);
	
					return (betweenAngles && withinRadius);
				}
				return false;
			},
			getCenterPoint: function() {
				var vm = this._view;
				var halfAngle = (vm.startAngle + vm.endAngle) / 2;
				var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
				return {
					x: vm.x + Math.cos(halfAngle) * halfRadius,
					y: vm.y + Math.sin(halfAngle) * halfRadius
				};
			},
			getArea: function() {
				var vm = this._view;
				return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
			},
			tooltipPosition: function() {
				var vm = this._view;
	
				var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
					rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
				return {
					x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
					y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
				};
			},
			draw: function() {
	
				var ctx = this._chart.ctx,
					vm = this._view,
					sA = vm.startAngle,
					eA = vm.endAngle;
	
				ctx.beginPath();
	
				ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
				ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
	
				ctx.closePath();
				ctx.strokeStyle = vm.borderColor;
				ctx.lineWidth = vm.borderWidth;
	
				ctx.fillStyle = vm.backgroundColor;
	
				ctx.fill();
				ctx.lineJoin = 'bevel';
	
				if (vm.borderWidth) {
					ctx.stroke();
				}
			}
		});
	};


/***/ },
/* 378 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var globalDefaults = Chart.defaults.global;
	
		Chart.defaults.global.elements.line = {
			tension: 0.4,
			backgroundColor: globalDefaults.defaultColor,
			borderWidth: 3,
			borderColor: globalDefaults.defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		};
	
		Chart.elements.Line = Chart.Element.extend({
			draw: function() {
				var me = this;
				var vm = me._view;
				var spanGaps = vm.spanGaps;
				var fillPoint = vm.scaleZero;
				var loop = me._loop;
	
				// Handle different fill modes for cartesian lines
				if (!loop) {
					if (vm.fill === 'top') {
						fillPoint = vm.scaleTop;
					} else if (vm.fill === 'bottom') {
						fillPoint = vm.scaleBottom;
					}
				}
	
				var ctx = me._chart.ctx;
				ctx.save();
	
				// Helper function to draw a line to a point
				function lineToPoint(previousPoint, point) {
					var pointVM = point._view;
					if (point._view.steppedLine === true) {
						ctx.lineTo(pointVM.x, previousPoint._view.y);
						ctx.lineTo(pointVM.x, pointVM.y);
					} else if (point._view.tension === 0) {
						ctx.lineTo(pointVM.x, pointVM.y);
					} else {
						ctx.bezierCurveTo(
							previousPoint._view.controlPointNextX,
							previousPoint._view.controlPointNextY,
							pointVM.controlPointPreviousX,
							pointVM.controlPointPreviousY,
							pointVM.x,
							pointVM.y
						);
					}
				}
	
				var points = me._children.slice(); // clone array
				var lastDrawnIndex = -1;
	
				// If we are looping, adding the first point again
				if (loop && points.length) {
					points.push(points[0]);
				}
	
				var index, current, previous, currentVM;
	
				// Fill Line
				if (points.length && vm.fill) {
					ctx.beginPath();
	
					for (index = 0; index < points.length; ++index) {
						current = points[index];
						previous = helpers.previousItem(points, index);
						currentVM = current._view;
	
						// First point moves to it's starting position no matter what
						if (index === 0) {
							if (loop) {
								ctx.moveTo(fillPoint.x, fillPoint.y);
							} else {
								ctx.moveTo(currentVM.x, fillPoint);
							}
	
							if (!currentVM.skip) {
								lastDrawnIndex = index;
								ctx.lineTo(currentVM.x, currentVM.y);
							}
						} else {
							previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];
	
							if (currentVM.skip) {
								// Only do this if this is the first point that is skipped
								if (!spanGaps && lastDrawnIndex === (index - 1)) {
									if (loop) {
										ctx.lineTo(fillPoint.x, fillPoint.y);
									} else {
										ctx.lineTo(previous._view.x, fillPoint);
									}
								}
							} else {
								if (lastDrawnIndex !== (index - 1)) {
									// There was a gap and this is the first point after the gap. If we've never drawn a point, this is a special case.
									// If the first data point is NaN, then there is no real gap to skip
									if (spanGaps && lastDrawnIndex !== -1) {
										// We are spanning the gap, so simple draw a line to this point
										lineToPoint(previous, current);
									} else if (loop) {
										ctx.lineTo(currentVM.x, currentVM.y);
									} else {
										ctx.lineTo(currentVM.x, fillPoint);
										ctx.lineTo(currentVM.x, currentVM.y);
									}
								} else {
									// Line to next point
									lineToPoint(previous, current);
								}
								lastDrawnIndex = index;
							}
						}
					}
	
					if (!loop && lastDrawnIndex !== -1) {
						ctx.lineTo(points[lastDrawnIndex]._view.x, fillPoint);
					}
	
					ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
					ctx.closePath();
					ctx.fill();
				}
	
				// Stroke Line Options
				var globalOptionLineElements = globalDefaults.elements.line;
				ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;
	
				// IE 9 and 10 do not support line dash
				if (ctx.setLineDash) {
					ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
				}
	
				ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
				ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
				ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
				ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
	
				// Stroke Line
				ctx.beginPath();
				lastDrawnIndex = -1;
	
				for (index = 0; index < points.length; ++index) {
					current = points[index];
					previous = helpers.previousItem(points, index);
					currentVM = current._view;
	
					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (!currentVM.skip) {
							ctx.moveTo(currentVM.x, currentVM.y);
							lastDrawnIndex = index;
						}
					} else {
						previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];
	
						if (!currentVM.skip) {
							if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
								// There was a gap and this is the first point after the gap
								ctx.moveTo(currentVM.x, currentVM.y);
							} else {
								// Line to next point
								lineToPoint(previous, current);
							}
							lastDrawnIndex = index;
						}
					}
				}
	
				ctx.stroke();
				ctx.restore();
			}
		});
	};


/***/ },
/* 379 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			globalOpts = Chart.defaults.global,
			defaultColor = globalOpts.defaultColor;
	
		globalOpts.elements.point = {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor,
			borderWidth: 1,
			borderColor: defaultColor,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		};
	
		function xRange(mouseX) {
			var vm = this._view;
			return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
		}
	
		function yRange(mouseY) {
			var vm = this._view;
			return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
		}
	
		Chart.elements.Point = Chart.Element.extend({
			inRange: function(mouseX, mouseY) {
				var vm = this._view;
				return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
			},
	
			inLabelRange: xRange,
			inXRange: xRange,
			inYRange: yRange,
	
			getCenterPoint: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y
				};
			},
			getArea: function() {
				return Math.PI * Math.pow(this._view.radius, 2);
			},
			tooltipPosition: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y,
					padding: vm.radius + vm.borderWidth
				};
			},
			draw: function(chartArea) {
				var vm = this._view;
				var model = this._model;
				var ctx = this._chart.ctx;
				var pointStyle = vm.pointStyle;
				var radius = vm.radius;
				var x = vm.x;
				var y = vm.y;
				var color = Chart.helpers.color;
				var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
				var ratio = 0;
	
				if (vm.skip) {
					return;
				}
	
				ctx.strokeStyle = vm.borderColor || defaultColor;
				ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
				ctx.fillStyle = vm.backgroundColor || defaultColor;
	
				// Cliping for Points.
				// going out from inner charArea?
				if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right*errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom*errMargin < model.y))) {
					// Point fade out
					if (model.x < chartArea.left) {
						ratio = (x - model.x) / (chartArea.left - model.x);
					} else if (chartArea.right*errMargin < model.x) {
						ratio = (model.x - x) / (model.x - chartArea.right);
					} else if (model.y < chartArea.top) {
						ratio = (y - model.y) / (chartArea.top - model.y);
					} else if (chartArea.bottom*errMargin < model.y) {
						ratio = (model.y - y) / (model.y - chartArea.bottom);
					}
					ratio = Math.round(ratio*100) / 100;
					ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
					ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
				}
	
				Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
			}
		});
	};


/***/ },
/* 380 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var globalOpts = Chart.defaults.global;
	
		globalOpts.elements.rectangle = {
			backgroundColor: globalOpts.defaultColor,
			borderWidth: 0,
			borderColor: globalOpts.defaultColor,
			borderSkipped: 'bottom'
		};
	
		function isVertical(bar) {
			return bar._view.width !== undefined;
		}
	
		/**
		 * Helper function to get the bounds of the bar regardless of the orientation
		 * @private
		 * @param bar {Chart.Element.Rectangle} the bar
		 * @return {Bounds} bounds of the bar
		 */
		function getBarBounds(bar) {
			var vm = bar._view;
			var x1, x2, y1, y2;
	
			if (isVertical(bar)) {
				// vertical
				var halfWidth = vm.width / 2;
				x1 = vm.x - halfWidth;
				x2 = vm.x + halfWidth;
				y1 = Math.min(vm.y, vm.base);
				y2 = Math.max(vm.y, vm.base);
			} else {
				// horizontal bar
				var halfHeight = vm.height / 2;
				x1 = Math.min(vm.x, vm.base);
				x2 = Math.max(vm.x, vm.base);
				y1 = vm.y - halfHeight;
				y2 = vm.y + halfHeight;
			}
	
			return {
				left: x1,
				top: y1,
				right: x2,
				bottom: y2
			};
		}
	
		Chart.elements.Rectangle = Chart.Element.extend({
			draw: function() {
				var ctx = this._chart.ctx;
				var vm = this._view;
				var left, right, top, bottom, signX, signY, borderSkipped;
				var borderWidth = vm.borderWidth;
	
				if (!vm.horizontal) {
					// bar
					left = vm.x - vm.width / 2;
					right = vm.x + vm.width / 2;
					top = vm.y;
					bottom = vm.base;
					signX = 1;
					signY = bottom > top? 1: -1;
					borderSkipped = vm.borderSkipped || 'bottom';
				} else {
					// horizontal bar
					left = vm.base;
					right = vm.x;
					top = vm.y - vm.height / 2;
					bottom = vm.y + vm.height / 2;
					signX = right > left? 1: -1;
					signY = 1;
					borderSkipped = vm.borderSkipped || 'left';
				}
	
				// Canvas doesn't allow us to stroke inside the width so we can
				// adjust the sizes to fit if we're setting a stroke on the line
				if (borderWidth) {
					// borderWidth shold be less than bar width and bar height.
					var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
					borderWidth = borderWidth > barSize? barSize: borderWidth;
					var halfStroke = borderWidth / 2;
					// Adjust borderWidth when bar top position is near vm.base(zero).
					var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
					var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
					var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
					var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
					// not become a vertical line?
					if (borderLeft !== borderRight) {
						top = borderTop;
						bottom = borderBottom;
					}
					// not become a horizontal line?
					if (borderTop !== borderBottom) {
						left = borderLeft;
						right = borderRight;
					}
				}
	
				ctx.beginPath();
				ctx.fillStyle = vm.backgroundColor;
				ctx.strokeStyle = vm.borderColor;
				ctx.lineWidth = borderWidth;
	
				// Corner points, from bottom-left to bottom-right clockwise
				// | 1 2 |
				// | 0 3 |
				var corners = [
					[left, bottom],
					[left, top],
					[right, top],
					[right, bottom]
				];
	
				// Find first (starting) corner with fallback to 'bottom'
				var borders = ['bottom', 'left', 'top', 'right'];
				var startCorner = borders.indexOf(borderSkipped, 0);
				if (startCorner === -1) {
					startCorner = 0;
				}
	
				function cornerAt(index) {
					return corners[(startCorner + index) % 4];
				}
	
				// Draw rectangle from 'startCorner'
				var corner = cornerAt(0);
				ctx.moveTo(corner[0], corner[1]);
	
				for (var i = 1; i < 4; i++) {
					corner = cornerAt(i);
					ctx.lineTo(corner[0], corner[1]);
				}
	
				ctx.fill();
				if (borderWidth) {
					ctx.stroke();
				}
			},
			height: function() {
				var vm = this._view;
				return vm.base - vm.y;
			},
			inRange: function(mouseX, mouseY) {
				var inRange = false;
	
				if (this._view) {
					var bounds = getBarBounds(this);
					inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
				}
	
				return inRange;
			},
			inLabelRange: function(mouseX, mouseY) {
				var me = this;
				if (!me._view) {
					return false;
				}
	
				var inRange = false;
				var bounds = getBarBounds(me);
	
				if (isVertical(me)) {
					inRange = mouseX >= bounds.left && mouseX <= bounds.right;
				} else {
					inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
				}
	
				return inRange;
			},
			inXRange: function(mouseX) {
				var bounds = getBarBounds(this);
				return mouseX >= bounds.left && mouseX <= bounds.right;
			},
			inYRange: function(mouseY) {
				var bounds = getBarBounds(this);
				return mouseY >= bounds.top && mouseY <= bounds.bottom;
			},
			getCenterPoint: function() {
				var vm = this._view;
				var x, y;
				if (isVertical(this)) {
					x = vm.x;
					y = (vm.y + vm.base) / 2;
				} else {
					x = (vm.x + vm.base) / 2;
					y = vm.y;
				}
	
				return {x: x, y: y};
			},
			getArea: function() {
				var vm = this._view;
				return vm.width * Math.abs(vm.y - vm.base);
			},
			tooltipPosition: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y
				};
			}
		});
	
	};


/***/ },
/* 381 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			noop = helpers.noop;
	
		Chart.LinearScaleBase = Chart.Scale.extend({
			handleTickRangeOptions: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
				// do nothing since that would make the chart weird. If the user really wants a weird chart
				// axis, they can manually override it
				if (tickOpts.beginAtZero) {
					var minSign = helpers.sign(me.min);
					var maxSign = helpers.sign(me.max);
	
					if (minSign < 0 && maxSign < 0) {
						// move the top up to 0
						me.max = 0;
					} else if (minSign > 0 && maxSign > 0) {
						// move the bottom down to 0
						me.min = 0;
					}
				}
	
				if (tickOpts.min !== undefined) {
					me.min = tickOpts.min;
				} else if (tickOpts.suggestedMin !== undefined) {
					me.min = Math.min(me.min, tickOpts.suggestedMin);
				}
	
				if (tickOpts.max !== undefined) {
					me.max = tickOpts.max;
				} else if (tickOpts.suggestedMax !== undefined) {
					me.max = Math.max(me.max, tickOpts.suggestedMax);
				}
	
				if (me.min === me.max) {
					me.max++;
	
					if (!tickOpts.beginAtZero) {
						me.min--;
					}
				}
			},
			getTickLimit: noop,
			handleDirectionalChanges: noop,
	
			buildTicks: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				// Figure out what the max number of ticks we can support it is based on the size of
				// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
				// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
				// the graph. Make sure we always have at least 2 ticks
				var maxTicks = me.getTickLimit();
				maxTicks = Math.max(2, maxTicks);
	
				var numericGeneratorOptions = {
					maxTicks: maxTicks,
					min: tickOpts.min,
					max: tickOpts.max,
					stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
				};
				var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);
	
				me.handleDirectionalChanges();
	
				// At this point, we need to update our max and min given the tick values since we have expanded the
				// range of the scale
				me.max = helpers.max(ticks);
				me.min = helpers.min(ticks);
	
				if (tickOpts.reverse) {
					ticks.reverse();
	
					me.start = me.max;
					me.end = me.min;
				} else {
					me.start = me.min;
					me.end = me.max;
				}
			},
			convertTicksToLabels: function() {
				var me = this;
				me.ticksAsNumbers = me.ticks.slice();
				me.zeroLineIndex = me.ticks.indexOf(0);
	
				Chart.Scale.prototype.convertTicksToLabels.call(me);
			}
		});
	};


/***/ },
/* 382 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		// Default config for a category scale
		var defaultConfig = {
			position: 'bottom'
		};
	
		var DatasetScale = Chart.Scale.extend({
			/**
			* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
			* else fall back to data.labels
			* @private
			*/
			getLabels: function() {
				var data = this.chart.data;
				return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
			},
			// Implement this so that
			determineDataLimits: function() {
				var me = this;
				var labels = me.getLabels();
				me.minIndex = 0;
				me.maxIndex = labels.length - 1;
				var findIndex;
	
				if (me.options.ticks.min !== undefined) {
					// user specified min value
					findIndex = helpers.indexOf(labels, me.options.ticks.min);
					me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
				}
	
				if (me.options.ticks.max !== undefined) {
					// user specified max value
					findIndex = helpers.indexOf(labels, me.options.ticks.max);
					me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
				}
	
				me.min = labels[me.minIndex];
				me.max = labels[me.maxIndex];
			},
	
			buildTicks: function() {
				var me = this;
				var labels = me.getLabels();
				// If we are viewing some subset of labels, slice the original array
				me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
			},
	
			getLabelForIndex: function(index, datasetIndex) {
				var me = this;
				var data = me.chart.data;
				var isHorizontal = me.isHorizontal();
	
				if (data.yLabels && !isHorizontal) {
					return me.getRightValue(data.datasets[datasetIndex].data[index]);
				}
				return me.ticks[index - me.minIndex];
			},
	
			// Used to get data value locations.  Value can either be an index or a numerical value
			getPixelForValue: function(value, index, datasetIndex, includeOffset) {
				var me = this;
				// 1 is added because we need the length but we have the indexes
				var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
	
				if (value !== undefined && isNaN(index)) {
					var labels = me.getLabels();
					var idx = labels.indexOf(value);
					index = idx !== -1 ? idx : index;
				}
	
				if (me.isHorizontal()) {
					var valueWidth = me.width / offsetAmt;
					var widthOffset = (valueWidth * (index - me.minIndex));
	
					if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
						widthOffset += (valueWidth / 2);
					}
	
					return me.left + Math.round(widthOffset);
				}
				var valueHeight = me.height / offsetAmt;
				var heightOffset = (valueHeight * (index - me.minIndex));
	
				if (me.options.gridLines.offsetGridLines && includeOffset) {
					heightOffset += (valueHeight / 2);
				}
	
				return me.top + Math.round(heightOffset);
			},
			getPixelForTick: function(index, includeOffset) {
				return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var value;
				var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var horz = me.isHorizontal();
				var valueDimension = (horz ? me.width : me.height) / offsetAmt;
	
				pixel -= horz ? me.left : me.top;
	
				if (me.options.gridLines.offsetGridLines) {
					pixel -= (valueDimension / 2);
				}
	
				if (pixel <= 0) {
					value = 0;
				} else {
					value = Math.round(pixel / valueDimension);
				}
	
				return value;
			},
			getBasePixel: function() {
				return this.bottom;
			}
		});
	
		Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);
	
	};


/***/ },
/* 383 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var defaultConfig = {
			position: 'left',
			ticks: {
				callback: Chart.Ticks.formatters.linear
			}
		};
	
		var LinearScale = Chart.LinearScaleBase.extend({
			determineDataLimits: function() {
				var me = this;
				var opts = me.options;
				var chart = me.chart;
				var data = chart.data;
				var datasets = data.datasets;
				var isHorizontal = me.isHorizontal();
	
				function IDMatches(meta) {
					return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
				}
	
				// First Calculate the range
				me.min = null;
				me.max = null;
	
				var hasStacks = opts.stacked;
				if (hasStacks === undefined) {
					helpers.each(datasets, function(dataset, datasetIndex) {
						if (hasStacks) {
							return;
						}
	
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
							meta.stack !== undefined) {
							hasStacks = true;
						}
					});
				}
	
				if (opts.stacked || hasStacks) {
					var valuesPerStack = {};
	
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						var key = [
							meta.type,
							// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
							((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
							meta.stack
						].join('.');
	
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = {
								positiveValues: [],
								negativeValues: []
							};
						}
	
						// Store these per type
						var positiveValues = valuesPerStack[key].positiveValues;
						var negativeValues = valuesPerStack[key].negativeValues;
	
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								positiveValues[index] = positiveValues[index] || 0;
								negativeValues[index] = negativeValues[index] || 0;
	
								if (opts.relativePoints) {
									positiveValues[index] = 100;
								} else if (value < 0) {
									negativeValues[index] += value;
								} else {
									positiveValues[index] += value;
								}
							});
						}
					});
	
					helpers.each(valuesPerStack, function(valuesForType) {
						var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
						var minVal = helpers.min(values);
						var maxVal = helpers.max(values);
						me.min = me.min === null ? minVal : Math.min(me.min, minVal);
						me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
					});
	
				} else {
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								if (me.min === null) {
									me.min = value;
								} else if (value < me.min) {
									me.min = value;
								}
	
								if (me.max === null) {
									me.max = value;
								} else if (value > me.max) {
									me.max = value;
								}
							});
						}
					});
				}
	
				// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
				this.handleTickRangeOptions();
			},
			getTickLimit: function() {
				var maxTicks;
				var me = this;
				var tickOpts = me.options.ticks;
	
				if (me.isHorizontal()) {
					maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
				} else {
					// The factor of 2 used to scale the font size has been experimentally determined.
					var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
					maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
				}
	
				return maxTicks;
			},
			// Called after the ticks are built. We need
			handleDirectionalChanges: function() {
				if (!this.isHorizontal()) {
					// We are in a vertical orientation. The top value is the highest. So reverse the array
					this.ticks.reverse();
				}
			},
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			// Utils
			getPixelForValue: function(value) {
				// This must be called after fit has been run so that
				// this.left, this.top, this.right, and this.bottom have been defined
				var me = this;
				var start = me.start;
	
				var rightValue = +me.getRightValue(value);
				var pixel;
				var range = me.end - start;
	
				if (me.isHorizontal()) {
					pixel = me.left + (me.width / range * (rightValue - start));
					return Math.round(pixel);
				}
	
				pixel = me.bottom - (me.height / range * (rightValue - start));
				return Math.round(pixel);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var isHorizontal = me.isHorizontal();
				var innerDimension = isHorizontal ? me.width : me.height;
				var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
				return me.start + ((me.end - me.start) * offset);
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.ticksAsNumbers[index]);
			}
		});
		Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);
	
	};


/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var defaultConfig = {
			position: 'left',
	
			// label settings
			ticks: {
				callback: Chart.Ticks.formatters.logarithmic
			}
		};
	
		var LogarithmicScale = Chart.Scale.extend({
			determineDataLimits: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
				var chart = me.chart;
				var data = chart.data;
				var datasets = data.datasets;
				var getValueOrDefault = helpers.getValueOrDefault;
				var isHorizontal = me.isHorizontal();
				function IDMatches(meta) {
					return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
				}
	
				// Calculate Range
				me.min = null;
				me.max = null;
				me.minNotZero = null;
	
				var hasStacks = opts.stacked;
				if (hasStacks === undefined) {
					helpers.each(datasets, function(dataset, datasetIndex) {
						if (hasStacks) {
							return;
						}
	
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
							meta.stack !== undefined) {
							hasStacks = true;
						}
					});
				}
	
				if (opts.stacked || hasStacks) {
					var valuesPerStack = {};
	
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						var key = [
							meta.type,
							// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
							((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
							meta.stack
						].join('.');
	
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							if (valuesPerStack[key] === undefined) {
								valuesPerStack[key] = [];
							}
	
							helpers.each(dataset.data, function(rawValue, index) {
								var values = valuesPerStack[key];
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								values[index] = values[index] || 0;
	
								if (opts.relativePoints) {
									values[index] = 100;
								} else {
									// Don't need to split positive and negative since the log scale can't handle a 0 crossing
									values[index] += value;
								}
							});
						}
					});
	
					helpers.each(valuesPerStack, function(valuesForType) {
						var minVal = helpers.min(valuesForType);
						var maxVal = helpers.max(valuesForType);
						me.min = me.min === null ? minVal : Math.min(me.min, minVal);
						me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
					});
	
				} else {
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								if (me.min === null) {
									me.min = value;
								} else if (value < me.min) {
									me.min = value;
								}
	
								if (me.max === null) {
									me.max = value;
								} else if (value > me.max) {
									me.max = value;
								}
	
								if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
									me.minNotZero = value;
								}
							});
						}
					});
				}
	
				me.min = getValueOrDefault(tickOpts.min, me.min);
				me.max = getValueOrDefault(tickOpts.max, me.max);
	
				if (me.min === me.max) {
					if (me.min !== 0 && me.min !== null) {
						me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
						me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
					} else {
						me.min = 1;
						me.max = 10;
					}
				}
			},
			buildTicks: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				var generationOptions = {
					min: tickOpts.min,
					max: tickOpts.max
				};
				var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);
	
				if (!me.isHorizontal()) {
					// We are in a vertical orientation. The top value is the highest. So reverse the array
					ticks.reverse();
				}
	
				// At this point, we need to update our max and min given the tick values since we have expanded the
				// range of the scale
				me.max = helpers.max(ticks);
				me.min = helpers.min(ticks);
	
				if (tickOpts.reverse) {
					ticks.reverse();
	
					me.start = me.max;
					me.end = me.min;
				} else {
					me.start = me.min;
					me.end = me.max;
				}
			},
			convertTicksToLabels: function() {
				this.tickValues = this.ticks.slice();
	
				Chart.Scale.prototype.convertTicksToLabels.call(this);
			},
			// Get the correct tooltip label
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.tickValues[index]);
			},
			getPixelForValue: function(value) {
				var me = this;
				var innerDimension;
				var pixel;
	
				var start = me.start;
				var newVal = +me.getRightValue(value);
				var range;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				if (me.isHorizontal()) {
					range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
					if (newVal === 0) {
						pixel = me.left;
					} else {
						innerDimension = me.width;
						pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
					}
				} else {
					// Bottom - top since pixels increase downward on a screen
					innerDimension = me.height;
					if (start === 0 && !tickOpts.reverse) {
						range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
						if (newVal === start) {
							pixel = me.bottom;
						} else if (newVal === me.minNotZero) {
							pixel = me.bottom - innerDimension * 0.02;
						} else {
							pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
						}
					} else if (me.end === 0 && tickOpts.reverse) {
						range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
						if (newVal === me.end) {
							pixel = me.top;
						} else if (newVal === me.minNotZero) {
							pixel = me.top + innerDimension * 0.02;
						} else {
							pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
						}
					} else {
						range = helpers.log10(me.end) - helpers.log10(start);
						innerDimension = me.height;
						pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
					}
				}
				return pixel;
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var range = helpers.log10(me.end) - helpers.log10(me.start);
				var value, innerDimension;
	
				if (me.isHorizontal()) {
					innerDimension = me.width;
					value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
				} else {  // todo: if start === 0
					innerDimension = me.height;
					value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
				}
				return value;
			}
		});
		Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);
	
	};


/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var globalDefaults = Chart.defaults.global;
	
		var defaultConfig = {
			display: true,
	
			// Boolean - Whether to animate scaling the chart from the centre
			animate: true,
			lineArc: false,
			position: 'chartArea',
	
			angleLines: {
				display: true,
				color: 'rgba(0, 0, 0, 0.1)',
				lineWidth: 1
			},
	
			// label settings
			ticks: {
				// Boolean - Show a backdrop to the scale label
				showLabelBackdrop: true,
	
				// String - The colour of the label backdrop
				backdropColor: 'rgba(255,255,255,0.75)',
	
				// Number - The backdrop padding above & below the label in pixels
				backdropPaddingY: 2,
	
				// Number - The backdrop padding to the side of the label in pixels
				backdropPaddingX: 2,
	
				callback: Chart.Ticks.formatters.linear
			},
	
			pointLabels: {
				// Number - Point label font size in pixels
				fontSize: 10,
	
				// Function - Used to convert point labels
				callback: function(label) {
					return label;
				}
			}
		};
	
		function getValueCount(scale) {
			return !scale.options.lineArc ? scale.chart.data.labels.length : 0;
		}
	
		function getPointLabelFontOptions(scale) {
			var pointLabelOptions = scale.options.pointLabels;
			var fontSize = helpers.getValueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
			var fontStyle = helpers.getValueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
			var font = helpers.fontString(fontSize, fontStyle, fontFamily);
	
			return {
				size: fontSize,
				style: fontStyle,
				family: fontFamily,
				font: font
			};
		}
	
		function measureLabelSize(ctx, fontSize, label) {
			if (helpers.isArray(label)) {
				return {
					w: helpers.longestText(ctx, ctx.font, label),
					h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
				};
			}
	
			return {
				w: ctx.measureText(label).width,
				h: fontSize
			};
		}
	
		function determineLimits(angle, pos, size, min, max) {
			if (angle === min || angle === max) {
				return {
					start: pos - (size / 2),
					end: pos + (size / 2)
				};
			} else if (angle < min || angle > max) {
				return {
					start: pos - size - 5,
					end: pos
				};
			}
	
			return {
				start: pos,
				end: pos + size + 5
			};
		}
	
		/**
		 * Helper function to fit a radial linear scale with point labels
		 */
		function fitWithPointLabels(scale) {
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */
	
			var plFont = getPointLabelFontOptions(scale);
	
			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
			var furthestLimits = {
				l: scale.width,
				r: 0,
				t: scale.height,
				b: 0
			};
			var furthestAngles = {};
			var i;
			var textSize;
			var pointPosition;
	
			scale.ctx.font = plFont.font;
			scale._pointLabelSizes = [];
	
			var valueCount = getValueCount(scale);
			for (i = 0; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, largestPossibleRadius);
				textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
				scale._pointLabelSizes[i] = textSize;
	
				// Add quarter circle to make degree 0 mean top of circle
				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians) % 360;
				var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
				var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
	
				if (hLimits.start < furthestLimits.l) {
					furthestLimits.l = hLimits.start;
					furthestAngles.l = angleRadians;
				}
	
				if (hLimits.end > furthestLimits.r) {
					furthestLimits.r = hLimits.end;
					furthestAngles.r = angleRadians;
				}
	
				if (vLimits.start < furthestLimits.t) {
					furthestLimits.t = vLimits.start;
					furthestAngles.t = angleRadians;
				}
	
				if (vLimits.end > furthestLimits.b) {
					furthestLimits.b = vLimits.end;
					furthestAngles.b = angleRadians;
				}
			}
	
			scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
		}
	
		/**
		 * Helper function to fit a radial linear scale with no point labels
		 */
		function fit(scale) {
			var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
			scale.drawingArea = Math.round(largestPossibleRadius);
			scale.setCenterPoint(0, 0, 0, 0);
		}
	
		function getTextAlignForAngle(angle) {
			if (angle === 0 || angle === 180) {
				return 'center';
			} else if (angle < 180) {
				return 'left';
			}
	
			return 'right';
		}
	
		function fillText(ctx, text, position, fontSize) {
			if (helpers.isArray(text)) {
				var y = position.y;
				var spacing = 1.5 * fontSize;
	
				for (var i = 0; i < text.length; ++i) {
					ctx.fillText(text[i], position.x, y);
					y+= spacing;
				}
			} else {
				ctx.fillText(text, position.x, position.y);
			}
		}
	
		function adjustPointPositionForLabelHeight(angle, textSize, position) {
			if (angle === 90 || angle === 270) {
				position.y -= (textSize.h / 2);
			} else if (angle > 270 || angle < 90) {
				position.y -= textSize.h;
			}
		}
	
		function drawPointLabels(scale) {
			var ctx = scale.ctx;
			var getValueOrDefault = helpers.getValueOrDefault;
			var opts = scale.options;
			var angleLineOpts = opts.angleLines;
			var pointLabelOpts = opts.pointLabels;
	
			ctx.lineWidth = angleLineOpts.lineWidth;
			ctx.strokeStyle = angleLineOpts.color;
	
			var outerDistance = scale.getDistanceFromCenterForValue(opts.reverse ? scale.min : scale.max);
	
			// Point Label Font
			var plFont = getPointLabelFontOptions(scale);
	
			ctx.textBaseline = 'top';
	
			for (var i = getValueCount(scale) - 1; i >= 0; i--) {
				if (angleLineOpts.display) {
					var outerPosition = scale.getPointPosition(i, outerDistance);
					ctx.beginPath();
					ctx.moveTo(scale.xCenter, scale.yCenter);
					ctx.lineTo(outerPosition.x, outerPosition.y);
					ctx.stroke();
					ctx.closePath();
				}
				// Extra 3px out for some label spacing
				var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);
	
				// Keep this in loop since we may support array properties here
				var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
				ctx.font = plFont.font;
				ctx.fillStyle = pointLabelFontColor;
	
				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians);
				ctx.textAlign = getTextAlignForAngle(angle);
				adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
				fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
			}
		}
	
		function drawRadiusLine(scale, gridLineOpts, radius, index) {
			var ctx = scale.ctx;
			ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
			ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);
	
			if (scale.options.lineArc) {
				// Draw circular arcs between the points
				ctx.beginPath();
				ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.stroke();
			} else {
				// Draw straight lines connecting each index
				var valueCount = getValueCount(scale);
	
				if (valueCount === 0) {
					return;
				}
	
				ctx.beginPath();
				var pointPosition = scale.getPointPosition(0, radius);
				ctx.moveTo(pointPosition.x, pointPosition.y);
	
				for (var i = 1; i < valueCount; i++) {
					pointPosition = scale.getPointPosition(i, radius);
					ctx.lineTo(pointPosition.x, pointPosition.y);
				}
	
				ctx.closePath();
				ctx.stroke();
			}
		}
	
		function numberOrZero(param) {
			return helpers.isNumber(param) ? param : 0;
		}
	
		var LinearRadialScale = Chart.LinearScaleBase.extend({
			setDimensions: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
				// Set the unconstrained dimension before label rotation
				me.width = me.maxWidth;
				me.height = me.maxHeight;
				me.xCenter = Math.round(me.width / 2);
				me.yCenter = Math.round(me.height / 2);
	
				var minSize = helpers.min([me.height, me.width]);
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
			},
			determineDataLimits: function() {
				var me = this;
				var chart = me.chart;
				var min = Number.POSITIVE_INFINITY;
				var max = Number.NEGATIVE_INFINITY;
	
				helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
					if (chart.isDatasetVisible(datasetIndex)) {
						var meta = chart.getDatasetMeta(datasetIndex);
	
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}
	
							min = Math.min(value, min);
							max = Math.max(value, max);
						});
					}
				});
	
				me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
				me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);
	
				// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
				me.handleTickRangeOptions();
			},
			getTickLimit: function() {
				var tickOpts = this.options.ticks;
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
			},
			convertTicksToLabels: function() {
				var me = this;
				Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);
	
				// Point labels
				me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
			},
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			fit: function() {
				if (this.options.lineArc) {
					fit(this);
				} else {
					fitWithPointLabels(this);
				}
			},
			/**
			 * Set radius reductions and determine new radius and center point
			 * @private
			 */
			setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
				var me = this;
				var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
				var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
				var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
				var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);
	
				radiusReductionLeft = numberOrZero(radiusReductionLeft);
				radiusReductionRight = numberOrZero(radiusReductionRight);
				radiusReductionTop = numberOrZero(radiusReductionTop);
				radiusReductionBottom = numberOrZero(radiusReductionBottom);
	
				me.drawingArea = Math.min(
					Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
					Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
				me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
			},
			setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
				var me = this;
				var maxRight = me.width - rightMovement - me.drawingArea,
					maxLeft = leftMovement + me.drawingArea,
					maxTop = topMovement + me.drawingArea,
					maxBottom = me.height - bottomMovement - me.drawingArea;
	
				me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
				me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
			},
	
			getIndexAngle: function(index) {
				var angleMultiplier = (Math.PI * 2) / getValueCount(this);
				var startAngle = this.chart.options && this.chart.options.startAngle ?
					this.chart.options.startAngle :
					0;
	
				var startAngleRadians = startAngle * Math.PI * 2 / 360;
	
				// Start from the top instead of right, so remove a quarter of the circle
				return index * angleMultiplier + startAngleRadians;
			},
			getDistanceFromCenterForValue: function(value) {
				var me = this;
	
				if (value === null) {
					return 0; // null always in center
				}
	
				// Take into account half font size + the yPadding of the top value
				var scalingFactor = me.drawingArea / (me.max - me.min);
				if (me.options.reverse) {
					return (me.max - value) * scalingFactor;
				}
				return (value - me.min) * scalingFactor;
			},
			getPointPosition: function(index, distanceFromCenter) {
				var me = this;
				var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
				return {
					x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
					y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
				};
			},
			getPointPositionForValue: function(index, value) {
				return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
			},
	
			getBasePosition: function() {
				var me = this;
				var min = me.min;
				var max = me.max;
	
				return me.getPointPositionForValue(0,
					me.beginAtZero? 0:
					min < 0 && max < 0? max :
					min > 0 && max > 0? min :
					0);
			},
	
			draw: function() {
				var me = this;
				var opts = me.options;
				var gridLineOpts = opts.gridLines;
				var tickOpts = opts.ticks;
				var getValueOrDefault = helpers.getValueOrDefault;
	
				if (opts.display) {
					var ctx = me.ctx;
	
					// Tick Font
					var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
					var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
					var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
					var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	
					helpers.each(me.ticks, function(label, index) {
						// Don't draw a centre value (if it is minimum)
						if (index > 0 || opts.reverse) {
							var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
							var yHeight = me.yCenter - yCenterOffset;
	
							// Draw circular lines around the scale
							if (gridLineOpts.display && index !== 0) {
								drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
							}
	
							if (tickOpts.display) {
								var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
								ctx.font = tickLabelFont;
	
								if (tickOpts.showLabelBackdrop) {
									var labelWidth = ctx.measureText(label).width;
									ctx.fillStyle = tickOpts.backdropColor;
									ctx.fillRect(
										me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
										yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
										labelWidth + tickOpts.backdropPaddingX * 2,
										tickFontSize + tickOpts.backdropPaddingY * 2
									);
								}
	
								ctx.textAlign = 'center';
								ctx.textBaseline = 'middle';
								ctx.fillStyle = tickFontColor;
								ctx.fillText(label, me.xCenter, yHeight);
							}
						}
					});
	
					if (!opts.lineArc) {
						drawPointLabels(me);
					}
				}
			}
		});
		Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);
	
	};


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* global window: false */
	'use strict';
	
	var moment = __webpack_require__(20);
	moment = typeof(moment) === 'function' ? moment : window.moment;
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var time = {
			units: [{
				name: 'millisecond',
				steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
			}, {
				name: 'second',
				steps: [1, 2, 5, 10, 30]
			}, {
				name: 'minute',
				steps: [1, 2, 5, 10, 30]
			}, {
				name: 'hour',
				steps: [1, 2, 3, 6, 12]
			}, {
				name: 'day',
				steps: [1, 2, 5]
			}, {
				name: 'week',
				maxStep: 4
			}, {
				name: 'month',
				maxStep: 3
			}, {
				name: 'quarter',
				maxStep: 4
			}, {
				name: 'year',
				maxStep: false
			}]
		};
	
		var defaultConfig = {
			position: 'bottom',
	
			time: {
				parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
				format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
				unit: false, // false == automatic or override with week, month, year, etc.
				round: false, // none, or override with week, month, year, etc.
				displayFormat: false, // DEPRECATED
				isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
				minUnit: 'millisecond',
	
				// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
				displayFormats: {
					millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
					second: 'h:mm:ss a', // 11:20:01 AM
					minute: 'h:mm:ss a', // 11:20:01 AM
					hour: 'MMM D, hA', // Sept 4, 5PM
					day: 'll', // Sep 4 2015
					week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
					month: 'MMM YYYY', // Sept 2015
					quarter: '[Q]Q - YYYY', // Q3
					year: 'YYYY' // 2015
				}
			},
			ticks: {
				autoSkip: false
			}
		};
	
		var TimeScale = Chart.Scale.extend({
			initialize: function() {
				if (!moment) {
					throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
				}
	
				Chart.Scale.prototype.initialize.call(this);
			},
			getLabelMoment: function(datasetIndex, index) {
				if (datasetIndex === null || index === null) {
					return null;
				}
	
				if (typeof this.labelMoments[datasetIndex] !== 'undefined') {
					return this.labelMoments[datasetIndex][index];
				}
	
				return null;
			},
			getLabelDiff: function(datasetIndex, index) {
				var me = this;
				if (datasetIndex === null || index === null) {
					return null;
				}
	
				if (me.labelDiffs === undefined) {
					me.buildLabelDiffs();
				}
	
				if (typeof me.labelDiffs[datasetIndex] !== 'undefined') {
					return me.labelDiffs[datasetIndex][index];
				}
	
				return null;
			},
			getMomentStartOf: function(tick) {
				var me = this;
				if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
					return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
				}
				return tick.clone().startOf(me.tickUnit);
			},
			determineDataLimits: function() {
				var me = this;
				me.labelMoments = [];
	
				// Only parse these once. If the dataset does not have data as x,y pairs, we will use
				// these
				var scaleLabelMoments = [];
				if (me.chart.data.labels && me.chart.data.labels.length > 0) {
					helpers.each(me.chart.data.labels, function(label) {
						var labelMoment = me.parseTime(label);
	
						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							scaleLabelMoments.push(labelMoment);
						}
					}, me);
	
					me.firstTick = moment.min.call(me, scaleLabelMoments);
					me.lastTick = moment.max.call(me, scaleLabelMoments);
				} else {
					me.firstTick = null;
					me.lastTick = null;
				}
	
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var momentsForDataset = [];
					var datasetVisible = me.chart.isDatasetVisible(datasetIndex);
	
					if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
						helpers.each(dataset.data, function(value) {
							var labelMoment = me.parseTime(me.getRightValue(value));
	
							if (labelMoment.isValid()) {
								if (me.options.time.round) {
									labelMoment.startOf(me.options.time.round);
								}
								momentsForDataset.push(labelMoment);
	
								if (datasetVisible) {
									// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
									me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
									me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
								}
							}
						}, me);
					} else {
						// We have no labels. Use the ones from the scale
						momentsForDataset = scaleLabelMoments;
					}
	
					me.labelMoments.push(momentsForDataset);
				}, me);
	
				// Set these after we've done all the data
				if (me.options.time.min) {
					me.firstTick = me.parseTime(me.options.time.min);
				}
	
				if (me.options.time.max) {
					me.lastTick = me.parseTime(me.options.time.max);
				}
	
				// We will modify these, so clone for later
				me.firstTick = (me.firstTick || moment()).clone();
				me.lastTick = (me.lastTick || moment()).clone();
			},
			buildLabelDiffs: function() {
				var me = this;
				me.labelDiffs = [];
				var scaleLabelDiffs = [];
				// Parse common labels once
				if (me.chart.data.labels && me.chart.data.labels.length > 0) {
					helpers.each(me.chart.data.labels, function(label) {
						var labelMoment = me.parseTime(label);
	
						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
						}
					}, me);
				}
	
				helpers.each(me.chart.data.datasets, function(dataset) {
					var diffsForDataset = [];
	
					if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
						helpers.each(dataset.data, function(value) {
							var labelMoment = me.parseTime(me.getRightValue(value));
	
							if (labelMoment.isValid()) {
								if (me.options.time.round) {
									labelMoment.startOf(me.options.time.round);
								}
								diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
							}
						}, me);
					} else {
						// We have no labels. Use common ones
						diffsForDataset = scaleLabelDiffs;
					}
	
					me.labelDiffs.push(diffsForDataset);
				}, me);
			},
			buildTicks: function() {
				var me = this;
	
				me.ctx.save();
				var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
				var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
				var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
				me.ctx.font = tickLabelFont;
	
				me.ticks = [];
				me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
				me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)
	
				// Set unit override if applicable
				if (me.options.time.unit) {
					me.tickUnit = me.options.time.unit || 'day';
					me.displayFormat = me.options.time.displayFormats[me.tickUnit];
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
				} else {
					// Determine the smallest needed unit of the time
					var innerWidth = me.isHorizontal() ? me.width : me.height;
	
					// Crude approximation of what the label length might be
					var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
					var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
					var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
					var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
					tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
					var labelCapacity = innerWidth / (tickLabelWidth);
	
					// Start as small as possible
					me.tickUnit = me.options.time.minUnit;
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					me.displayFormat = me.options.time.displayFormats[me.tickUnit];
	
					var unitDefinitionIndex = 0;
					var unitDefinition = time.units[unitDefinitionIndex];
	
					// While we aren't ideal and we don't have units left
					while (unitDefinitionIndex < time.units.length) {
						// Can we scale this unit. If `false` we can scale infinitely
						me.unitScale = 1;
	
						if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
							// Use one of the predefined steps
							for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
								if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
									me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
									break;
								}
							}
	
							break;
						} else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
							// We have a max step. Scale this unit
							me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
							break;
						} else {
							// Move to the next unit up
							++unitDefinitionIndex;
							unitDefinition = time.units[unitDefinitionIndex];
	
							me.tickUnit = unitDefinition.name;
							var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
							var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
							me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
							me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
						}
					}
				}
	
				var roundedStart;
	
				// Only round the first tick if we have no hard minimum
				if (!me.options.time.min) {
					me.firstTick = me.getMomentStartOf(me.firstTick);
					roundedStart = me.firstTick;
				} else {
					roundedStart = me.getMomentStartOf(me.firstTick);
				}
	
				// Only round the last tick if we have no hard maximum
				if (!me.options.time.max) {
					var roundedEnd = me.getMomentStartOf(me.lastTick);
					var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
					if (delta < 0) {
						// Do not use end of because we need me to be in the next time unit
						me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
					} else if (delta >= 0) {
						me.lastTick = roundedEnd;
					}
	
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				}
	
				// Tick displayFormat override
				if (me.options.time.displayFormat) {
					me.displayFormat = me.options.time.displayFormat;
				}
	
				// first tick. will have been rounded correctly if options.time.min is not specified
				me.ticks.push(me.firstTick.clone());
	
				// For every unit in between the first and last moment, create a moment and add it to the ticks tick
				for (var i = me.unitScale; i <= me.scaleSizeInUnits; i += me.unitScale) {
					var newTick = roundedStart.clone().add(i, me.tickUnit);
	
					// Are we greater than the max time
					if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
						break;
					}
	
					me.ticks.push(newTick);
				}
	
				// Always show the right tick
				var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
				if (diff !== 0 || me.scaleSizeInUnits === 0) {
					// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
					// but the last tick was not rounded.
					if (me.options.time.max) {
						me.ticks.push(me.lastTick.clone());
						me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
					} else {
						me.ticks.push(me.lastTick.clone());
						me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					}
				}
	
				me.ctx.restore();
	
				// Invalidate label diffs cache
				me.labelDiffs = undefined;
			},
			// Get tooltip label
			getLabelForIndex: function(index, datasetIndex) {
				var me = this;
				var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';
				var value = me.chart.data.datasets[datasetIndex].data[index];
	
				if (value !== null && typeof value === 'object') {
					label = me.getRightValue(value);
				}
	
				// Format nicely
				if (me.options.time.tooltipFormat) {
					label = me.parseTime(label).format(me.options.time.tooltipFormat);
				}
	
				return label;
			},
			// Function to format an individual tick mark
			tickFormatFunction: function(tick, index, ticks) {
				var formattedTick = tick.format(this.displayFormat);
				var tickOpts = this.options.ticks;
				var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);
	
				if (callback) {
					return callback(formattedTick, index, ticks);
				}
				return formattedTick;
			},
			convertTicksToLabels: function() {
				var me = this;
				me.tickMoments = me.ticks;
				me.ticks = me.ticks.map(me.tickFormatFunction, me);
			},
			getPixelForValue: function(value, index, datasetIndex) {
				var me = this;
				var offset = null;
				if (index !== undefined && datasetIndex !== undefined) {
					offset = me.getLabelDiff(datasetIndex, index);
				}
	
				if (offset === null) {
					if (!value || !value.isValid) {
						// not already a moment object
						value = me.parseTime(me.getRightValue(value));
					}
					if (value && value.isValid && value.isValid()) {
						offset = value.diff(me.firstTick, me.tickUnit, true);
					}
				}
	
				if (offset !== null) {
					var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;
	
					if (me.isHorizontal()) {
						var valueOffset = (me.width * decimal);
						return me.left + Math.round(valueOffset);
					}
	
					var heightOffset = (me.height * decimal);
					return me.top + Math.round(heightOffset);
				}
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.tickMoments[index], null, null);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var innerDimension = me.isHorizontal() ? me.width : me.height;
				var offset = (pixel - (me.isHorizontal() ? me.left : me.top)) / innerDimension;
				offset *= me.scaleSizeInUnits;
				return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
			},
			parseTime: function(label) {
				var me = this;
				if (typeof me.options.time.parser === 'string') {
					return moment(label, me.options.time.parser);
				}
				if (typeof me.options.time.parser === 'function') {
					return me.options.time.parser(label);
				}
				// Date objects
				if (typeof label.getMonth === 'function' || typeof label === 'number') {
					return moment(label);
				}
				// Moment support
				if (label.isValid && label.isValid()) {
					return label;
				}
				// Custom parsing (return an instance of moment)
				if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
					console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
					return me.options.time.format(label);
				}
				// Moment format parsing
				return moment(label, me.options.time.format);
			}
		});
		Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
	
	};


/***/ },
/* 387 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.bar = {
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'category',
	
					// Specific to Bar Controller
					categoryPercentage: 0.8,
					barPercentage: 0.9,
	
					// grid line settings
					gridLines: {
						offsetGridLines: true
					}
				}],
				yAxes: [{
					type: 'linear'
				}]
			}
		};
	
		Chart.controllers.bar = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Rectangle,
	
			initialize: function(chart, datasetIndex) {
				Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);
	
				var me = this;
				var meta = me.getMeta();
				var dataset = me.getDataset();
	
				meta.stack = dataset.stack;
				// Use this to indicate that this is a bar dataset.
				meta.bar = true;
			},
	
			// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
			getStackCount: function() {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
	
				var stacks = [];
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var dsMeta = me.chart.getDatasetMeta(datasetIndex);
					if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
						(yScale.options.stacked === false ||
						(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}, me);
	
				return stacks.length;
			},
	
			update: function(reset) {
				var me = this;
				helpers.each(me.getMeta().data, function(rectangle, index) {
					me.updateElement(rectangle, index, reset);
				}, me);
			},
	
			updateElement: function(rectangle, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
				var scaleBase = yScale.getBasePixel();
				var rectangleElementOptions = me.chart.options.elements.rectangle;
				var custom = rectangle.custom || {};
				var dataset = me.getDataset();
	
				rectangle._xScale = xScale;
				rectangle._yScale = yScale;
				rectangle._datasetIndex = me.index;
				rectangle._index = index;
	
				var ruler = me.getRuler(index); // The index argument for compatible
				rectangle._model = {
					x: me.calculateBarX(index, me.index, ruler),
					y: reset ? scaleBase : me.calculateBarY(index, me.index),
	
					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,
	
					// Appearance
					horizontal: false,
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					width: me.calculateBarWidth(ruler),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				};
	
				rectangle.pivot();
			},
	
			calculateBarBase: function(datasetIndex, index) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var base = yScale.getBaseValue();
				var original = base;
	
				if ((yScale.options.stacked === true) ||
					(yScale.options.stacked === undefined && meta.stack !== undefined)) {
					var chart = me.chart;
					var datasets = chart.data.datasets;
					var value = Number(datasets[datasetIndex].data[index]);
	
					for (var i = 0; i < datasetIndex; i++) {
						var currentDs = datasets[i];
						var currentDsMeta = chart.getDatasetMeta(i);
						if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i) &&
							meta.stack === currentDsMeta.stack) {
							var currentVal = Number(currentDs.data[index]);
							base += value < 0 ? Math.min(currentVal, original) : Math.max(currentVal, original);
						}
					}
	
					return yScale.getPixelForValue(base);
				}
	
				return yScale.getBasePixel();
			},
	
			getRuler: function() {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var stackCount = me.getStackCount();
	
				var tickWidth = xScale.width / xScale.ticks.length;
				var categoryWidth = tickWidth * xScale.options.categoryPercentage;
				var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
				var fullBarWidth = categoryWidth / stackCount;
	
				var barWidth = fullBarWidth * xScale.options.barPercentage;
				var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);
	
				return {
					stackCount: stackCount,
					tickWidth: tickWidth,
					categoryWidth: categoryWidth,
					categorySpacing: categorySpacing,
					fullBarWidth: fullBarWidth,
					barWidth: barWidth,
					barSpacing: barSpacing
				};
			},
	
			calculateBarWidth: function(ruler) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				if (xScale.options.barThickness) {
					return xScale.options.barThickness;
				}
				return ruler.barWidth;
			},
	
			// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
			getStackIndex: function(datasetIndex) {
				var me = this;
				var meta = me.chart.getDatasetMeta(datasetIndex);
				var yScale = me.getScaleForId(meta.yAxisID);
				var dsMeta, j;
				var stacks = [meta.stack];
	
				for (j = 0; j < datasetIndex; ++j) {
					dsMeta = this.chart.getDatasetMeta(j);
					if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
						(yScale.options.stacked === false ||
						(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}
	
				return stacks.length - 1;
			},
	
			calculateBarX: function(index, datasetIndex, ruler) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var stackIndex = me.getStackIndex(datasetIndex);
				var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
				leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;
	
				return leftTick +
					(ruler.barWidth / 2) +
					ruler.categorySpacing +
					(ruler.barWidth * stackIndex) +
					(ruler.barSpacing / 2) +
					(ruler.barSpacing * stackIndex);
			},
	
			calculateBarY: function(index, datasetIndex) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var value = Number(me.getDataset().data[index]);
	
				if (yScale.options.stacked ||
					(yScale.options.stacked === undefined && meta.stack !== undefined)) {
					var base = yScale.getBaseValue();
					var sumPos = base,
						sumNeg = base;
	
					for (var i = 0; i < datasetIndex; i++) {
						var ds = me.chart.data.datasets[i];
						var dsMeta = me.chart.getDatasetMeta(i);
						if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i) &&
							meta.stack === dsMeta.stack) {
							var stackedVal = Number(ds.data[index]);
							if (stackedVal < 0) {
								sumNeg += stackedVal || 0;
							} else {
								sumPos += stackedVal || 0;
							}
						}
					}
	
					if (value < 0) {
						return yScale.getPixelForValue(sumNeg + value);
					}
					return yScale.getPixelForValue(sumPos + value);
				}
	
				return yScale.getPixelForValue(value);
			},
	
			draw: function(ease) {
				var me = this;
				var easingDecimal = ease || 1;
				var metaData = me.getMeta().data;
				var dataset = me.getDataset();
				var i, len;
	
				Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
				for (i = 0, len = metaData.length; i < len; ++i) {
					var d = dataset.data[i];
					if (d !== null && d !== undefined && !isNaN(d)) {
						metaData[i].transition(easingDecimal).draw();
					}
				}
				Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
			},
	
			setHoverStyle: function(rectangle) {
				var dataset = this.chart.data.datasets[rectangle._datasetIndex];
				var index = rectangle._index;
	
				var custom = rectangle.custom || {};
				var model = rectangle._model;
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(rectangle) {
				var dataset = this.chart.data.datasets[rectangle._datasetIndex];
				var index = rectangle._index;
				var custom = rectangle.custom || {};
				var model = rectangle._model;
				var rectangleElementOptions = this.chart.options.elements.rectangle;
	
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
			}
	
		});
	
	
		// including horizontalBar in the bar file, instead of a file of its own
		// it extends bar (like pie extends doughnut)
		Chart.defaults.horizontalBar = {
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'linear',
					position: 'bottom'
				}],
				yAxes: [{
					position: 'left',
					type: 'category',
	
					// Specific to Horizontal Bar Controller
					categoryPercentage: 0.8,
					barPercentage: 0.9,
	
					// grid line settings
					gridLines: {
						offsetGridLines: true
					}
				}]
			},
			elements: {
				rectangle: {
					borderSkipped: 'left'
				}
			},
			tooltips: {
				callbacks: {
					title: function(tooltipItems, data) {
						// Pick first xLabel for now
						var title = '';
	
						if (tooltipItems.length > 0) {
							if (tooltipItems[0].yLabel) {
								title = tooltipItems[0].yLabel;
							} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
								title = data.labels[tooltipItems[0].index];
							}
						}
	
						return title;
					},
					label: function(tooltipItem, data) {
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
						return datasetLabel + ': ' + tooltipItem.xLabel;
					}
				}
			}
		};
	
		Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
	
			// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
			getStackCount: function() {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
	
				var stacks = [];
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var dsMeta = me.chart.getDatasetMeta(datasetIndex);
					if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
						(xScale.options.stacked === false ||
						(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}, me);
	
				return stacks.length;
			},
	
			updateElement: function(rectangle, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
				var scaleBase = xScale.getBasePixel();
				var custom = rectangle.custom || {};
				var dataset = me.getDataset();
				var rectangleElementOptions = me.chart.options.elements.rectangle;
	
				rectangle._xScale = xScale;
				rectangle._yScale = yScale;
				rectangle._datasetIndex = me.index;
				rectangle._index = index;
	
				var ruler = me.getRuler(index); // The index argument for compatible
				rectangle._model = {
					x: reset ? scaleBase : me.calculateBarX(index, me.index),
					y: me.calculateBarY(index, me.index, ruler),
	
					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,
	
					// Appearance
					horizontal: true,
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					height: me.calculateBarHeight(ruler),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				};
	
				rectangle.pivot();
			},
	
			calculateBarBase: function(datasetIndex, index) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var base = xScale.getBaseValue();
				var originalBase = base;
	
				if (xScale.options.stacked ||
					(xScale.options.stacked === undefined && meta.stack !== undefined)) {
					var chart = me.chart;
					var datasets = chart.data.datasets;
					var value = Number(datasets[datasetIndex].data[index]);
	
					for (var i = 0; i < datasetIndex; i++) {
						var currentDs = datasets[i];
						var currentDsMeta = chart.getDatasetMeta(i);
						if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i) &&
							meta.stack === currentDsMeta.stack) {
							var currentVal = Number(currentDs.data[index]);
							base += value < 0 ? Math.min(currentVal, originalBase) : Math.max(currentVal, originalBase);
						}
					}
	
					return xScale.getPixelForValue(base);
				}
	
				return xScale.getBasePixel();
			},
	
			getRuler: function() {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var stackCount = me.getStackCount();
	
				var tickHeight = yScale.height / yScale.ticks.length;
				var categoryHeight = tickHeight * yScale.options.categoryPercentage;
				var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
				var fullBarHeight = categoryHeight / stackCount;
	
				var barHeight = fullBarHeight * yScale.options.barPercentage;
				var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);
	
				return {
					stackCount: stackCount,
					tickHeight: tickHeight,
					categoryHeight: categoryHeight,
					categorySpacing: categorySpacing,
					fullBarHeight: fullBarHeight,
					barHeight: barHeight,
					barSpacing: barSpacing
				};
			},
	
			calculateBarHeight: function(ruler) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				if (yScale.options.barThickness) {
					return yScale.options.barThickness;
				}
				return ruler.barHeight;
			},
	
			// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
			getStackIndex: function(datasetIndex) {
				var me = this;
				var meta = me.chart.getDatasetMeta(datasetIndex);
				var xScale = me.getScaleForId(meta.xAxisID);
				var dsMeta, j;
				var stacks = [meta.stack];
	
				for (j = 0; j < datasetIndex; ++j) {
					dsMeta = this.chart.getDatasetMeta(j);
					if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
						(xScale.options.stacked === false ||
						(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}
	
				return stacks.length - 1;
			},
	
			calculateBarX: function(index, datasetIndex) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var value = Number(me.getDataset().data[index]);
	
				if (xScale.options.stacked ||
					(xScale.options.stacked === undefined && meta.stack !== undefined)) {
					var base = xScale.getBaseValue();
					var sumPos = base,
						sumNeg = base;
	
					for (var i = 0; i < datasetIndex; i++) {
						var ds = me.chart.data.datasets[i];
						var dsMeta = me.chart.getDatasetMeta(i);
						if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i) &&
							meta.stack === dsMeta.stack) {
							var stackedVal = Number(ds.data[index]);
							if (stackedVal < 0) {
								sumNeg += stackedVal || 0;
							} else {
								sumPos += stackedVal || 0;
							}
						}
					}
	
					if (value < 0) {
						return xScale.getPixelForValue(sumNeg + value);
					}
					return xScale.getPixelForValue(sumPos + value);
				}
	
				return xScale.getPixelForValue(value);
			},
	
			calculateBarY: function(index, datasetIndex, ruler) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var stackIndex = me.getStackIndex(datasetIndex);
				var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
				topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;
	
				return topTick +
					(ruler.barHeight / 2) +
					ruler.categorySpacing +
					(ruler.barHeight * stackIndex) +
					(ruler.barSpacing / 2) +
					(ruler.barSpacing * stackIndex);
			}
		});
	};


/***/ },
/* 388 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.bubble = {
			hover: {
				mode: 'single'
			},
	
			scales: {
				xAxes: [{
					type: 'linear', // bubble should probably use a linear scale by default
					position: 'bottom',
					id: 'x-axis-0' // need an ID so datasets can reference the scale
				}],
				yAxes: [{
					type: 'linear',
					position: 'left',
					id: 'y-axis-0'
				}]
			},
	
			tooltips: {
				callbacks: {
					title: function() {
						// Title doesn't make sense for scatter since we format the data as a point
						return '';
					},
					label: function(tooltipItem, data) {
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
						var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
					}
				}
			}
		};
	
		Chart.controllers.bubble = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Point,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var points = meta.data;
	
				// Update Points
				helpers.each(points, function(point, index) {
					me.updateElement(point, index, reset);
				});
			},
	
			updateElement: function(point, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
	
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var data = dataset.data[index];
				var pointElementOptions = me.chart.options.elements.point;
				var dsIndex = me.index;
	
				helpers.extend(point, {
					// Utility
					_xScale: xScale,
					_yScale: yScale,
					_datasetIndex: dsIndex,
					_index: index,
	
					// Desired view properties
					_model: {
						x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
						y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
						// Appearance
						radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),
	
						// Tooltip
						hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
					}
				});
	
				// Trick to reset the styles of the point
				Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);
	
				var model = point._model;
				model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));
	
				point.pivot();
			},
	
			getRadius: function(value) {
				return value.r || this.chart.options.elements.point.radius;
			},
	
			setHoverStyle: function(point) {
				var me = this;
				Chart.DatasetController.prototype.setHoverStyle.call(me, point);
	
				// Radius
				var dataset = me.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
				model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
			},
	
			removeHoverStyle: function(point) {
				var me = this;
				Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);
	
				var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
				var custom = point.custom || {};
				var model = point._model;
	
				model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
			}
		});
	};


/***/ },
/* 389 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			defaults = Chart.defaults;
	
		defaults.doughnut = {
			animation: {
				// Boolean - Whether we animate the rotation of the Doughnut
				animateRotate: true,
				// Boolean - Whether we animate scaling the Doughnut from the centre
				animateScale: false
			},
			aspectRatio: 1,
			hover: {
				mode: 'single'
			},
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
	
				var data = chart.data;
				var datasets = data.datasets;
				var labels = data.labels;
	
				if (datasets.length) {
					for (var i = 0; i < datasets[0].data.length; ++i) {
						text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
						if (labels[i]) {
							text.push(labels[i]);
						}
						text.push('</li>');
					}
				}
	
				text.push('</ul>');
				return text.join('');
			},
			legend: {
				labels: {
					generateLabels: function(chart) {
						var data = chart.data;
						if (data.labels.length && data.datasets.length) {
							return data.labels.map(function(label, i) {
								var meta = chart.getDatasetMeta(0);
								var ds = data.datasets[0];
								var arc = meta.data[i];
								var custom = arc && arc.custom || {};
								var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
								var arcOpts = chart.options.elements.arc;
								var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
								var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
								var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	
								return {
									text: label,
									fillStyle: fill,
									strokeStyle: stroke,
									lineWidth: bw,
									hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
	
									// Extra data used for toggling the correct item
									index: i
								};
							});
						}
						return [];
					}
				},
	
				onClick: function(e, legendItem) {
					var index = legendItem.index;
					var chart = this.chart;
					var i, ilen, meta;
	
					for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
						meta = chart.getDatasetMeta(i);
						// toggle visibility of index if exists
						if (meta.data[index]) {
							meta.data[index].hidden = !meta.data[index].hidden;
						}
					}
	
					chart.update();
				}
			},
	
			// The percentage of the chart that we cut out of the middle.
			cutoutPercentage: 50,
	
			// The rotation of the chart, where the first data arc begins.
			rotation: Math.PI * -0.5,
	
			// The total circumference of the chart.
			circumference: Math.PI * 2.0,
	
			// Need to override these to give a nice default
			tooltips: {
				callbacks: {
					title: function() {
						return '';
					},
					label: function(tooltipItem, data) {
						var dataLabel = data.labels[tooltipItem.index];
						var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
	
						if (helpers.isArray(dataLabel)) {
							// show value on first line of multiline label
							// need to clone because we are changing the value
							dataLabel = dataLabel.slice();
							dataLabel[0] += value;
						} else {
							dataLabel += value;
						}
	
						return dataLabel;
					}
				}
			}
		};
	
		defaults.pie = helpers.clone(defaults.doughnut);
		helpers.extend(defaults.pie, {
			cutoutPercentage: 0
		});
	
	
		Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Arc,
	
			linkScales: helpers.noop,
	
			// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
			getRingIndex: function(datasetIndex) {
				var ringIndex = 0;
	
				for (var j = 0; j < datasetIndex; ++j) {
					if (this.chart.isDatasetVisible(j)) {
						++ringIndex;
					}
				}
	
				return ringIndex;
			},
	
			update: function(reset) {
				var me = this;
				var chart = me.chart,
					chartArea = chart.chartArea,
					opts = chart.options,
					arcOpts = opts.elements.arc,
					availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
					availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
					minSize = Math.min(availableWidth, availableHeight),
					offset = {
						x: 0,
						y: 0
					},
					meta = me.getMeta(),
					cutoutPercentage = opts.cutoutPercentage,
					circumference = opts.circumference;
	
				// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
				if (circumference < Math.PI * 2.0) {
					var startAngle = opts.rotation % (Math.PI * 2.0);
					startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
					var endAngle = startAngle + circumference;
					var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
					var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
					var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
					var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
					var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
					var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
					var cutout = cutoutPercentage / 100.0;
					var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
					var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
					var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
					minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
					offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
				}
	
				chart.borderWidth = me.getMaxBorderWidth(meta.data);
				chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
				chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
				chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
				chart.offsetX = offset.x * chart.outerRadius;
				chart.offsetY = offset.y * chart.outerRadius;
	
				meta.total = me.calculateTotal();
	
				me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
				me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);
	
				helpers.each(meta.data, function(arc, index) {
					me.updateElement(arc, index, reset);
				});
			},
	
			updateElement: function(arc, index, reset) {
				var me = this;
				var chart = me.chart,
					chartArea = chart.chartArea,
					opts = chart.options,
					animationOpts = opts.animation,
					centerX = (chartArea.left + chartArea.right) / 2,
					centerY = (chartArea.top + chartArea.bottom) / 2,
					startAngle = opts.rotation, // non reset case handled later
					endAngle = opts.rotation, // non reset case handled later
					dataset = me.getDataset(),
					circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
					innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
					outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
					valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	
				helpers.extend(arc, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
	
					// Desired view properties
					_model: {
						x: centerX + chart.offsetX,
						y: centerY + chart.offsetY,
						startAngle: startAngle,
						endAngle: endAngle,
						circumference: circumference,
						outerRadius: outerRadius,
						innerRadius: innerRadius,
						label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
					}
				});
	
				var model = arc._model;
				// Resets the visual styles
				this.removeHoverStyle(arc);
	
				// Set correct angles if not resetting
				if (!reset || !animationOpts.animateRotate) {
					if (index === 0) {
						model.startAngle = opts.rotation;
					} else {
						model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
					}
	
					model.endAngle = model.startAngle + model.circumference;
				}
	
				arc.pivot();
			},
	
			removeHoverStyle: function(arc) {
				Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
			},
	
			calculateTotal: function() {
				var dataset = this.getDataset();
				var meta = this.getMeta();
				var total = 0;
				var value;
	
				helpers.each(meta.data, function(element, index) {
					value = dataset.data[index];
					if (!isNaN(value) && !element.hidden) {
						total += Math.abs(value);
					}
				});
	
				/* if (total === 0) {
					total = NaN;
				}*/
	
				return total;
			},
	
			calculateCircumference: function(value) {
				var total = this.getMeta().total;
				if (total > 0 && !isNaN(value)) {
					return (Math.PI * 2.0) * (value / total);
				}
				return 0;
			},
	
			// gets the max border or hover width to properly scale pie charts
			getMaxBorderWidth: function(elements) {
				var max = 0,
					index = this.index,
					length = elements.length,
					borderWidth,
					hoverWidth;
	
				for (var i = 0; i < length; i++) {
					borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
					hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;
	
					max = borderWidth > max ? borderWidth : max;
					max = hoverWidth > max ? hoverWidth : max;
				}
				return max;
			}
		});
	};


/***/ },
/* 390 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.line = {
			showLines: true,
			spanGaps: false,
	
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'category',
					id: 'x-axis-0'
				}],
				yAxes: [{
					type: 'linear',
					id: 'y-axis-0'
				}]
			}
		};
	
		function lineEnabled(dataset, options) {
			return helpers.getValueOrDefault(dataset.showLine, options.showLines);
		}
	
		Chart.controllers.line = Chart.DatasetController.extend({
	
			datasetElementType: Chart.elements.Line,
	
			dataElementType: Chart.elements.Point,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var line = meta.dataset;
				var points = meta.data || [];
				var options = me.chart.options;
				var lineElementOptions = options.elements.line;
				var scale = me.getScaleForId(meta.yAxisID);
				var i, ilen, custom;
				var dataset = me.getDataset();
				var showLine = lineEnabled(dataset, options);
	
				// Update Line
				if (showLine) {
					custom = line.custom || {};
	
					// Compatibility: If the properties are defined with only the old name, use those values
					if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
						dataset.lineTension = dataset.tension;
					}
	
					// Utility
					line._scale = scale;
					line._datasetIndex = me.index;
					// Data
					line._children = points;
					// Model
					line._model = {
						// Appearance
						// The default behavior of lines is to break at null values, according
						// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
						// This option gives lines the ability to span gaps
						spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
						borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
						borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
						borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
						borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
						borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
						fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
						steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
						cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
						// Scale
						scaleTop: scale.top,
						scaleBottom: scale.bottom,
						scaleZero: scale.getBasePixel()
					};
	
					line.pivot();
				}
	
				// Update Points
				for (i=0, ilen=points.length; i<ilen; ++i) {
					me.updateElement(points[i], i, reset);
				}
	
				if (showLine && line._model.tension !== 0) {
					me.updateBezierControlPoints();
				}
	
				// Now pivot the point for animation
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].pivot();
				}
			},
	
			getPointBackgroundColor: function(point, index) {
				var backgroundColor = this.chart.options.elements.point.backgroundColor;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (custom.backgroundColor) {
					backgroundColor = custom.backgroundColor;
				} else if (dataset.pointBackgroundColor) {
					backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
				} else if (dataset.backgroundColor) {
					backgroundColor = dataset.backgroundColor;
				}
	
				return backgroundColor;
			},
	
			getPointBorderColor: function(point, index) {
				var borderColor = this.chart.options.elements.point.borderColor;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (custom.borderColor) {
					borderColor = custom.borderColor;
				} else if (dataset.pointBorderColor) {
					borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
				} else if (dataset.borderColor) {
					borderColor = dataset.borderColor;
				}
	
				return borderColor;
			},
	
			getPointBorderWidth: function(point, index) {
				var borderWidth = this.chart.options.elements.point.borderWidth;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (!isNaN(custom.borderWidth)) {
					borderWidth = custom.borderWidth;
				} else if (!isNaN(dataset.pointBorderWidth)) {
					borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
				} else if (!isNaN(dataset.borderWidth)) {
					borderWidth = dataset.borderWidth;
				}
	
				return borderWidth;
			},
	
			updateElement: function(point, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var datasetIndex = me.index;
				var value = dataset.data[index];
				var yScale = me.getScaleForId(meta.yAxisID);
				var xScale = me.getScaleForId(meta.xAxisID);
				var pointOptions = me.chart.options.elements.point;
				var x, y;
				var labels = me.chart.data.labels || [];
				var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
					dataset.pointRadius = dataset.radius;
				}
				if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
					dataset.pointHitRadius = dataset.hitRadius;
				}
	
				x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
				y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);
	
				// Utility
				point._xScale = xScale;
				point._yScale = yScale;
				point._datasetIndex = datasetIndex;
				point._index = index;
	
				// Desired view properties
				point._model = {
					x: x,
					y: y,
					skip: custom.skip || isNaN(x) || isNaN(y),
					// Appearance
					radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
					pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
					backgroundColor: me.getPointBackgroundColor(point, index),
					borderColor: me.getPointBorderColor(point, index),
					borderWidth: me.getPointBorderWidth(point, index),
					tension: meta.dataset._model ? meta.dataset._model.tension : 0,
					steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
					// Tooltip
					hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
				};
			},
	
			calculatePointY: function(value, index, datasetIndex) {
				var me = this;
				var chart = me.chart;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var sumPos = 0;
				var sumNeg = 0;
				var i, ds, dsMeta;
	
				if (yScale.options.stacked) {
					for (i = 0; i < datasetIndex; i++) {
						ds = chart.data.datasets[i];
						dsMeta = chart.getDatasetMeta(i);
						if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
							var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
							if (stackedRightValue < 0) {
								sumNeg += stackedRightValue || 0;
							} else {
								sumPos += stackedRightValue || 0;
							}
						}
					}
	
					var rightValue = Number(yScale.getRightValue(value));
					if (rightValue < 0) {
						return yScale.getPixelForValue(sumNeg + rightValue);
					}
					return yScale.getPixelForValue(sumPos + rightValue);
				}
	
				return yScale.getPixelForValue(value);
			},
	
			updateBezierControlPoints: function() {
				var me = this;
				var meta = me.getMeta();
				var area = me.chart.chartArea;
				var points = (meta.data || []);
				var i, ilen, point, model, controlPoints;
	
				// Only consider points that are drawn in case the spanGaps option is used
				if (meta.dataset._model.spanGaps) {
					points = points.filter(function(pt) {
						return !pt._model.skip;
					});
				}
	
				function capControlPoint(pt, min, max) {
					return Math.max(Math.min(pt, max), min);
				}
	
				if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
					helpers.splineCurveMonotone(points);
				} else {
					for (i = 0, ilen = points.length; i < ilen; ++i) {
						point = points[i];
						model = point._model;
						controlPoints = helpers.splineCurve(
							helpers.previousItem(points, i)._model,
							model,
							helpers.nextItem(points, i)._model,
							meta.dataset._model.tension
						);
						model.controlPointPreviousX = controlPoints.previous.x;
						model.controlPointPreviousY = controlPoints.previous.y;
						model.controlPointNextX = controlPoints.next.x;
						model.controlPointNextY = controlPoints.next.y;
					}
				}
	
				if (me.chart.options.elements.line.capBezierPoints) {
					for (i = 0, ilen = points.length; i < ilen; ++i) {
						model = points[i]._model;
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			},
	
			draw: function(ease) {
				var me = this;
				var meta = me.getMeta();
				var points = meta.data || [];
				var easingDecimal = ease || 1;
				var i, ilen;
	
				// Transition Point Locations
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].transition(easingDecimal);
				}
	
				Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
				// Transition and Draw the line
				if (lineEnabled(me.getDataset(), me.chart.options)) {
					meta.dataset.transition(easingDecimal).draw();
				}
				Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
	
				// Draw the points
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].draw(me.chart.chartArea);
				}
			},
	
			setHoverStyle: function(point) {
				// Point
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
	
				model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
				model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(point) {
				var me = this;
				var dataset = me.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
					dataset.pointRadius = dataset.radius;
				}
	
				model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
				model.backgroundColor = me.getPointBackgroundColor(point, index);
				model.borderColor = me.getPointBorderColor(point, index);
				model.borderWidth = me.getPointBorderWidth(point, index);
			}
		});
	};


/***/ },
/* 391 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.polarArea = {
	
			scale: {
				type: 'radialLinear',
				lineArc: true, // so that lines are circular
				ticks: {
					beginAtZero: true
				}
			},
	
			// Boolean - Whether to animate the rotation of the chart
			animation: {
				animateRotate: true,
				animateScale: true
			},
	
			startAngle: -0.5 * Math.PI,
			aspectRatio: 1,
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
	
				var data = chart.data;
				var datasets = data.datasets;
				var labels = data.labels;
	
				if (datasets.length) {
					for (var i = 0; i < datasets[0].data.length; ++i) {
						text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
						if (labels[i]) {
							text.push(labels[i]);
						}
						text.push('</li>');
					}
				}
	
				text.push('</ul>');
				return text.join('');
			},
			legend: {
				labels: {
					generateLabels: function(chart) {
						var data = chart.data;
						if (data.labels.length && data.datasets.length) {
							return data.labels.map(function(label, i) {
								var meta = chart.getDatasetMeta(0);
								var ds = data.datasets[0];
								var arc = meta.data[i];
								var custom = arc.custom || {};
								var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
								var arcOpts = chart.options.elements.arc;
								var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
								var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
								var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	
								return {
									text: label,
									fillStyle: fill,
									strokeStyle: stroke,
									lineWidth: bw,
									hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
	
									// Extra data used for toggling the correct item
									index: i
								};
							});
						}
						return [];
					}
				},
	
				onClick: function(e, legendItem) {
					var index = legendItem.index;
					var chart = this.chart;
					var i, ilen, meta;
	
					for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
						meta = chart.getDatasetMeta(i);
						meta.data[index].hidden = !meta.data[index].hidden;
					}
	
					chart.update();
				}
			},
	
			// Need to override these to give a nice default
			tooltips: {
				callbacks: {
					title: function() {
						return '';
					},
					label: function(tooltipItem, data) {
						return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
					}
				}
			}
		};
	
		Chart.controllers.polarArea = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Arc,
	
			linkScales: helpers.noop,
	
			update: function(reset) {
				var me = this;
				var chart = me.chart;
				var chartArea = chart.chartArea;
				var meta = me.getMeta();
				var opts = chart.options;
				var arcOpts = opts.elements.arc;
				var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
				chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
				chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
				chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
	
				me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
				me.innerRadius = me.outerRadius - chart.radiusLength;
	
				meta.count = me.countVisibleElements();
	
				helpers.each(meta.data, function(arc, index) {
					me.updateElement(arc, index, reset);
				});
			},
	
			updateElement: function(arc, index, reset) {
				var me = this;
				var chart = me.chart;
				var dataset = me.getDataset();
				var opts = chart.options;
				var animationOpts = opts.animation;
				var scale = chart.scale;
				var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
				var labels = chart.data.labels;
	
				var circumference = me.calculateCircumference(dataset.data[index]);
				var centerX = scale.xCenter;
				var centerY = scale.yCenter;
	
				// If there is NaN data before us, we need to calculate the starting angle correctly.
				// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
				var visibleCount = 0;
				var meta = me.getMeta();
				for (var i = 0; i < index; ++i) {
					if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
						++visibleCount;
					}
				}
	
				// var negHalfPI = -0.5 * Math.PI;
				var datasetStartAngle = opts.startAngle;
				var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
				var startAngle = datasetStartAngle + (circumference * visibleCount);
				var endAngle = startAngle + (arc.hidden ? 0 : circumference);
	
				var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
	
				helpers.extend(arc, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
					_scale: scale,
	
					// Desired view properties
					_model: {
						x: centerX,
						y: centerY,
						innerRadius: 0,
						outerRadius: reset ? resetRadius : distance,
						startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
						endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
						label: getValueAtIndexOrDefault(labels, index, labels[index])
					}
				});
	
				// Apply border and fill style
				me.removeHoverStyle(arc);
	
				arc.pivot();
			},
	
			removeHoverStyle: function(arc) {
				Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
			},
	
			countVisibleElements: function() {
				var dataset = this.getDataset();
				var meta = this.getMeta();
				var count = 0;
	
				helpers.each(meta.data, function(element, index) {
					if (!isNaN(dataset.data[index]) && !element.hidden) {
						count++;
					}
				});
	
				return count;
			},
	
			calculateCircumference: function(value) {
				var count = this.getMeta().count;
				if (count > 0 && !isNaN(value)) {
					return (2 * Math.PI) / count;
				}
				return 0;
			}
		});
	};


/***/ },
/* 392 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.radar = {
			aspectRatio: 1,
			scale: {
				type: 'radialLinear'
			},
			elements: {
				line: {
					tension: 0 // no bezier in radar
				}
			}
		};
	
		Chart.controllers.radar = Chart.DatasetController.extend({
	
			datasetElementType: Chart.elements.Line,
	
			dataElementType: Chart.elements.Point,
	
			linkScales: helpers.noop,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var line = meta.dataset;
				var points = meta.data;
				var custom = line.custom || {};
				var dataset = me.getDataset();
				var lineElementOptions = me.chart.options.elements.line;
				var scale = me.chart.scale;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}
	
				helpers.extend(meta.dataset, {
					// Utility
					_datasetIndex: me.index,
					// Data
					_children: points,
					_loop: true,
					// Model
					_model: {
						// Appearance
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
						borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
						fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
						borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
						borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
						borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
						borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
	
						// Scale
						scaleTop: scale.top,
						scaleBottom: scale.bottom,
						scaleZero: scale.getBasePosition()
					}
				});
	
				meta.dataset.pivot();
	
				// Update Points
				helpers.each(points, function(point, index) {
					me.updateElement(point, index, reset);
				}, me);
	
				// Update bezier control points
				me.updateBezierControlPoints();
			},
			updateElement: function(point, index, reset) {
				var me = this;
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var scale = me.chart.scale;
				var pointElementOptions = me.chart.options.elements.point;
				var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
	
				helpers.extend(point, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
					_scale: scale,
	
					// Desired view properties
					_model: {
						x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
						y: reset ? scale.yCenter : pointPosition.y,
	
						// Appearance
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
						radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
						borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
						pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),
	
						// Tooltip
						hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
					}
				});
	
				point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
			},
			updateBezierControlPoints: function() {
				var chartArea = this.chart.chartArea;
				var meta = this.getMeta();
	
				helpers.each(meta.data, function(point, index) {
					var model = point._model;
					var controlPoints = helpers.splineCurve(
						helpers.previousItem(meta.data, index, true)._model,
						model,
						helpers.nextItem(meta.data, index, true)._model,
						model.tension
					);
	
					// Prevent the bezier going outside of the bounds of the graph
					model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
					model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);
	
					model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
					model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);
	
					// Now pivot the point for animation
					point.pivot();
				});
			},
	
			draw: function(ease) {
				var meta = this.getMeta();
				var easingDecimal = ease || 1;
	
				// Transition Point Locations
				helpers.each(meta.data, function(point) {
					point.transition(easingDecimal);
				});
	
				// Transition and Draw the line
				meta.dataset.transition(easingDecimal).draw();
	
				// Draw the points
				helpers.each(meta.data, function(point) {
					point.draw();
				});
			},
	
			setHoverStyle: function(point) {
				// Point
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var custom = point.custom || {};
				var index = point._index;
				var model = point._model;
	
				model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(point) {
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var custom = point.custom || {};
				var index = point._index;
				var model = point._model;
				var pointElementOptions = this.chart.options.elements.point;
	
				model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
			}
		});
	};


/***/ },
/* 393 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Bar = function(context, config) {
			config.type = 'bar';
	
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Bubble = function(context, config) {
			config.type = 'bubble';
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 395 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Doughnut = function(context, config) {
			config.type = 'doughnut';
	
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 396 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Line = function(context, config) {
			config.type = 'line';
	
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 397 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.PolarArea = function(context, config) {
			config.type = 'polarArea';
	
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 398 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Radar = function(context, config) {
			config.type = 'radar';
	
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var defaultConfig = {
			hover: {
				mode: 'single'
			},
	
			scales: {
				xAxes: [{
					type: 'linear', // scatter should not use a category axis
					position: 'bottom',
					id: 'x-axis-1' // need an ID so datasets can reference the scale
				}],
				yAxes: [{
					type: 'linear',
					position: 'left',
					id: 'y-axis-1'
				}]
			},
	
			tooltips: {
				callbacks: {
					title: function() {
						// Title doesn't make sense for scatter since we format the data as a point
						return '';
					},
					label: function(tooltipItem) {
						return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
					}
				}
			}
		};
	
		// Register the default config for this type
		Chart.defaults.scatter = defaultConfig;
	
		// Scatter charts use line controllers
		Chart.controllers.scatter = Chart.controllers.line;
	
		Chart.Scatter = function(context, config) {
			config.type = 'scatter';
			return new Chart(context, config);
		};
	
	};


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Quantidade de Aniversariantes por mês\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'bar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-bar"
	  })]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'horizontalBar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-timeline"
	  })])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content"
	  }, [_c('canvas', {
	    attrs: {
	      "id": "aniversarios-mes"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-7d773706", module.exports)
	  }
	}

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(402)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(404),
	  /* template */
	  __webpack_require__(405),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardCadastrosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardCadastrosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-01653ac4", Component.options)
	  } else {
	    hotAPI.reload("data-v-01653ac4", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(403);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("4b45621c", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(403, function() {
	     var newContent = __webpack_require__(403);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardCadastrosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(224);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(353);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getTotalAgrupadoPorMesNoAnoEscolhido();
	  },
	
	  computed: {
	    nomeMeses: function nomeMeses() {
	      return (0, _keys2.default)(this.totalAgrupadoPorMes);
	    },
	    valoresAgrupados: function valoresAgrupados() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.totalAgrupadoPorMes).map(function (key) {
	        return _this.totalAgrupadoPorMes[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        chart: '',
	        labels: this.nomeMeses,
	        datasets: [{
	          data: this.valoresAgrupados,
	          fill: false,
	          lineTension: 0.1,
	          backgroundColor: "rgba(75,192,192, 1)",
	          borderColor: "rgba(75,192,192,1)",
	          pointHitRadius: 10
	        }]
	      };
	    }
	  },
	  watch: {
	    totalAgrupadoPorMes: function totalAgrupadoPorMes() {
	      this.criarChart();
	    },
	    ano: function ano() {
	      this.getTotalAgrupadoPorMesNoAnoEscolhido();
	      this.chart.destroy();
	
	      this.criarChart();
	    }
	  },
	  data: function data() {
	    return {
	      ano: '2016',
	      totalAgrupadoPorMes: {}
	    };
	  },
	
	  methods: {
	    getTotalAgrupadoPorMesNoAnoEscolhido: function getTotalAgrupadoPorMesNoAnoEscolhido() {
	      var vm = this;
	      vm.$http.get('pessoas/total-cadastro-agrupado-mes-por-ano/' + this.ano).then(function (response) {
	        vm.totalAgrupadoPorMes = response.data;
	      });
	    },
	    criarChart: function criarChart() {
	      var ctx = document.getElementById("cadastros-mes");
	      this.chart = new _chart2.default(ctx, {
	        type: 'line',
	        data: this.dados
	      });
	    }
	  }
	};

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Cadastros por mês no ano escolhido - " + _vm._s(_vm.ano) + "\n\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.ano = '2016'
	      }
	    }
	  }, [_vm._v("2016")]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.ano = '2017'
	      }
	    }
	  }, [_vm._v("2017")])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content "
	  }, [_c('canvas', {
	    attrs: {
	      "id": "cadastros-mes"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-01653ac4", module.exports)
	  }
	}

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(407)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(409),
	  /* template */
	  __webpack_require__(410),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardPessoasPorBairro.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardPessoasPorBairro.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-104644fa", Component.options)
	  } else {
	    hotAPI.reload("data-v-104644fa", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(408);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("51cd2172", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(408, function() {
	     var newContent = __webpack_require__(408);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardPessoasPorBairro.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(224);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(353);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getBairrosAgrupados();
	  },
	
	  computed: {
	    nomeBairros: function nomeBairros() {
	      return (0, _keys2.default)(this.bairrosAgrupados);
	    },
	    valoresPorBairro: function valoresPorBairro() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.bairrosAgrupados).map(function (key) {
	        return _this.bairrosAgrupados[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        labels: this.nomeBairros,
	        datasets: [{
	          data: this.valoresPorBairro,
	          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
	          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
	        }]
	      };
	    }
	  },
	  watch: {
	    bairrosAgrupados: function bairrosAgrupados() {
	      var ctx = document.getElementById("pessoas-bairro");
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    },
	    tipoGrafico: function tipoGrafico() {
	      var ctx = document.getElementById("pessoas-bairro");
	      this.chart.destroy();
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    }
	  },
	  data: function data() {
	    return {
	      bairrosAgrupados: {},
	      tipoGrafico: 'horizontalBar',
	      chart: ''
	    };
	  },
	
	  methods: {
	    getBairrosAgrupados: function getBairrosAgrupados() {
	      var vm = this;
	      vm.$http.get('/endereco/bairros-agrupados').then(function (response) {
	        vm.bairrosAgrupados = response.data;
	      });
	    }
	  }
	};

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Quantidade de pessoas por bairro\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'bar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-bar"
	  })]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'horizontalBar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-timeline"
	  })])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content"
	  }, [_c('canvas', {
	    attrs: {
	      "id": "pessoas-bairro"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-104644fa", module.exports)
	  }
	}

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(412)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(414),
	  /* template */
	  __webpack_require__(416),
	  /* scopeId */
	  "data-v-4fb4a1f4",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardTotal.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardTotal.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4fb4a1f4", Component.options)
	  } else {
	    hotAPI.reload("data-v-4fb4a1f4", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(413);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("73f7eb42", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(413, function() {
	     var newContent = __webpack_require__(413);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\ni[data-v-4fb4a1f4] {\n  font-size: 54px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/home/cardTotal.vue?63b0e460"],"names":[],"mappings":";AAyCA;EACA,gBAAA;CACA","file":"cardTotal.vue","sourcesContent":["<template>\r\n  <div class=\"card text-white animate-scale\" :class=\"backgroundColor\">\r\n    <div class=\"card-content \">\r\n      <div class=\"row\">\r\n        <div class=\"width-1of3\">\r\n          <i>people</i>\r\n        </div>\r\n        <div class=\"width-2of3\">\r\n          <p class=\"text-italic \">{{title}}</p>\r\n          <h5>\r\n            <i-count-up\r\n              :start=\"0\"\r\n              :end=\"total\"\r\n              :decimals=\"0\"\r\n              :duration=\"2.5\"\r\n              :options=\"options\"\r\n            ></i-count-up>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import ICountUp from 'vue-countup-v2'\r\n  export default {\r\n    props: ['title', 'total', 'backgroundColor'],\r\n    data () {\r\n      return {\r\n        options: {\r\n          separator: '.'\r\n        }\r\n      }\r\n    },\r\n    components: {\r\n      ICountUp\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  i {\r\n    font-size: 54px;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueCountupV = __webpack_require__(415);
	
	var _vueCountupV2 = _interopRequireDefault(_vueCountupV);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['title', 'total', 'backgroundColor'],
	  data: function data() {
	    return {
	      options: {
	        separator: '.'
	      }
	    };
	  },
	
	  components: {
	    ICountUp: _vueCountupV2.default
	  }
	};

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("icountup",[],e):"object"==typeof exports?exports.icountup=e():t.icountup=e()}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=a(i);e.default=r.default},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=a(i);e.default={name:"ICountUp",props:{start:{type:Number,required:!1,default:0},end:{type:Number,required:!0},decimals:{type:Number,required:!1,default:0},duration:{type:Number,required:!1,default:2},options:{type:Object,required:!1},callback:{type:Function,required:!1,default:function(){}}},data:function(){return{instance:null}},computed:{},watch:{end:{handler:function(t){var e=this;e.instance&&e.instance.update&&e.instance.update(t)},deep:!1}},methods:{init:function(){var t=this;if(!t.instance){var e=t.$el;t.instance=new r.default(e,t.start,t.end,t.decimals,t.duration,t.options),t.instance.start(function(){t.callback(t.instance)})}},destroy:function(){var t=this;t.instance=null}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var t=this;t.init()},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){var t=this;t.destroy()},destroyed:function(){},start:function(t){var e=this;e.instance&&e.instance.start&&e.instance.start(function(){t&&t(e.instance)})},pauseResume:function(){var t=this;t.instance&&t.instance.pauseResume&&t.instance.pauseResume()},reset:function(){var t=this;t.instance&&t.instance.reset&&t.instance.reset()},update:function(t){var e=this;e.instance&&e.instance.update&&e.instance.update(t)}}},function(t,e,n){var a,i;!function(r,o){a=o,i="function"==typeof a?a.call(e,n,e,t):a,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n){var a=function(t,e,n,a,i,r){for(var o=0,u=["webkit","moz","ms","o"],s=0;s<u.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[u[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[s]+"CancelAnimationFrame"]||window[u[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-o)),i=window.setTimeout(function(){t(n+a)},a);return o=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c=this;c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var d in r)r.hasOwnProperty(d)&&(c.options[d]=r[d]);""===c.options.separator&&(c.options.useGrouping=!1),c.options.prefix||(c.options.prefix=""),c.options.suffix||(c.options.suffix=""),c.d="string"==typeof t?document.getElementById(t):t,c.startVal=Number(e),c.endVal=Number(n),c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(i)||2e3,c.formatNumber=function(t){t=t.toFixed(c.decimals),t+="";var e,n,a,i;if(e=t.split("."),n=e[0],a=e.length>1?c.options.decimal+e[1]:"",i=/(\d+)(\d{3})/,c.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+c.options.separator+"$2");return c.options.prefix+n+a+c.options.suffix},c.easeOutExpo=function(t,e,n,a){return n*(-Math.pow(2,-10*t/a)+1)*1024/1023+e},c.easingFn=c.options.easingFn?c.options.easingFn:c.easeOutExpo,c.formattingFn=c.options.formattingFn?c.options.formattingFn:c.formatNumber,c.version=function(){return"1.7.1"},c.printValue=function(t){var e=c.formattingFn(t);"INPUT"===c.d.tagName?this.d.value=e:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=e:this.d.innerHTML=e},c.count=function(t){c.startTime||(c.startTime=t),c.timestamp=t;var e=t-c.startTime;c.remaining=c.duration-e,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.easingFn(e,0,c.startVal-c.endVal,c.duration):c.frameVal=c.easingFn(e,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(e/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(t){return c.callback=t,c.rAF=requestAnimationFrame(c.count),!1},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},c.update=function(t){cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=Number(t),c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count)},c.printValue(c.startVal)};return a})},function(t,e){},function(t,e,n){var a,i;n(3),a=n(1);var r=n(5);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-679a8781",t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},staticRenderFns:[]}}])});
	//# sourceMappingURL=app.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card text-white animate-scale",
	    class: _vm.backgroundColor
	  }, [_c('div', {
	    staticClass: "card-content "
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "width-2of3"
	  }, [_c('p', {
	    staticClass: "text-italic "
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('h5', [_c('i-count-up', {
	    attrs: {
	      "start": 0,
	      "end": _vm.total,
	      "decimals": 0,
	      "duration": 2.5,
	      "options": _vm.options
	    }
	  })], 1)])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "width-1of3"
	  }, [_c('i', [_vm._v("people")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-4fb4a1f4", module.exports)
	  }
	}

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(418)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(420),
	  /* template */
	  __webpack_require__(421),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-730e035d", Component.options)
	  } else {
	    hotAPI.reload("data-v-730e035d", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(419);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("42f9ebcb", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(419, function() {
	     var newContent = __webpack_require__(419);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cardTotal = __webpack_require__(411);
	
	var _cardTotal2 = _interopRequireDefault(_cardTotal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'Home',
	    mounted: function mounted() {},
	    data: function data() {
	        return {
	            totalPosts: 0,
	            totalComments: 0,
	            totalTodos: 0
	        };
	    },
	
	    computed: {
	        dataForGraph: function dataForGraph() {
	            return {
	                posts: this.totalPosts,
	                todos: this.totalTodos,
	                comments: this.totalComments
	            };
	        }
	    },
	    components: {
	        cardTotal: _cardTotal2.default
	    },
	    methods: {}
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Home\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Total Posts",
	      "background-color": "bg-teal-8",
	      "total": _vm.totalPosts
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Total comments",
	      "background-color": "bg-teal-8",
	      "total": _vm.totalComments
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Static total",
	      "background-color": "bg-teal-8",
	      "total": 50004
	    }
	  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "width-1of2"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "width-4of5 sm-auto"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-730e035d", module.exports)
	  }
	}

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(423)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(425),
	  /* template */
	  __webpack_require__(426),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\questiontype\\questiontype.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] questiontype.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-58cc2e06", Component.options)
	  } else {
	    hotAPI.reload("data-v-58cc2e06", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(424);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("63b86c83", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(424, function() {
	     var newContent = __webpack_require__(424);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"questiontype.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(142);
	
	var _quasarFramework = __webpack_require__(19);
	
	exports.default = {
	    name: "questiontype",
	    data: function data() {
	        return {
	            config: {
	                title: 'Question Types',
	                refresh: true,
	                columnPicker: true,
	                leftStickyColumns: 1,
	                rightStickyColumns: 2,
	                bodyStyle: {
	                    maxHeight: _quasarFramework.Platform.is.mobile ? '50vh' : '500px'
	                },
	                rowHeight: '50px',
	                responsive: true,
	                pagination: {
	                    rowsPerPage: 15,
	                    options: [5, 10, 15, 30, 50, 500]
	                },
	                selection: 'single',
	                messages: {
	                    noData: '<i>warning</i> No data available to show.',
	                    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
	                }
	            },
	            columns: [{
	                label: 'Id',
	                field: 'QuestionTypeId',
	                width: '20%',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Name',
	                field: 'QuestionTypeName',
	                width: '40%',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Created Date',
	                field: 'CreatedDate',
	                width: '40%',
	                filter: true,
	                sort: 'date',
	                format: function format(value) {
	                    return new Date(value).toLocaleString();
	                }
	            }],
	
	            pagination: true,
	            rowHeight: 50,
	            bodyHeightProp: 'maxHeight',
	            bodyHeight: 500
	        };
	    },
	
	    watch: {
	        pagination: function pagination(value) {
	            if (!value) {
	                this.oldPagination = _quasarFramework.Utils.clone(this.config.pagination);
	                this.config.pagination = false;
	                return;
	            }
	
	            this.config.pagination = this.oldPagination;
	        },
	        rowHeight: function rowHeight(value) {
	            this.config.rowHeight = value + 'px';
	        },
	        bodyHeight: function bodyHeight(value) {
	            var style = {};
	            if (this.bodyHeightProp !== 'auto') {
	                style[this.bodyHeightProp] = value + 'px';
	            }
	            this.config.bodyStyle = style;
	        },
	        bodyHeightProp: function bodyHeightProp(value) {
	            var style = {};
	            if (value !== 'auto') {
	                style[value] = this.bodyHeight + 'px';
	            }
	            this.config.bodyStyle = style;
	        }
	    },
	    mounted: function mounted() {
	        this.getAllQuestionTypes();
	    },
	    computed: (0, _vuex.mapGetters)(['questiontypes']),
	    methods: (0, _vuex.mapActions)(['getAllQuestionTypes'])
	};

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Question Type\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('q-data-table', {
	    attrs: {
	      "data": _vm.questiontypes,
	      "config": _vm.config,
	      "columns": _vm.columns
	    },
	    scopedSlots: _vm._u([
	      ["col-source", function(cell) {
	        return [(cell.data === 'Audit') ? _c('span', {
	          staticClass: "label text-white bg-primary"
	        }, [_vm._v("\r\n                        Audit\r\n                        "), _c('q-tooltip', [_vm._v("Some tooltip")])], 1) : _c('span', {
	          staticClass: "label text-white bg-negative"
	        }, [_vm._v(_vm._s(cell.data))])]
	      }],
	      ["selection", function(props) {
	        return [_c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.changeMessage(props)
	            }
	          }
	        }, [_c('i', [_vm._v("edit")])]), _vm._v(" "), _c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.deleteRow(props)
	            }
	          }
	        }, [_c('i', [_vm._v("delete")])])]
	      }]
	    ])
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-58cc2e06", module.exports)
	  }
	}

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(428)
	
	var Component = __webpack_require__(237)(
	  /* script */
	  __webpack_require__(430),
	  /* template */
	  __webpack_require__(431),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\user\\user.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(240)
	  hotAPI.install(__webpack_require__(16), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7c29b6dd", Component.options)
	  } else {
	    hotAPI.reload("data-v-7c29b6dd", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(429);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(245)("a51465ba", content, false);
	// Hot Module Replacement
	if(true) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept(429, function() {
	     var newContent = __webpack_require__(429);
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(244)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"user.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(142);
	
	var _quasarFramework = __webpack_require__(19);
	
	exports.default = {
	    name: "user",
	    data: function data() {
	        return {
	            config: {
	                title: 'Users',
	                refresh: true,
	                columnPicker: true,
	                leftStickyColumns: 1,
	                rightStickyColumns: 2,
	                bodyStyle: {
	                    maxHeight: _quasarFramework.Platform.is.mobile ? '50vh' : '500px'
	                },
	                rowHeight: '50px',
	                responsive: true,
	                pagination: {
	                    rowsPerPage: 15,
	                    options: [5, 10, 15, 30, 50, 500]
	                },
	                selection: 'single',
	                messages: {
	                    noData: '<i>warning</i> No data available to show.',
	                    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
	                }
	            },
	            columns: [{
	                label: 'Id',
	                field: 'Id',
	                width: '120px',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Firstname',
	                field: 'FirstName',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Lastname',
	                field: 'LastName',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Email',
	                field: 'Email',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Login',
	                field: 'Login',
	                filter: true,
	                sort: true
	            }, {
	                label: 'UserType',
	                field: 'UserTypeId',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Created Date',
	                field: 'CreatedDate',
	                filter: true,
	                sort: 'date',
	                format: function format(value) {
	                    return new Date(value).toLocaleString();
	                }
	            }],
	
	            pagination: true,
	            rowHeight: 50,
	            bodyHeightProp: 'maxHeight',
	            bodyHeight: 500
	        };
	    },
	
	    watch: {
	        pagination: function pagination(value) {
	            if (!value) {
	                this.oldPagination = _quasarFramework.Utils.clone(this.config.pagination);
	                this.config.pagination = false;
	                return;
	            }
	
	            this.config.pagination = this.oldPagination;
	        },
	        rowHeight: function rowHeight(value) {
	            this.config.rowHeight = value + 'px';
	        },
	        bodyHeight: function bodyHeight(value) {
	            var style = {};
	            if (this.bodyHeightProp !== 'auto') {
	                style[this.bodyHeightProp] = value + 'px';
	            }
	            this.config.bodyStyle = style;
	        },
	        bodyHeightProp: function bodyHeightProp(value) {
	            var style = {};
	            if (value !== 'auto') {
	                style[value] = this.bodyHeight + 'px';
	            }
	            this.config.bodyStyle = style;
	        }
	    },
	    mounted: function mounted() {
	        this.getAllUsers();
	    },
	    computed: (0, _vuex.mapGetters)(['users']),
	    methods: (0, _vuex.mapActions)(['getAllUsers'])
	};

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" User\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('q-data-table', {
	    attrs: {
	      "data": _vm.users,
	      "config": _vm.config,
	      "columns": _vm.columns
	    },
	    scopedSlots: _vm._u([
	      ["col-source", function(cell) {
	        return [(cell.data === 'Audit') ? _c('span', {
	          staticClass: "label text-white bg-primary"
	        }, [_vm._v("\r\n                        Audit\r\n                        "), _c('q-tooltip', [_vm._v("Some tooltip")])], 1) : _c('span', {
	          staticClass: "label text-white bg-negative"
	        }, [_vm._v(_vm._s(cell.data))])]
	      }],
	      ["selection", function(props) {
	        return [_c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.changeMessage(props)
	            }
	          }
	        }, [_c('i', [_vm._v("edit")])]), _vm._v(" "), _c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.deleteRow(props)
	            }
	          }
	        }, [_c('i', [_vm._v("delete")])])]
	      }]
	    ])
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(240).rerender("data-v-7c29b6dd", module.exports)
	  }
	}

/***/ }
]));