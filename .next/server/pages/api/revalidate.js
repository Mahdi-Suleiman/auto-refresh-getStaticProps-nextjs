"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// pages/api/revalidate.js
async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    //   return res.status(401).json({ message: 'Invalid token' })
    // }
    try {
        await res.unstable_revalidate("/autorefresh/1");
        return res.json({
            revalidated: true
        });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send("Error revalidating");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(892));
module.exports = __webpack_exports__;

})();