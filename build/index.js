/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);

 // Import the render function from wordpress



// Here I created a simple random number generator
const RandomNumberDashboardWidget = () => {
  const date = new Date();

  // 1. Pobrać wszystkie kupony, które są jeszcze aktualne i przypisać je do tablicy coupons. Pobieramy kupony z data miesiac do tylu.
  // 2. Sprawdzic kod ostatnich dwoch/trzech kuponow
  //    - pobrac ostatni obiekt coupon
  //    - sprawdzic jaki je

  // *
  // State
  // *
  const [coupons, setCoupons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [couponCodes, setCouponCodes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // *
  // Pobranie ostatnich kuponow ze sklepu
  // *
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // console.log("RENDER * USE EFFECT * POBRANIE KUPONOW")
    const fetchData = async () => {
      // Pobranie kuponow na miesiac do tylu, ale domyslnie pobiera tylko 10 sztuk
      // 
      // const today = new Date();
      // today.setMonth(today.getMonth() - 1);
      // const params = { after: today.toISOString() }
      // apiFetch({ path: addQueryArgs('/wc/v3/coupons', params) }).then((fetchedCoupons) => setCoupons(fetchedCoupons));

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: '/wc/v3/coupons'
      }).then(fetchedCoupons => setCoupons(fetchedCoupons));
    };
    fetchData().catch(console.error);
  }, coupons);

  // *
  // Przypisanie samych kodow kuponow
  // *
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newCoupons = coupons.map(coupon => coupon.code);
    setCouponCodes(prevCoupons => [...prevCoupons, ...newCoupons]);
  }, [coupons]);

  // *
  // Wyswietlenie kodow kuponow
  // *
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("kody: ", couponCodes);
  }, [couponCodes]);
  const lastCoupon = () => {
    // console.log("RENDER * LAST COUPON CODE * SPRAWDZENIE KUPONOW")

    const length = coupons.length;

    // console.log(coupons[length - 1]);

    const lastCoupon = coupons[length - 1];

    // console.log("ostatni:", lastCoupon)

    if (lastCoupon) {
      // setArray(oldArray => [...oldArray, newValue]);

      // coupons.map(coupon => setCouponCodes(...couponCodes, coupon.code));

      const newValues = coupons.map(coupon => coupon.code);

      // console.log("wartosci: ", newValues);

      // console.log("set");

      // addCouponsCodes();
      // console.log("kupony:", couponCodes)

      // setCouponCodes(prevCouponCodes => [...prevCouponCodes, newValues]);

      // setCouponCodes(newValues)

      // lastCoupon.amount = 15;
      // console.log("ustawiony:", lastCoupon)

      // const lastCouponCode = lastCoupon.code;
      // console.log(lastCouponCode)
    }

    // lastCoupon.amount = 15;
  };

  // const test = () => {
  //     coupons.map(coupon => console.log(coupon.code));
  // }

  const randomNumber = Math.floor(Math.random() * 100);
  const couponData = {
    "code": "testKOD",
    "amount": "10",
    "discount_type": "percent",
    "description": "generated coupon - description",
    "date_expires": "2023-06-28",
    "individual_use": true,
    "exclude_sale_items": true,
    "usage_limit": 1
  };

  // apiFetch({
  //     path: '/wc/v3/coupons',
  //     method: 'POST',
  //     data: couponData
  // }).then((res) => {
  //     console.log(res);
  // });

  // return the random number in a <p> tag
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, lastCoupon(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Random number: ", randomNumber));
};
document.addEventListener("DOMContentLoaded", () => {
  // Get the widget id, which we set in the .php file when running wp_add_dashboard_widget
  const widgetContainer = document.getElementById("random-number-dashboard-widget");
  // If that dashboard widget exists
  if (widgetContainer) {
    // Use the wordpress render function to render out the RandomNumberDashboardWidget function's output, and append it to the widget container
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RandomNumberDashboardWidget, null), widgetContainer);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map