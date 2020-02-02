require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EstateDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShowMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ShowMap.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedProduct", "estate", "count", "$delegate"],
  methods: {
    onRentTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var thisapp = _this.$delegate;
        console.log("Rent was pressed");
        var result = confirm({
          title: "Confirm?",
          message: "Will you move in?",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          console.log("Rent was confirmed");
          var response = yield fetch(global.rootURL + "/user/add/" + _this.selectedProduct.id, {
            method: "GET",
            credentials: "same-origin"
          });
          console.log("Rent Info Sent");

          if (response.ok) {
            var resp = yield fetch(global.rootURL + "/user/rent", {
              method: "GET",
              credentials: "same-origin"
            });
            console.log("MyReatal Request Sent");

            if (resp.ok) {
              var rp = yield resp.json();
              console.log("Downloaded MyReatal info: " + JSON.stringify(rp.rentedProd));
              thisapp.rentedProd = rp.persons;
              console.log("MyReatal info: " + JSON.stringify(thisapp.rentedProd));
            } else {
              console.log(resp.statusText);
            }
          } else if (response.status == 422) {
            var data = yield response.text();
            alert(data);
          } else {
            alert("here");
            alert(response.statusText);
          }
        }

        ;
        _this.count = thisapp.rentedProd.filter(function (p) {
          return p.id == this.selectedProduct.id;
        }).length;
      })();
    },

    onDeleteTap() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var thisapp = _this2.$delegate;
        console.log("Delete was pressed");
        var result = confirm({
          title: "Confirm?",
          message: "Will you move out?",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          console.log("Delete was confirmed");
          var response = yield fetch(global.rootURL + "/user/remove/" + _this2.selectedProduct.id, {
            method: "GET",
            credentials: "same-origin"
          });
          console.log("Delete Info Sent");

          if (response.ok) {
            var resp = yield fetch(global.rootURL + "/user/rent", {
              method: "GET",
              credentials: "same-origin"
            });
            console.log("MyReatal Request Sent");

            if (resp.ok) {
              var rp = yield resp.json();
              console.log("Downloaded MyReatal info: " + JSON.stringify(rp.rentedProd));
              thisapp.rentedProd = rp.persons;
              console.log("MyReatal info: " + JSON.stringify(thisapp.rentedProd));
            } else {
              console.log(resp.statusText);
            }
          } else if (response.status == 401) {
            var data = yield response.text();
            alert(data);
          } else {
            alert("here");
            alert(response.statusText);
          }
        }

        ;
        _this2.count = thisapp.rentedProd.filter(function (p) {
          return p.id == this.selectedProduct.id;
        }).length;
      })();
    },

    showMap() {
      console.log("showMap");
      console.log(this.estate.Name + " " + this.estate.Latitude + " " + this.estate.Longitude);
      this.$navigateTo(_ShowMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          lan: this.estate.Latitude,
          lon: this.estate.Longitude,
          name: this.estate.Name,
          $delegate: this
        }
      });
    }

  },

  data() {
    return {};
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EstateDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue");
/* harmony import */ var _InEstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/InEstate.vue");
/* harmony import */ var _ShowMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/ShowMap.vue");
/* harmony import */ var _LessBedroom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/LessBedroom.vue");
/* harmony import */ var _MoreBedroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/MoreBedroom.vue");
/* harmony import */ var _MyRental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/MyRental.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "https://984061b2.ngrok.io";
      var response = yield fetch(global.rootURL + "/person/json", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.products = yield response.json();
        console.log(JSON.stringify(_this.products));
      } else {
        console.log(response.statusText);
      }

      console.log("mounting highlights");
      _this.highlights = _this.products.filter(function (p) {
        return p.highlighted == "y";
      });
      console.log("mounting bedrooms");
      _this.smallerthan3 = _this.products.filter(function (p) {
        return p.bedrooms < 3;
      });
      _this.largerthan3 = _this.products.filter(function (p) {
        return p.bedrooms >= 3;
      });
      console.log("mounting finished");
    })();
  },

  methods: {
    getRented() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var response = yield fetch(global.rootURL + "/user/rent", {
          method: "GET",
          credentials: "same-origin"
        });

        if (response.ok) {
          _this2.rentedProd = yield response.json();
          console.log(JSON.stringify(_this2.rentedProd));
        } else {
          console.log(response.statusText);
        }
      })();
    },

    loginClient() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var thisapp = _this3;
        console.log("loginClient Button was pressed");
        var response = yield fetch(global.rootURL + "/user/login", {
          method: "POST",
          credentials: "same-origin",
          body: "username=" + _this3.username + "&password=" + _this3.password
        });
        console.log("Log In Info Sent");

        if (response.ok) {
          _this3.logined = true;
          _this3.currentuser = _this3.username;
          var resp = yield fetch(global.rootURL + "/user/rent", {
            method: "GET",
            credentials: "same-origin"
          });
          console.log("MyReatal Request Sent");

          if (resp.ok) {
            var rp = yield resp.json();
            console.log("Downloaded MyReatal info: " + JSON.stringify(rp.rentedProd));
            thisapp.rentedProd = rp.persons;
            console.log("MyReatal info: " + JSON.stringify(thisapp.rentedProd));
          } else {
            console.log(resp.statusText);
          }
        } else if (response.status == 401) {
          var data = yield response.text();
          alert(data);
        } else {
          alert("here");
          alert(response.statusText);
        }
      })();
    },

    logoutClient() {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        console.log("logoutClient Button was pressed");
        var response = yield fetch(global.rootURL + "/user/logout", {
          method: "GET",
          credentials: "same-origin"
        });
        console.log("Log out Info Sent");

        if (response.ok) {
          _this4.logined = false;
          _this4.currentuser = "";
        }
      })();
    },

    myRental() {
      this.$navigateTo(_MyRental__WEBPACK_IMPORTED_MODULE_6__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          rentedProd: this.rentedProd,
          $delegate: this
        }
      });
    },

    onItemTap: function onItemTap(args) {
      console.log("Item with id: " + args.index + " tapped");
      console.log("Product selected: " + args.item.title + " " + args.item.estate);
      var theEstate = this.estates.filter(function (e) {
        return e.Name == args.item.estate;
      })[0];
      var count = this.rentedProd.filter(function (p) {
        return p.id == args.item.id;
      }).length;
      console.log("Count number is " + count);
      console.log(JSON.stringify(theEstate));
      this.$navigateTo(_EstateDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedProduct: args.item,
          estate: theEstate,
          count: count,
          $delegate: this
        }
      });
    },
    onEstateTap: function onEstateTap(args) {
      console.log("Estate with id: " + args.index + " tapped");
      console.log("Estate selected: " + args.item.Name);
      this.selectedProducts = this.products.filter(function (p) {
        return p.estate == args.item.Name;
      });
      this.$navigateTo(_InEstate__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedEstate: args.item,
          $delegate: this
        }
      });
    },
    onBRTap: function onBRTap(args) {
      console.log("Bedroom Status with id: " + args.index + " tapped");
      console.log("Bedroom Status selected: " + args.item.name);

      if (args.item.ids == "l3") {
        this.$navigateTo(_LessBedroom__WEBPACK_IMPORTED_MODULE_4__["default"], {
          transition: {},
          transitionIOS: {},
          transitionAndroid: {},
          props: {
            smallerthan3: this.smallerthan3,
            $delegate: this
          }
        });
      } else if (args.item.ids == "m3") {
        this.$navigateTo(_MoreBedroom__WEBPACK_IMPORTED_MODULE_5__["default"], {
          transition: {},
          transitionIOS: {},
          transitionAndroid: {},
          props: {
            largerthan3: this.largerthan3,
            $delegate: this
          }
        });
      }
    }
  },

  data() {
    return {
      username: "",
      password: "",
      logined: false,
      currentuser: "",
      user: [],
      selectedProducts: [],
      theEstate: {},
      products: [],
      rentedProd: [],
      estates: [{
        Latitude: "22.343233",
        Longitude: "114.1852626",
        Name: "Tin Ma Court"
      }, {
        Latitude: "22.3330397",
        Longitude: "114.1645305",
        Name: "Shek Kip Mei"
      }, {
        Latitude: "22.3410169",
        Longitude: "114.1805053",
        Name: "Broadcast Drive"
      }, {
        Latitude: "22.3887767",
        Longitude: "114.1820634",
        Name: "Sha Tin"
      }, {
        Latitude: "22.32198",
        Longitude: "114.1718194",
        Name: "Kowloon City"
      }],
      highlights: [],
      bedroomStatus: [{
        name: "Less than 3 Bedrooms",
        ids: "l3"
      }, {
        name: "More than or equal to 3 Bedrooms",
        ids: "m3"
      }],
      smallerthan3: [],
      largerthan3: []
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/InEstate.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EstateDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//v-if="(selectedEstate.Name == product.estate)"


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedEstate", "$delegate"],

  mounted() {},

  method: {},

  data() {
    return {
      showProds: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LessBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EstateDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//v-if="(selectedEstate.Name == product.estate)"


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["smallerthan3", "$delegate"],
  method: {},

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MoreBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EstateDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//v-if="(selectedEstate.Name == product.estate)"


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["largerthan3", "$delegate"],
  method: {},

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MyRental.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EstateDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["rentedProd", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowMap.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["lan", "lon", "name", "$delegate"],

  // props: [],
  mounted() {
    this.ename = encodeURIComponent(this.name);
  },

  methods: {},

  data() {
    return {
      ename: ""
    };
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-763db97b] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-763db97b] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "form",
              attrs: { orientation: "vertical", margin: "10" }
            },
            [
              _c("Image", {
                attrs: {
                  src: _vm.selectedProduct.image,
                  height: "300",
                  stretch: "aspectFill"
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: { text: _vm.selectedProduct.title, margin: "10" }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: { text: _vm.selectedProduct.estate }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: { text: "Bedrooms:" + _vm.selectedProduct.bedrooms }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: { text: "Rent: HK$" + _vm.selectedProduct.rent }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: { text: "Tenants:" + _vm.selectedProduct.tenants }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: { text: "Area: " + _vm.selectedProduct.grossarea }
              }),
              _vm.$delegate.logined && _vm.count == 0
                ? _c("Button", {
                    staticClass: "btn btn-primary btn-rounded-lg",
                    attrs: { text: "Move-in" },
                    on: { tap: _vm.onRentTap }
                  })
                : _vm.$delegate.logined && _vm.count > 0
                ? _c("Button", {
                    staticClass: "btn btn-warning btn-rounded-lg",
                    attrs: { text: "Move-out" },
                    on: { tap: _vm.onDeleteTap }
                  })
                : _c("Button", {
                    staticClass: "btn btn-primary btn-rounded-lg",
                    attrs: { text: "Login to check your move-in status" }
                  }),
              _c("Button", {
                staticClass: "btn btn-primary btn-rounded-lg",
                attrs: { text: "Show on Map" },
                on: { tap: _vm.showMap }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Real Estate Rental System" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            { attrs: { height: "400px" } },
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Highlights" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Properties" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Bedrooms" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "My Account" } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.highlights, "+alias": "product" },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var product = ref.product
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "400"
                                  }
                                },
                                [
                                  _c("Image", {
                                    attrs: {
                                      src: product.image,
                                      stretch: "aspectFill"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: product.title }
                                  }),
                                  _c("Label", {
                                    staticClass: "h3",
                                    attrs: { text: product.estate }
                                  }),
                                  _c("Label", {
                                    staticClass: "h3",
                                    attrs: { text: "HK$" + product.rent }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.estates, "+alias": "estate" },
                      on: { itemTap: _vm.onEstateTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var estate = ref.estate
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "150"
                                  }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: estate.Name, height: "150" }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.bedroomStatus, "+alias": "brstatus" },
                      on: { itemTap: _vm.onBRTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var brstatus = ref.brstatus
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "150"
                                  }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: {
                                      text: brstatus.name,
                                      height: "150"
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _vm.logined == false
                    ? _c(
                        "ScrollView",
                        { attrs: { orientation: "vertical" } },
                        [
                          _c(
                            "StackLayout",
                            {
                              staticClass: "form",
                              attrs: { orientation: "vertical", margin: "10" }
                            },
                            [
                              _c("TextField", {
                                staticClass: "h2",
                                attrs: { hint: "Username", text: _vm.username },
                                on: {
                                  textChange: function($event) {
                                    _vm.username = $event.value
                                  }
                                }
                              }),
                              _c("TextField", {
                                staticClass: "h2",
                                attrs: {
                                  hint: "Password",
                                  secure: "true",
                                  text: _vm.password
                                },
                                on: {
                                  textChange: function($event) {
                                    _vm.password = $event.value
                                  }
                                }
                              }),
                              _c("Button", {
                                staticClass: "h2",
                                attrs: { text: "Login" },
                                on: { tap: _vm.loginClient }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _c(
                        "ScrollView",
                        { attrs: { orientation: "vertical" } },
                        [
                          _c(
                            "StackLayout",
                            {
                              attrs: { orientation: "vertical", margin: "10" }
                            },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "form",
                                  attrs: {
                                    orientation: "vertical",
                                    margin: "10"
                                  }
                                },
                                [
                                  _c("Image", {
                                    attrs: {
                                      src:
                                        "https://i-love-png.com/images/img_191958_11550.png",
                                      width: "400",
                                      height: "400"
                                    }
                                  }),
                                  _c(
                                    "TextView",
                                    {
                                      attrs: {
                                        editable: "false",
                                        align: "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "FormattedString",
                                        [
                                          _c("Span", {
                                            staticClass: "h1",
                                            attrs: {
                                              text:
                                                "Username: " + _vm.currentuser,
                                              fontWeight: "Bold"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c("Button", {
                                    staticClass: "h2",
                                    attrs: { text: "Logout" },
                                    on: { tap: _vm.logoutClient }
                                  }),
                                  _c("Button", {
                                    staticClass: "h2",
                                    attrs: { text: "My Rental" },
                                    on: { tap: _vm.myRental }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/InEstate.vue?vue&type=template&id=27757cac&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "ListView",
            {
              attrs: {
                items: _vm.$delegate.selectedProducts,
                "+alias": "product"
              },
              on: { itemTap: _vm.$delegate.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var product = ref.product
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical", height: "400" } },
                        [
                          _c("Image", {
                            attrs: { src: product.image, stretch: "aspectFill" }
                          }),
                          _c("Label", {
                            staticClass: "h2",
                            attrs: { text: product.title }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: product.estate }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: "HK$" + product.rent }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LessBedroom.vue?vue&type=template&id=0bf23510&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "ListView",
            {
              attrs: { items: _vm.smallerthan3, "+alias": "product" },
              on: { itemTap: _vm.$delegate.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var product = ref.product
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical", height: "400" } },
                        [
                          _c("Image", {
                            attrs: { src: product.image, stretch: "aspectFill" }
                          }),
                          _c("Label", {
                            staticClass: "h2",
                            attrs: { text: product.title }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: product.estate }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: "HK$" + product.rent }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MoreBedroom.vue?vue&type=template&id=675bc388&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "ListView",
            {
              attrs: { items: _vm.largerthan3, "+alias": "product" },
              on: { itemTap: _vm.$delegate.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var product = ref.product
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical", height: "400" } },
                        [
                          _c("Image", {
                            attrs: { src: product.image, stretch: "aspectFill" }
                          }),
                          _c("Label", {
                            staticClass: "h2",
                            attrs: { text: product.title }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: product.estate }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: "HK$" + product.rent }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MyRental.vue?vue&type=template&id=55d2564b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "ListView",
            {
              attrs: { items: _vm.rentedProd, "+alias": "product" },
              on: { itemTap: _vm.$delegate.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var product = ref.product
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical", height: "400" } },
                        [
                          _c("Image", {
                            attrs: { src: product.image, stretch: "aspectFill" }
                          }),
                          _c("Label", {
                            staticClass: "h2",
                            attrs: { text: product.title }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: product.estate }
                          }),
                          _c("Label", {
                            staticClass: "h3",
                            attrs: { text: "HK$" + product.rent }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowMap.vue?vue&type=template&id=3de84614&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Map of " + _vm.name } }),
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c("WebView", {
            attrs: {
              src:
                "https://leafletapi.mtchoy.now.sh/index.html?lat=" +
                _vm.lan +
                "&lng=" +
                _vm.lon +
                "&zoom=17" +
                "&markerLat=" +
                _vm.lan +
                "&markerLng=" +
                _vm.lon +
                "&markerTitle=" +
                _vm.ename +
                "&locate=true"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

var LoggedInUser = "";
var vueapp = new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <HelloWorld />\n        </Frame>",
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/EstateDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&");
/* harmony import */ var _EstateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/EstateDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('9c62c1d0')) {
      api.createRecord('9c62c1d0', component.options)
    } else {
      api.reload('9c62c1d0', component.options)
    }
    module.hot.accept("./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&");
(function () {
      api.rerender('9c62c1d0', {
        render: _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/EstateDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/EstateDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EstateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EstateDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EstateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EstateDetail.vue?vue&type=template&id=9c62c1d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstateDetail_vue_vue_type_template_id_9c62c1d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/HelloWorld.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "763db97b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('763db97b')) {
      api.createRecord('763db97b', component.options)
    } else {
      api.reload('763db97b', component.options)
    }
    module.hot.accept("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
(function () {
      api.rerender('763db97b', {
        render: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HelloWorld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/InEstate.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/InEstate.vue?vue&type=template&id=27757cac&");
/* harmony import */ var _InEstate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/InEstate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InEstate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('27757cac')) {
      api.createRecord('27757cac', component.options)
    } else {
      api.reload('27757cac', component.options)
    }
    module.hot.accept("./components/InEstate.vue?vue&type=template&id=27757cac&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/InEstate.vue?vue&type=template&id=27757cac&");
(function () {
      api.rerender('27757cac', {
        render: _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/InEstate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/InEstate.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InEstate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/InEstate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InEstate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/InEstate.vue?vue&type=template&id=27757cac&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/InEstate.vue?vue&type=template&id=27757cac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InEstate_vue_vue_type_template_id_27757cac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/LessBedroom.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LessBedroom.vue?vue&type=template&id=0bf23510&");
/* harmony import */ var _LessBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LessBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LessBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0bf23510')) {
      api.createRecord('0bf23510', component.options)
    } else {
      api.reload('0bf23510', component.options)
    }
    module.hot.accept("./components/LessBedroom.vue?vue&type=template&id=0bf23510&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LessBedroom.vue?vue&type=template&id=0bf23510&");
(function () {
      api.rerender('0bf23510', {
        render: _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/LessBedroom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/LessBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LessBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LessBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LessBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/LessBedroom.vue?vue&type=template&id=0bf23510&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LessBedroom.vue?vue&type=template&id=0bf23510&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LessBedroom_vue_vue_type_template_id_0bf23510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/MoreBedroom.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MoreBedroom.vue?vue&type=template&id=675bc388&");
/* harmony import */ var _MoreBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/MoreBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('675bc388')) {
      api.createRecord('675bc388', component.options)
    } else {
      api.reload('675bc388', component.options)
    }
    module.hot.accept("./components/MoreBedroom.vue?vue&type=template&id=675bc388&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MoreBedroom.vue?vue&type=template&id=675bc388&");
(function () {
      api.rerender('675bc388', {
        render: _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/MoreBedroom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/MoreBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MoreBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/MoreBedroom.vue?vue&type=template&id=675bc388&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MoreBedroom.vue?vue&type=template&id=675bc388&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreBedroom_vue_vue_type_template_id_675bc388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/MyRental.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MyRental.vue?vue&type=template&id=55d2564b&");
/* harmony import */ var _MyRental_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/MyRental.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyRental_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('55d2564b')) {
      api.createRecord('55d2564b', component.options)
    } else {
      api.reload('55d2564b', component.options)
    }
    module.hot.accept("./components/MyRental.vue?vue&type=template&id=55d2564b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MyRental.vue?vue&type=template&id=55d2564b&");
(function () {
      api.rerender('55d2564b', {
        render: _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/MyRental.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/MyRental.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRental_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MyRental.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRental_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/MyRental.vue?vue&type=template&id=55d2564b&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MyRental.vue?vue&type=template&id=55d2564b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRental_vue_vue_type_template_id_55d2564b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ShowMap.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowMap.vue?vue&type=template&id=3de84614&");
/* harmony import */ var _ShowMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ShowMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3de84614')) {
      api.createRecord('3de84614', component.options)
    } else {
      api.reload('3de84614', component.options)
    }
    module.hot.accept("./components/ShowMap.vue?vue&type=template&id=3de84614&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowMap.vue?vue&type=template&id=3de84614&");
(function () {
      api.rerender('3de84614', {
        render: _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ShowMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ShowMap.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ShowMap.vue?vue&type=template&id=3de84614&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowMap.vue?vue&type=template&id=3de84614&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowMap_vue_vue_type_template_id_3de84614___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Fc3RhdGVEZXRhaWwudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0luRXN0YXRlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9MZXNzQmVkcm9vbS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTW9yZUJlZHJvb20udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL015UmVudGFsLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaG93TWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzJkOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Fc3RhdGVEZXRhaWwudnVlP2Y4NzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8wMGI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5Fc3RhdGUudnVlPzJjMzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MZXNzQmVkcm9vbS52dWU/NzE4MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vcmVCZWRyb29tLnZ1ZT9lYjRjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlSZW50YWwudnVlPzI2NjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93TWFwLnZ1ZT8yOWE2Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VzdGF0ZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Fc3RhdGVEZXRhaWwudnVlPzg1MWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Fc3RhdGVEZXRhaWwudnVlP2U0MGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzI4ZGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT81MjNhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/NzgzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luRXN0YXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luRXN0YXRlLnZ1ZT8xODlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5Fc3RhdGUudnVlPzQ3NmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MZXNzQmVkcm9vbS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MZXNzQmVkcm9vbS52dWU/ZjU4YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlc3NCZWRyb29tLnZ1ZT8xMWViIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9yZUJlZHJvb20udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9yZUJlZHJvb20udnVlPzllZGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb3JlQmVkcm9vbS52dWU/NjdmYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015UmVudGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015UmVudGFsLnZ1ZT83N2QyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlSZW50YWwudnVlPzg4YWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93TWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3dNYXAudnVlP2JiM2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93TWFwLnZ1ZT9hNzFhIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3R0b20tbmF2aWdhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiIl0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJMb2dnZWRJblVzZXIiLCJ2dWVhcHAiLCJWdWUiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudHMiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUVBO0FBQ0EsNERBREE7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHNDQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQSxxQ0FDQSxnQ0FDQSx3QkFGQSxFQUVBO0FBQ0EseUJBREE7QUFFQTtBQUZBLFdBRkE7QUFRQTs7QUFFQTtBQUNBLG9EQUNBLFlBREEsRUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQSxhQURBO0FBS0E7O0FBQ0E7QUFDQTtBQUNBLDBCQUNBLCtCQUNBLDZCQUZBO0FBSUE7QUFDQSwwQkFDQSxvQkFDQSxrQ0FGQTtBQUlBLGFBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQSxXQXJCQSxNQXFCQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsTUFGQTtBQWxEQTtBQXFEQSxLQXREQTs7QUF3REE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsdUNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FB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Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdUssQ0FBZ0IsMk9BQUcsRUFBQyxDOzs7Ozs7OztBQ0EzTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLGtFOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHdFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEscUY7Ozs7Ozs7QUNBQSw4RTs7Ozs7OztBQ0FBLG1GOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgbWFyZ2luPVwiMTBcIiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInNlbGVjdGVkUHJvZHVjdC5pbWFnZVwiIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzZWxlY3RlZFByb2R1Y3QudGl0bGVcIiBtYXJnaW49XCIxMFwiIGNsYXNzPVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNlbGVjdGVkUHJvZHVjdC5lc3RhdGVcIiBjbGFzcz1cImJvZHlcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidCZWRyb29tczonICsgc2VsZWN0ZWRQcm9kdWN0LmJlZHJvb21zXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5XCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInUmVudDogSEskJyArIHNlbGVjdGVkUHJvZHVjdC5yZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5XCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInVGVuYW50czonICsgc2VsZWN0ZWRQcm9kdWN0LnRlbmFudHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvZHlcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidBcmVhOiAnICsgc2VsZWN0ZWRQcm9kdWN0Lmdyb3NzYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9keVwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2LWlmPVwiKCRkZWxlZ2F0ZS5sb2dpbmVkICYmIGNvdW50ID09IDApXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk1vdmUtaW5cIiBAdGFwPVwib25SZW50VGFwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdi1lbHNlLWlmPVwiKCRkZWxlZ2F0ZS5sb2dpbmVkICYmIGNvdW50ID4gMClcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTW92ZS1vdXRcIiBAdGFwPVwib25EZWxldGVUYXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2LWVsc2UgdGV4dD1cIkxvZ2luIHRvIGNoZWNrIHlvdXIgbW92ZS1pbiBzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2hvdyBvbiBNYXBcIiBAdGFwPVwic2hvd01hcFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IFNob3dNYXAgZnJvbSBcIi4vU2hvd01hcFwiO1xuZXhwb3J0IGRlZmF1bHQgXG57XG4gICAgcHJvcHM6IFtcInNlbGVjdGVkUHJvZHVjdFwiLCBcImVzdGF0ZVwiLCBcImNvdW50XCIsIFwiJGRlbGVnYXRlXCJdLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgb25SZW50VGFwKCkge1xuICAgICAgICAgICAgdmFyIHRoaXNhcHAgPSB0aGlzLiRkZWxlZ2F0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVudCB3YXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtP1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiV2lsbCB5b3UgbW92ZSBpbj9cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW50IHdhcyBjb25maXJtZWRcIik7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5yb290VVJMICsgXCIvdXNlci9hZGQvXCIgKyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbnQgSW5mbyBTZW50XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9yZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXlSZWF0YWwgUmVxdWVzdCBTZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJwID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvd25sb2FkZWQgTXlSZWF0YWwgaW5mbzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJwLnJlbnRlZFByb2QpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc2FwcC5yZW50ZWRQcm9kID0gcnAucGVyc29ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTXlSZWF0YWwgaW5mbzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXNhcHAucmVudGVkUHJvZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcImhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gdGhpc2FwcC5yZW50ZWRQcm9kLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT0gdGhpcy5zZWxlY3RlZFByb2R1Y3QuaWQ7XG4gICAgICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgb25EZWxldGVUYXAoKSB7XG4gICAgICAgICAgICB2YXIgdGhpc2FwcCA9IHRoaXMuJGRlbGVnYXRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgd2FzIHByZXNzZWRcIik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybT9cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIldpbGwgeW91IG1vdmUgb3V0P1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSB3YXMgY29uZmlybWVkXCIpO1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwucm9vdFVSTCArIFwiL3VzZXIvcmVtb3ZlL1wiICsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0LmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgSW5mbyBTZW50XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9yZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXlSZWF0YWwgUmVxdWVzdCBTZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJwID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvd25sb2FkZWQgTXlSZWF0YWwgaW5mbzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJwLnJlbnRlZFByb2QpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc2FwcC5yZW50ZWRQcm9kID0gcnAucGVyc29ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTXlSZWF0YWwgaW5mbzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXNhcHAucmVudGVkUHJvZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcImhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gdGhpc2FwcC5yZW50ZWRQcm9kLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT0gdGhpcy5zZWxlY3RlZFByb2R1Y3QuaWQ7XG4gICAgICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBzaG93TWFwKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93TWFwXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgdGhpcy5lc3RhdGUuTmFtZSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuZXN0YXRlLkxhdGl0dWRlICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5lc3RhdGUuTG9uZ2l0dWRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTaG93TWFwLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhbjogdGhpcy5lc3RhdGUuTGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGxvbjogdGhpcy5lc3RhdGUuTG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmVzdGF0ZS5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJSZWFsIEVzdGF0ZSBSZW50YWwgU3lzdGVtXCIgLz5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVwiNDAwcHhcIj5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhpZ2hsaWdodHNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUHJvcGVydGllc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJCZWRyb29tc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNeSBBY2NvdW50XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9kdWN0IGluIGhpZ2hsaWdodHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwicHJvZHVjdC5pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QudGl0bGVcIiBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicHJvZHVjdC5lc3RhdGVcIiBjbGFzcz1cImgzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0hLJCcgKyBwcm9kdWN0LnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImVzdGF0ZSBpbiBlc3RhdGVzXCIgQGl0ZW1UYXA9XCJvbkVzdGF0ZVRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXN0YXRlLk5hbWVcIiBjbGFzcz1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImJyc3RhdHVzIGluIGJlZHJvb21TdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCJvbkJSVGFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJicnN0YXR1cy5uYW1lXCIgY2xhc3M9XCJoMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3IHYtaWY9XCJsb2dpbmVkID09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInVzZXJuYW1lXCIgaGludD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicGFzc3dvcmRcIiBoaW50PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCIgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwibG9naW5DbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXcgdi1lbHNlIG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgbWFyZ2luPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLWxvdmUtcG5nLmNvbS9pbWFnZXMvaW1nXzE5MTk1OF8xMTU1MC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFZpZXcgZWRpdGFibGU9XCJmYWxzZVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ1VzZXJuYW1lOiAnICsgY3VycmVudHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiQm9sZFwiIGNsYXNzPVwiaDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiIEB0YXA9XCJsb2dvdXRDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIk15IFJlbnRhbFwiIEB0YXA9XCJteVJlbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgRXN0YXRlRGV0YWlsIGZyb20gXCIuL0VzdGF0ZURldGFpbFwiO1xuICAgIGltcG9ydCBJbkVzdGF0ZSBmcm9tIFwiLi9JbkVzdGF0ZVwiO1xuICAgIGltcG9ydCBTaG93TWFwIGZyb20gXCIuL1Nob3dNYXBcIjtcbiAgICBpbXBvcnQgTGVzc0JlZHJvb20gZnJvbSBcIi4vTGVzc0JlZHJvb21cIjtcbiAgICBpbXBvcnQgTW9yZUJlZHJvb20gZnJvbSBcIi4vTW9yZUJlZHJvb21cIjtcbiAgICBpbXBvcnQgTXlSZW50YWwgZnJvbSBcIi4vTXlSZW50YWxcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBnbG9iYWwucm9vdFVSTCA9IFwiaHR0cHM6Ly85ODQwNjFiMi5uZ3Jvay5pb1wiO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi9wZXJzb24vanNvblwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdW50aW5nIGhpZ2hsaWdodHNcIik7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuaGlnaGxpZ2h0ZWQgPT0gXCJ5XCI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3VudGluZyBiZWRyb29tc1wiKTtcbiAgICAgICAgICAgIHRoaXMuc21hbGxlcnRoYW4zID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmJlZHJvb21zIDwgMztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sYXJnZXJ0aGFuMyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5iZWRyb29tcyA+PSAzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW91bnRpbmcgZmluaXNoZWRcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXN5bmMgZ2V0UmVudGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgICAgICBcIi91c2VyL3JlbnRcIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW50ZWRQcm9kID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlbnRlZFByb2QpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhc3luYyBsb2dpbkNsaWVudCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc2FwcCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbkNsaWVudCBCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgIFwiL3VzZXIvbG9naW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcInVzZXJuYW1lPVwiICsgdGhpcy51c2VybmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiZwYXNzd29yZD1cIiArIHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZyBJbiBJbmZvIFNlbnRcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50dXNlciA9IHRoaXMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICAgICAgICAgICAgICBcIi91c2VyL3JlbnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNeVJlYXRhbCBSZXF1ZXN0IFNlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnAgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRG93bmxvYWRlZCBNeVJlYXRhbCBpbmZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocnAucmVudGVkUHJvZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzYXBwLnJlbnRlZFByb2QgPSBycC5wZXJzb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNeVJlYXRhbCBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbnRlZFByb2QpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJoZXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhc3luYyBsb2dvdXRDbGllbnQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXRDbGllbnQgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9sb2dvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZyBvdXQgSW5mbyBTZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50dXNlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbXlSZW50YWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhNeVJlbnRhbCwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbnRlZFByb2Q6IHRoaXMucmVudGVkUHJvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpZDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcIlByb2R1Y3Qgc2VsZWN0ZWQ6IFwiICsgYXJncy5pdGVtLnRpdGxlICsgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0uZXN0YXRlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB2YXIgdGhlRXN0YXRlID0gdGhpcy5lc3RhdGVzLmZpbHRlcihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLk5hbWUgPT0gYXJncy5pdGVtLmVzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSB0aGlzLnJlbnRlZFByb2QuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT0gYXJncy5pdGVtLmlkO1xuICAgICAgICAgICAgICAgIH0pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50IG51bWJlciBpcyBcIiArIGNvdW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGVFc3RhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEVzdGF0ZURldGFpbCwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvZHVjdDogYXJncy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0YXRlOiB0aGVFc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXN0YXRlVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFc3RhdGUgd2l0aCBpZDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXN0YXRlIHNlbGVjdGVkOiBcIiArIGFyZ3MuaXRlbS5OYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmVzdGF0ZSA9PSBhcmdzLml0ZW0uTmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEluRXN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFc3RhdGU6IGFyZ3MuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CUlRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmVkcm9vbSBTdGF0dXMgd2l0aCBpZDogXCIgKyBhcmdzLmluZGV4ICtcbiAgICAgICAgICAgICAgICAgICAgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmVkcm9vbSBTdGF0dXMgc2VsZWN0ZWQ6IFwiICsgYXJncy5pdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLml0ZW0uaWRzID09IFwibDNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExlc3NCZWRyb29tLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbGVydGhhbjM6IHRoaXMuc21hbGxlcnRoYW4zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaXRlbS5pZHMgPT0gXCJtM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTW9yZUJlZHJvb20sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlcnRoYW4zOiB0aGlzLmxhcmdlcnRoYW4zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9naW5lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY3VycmVudHVzZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgdXNlcjogW10sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0czogW10sXG4gICAgICAgICAgICAgICAgdGhlRXN0YXRlOiB7fSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgICAgICAgICAgcmVudGVkUHJvZDogW10sXG4gICAgICAgICAgICAgICAgZXN0YXRlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGl0dWRlOiBcIjIyLjM0MzIzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4xODUyNjI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlRpbiBNYSBDb3VydFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGl0dWRlOiBcIjIyLjMzMzAzOTdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMTY0NTMwNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJTaGVrIEtpcCBNZWlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zNDEwMTY5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBMb25naXR1ZGU6IFwiMTE0LjE4MDUwNTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiQnJvYWRjYXN0IERyaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTGF0aXR1ZGU6IFwiMjIuMzg4Nzc2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4xODIwNjM0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlNoYSBUaW5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zMjE5OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4xNzE4MTk0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIktvd2xvb24gQ2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodHM6IFtdLFxuICAgICAgICAgICAgICAgIGJlZHJvb21TdGF0dXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkxlc3MgdGhhbiAzIEJlZHJvb21zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHM6IFwibDNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1vcmUgdGhhbiBvciBlcXVhbCB0byAzIEJlZHJvb21zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHM6IFwibTNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzbWFsbGVydGhhbjM6IFtdLFxuICAgICAgICAgICAgICAgIGxhcmdlcnRoYW4zOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAuaG9tZS1wYW5lbCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgIG1hcmdpbjogMTU7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9kdWN0IGluICRkZWxlZ2F0ZS5zZWxlY3RlZFByb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICBAaXRlbVRhcD1cIiRkZWxlZ2F0ZS5vbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QudGl0bGVcIiBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QuZXN0YXRlXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInSEskJyArIHByb2R1Y3QucmVudFwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIC8vdi1pZj1cIihzZWxlY3RlZEVzdGF0ZS5OYW1lID09IHByb2R1Y3QuZXN0YXRlKVwiXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBFc3RhdGVEZXRhaWwgZnJvbSBcIi4vRXN0YXRlRGV0YWlsXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1wic2VsZWN0ZWRFc3RhdGVcIiwgXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIG1vdW50ZWQoKSB7fSxcbiAgICAgICAgbWV0aG9kOiB7fSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvd1Byb2RzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9kdWN0IGluIHNtYWxsZXJ0aGFuM1wiXG4gICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCIkZGVsZWdhdGUub25JdGVtVGFwXCI+XG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInByb2R1Y3QuaW1hZ2VcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJwcm9kdWN0LnRpdGxlXCIgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJwcm9kdWN0LmVzdGF0ZVwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0hLJCcgKyBwcm9kdWN0LnJlbnRcIiBjbGFzcz1cImgzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICAvL3YtaWY9XCIoc2VsZWN0ZWRFc3RhdGUuTmFtZSA9PSBwcm9kdWN0LmVzdGF0ZSlcIlxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgRXN0YXRlRGV0YWlsIGZyb20gXCIuL0VzdGF0ZURldGFpbFwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcInNtYWxsZXJ0aGFuM1wiLCBcIiRkZWxlZ2F0ZVwiXSxcbiAgICAgICAgbWV0aG9kOiB7fSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9kdWN0IGluIGxhcmdlcnRoYW4zXCJcbiAgICAgICAgICAgICAgICBAaXRlbVRhcD1cIiRkZWxlZ2F0ZS5vbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QudGl0bGVcIiBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QuZXN0YXRlXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInSEskJyArIHByb2R1Y3QucmVudFwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIC8vdi1pZj1cIihzZWxlY3RlZEVzdGF0ZS5OYW1lID09IHByb2R1Y3QuZXN0YXRlKVwiXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBFc3RhdGVEZXRhaWwgZnJvbSBcIi4vRXN0YXRlRGV0YWlsXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1wibGFyZ2VydGhhbjNcIiwgXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIG1ldGhvZDoge30sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicHJvZHVjdCBpbiByZW50ZWRQcm9kXCJcbiAgICAgICAgICAgICAgICBAaXRlbVRhcD1cIiRkZWxlZ2F0ZS5vbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QudGl0bGVcIiBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInByb2R1Y3QuZXN0YXRlXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInSEskJyArIHByb2R1Y3QucmVudFwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgRXN0YXRlRGV0YWlsIGZyb20gXCIuL0VzdGF0ZURldGFpbFwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcInJlbnRlZFByb2RcIiwgXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIDp0aXRsZT1cIidNYXAgb2YgJyArIG5hbWVcIiAvPlxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8IS0tIDxXZWJWaWV3XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9MjIuMzQmbG5nPTExNC4xOCZ6b29tPTE3Jm1hcmtlckxhdD0yMi4zNDEwNzImbWFya2VyTG5nPTExNC4xNzk2NDUmbWFya2VyVGl0bGU9QUMlMjBIYWxsJmxvY2F0ZT10cnVlXCIgLz4gLS0+XG4gICAgICAgICAgICA8V2ViVmlld1xuICAgICAgICAgICAgICAgIDpzcmM9XCInaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9JyArIGxhbiArICcmbG5nPScgKyBsb24gKyAnJnpvb209MTcnICsgJyZtYXJrZXJMYXQ9JyArIGxhblxuXHRcdFx0ICAgICAgICAgICAgKyAnJm1hcmtlckxuZz0nICsgbG9uICsgJyZtYXJrZXJUaXRsZT0nICsgZW5hbWUgKyAnJmxvY2F0ZT10cnVlJ1wiIC8+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcImxhblwiLCBcImxvblwiLCBcIm5hbWVcIiwgXCIkZGVsZWdhdGVcIl0sXG4gICAgICAgIC8vIHByb3BzOiBbXSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuYW1lOiBcIlwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTc2M2RiOTdiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgbWFyZ2luOiBcIjEwXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNlbGVjdGVkUHJvZHVjdC5pbWFnZSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRQcm9kdWN0LnRpdGxlLCBtYXJnaW46IFwiMTBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkUHJvZHVjdC5lc3RhdGUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQmVkcm9vbXM6XCIgKyBfdm0uc2VsZWN0ZWRQcm9kdWN0LmJlZHJvb21zIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlbnQ6IEhLJFwiICsgX3ZtLnNlbGVjdGVkUHJvZHVjdC5yZW50IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlRlbmFudHM6XCIgKyBfdm0uc2VsZWN0ZWRQcm9kdWN0LnRlbmFudHMgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQXJlYTogXCIgKyBfdm0uc2VsZWN0ZWRQcm9kdWN0Lmdyb3NzYXJlYSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uJGRlbGVnYXRlLmxvZ2luZWQgJiYgX3ZtLmNvdW50ID09IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTW92ZS1pblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uUmVudFRhcCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLiRkZWxlZ2F0ZS5sb2dpbmVkICYmIF92bS5jb3VudCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTW92ZS1vdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRlbGV0ZVRhcCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dpbiB0byBjaGVjayB5b3VyIG1vdmUtaW4gc3RhdHVzXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNob3cgb24gTWFwXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93TWFwIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiUmVhbCBFc3RhdGUgUmVudGFsIFN5c3RlbVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJIaWdobGlnaHRzXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlByb3BlcnRpZXNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQmVkcm9vbXNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTXkgQWNjb3VudFwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5oaWdobGlnaHRzLCBcIithbGlhc1wiOiBcInByb2R1Y3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlZi5wcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHByb2R1Y3QuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcHJvZHVjdC50aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcHJvZHVjdC5lc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSEskXCIgKyBwcm9kdWN0LnJlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZXN0YXRlcywgXCIrYWxpYXNcIjogXCJlc3RhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkVzdGF0ZVRhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc3RhdGUgPSByZWYuZXN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogZXN0YXRlLk5hbWUsIGhlaWdodDogXCIxNTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5iZWRyb29tU3RhdHVzLCBcIithbGlhc1wiOiBcImJyc3RhdHVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25CUlRhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBicnN0YXR1cyA9IHJlZi5icnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGJyc3RhdHVzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luZWQgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIG1hcmdpbjogXCIxMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJVc2VybmFtZVwiLCB0ZXh0OiBfdm0udXNlcm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VybmFtZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9naW5DbGllbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBtYXJnaW46IFwiMTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaS1sb3ZlLXBuZy5jb20vaW1hZ2VzL2ltZ18xOTE5NThfMTE1NTAucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGV4dFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVc2VybmFtZTogXCIgKyBfdm0uY3VycmVudHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJCb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ291dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5sb2dvdXRDbGllbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk15IFJlbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5teVJlbnRhbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS4kZGVsZWdhdGUuc2VsZWN0ZWRQcm9kdWN0cyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcInByb2R1Y3RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uJGRlbGVnYXRlLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjQwMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwcm9kdWN0LmltYWdlLCBzdHJldGNoOiBcImFzcGVjdEZpbGxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QudGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBwcm9kdWN0LmVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSEskXCIgKyBwcm9kdWN0LnJlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uc21hbGxlcnRoYW4zLCBcIithbGlhc1wiOiBcInByb2R1Y3RcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uJGRlbGVnYXRlLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjQwMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwcm9kdWN0LmltYWdlLCBzdHJldGNoOiBcImFzcGVjdEZpbGxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QudGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBwcm9kdWN0LmVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSEskXCIgKyBwcm9kdWN0LnJlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0ubGFyZ2VydGhhbjMsIFwiK2FsaWFzXCI6IFwicHJvZHVjdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS4kZGVsZWdhdGUub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlZi5wcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBoZWlnaHQ6IFwiNDAwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcHJvZHVjdC50aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QuZXN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJISyRcIiArIHByb2R1Y3QucmVudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5yZW50ZWRQcm9kLCBcIithbGlhc1wiOiBcInByb2R1Y3RcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uJGRlbGVnYXRlLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjQwMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwcm9kdWN0LmltYWdlLCBzdHJldGNoOiBcImFzcGVjdEZpbGxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QudGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBwcm9kdWN0LmVzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSEskXCIgKyBwcm9kdWN0LnJlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJNYXAgb2YgXCIgKyBfdm0ubmFtZSB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJXZWJWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vbGVhZmxldGFwaS5tdGNob3kubm93LnNoL2luZGV4Lmh0bWw/bGF0PVwiICtcbiAgICAgICAgICAgICAgICBfdm0ubGFuICtcbiAgICAgICAgICAgICAgICBcIiZsbmc9XCIgK1xuICAgICAgICAgICAgICAgIF92bS5sb24gK1xuICAgICAgICAgICAgICAgIFwiJnpvb209MTdcIiArXG4gICAgICAgICAgICAgICAgXCImbWFya2VyTGF0PVwiICtcbiAgICAgICAgICAgICAgICBfdm0ubGFuICtcbiAgICAgICAgICAgICAgICBcIiZtYXJrZXJMbmc9XCIgK1xuICAgICAgICAgICAgICAgIF92bS5sb24gK1xuICAgICAgICAgICAgICAgIFwiJm1hcmtlclRpdGxlPVwiICtcbiAgICAgICAgICAgICAgICBfdm0uZW5hbWUgK1xuICAgICAgICAgICAgICAgIFwiJmxvY2F0ZT10cnVlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vL1Z1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cbnZhciBMb2dnZWRJblVzZXIgPSBcIlwiXG5cbnZhciB2dWVhcHAgPSBuZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxIZWxsb1dvcmxkIC8+XG4gICAgICAgIDwvRnJhbWU+YCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVsbG9Xb3JsZFxuICAgIH1cbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXN0YXRlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YzYyYzFkMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Fc3RhdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Fc3RhdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxDT01QXFxcXDIwMTlcXFxccHJvamVjdC1tb2JpbGUtYXBwLWxqeW91MDAxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzljNjJjMWQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzljNjJjMWQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzljNjJjMWQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Fc3RhdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTljNjJjMWQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzljNjJjMWQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0VzdGF0ZURldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXN0YXRlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VzdGF0ZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXN0YXRlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YzYyYzFkMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2M2RiOTdiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcQ09NUFxcXFwyMDE5XFxcXHByb2plY3QtbW9iaWxlLWFwcC1sanlvdTAwMVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NjNkYjk3YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NjNkYjk3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NjNkYjk3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzYzZGI5N2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbkVzdGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc3NTdjYWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5Fc3RhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbkVzdGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXENPTVBcXFxcMjAxOVxcXFxwcm9qZWN0LW1vYmlsZS1hcHAtbGp5b3UwMDFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjc3NTdjYWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjc3NTdjYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjc3NTdjYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luRXN0YXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzc1N2NhYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNzc1N2NhYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9JbkVzdGF0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5Fc3RhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5Fc3RhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luRXN0YXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzc1N2NhYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTGVzc0JlZHJvb20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiZjIzNTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xlc3NCZWRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGVzc0JlZHJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxDT01QXFxcXDIwMTlcXFxccHJvamVjdC1tb2JpbGUtYXBwLWxqeW91MDAxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBiZjIzNTEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiZjIzNTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiZjIzNTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MZXNzQmVkcm9vbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJmMjM1MTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJmMjM1MTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTGVzc0JlZHJvb20udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlc3NCZWRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlc3NCZWRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZXNzQmVkcm9vbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJmMjM1MTAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01vcmVCZWRyb29tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzViYzM4OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb3JlQmVkcm9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vcmVCZWRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcQ09NUFxcXFwyMDE5XFxcXHByb2plY3QtbW9iaWxlLWFwcC1sanlvdTAwMVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzViYzM4OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzViYzM4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzViYzM4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9yZUJlZHJvb20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NWJjMzg4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NWJjMzg4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL01vcmVCZWRyb29tLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb3JlQmVkcm9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb3JlQmVkcm9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9yZUJlZHJvb20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NWJjMzg4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeVJlbnRhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTVkMjU2NGImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlSZW50YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NeVJlbnRhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXENPTVBcXFxcMjAxOVxcXFxwcm9qZWN0LW1vYmlsZS1hcHAtbGp5b3UwMDFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTVkMjU2NGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTVkMjU2NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTVkMjU2NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015UmVudGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NWQyNTY0YiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NWQyNTY0YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NeVJlbnRhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlSZW50YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlSZW50YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015UmVudGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NWQyNTY0YiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvd01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RlODQ2MTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvd01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3dNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxDT01QXFxcXDIwMTlcXFxccHJvamVjdC1tb2JpbGUtYXBwLWxqeW91MDAxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNkZTg0NjE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkZTg0NjE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkZTg0NjE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93TWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGU4NDYxNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZGU4NDYxNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TaG93TWFwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93TWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3dNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3dNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkZTg0NjE0JlwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9