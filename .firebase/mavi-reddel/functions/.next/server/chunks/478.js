exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 7817:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"item": "Layout_item__fLxnZ"
};


/***/ }),

/***/ 3219:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "LeftPanel_container__JOUS2",
	"reddellogo": "LeftPanel_reddellogo___nBT7",
	"tembokcodelogo": "LeftPanel_tembokcodelogo__NQ5UE"
};


/***/ }),

/***/ 5314:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "RightPanel_container__DOJKT"
};


/***/ }),

/***/ 1505:
/***/ ((module) => {

// Exports
module.exports = {
	"confetti": "SubscribeWidget_confetti__Qcy_2",
	"listo": "SubscribeWidget_listo__GyPr2"
};


/***/ }),

/***/ 5026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_SubscribeWidget_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1505);
/* harmony import */ var _styles_SubscribeWidget_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_SubscribeWidget_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7235);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6281);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




//

// Firebase function to handle database


//

//
const SubscribeWidget = ()=>{
    //
    const dB = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__/* .database */ .F, "launch_subscriptions");
    //
    //******** */
    const [email, setemail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const updateEmail = (event)=>{
        setemail(event.target.value);
    };
    const [working, setworking] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const saveEmail = async ()=>{
        try {
            setworking(true);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(dB, {
                created: Date.now(),
                email: email
            });
            setsubscribed(true);
        } catch (error) {
            alert("Error Adding");
        }
        setworking(false);
    };
    const [subscribed, setsubscribed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    var fieldhtml = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Inscr\xedbete para m\xe1s informaci\xf3n"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                p: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        required: true,
                        disabled: working,
                        color: "secondary",
                        variant: "filled",
                        fullWidth: true,
                        size: "small",
                        placeholder: "me@email.com",
                        autoFocus: true,
                        type: "email",
                        value: email,
                        onChange: updateEmail,
                        onSubmit: saveEmail
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        p: 0.5
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            textAlign: "right"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_2__.LoadingButton, {
                            loading: working,
                            disabled: email === "",
                            color: "secondary",
                            variant: "outlined",
                            size: "small",
                            onClick: saveEmail,
                            children: "Vamos!"
                        })
                    })
                ]
            })
        ]
    });
    var width = 1080;
    var height = 1080;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        window.addEventListener("resize", ()=>{
            width = window.innerWidth;
            height = window.innerHeight;
        });
    }, []);
    var subscribedhtml = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_confetti__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: (_styles_SubscribeWidget_module_css__WEBPACK_IMPORTED_MODULE_7___default().confetti),
                width: width,
                height: height,
                numberOfPieces: 100,
                initialVelocityY: 5
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_SubscribeWidget_module_css__WEBPACK_IMPORTED_MODULE_7___default().listo),
                sx: {
                    textAlign: "center"
                },
                children: "Listo! Estas en nuestra lista VIP!"
            })
        ]
    });
    return subscribed ? subscribedhtml : fieldhtml;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeWidget);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3219);
/* harmony import */ var _styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);




const AnimatedIcons = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\panels\\LeftPanel.jsx -> " + "../AnimatedIcons"
        ]
    },
    ssr: false
});
const LeftPanel = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().reddellogo),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/reddel_logo_outlined_white.png",
                        alt: "",
                        width: 50,
                        height: 50
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Mavi Reddel"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_LeftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().tembokcodelogo),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://tembok.maviweb.app",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/tembok_code_white.png",
                        alt: "Developed by TEMBOK Code",
                        title: "Developed by TEMBOK Code",
                        width: 100,
                        height: 25
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedIcons, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftPanel);


/***/ }),

/***/ 639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RightPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5314);
/* harmony import */ var _styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubscribeWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5026);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SubscribeWidget__WEBPACK_IMPORTED_MODULE_2__]);
_SubscribeWidget__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function RightPanel() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h1",
                        children: [
                            "Muy",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Pronto!"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        p: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "La forma sencilla de ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Gestionar tus Proyectos"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_RightPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Nos encontramos en etapa de prueba antes de lanzar",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "Reddel™"
                            }),
                            " al mundo"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        p: 2
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubscribeWidget__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7817);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panels_LeftPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2171);
/* harmony import */ var _panels_RightPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_RightPanel__WEBPACK_IMPORTED_MODULE_2__]);
_panels_RightPanel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_panels_LeftPanel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_panels_RightPanel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ database)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var _variables_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7196);
/* harmony import */ var _variables_env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variables_env__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9500);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: firebase_api_key,
    authDomain: "mavi-reddel.firebaseapp.com",
    projectId: "mavi-reddel",
    storageBucket: "mavi-reddel.appspot.com",
    messagingSenderId: "1081816256150",
    appId: "1:1081816256150:web:b149b7ea9932f59372bcb7",
    measurementId: "G-NXLMQK3M17"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
//export const analytics = getAnalytics(app);
const database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7196:
/***/ (() => {

firebase_api_key = "AIzaSyDqb8u71XP7od6l37zE-c9kiLCHRZQDXCk"

/***/ })

};
;