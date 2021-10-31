/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.app = void 0;\n/* eslint-disable no-undef */\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nvar errorhandler_1 = __importDefault(__webpack_require__(/*! errorhandler */ \"errorhandler\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nexports.app = (0, express_1.default)();\nif (true) {\n    exports.app.use((0, cors_1.default)());\n}\nexports.app.use(express_1.default.json());\nexports.app.use(express_1.default.urlencoded({ extended: true }));\nexports.app.use(express_1.default.static(\"public\"));\nexports.app.use((0, morgan_1.default)(\"dev\"));\n__webpack_require__(/*! ./database/database.service */ \"./src/database/database.service.ts\").connectDB();\nexports.app.get(\"/\", function (req, res) {\n    res.sendFile(path_1.default.join(process.cwd(), \"public\", \"index.html\"));\n});\n__webpack_require__(/*! ./auth/auth.routes */ \"./src/auth/auth.routes.ts\")(exports.app);\n__webpack_require__(/*! ./user/user.routes */ \"./src/user/user.routes.ts\")(exports.app);\n__webpack_require__(/*! ./spot/spot.route */ \"./src/spot/spot.route.ts\")(exports.app);\n__webpack_require__(/*! ./comment/comment.route */ \"./src/comment/comment.route.ts\")(exports.app);\nexports.app.get(\"/*\", function (req, res) {\n    res.sendFile(path_1.default.join(process.cwd(), \"public\", \"index.html\"));\n});\nif (true) {\n    exports.app.use((0, errorhandler_1.default)());\n}\nelse {}\nmodule.exports = exports.app;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/auth/auth.config.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.config = void 0;\nexports.config = { secret: (_a = process.env.TOKEN_KEY) !== null && _a !== void 0 ? _a : \"\" };\n\n\n//# sourceURL=webpack:///./src/auth/auth.config.ts?");

/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.signin = exports.signup = void 0;\nvar role_model_1 = __webpack_require__(/*! ../role/role.model */ \"./src/role/role.model.ts\");\nvar user_service_1 = __webpack_require__(/*! ../user/user.service */ \"./src/user/user.service.ts\");\nvar auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/auth/auth.service.ts\");\nvar signup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, username, email, password;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, username = _a.username, email = _a.email, password = _a.password;\n                return [4 /*yield*/, user_service_1.userService.createUser({ username: username, email: email, password: password, roles: [{ name: role_model_1.RoleEnum.USER }] })];\n            case 1:\n                _b.sent();\n                return [2 /*return*/, res.status(201).send(\"User successfully created\")];\n        }\n    });\n}); };\nexports.signup = signup;\nvar signin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, username, password, user, isPasswordValide, rolesNamesRelatedToUser, token, authorities, i;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, username = _a.username, password = _a.password;\n                return [4 /*yield*/, user_service_1.userService.getUserByUsername(username)];\n            case 1:\n                user = _b.sent();\n                if (!user) {\n                    return [2 /*return*/, res.status(404).send(\"User Not found.\")];\n                }\n                isPasswordValide = auth_service_1.authService.validatePassword(password, user.password);\n                if (!isPasswordValide) {\n                    return [2 /*return*/, res.status(401).send(\"Invalid Password!\")];\n                }\n                rolesNamesRelatedToUser = user.roles.map(function (role) {\n                    return role.name;\n                });\n                token = auth_service_1.authService.generateJwtToken({\n                    id: user._id,\n                    roles: rolesNamesRelatedToUser,\n                });\n                authorities = [];\n                for (i = 0; i < user.roles.length; i++) {\n                    authorities.push(\"ROLE_\" + user.roles[i].name.toUpperCase());\n                }\n                res.status(200).send({\n                    id: user._id,\n                    username: user.username,\n                    email: user.email,\n                    roles: authorities,\n                    accessToken: token,\n                });\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.signin = signin;\n\n\n//# sourceURL=webpack:///./src/auth/auth.controller.ts?");

/***/ }),

/***/ "./src/auth/auth.routes.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.routes.ts ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/auth/auth.service.ts\");\nvar role_service_1 = __webpack_require__(/*! ../role/role.service */ \"./src/role/role.service.ts\");\nvar authController = __importStar(__webpack_require__(/*! ./auth.controller */ \"./src/auth/auth.controller.ts\"));\nmodule.exports = function (app) {\n    app.use(function (req, res, next) {\n        res.header(\"Access-Control-Allow-Headers\", \"x-access-token, Origin, Content-Type, Accept\");\n        next();\n    });\n    app.post(\"/api/auth/signup\", [\n        auth_service_1.authService.validateAuthInput,\n        auth_service_1.authService.checkDuplicateUsername,\n        auth_service_1.authService.checkDuplicateEmail,\n        role_service_1.roleService.checkRolesExisted,\n    ], authController.signup);\n    app.post(\"/api/auth/signin\", auth_service_1.authService.validateAuthInput, authController.signin);\n};\n\n\n//# sourceURL=webpack:///./src/auth/auth.routes.ts?");

/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.authService = void 0;\nvar jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar auth_config_1 = __webpack_require__(/*! ./auth.config */ \"./src/auth/auth.config.ts\");\nvar bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nvar user_service_1 = __webpack_require__(/*! ../user/user.service */ \"./src/user/user.service.ts\");\nvar validator_1 = __importDefault(__webpack_require__(/*! validator */ \"validator\"));\nvar logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\nvar verifyToken = function (req, res, next) {\n    var token = req.headers[\"x-access-token\"];\n    if (!token) {\n        return res.status(403).send({ message: \"No token provided!\" });\n    }\n    var tokenPayload = (0, jsonwebtoken_1.verify)(token[0], auth_config_1.config.secret);\n    if (!tokenPayload) {\n        return res.status(401).send({ message: \"Unauthorized!\" });\n    }\n    req.userId = tokenPayload.id;\n    next();\n};\nvar checkDuplicateUsername = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var username, user, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                username = req.body.username;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, user_service_1.userService.getUserByUsername(username)];\n            case 2:\n                user = _a.sent();\n                if (user) {\n                    res.status(403).send(\"Failed : Username is already use !\");\n                    return [2 /*return*/];\n                }\n                return [3 /*break*/, 4];\n            case 3:\n                error_1 = _a.sent();\n                logger_1.logger.error(\"error \" + error_1);\n                res.status(500).send(error_1);\n                return [3 /*break*/, 4];\n            case 4:\n                next();\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar checkDuplicateEmail = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var email, user, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                email = req.body.email;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, user_service_1.userService.getUserIdByEmail(email)];\n            case 2:\n                user = _a.sent();\n                if (user) {\n                    res.status(403).send(\"Failed! Email is already in use!\");\n                    return [2 /*return*/];\n                }\n                return [3 /*break*/, 4];\n            case 3:\n                error_2 = _a.sent();\n                logger_1.logger.error(\"error \" + error_2);\n                res.status(500).send(error_2);\n                return [3 /*break*/, 4];\n            case 4:\n                next();\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar validatePassword = function (inputPassword, userPassword) {\n    return bcrypt_1.default.compareSync(inputPassword, userPassword);\n};\nvar generateJwtToken = function (payload) {\n    var oneDayInSecond = 3600 * 60 * 24;\n    return (0, jsonwebtoken_1.sign)(payload, auth_config_1.config.secret, {\n        expiresIn: oneDayInSecond,\n    });\n};\nvar validateAuthInput = function (req, res, next) {\n    var _a = req.body, username = _a.username, email = _a.email;\n    if (email && !validator_1.default.isEmail(email)) {\n        res.status(403).send(\"Email is not valid !\");\n    }\n    if (username && !validator_1.default.isAlphanumeric(username)) {\n        res.status(403).send(\"username can only contain letters and numbers\");\n    }\n    if (username && !validator_1.default.isLength(username, { min: 3, max: 20 })) {\n        res.status(403).send(\"username must be between 3 and 20 charaters\");\n    }\n    next();\n};\nexports.authService = {\n    generateJwtToken: generateJwtToken,\n    validateAuthInput: validateAuthInput,\n    verifyToken: verifyToken,\n    checkDuplicateEmail: checkDuplicateEmail,\n    checkDuplicateUsername: checkDuplicateUsername,\n    validatePassword: validatePassword,\n};\n\n\n//# sourceURL=webpack:///./src/auth/auth.service.ts?");

/***/ }),

/***/ "./src/comment/Comment.model.ts":
/*!**************************************!*\
  !*** ./src/comment/Comment.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.commentModel = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar commentSchema = new mongoose_1.Schema({\n    rating: { type: Number, required: true, min: 0, max: 3 },\n    text: { type: String, maxLength: 256 },\n    spotId: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        ref: \"Spot\",\n    },\n    authorId: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        ref: \"User\",\n    },\n}, { timestamps: true });\nexports.commentModel = (0, mongoose_1.model)(\"Comment\", commentSchema);\n\n\n//# sourceURL=webpack:///./src/comment/Comment.model.ts?");

/***/ }),

/***/ "./src/comment/comment.controller.ts":
/*!*******************************************!*\
  !*** ./src/comment/comment.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAllComments = exports.getAllCommentsOneSpot = exports.getOneComment = exports.deleteComment = exports.modifyComment = exports.createComment = void 0;\nvar Spot_model_1 = __webpack_require__(/*! ../spot/Spot.model */ \"./src/spot/Spot.model.ts\");\nvar user_model_1 = __webpack_require__(/*! ../user/user.model */ \"./src/user/user.model.ts\");\nvar Comment_model_1 = __webpack_require__(/*! ./Comment.model */ \"./src/comment/Comment.model.ts\");\nvar createComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, rating, text, spot, user, comment, error_1;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, rating = _a.rating, text = _a.text;\n                _b.label = 1;\n            case 1:\n                _b.trys.push([1, 5, , 6]);\n                return [4 /*yield*/, Spot_model_1.spotModel.findById(req.params.spotId)];\n            case 2:\n                spot = _b.sent();\n                return [4 /*yield*/, user_model_1.userModel.findById(req.userId)];\n            case 3:\n                user = _b.sent();\n                if (!spot || !user) {\n                    throw new Error(\"createComment failed > user or spot not found > spot \" + spot + \" / user \" + user);\n                }\n                comment = new Comment_model_1.commentModel({\n                    rating: rating,\n                    text: text,\n                    spot: spot._id,\n                    user: user._id,\n                });\n                return [4 /*yield*/, comment.save()];\n            case 4:\n                _b.sent();\n                return [2 /*return*/, res\n                        .status(201)\n                        .json({ message: \"Commentaire enregistré :\", comment: comment })];\n            case 5:\n                error_1 = _b.sent();\n                return [2 /*return*/, res.status(400).json({ error: error_1 })];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.createComment = createComment;\nvar modifyComment = function (req, res) {\n    Comment_model_1.commentModel.updateOne({ _id: req.params.id }, __assign({}, req.body))\n        .then(function (info) {\n        return res.status(200).json({\n            message: \"Modification enregistrée !\",\n            nbOfModifiedFields: info.n,\n        });\n    })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.modifyComment = modifyComment;\nvar deleteComment = function (req, res) {\n    Comment_model_1.commentModel.deleteOne({ _id: req.params.id })\n        .then(function () { return res.status(200).json({ message: \"Commentaire supprimé !\" }); })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.deleteComment = deleteComment;\nvar getOneComment = function (req, res) {\n    Comment_model_1.commentModel.findOne({ _id: req.params.id })\n        .then(function (comment) { return res.status(200).json(comment); })\n        .catch(function (error) { return res.status(404).json({ error: error }); });\n};\nexports.getOneComment = getOneComment;\nvar getAllCommentsOneSpot = function (req, res) {\n    Comment_model_1.commentModel.find({ spot: req.params.spotId })\n        .then(function (comments) { return res.status(200).json(comments); })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.getAllCommentsOneSpot = getAllCommentsOneSpot;\nvar getAllComments = function (req, res) {\n    Comment_model_1.commentModel.find()\n        .then(function (comments) { return res.status(200).json(comments); })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.getAllComments = getAllComments;\n\n\n//# sourceURL=webpack:///./src/comment/comment.controller.ts?");

/***/ }),

/***/ "./src/comment/comment.route.ts":
/*!**************************************!*\
  !*** ./src/comment/comment.route.ts ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ \"./src/auth/auth.service.ts\");\nvar role_service_1 = __webpack_require__(/*! ../role/role.service */ \"./src/role/role.service.ts\");\nvar commentController = __importStar(__webpack_require__(/*! ./comment.controller */ \"./src/comment/comment.controller.ts\"));\nmodule.exports = function (app) {\n    app.use(function (req, res, next) {\n        res.header(\"Access-Control-Allow-Headers\", \"x-access-token, Origin, Content-Type, Accept\");\n        next();\n    });\n    app.get(\"/api/comment/one/:id\", commentController.getOneComment);\n    app.get(\"/api/comment/:spotId\", commentController.getAllCommentsOneSpot);\n    //TODO: réparer cette route (get all)\n    app.get(\"/api/comment/all\", [auth_service_1.authService.verifyToken, role_service_1.roleService.isAdmin], commentController.getAllComments);\n    app.post(\"/api/comment/:spotId\", [auth_service_1.authService.verifyToken], commentController.createComment);\n    app.put(\"/api/comment/:id\", [auth_service_1.authService.verifyToken], commentController.modifyComment);\n    app.delete(\"/api/comment/:id\", [auth_service_1.authService.verifyToken], commentController.deleteComment);\n};\n\n\n//# sourceURL=webpack:///./src/comment/comment.route.ts?");

/***/ }),

/***/ "./src/database/database.config.ts":
/*!*****************************************!*\
  !*** ./src/database/database.config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.databaseConfig = void 0;\nvar DATABASE_HOST = process.env.DATABASE_HOST;\nvar DATABASE_PORT = process.env.DATABASE_PORT;\nvar DATABASE_NAME = process.env.DATABASE_NAME;\nvar DATABASE_USERNAME = process.env.DATABASE_USERNAME;\nvar DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;\nexports.databaseConfig = {\n    DATABASE_HOST: DATABASE_HOST || \"localhost\",\n    DATABASE_PORT: DATABASE_PORT || 27017,\n    DB: DATABASE_NAME || \"HitchHikeAppLocalDB\",\n    getMongoURI: function () {\n        // eslint-disable-next-line max-len\n        return \"mongodb+srv://\" + DATABASE_USERNAME + \":\" + DATABASE_PASSWORD + \"@cluster0.t6jtg.mongodb.net/\" + DATABASE_NAME + \"?retryWrites=true&w=majority\";\n    },\n};\n\n\n//# sourceURL=webpack:///./src/database/database.config.ts?");

/***/ }),

/***/ "./src/database/database.service.ts":
/*!******************************************!*\
  !*** ./src/database/database.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.databaseService = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar database_config_1 = __webpack_require__(/*! ./database.config */ \"./src/database/database.config.ts\");\nvar role_model_1 = __webpack_require__(/*! ../role/role.model */ \"./src/role/role.model.ts\");\nvar logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\nvar connectDB = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, (0, mongoose_1.connect)(database_config_1.databaseConfig.getMongoURI(), {\n                    useNewUrlParser: true,\n                    useUnifiedTopology: true,\n                })];\n            case 1:\n                _a.sent();\n                try {\n                    logger_1.logger.info(\"Successfully connect to MongoDB.\");\n                    initiate();\n                }\n                catch (error) {\n                    logger_1.logger.error(\"Connection error > error \" + error);\n                    process.exit();\n                }\n                ;\n                return [2 /*return*/];\n        }\n    });\n}); };\nfunction initiate() {\n    return __awaiter(this, void 0, void 0, function () {\n        var estimatedDocumentCount, userRole, moderatorRole, adminRole;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, role_model_1.roleModel.estimatedDocumentCount()];\n                case 1:\n                    estimatedDocumentCount = _a.sent();\n                    if (!(estimatedDocumentCount === 0)) return [3 /*break*/, 5];\n                    return [4 /*yield*/, role_model_1.roleModel.create({ name: \"user\", })];\n                case 2:\n                    userRole = (_a.sent()).save();\n                    logger_1.logger.info(\"added 'user' to roles collection. userRole: \" + JSON.stringify(userRole));\n                    return [4 /*yield*/, role_model_1.roleModel.create({ name: \"moderator\", })];\n                case 3:\n                    moderatorRole = (_a.sent()).save();\n                    logger_1.logger.info(\"added 'moderator' to roles collection. moderatorRole: \" + JSON.stringify(moderatorRole));\n                    return [4 /*yield*/, role_model_1.roleModel.create({ name: \"admin\", })];\n                case 4:\n                    adminRole = (_a.sent()).save();\n                    logger_1.logger.info(\"added 'admin' to roles collection\");\n                    _a.label = 5;\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.databaseService = {\n    connectDB: connectDB,\n};\n\n\n//# sourceURL=webpack:///./src/database/database.service.ts?");

/***/ }),

/***/ "./src/role/role.model.ts":
/*!********************************!*\
  !*** ./src/role/role.model.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.roleModel = exports.RoleEnum = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar RoleEnum;\n(function (RoleEnum) {\n    RoleEnum[\"USER\"] = \"USER\";\n    RoleEnum[\"ADMIN\"] = \"ADMIN\";\n    RoleEnum[\"MODERATOR\"] = \"MODERATOR\";\n})(RoleEnum = exports.RoleEnum || (exports.RoleEnum = {}));\nvar roleSchema = new mongoose_1.Schema({\n    name: String,\n}, { timestamps: true });\nexports.roleModel = (0, mongoose_1.model)(\"Role\", roleSchema);\n\n\n//# sourceURL=webpack:///./src/role/role.model.ts?");

/***/ }),

/***/ "./src/role/role.service.ts":
/*!**********************************!*\
  !*** ./src/role/role.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.roleService = void 0;\nvar user_model_1 = __webpack_require__(/*! ../user/user.model */ \"./src/user/user.model.ts\");\nvar role_model_1 = __webpack_require__(/*! ./role.model */ \"./src/role/role.model.ts\");\nvar ROLES = [\"user\", \"admin\", \"moderator\"];\nvar checkRolesExisted = function (req, res, next) {\n    if (req.body.roles) {\n        for (var i = 0; i < req.body.roles.length; i++) {\n            if (!ROLES.includes(req.body.roles[i])) {\n                res.status(400).send({\n                    message: \"Failed! Role \" + req.body.roles[i] + \" does not exist!\",\n                });\n                return;\n            }\n        }\n    }\n    next();\n};\nvar isAdmin = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var userId, user;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                userId = req.userId;\n                return [4 /*yield*/, user_model_1.userModel.findById(userId)];\n            case 1:\n                user = _a.sent();\n                if (!user) {\n                    res.status(403);\n                    return [2 /*return*/];\n                }\n                role_model_1.roleModel.find({\n                    _id: { $in: user.roles },\n                }, function (err, roles) {\n                    if (err) {\n                        res.status(500).send({ message: err });\n                        return;\n                    }\n                    for (var i = 0; i < roles.length; i++) {\n                        if (roles[i].name === role_model_1.RoleEnum.ADMIN) {\n                            next();\n                            return;\n                        }\n                    }\n                    res.status(403).send({ message: \"Require Admin Role!\" });\n                    return;\n                });\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar isModerator = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var userId, user, roles, i;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                userId = req.userId;\n                return [4 /*yield*/, user_model_1.userModel.findById(userId)];\n            case 1:\n                user = _a.sent();\n                if (!user) {\n                    res.status(500).send({ message: \"User not found !\" });\n                    return [2 /*return*/];\n                }\n                return [4 /*yield*/, role_model_1.roleModel.find({ _id: { $in: user.roles }, }).exec()];\n            case 2:\n                roles = _a.sent();\n                if (!roles) {\n                    res.status(500).send({ message: \"User doesn't have a role\" });\n                    return [2 /*return*/];\n                }\n                for (i = 0; i < roles.length; i++) {\n                    if (roles[i].name === role_model_1.RoleEnum.MODERATOR) {\n                        next();\n                        return [2 /*return*/];\n                    }\n                }\n                res.status(403).send({ message: \"Require Moderator Role!\" });\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.roleService = {\n    ROLES: ROLES,\n    checkRolesExisted: checkRolesExisted,\n    isAdmin: isAdmin,\n    isModerator: isModerator,\n};\n\n\n//# sourceURL=webpack:///./src/role/role.service.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/* eslint-disable no-undef */\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nvar logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nvar normalizePort = function (portAsString) {\n    var port = parseInt(portAsString, 10);\n    if (isNaN(port)) {\n        return portAsString;\n    }\n    if (port >= 0) {\n        return port;\n    }\n    return false;\n};\nvar port = normalizePort(process.env.PORT || \"8080\");\napp_1.app.set(\"port\", port);\nvar errorHandler = function (error) {\n    if (error.syscall !== \"listen\") {\n        throw error;\n    }\n    var address = server.address();\n    var bind = typeof address === \"string\" ? \"pipe \" + address : \"port: \" + port;\n    switch (error.code) {\n        case \"EACCES\":\n            console.error(bind + \" requires elevated privileges.\");\n            process.exit(1);\n        case \"EADDRINUSE\":\n            console.error(bind + \" is already in use.\");\n            process.exit(1);\n        default:\n            throw error;\n    }\n};\nvar server = http_1.default.createServer(app_1.app);\nserver.on(\"error\", errorHandler);\nserver.on(\"listening\", function () {\n    var address = server.address();\n    var bind = typeof address === \"string\" ? \"pipe \" + address : \"port \" + port;\n    logger_1.logger.info(\"Listening on \" + bind);\n});\nserver.listen(port);\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/spot/Spot.model.ts":
/*!********************************!*\
  !*** ./src/spot/Spot.model.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.spotModel = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar pointSchema = new mongoose_1.Schema({\n    type: {\n        type: String,\n        enum: ['Point'],\n        required: true\n    },\n    coordinates: {\n        type: [Number],\n        required: true\n    }\n});\nvar spotSchema = new mongoose_1.Schema({\n    title: { type: String, required: true },\n    rating: { type: Number, required: true, min: 0, max: 3 },\n    gps: {\n        type: pointSchema,\n        required: true\n    },\n    mostValuableComment: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        ref: \"Comment\",\n    },\n    authorId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: \"User\", required: true }],\n}, { timestamps: true, });\nexports.spotModel = (0, mongoose_1.model)(\"Spot\", spotSchema);\n\n\n//# sourceURL=webpack:///./src/spot/Spot.model.ts?");

/***/ }),

/***/ "./src/spot/spot.controller.ts":
/*!*************************************!*\
  !*** ./src/spot/spot.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formSidebar = exports.popUp = exports.getAllSpots = exports.getOneSpot = exports.deleteSpot = exports.modifySpot = exports.createSpot = void 0;\nvar Spot_model_1 = __webpack_require__(/*! ./Spot.model */ \"./src/spot/Spot.model.ts\");\nvar createSpot = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var spot, spotDocument, savedSpot;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                spot = req.body;\n                return [4 /*yield*/, Spot_model_1.spotModel.create(spot)];\n            case 1:\n                spotDocument = _a.sent();\n                return [4 /*yield*/, spotDocument.save()];\n            case 2:\n                savedSpot = _a.sent();\n                res.status(201).json({ message: \"Nouveau spot enregistré :\", spot: savedSpot });\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.createSpot = createSpot;\nvar modifySpot = function (req, res) {\n    Spot_model_1.spotModel.updateOne({ _id: req.params.id }, __assign(__assign({}, req.body), { _id: req.params.id }))\n        .then(function (info) {\n        return res.status(200).json({\n            message: \"Modification enregistrée !\",\n            nbOfModifiedFields: info.n,\n        });\n    })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.modifySpot = modifySpot;\nvar deleteSpot = function (req, res) {\n    Spot_model_1.spotModel.deleteOne({ _id: req.params.id })\n        .then(function () { return res.status(200).json({ message: \"Spot supprimé !\" }); })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.deleteSpot = deleteSpot;\nvar getOneSpot = function (req, res) {\n    Spot_model_1.spotModel.findOne({ _id: req.params.id })\n        .then(function (spot) { return res.status(200).json(spot); })\n        .catch(function (error) { return res.status(404).json({ error: error }); });\n};\nexports.getOneSpot = getOneSpot;\nvar getAllSpots = function (req, res) {\n    Spot_model_1.spotModel.find()\n        .then(function (spots) { return res.status(200).json(spots); })\n        .catch(function (error) { return res.status(400).json({ error: error }); });\n};\nexports.getAllSpots = getAllSpots;\nvar popUp = function (req, res) {\n    res.render(\"pages/map/popup\");\n};\nexports.popUp = popUp;\nvar formSidebar = function (req, res) {\n    res.render(\"pages/map/formside\");\n};\nexports.formSidebar = formSidebar;\n\n\n//# sourceURL=webpack:///./src/spot/spot.controller.ts?");

/***/ }),

/***/ "./src/spot/spot.route.ts":
/*!********************************!*\
  !*** ./src/spot/spot.route.ts ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ \"./src/auth/auth.service.ts\");\nvar spotController = __importStar(__webpack_require__(/*! ./spot.controller */ \"./src/spot/spot.controller.ts\"));\nmodule.exports = function (app) {\n    app.use(function (req, res, next) {\n        res.header(\"Access-Control-Allow-Headers\", \"x-access-token, Origin, Content-Type, Accept\");\n        next();\n    });\n    app.get(\"/api/spot/\", spotController.getAllSpots);\n    app.get(\"/api/spot/:id\", spotController.getOneSpot);\n    app.post(\"/api/spot/create\", [auth_service_1.authService.verifyToken], spotController.createSpot);\n    app.put(\"/api/spot/:id\", [auth_service_1.authService.verifyToken], spotController.modifySpot);\n    app.delete(\"/api/spot/:id\", [auth_service_1.authService.verifyToken], spotController.deleteSpot);\n};\n\n\n//# sourceURL=webpack:///./src/spot/spot.route.ts?");

/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userController = void 0;\nvar user_service_1 = __webpack_require__(/*! ./user.service */ \"./src/user/user.service.ts\");\nvar allAccess = function (req, res) {\n    res.status(200).send(\"Public Content.\");\n};\nvar userBoard = function (req, res) {\n    res.status(200).send(\"User Content.\");\n};\nvar adminBoard = function (req, res) {\n    res.status(200).send(\"Admin Content.\");\n};\nvar moderatorBoard = function (req, res) {\n    res.status(200).send(\"Moderator Content.\");\n};\nvar deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var email, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                email = req.body.email;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, user_service_1.userService.deleteUserByEmail(email)];\n            case 2:\n                _a.sent();\n                res.status(200).send(\"User account deleted\");\n                return [3 /*break*/, 4];\n            case 3:\n                err_1 = _a.sent();\n                res.status(500).send(err_1);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\nexports.userController = {\n    allAccess: allAccess,\n    userBoard: userBoard,\n    adminBoard: adminBoard,\n    moderatorBoard: moderatorBoard,\n    deleteUser: deleteUser\n};\n\n\n//# sourceURL=webpack:///./src/user/user.controller.ts?");

/***/ }),

/***/ "./src/user/user.model.ts":
/*!********************************!*\
  !*** ./src/user/user.model.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userModel = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar userSchema = new mongoose_1.Schema({\n    username: { type: String, unique: true },\n    email: { type: String, unique: true },\n    password: String,\n    roles: [\n        {\n            type: mongoose_1.Schema.Types.ObjectId,\n            ref: \"Role\",\n        },\n    ],\n}, { timestamps: true });\nexports.userModel = (0, mongoose_1.model)(\"User\", userSchema);\n\n\n//# sourceURL=webpack:///./src/user/user.model.ts?");

/***/ }),

/***/ "./src/user/user.routes.ts":
/*!*********************************!*\
  !*** ./src/user/user.routes.ts ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ \"./src/auth/auth.service.ts\");\nvar role_service_1 = __webpack_require__(/*! ../role/role.service */ \"./src/role/role.service.ts\");\nvar user_controller_1 = __webpack_require__(/*! ./user.controller */ \"./src/user/user.controller.ts\");\nmodule.exports = function (app) {\n    app.use(function (req, res, next) {\n        res.header(\"Access-Control-Allow-Headers\", \"x-access-token, Origin, Content-Type, Accept\");\n        next();\n    });\n    app.get(\"/api/test/all\", user_controller_1.userController.allAccess);\n    app.get(\"/api/test/user\", [auth_service_1.authService.verifyToken], user_controller_1.userController.userBoard);\n    app.get(\"/api/test/mod\", [auth_service_1.authService.verifyToken, role_service_1.roleService.isModerator], user_controller_1.userController.moderatorBoard);\n    app.get(\"/api/test/admin\", [auth_service_1.authService.verifyToken, role_service_1.roleService.isAdmin], user_controller_1.userController.adminBoard);\n    app.post(\"/api/user/delete\", [auth_service_1.authService.verifyToken], user_controller_1.userController.deleteUser);\n};\n\n\n//# sourceURL=webpack:///./src/user/user.routes.ts?");

/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userService = void 0;\nvar bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nvar user_model_1 = __webpack_require__(/*! ./user.model */ \"./src/user/user.model.ts\");\nvar role_model_1 = __webpack_require__(/*! ../role/role.model */ \"./src/role/role.model.ts\");\nvar createUser = function (_a) {\n    var username = _a.username, email = _a.email, password = _a.password, roles = _a.roles;\n    return __awaiter(void 0, void 0, void 0, function () {\n        var user, rolesNamesRelatedToUser, rolesRelatedToUser;\n        var _b;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    user = new user_model_1.userModel({\n                        username: username,\n                        email: email,\n                        password: bcrypt_1.default.hashSync(password, 8),\n                    });\n                    rolesNamesRelatedToUser = (_b = roles.map(function (role) { return role.name; })) !== null && _b !== void 0 ? _b : [\"user\"];\n                    return [4 /*yield*/, role_model_1.roleModel.find({\n                            name: { $in: rolesNamesRelatedToUser },\n                        })];\n                case 1:\n                    rolesRelatedToUser = _c.sent();\n                    user.roles = rolesRelatedToUser.map(function (role) { return role._id; });\n                    return [4 /*yield*/, user.save()];\n                case 2: return [2 /*return*/, _c.sent()];\n            }\n        });\n    });\n};\nvar getUserByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, user_model_1.userModel.findOne({ username: username }).populate(\"roles\", \"-__v\")];\n            case 1: return [2 /*return*/, _a.sent()];\n        }\n    });\n}); };\nvar getUserIdByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, user_model_1.userModel.findOne({ email: email }).populate(\"roles\", \"-__v\")];\n            case 1: return [2 /*return*/, _a.sent()];\n        }\n    });\n}); };\nvar deleteUserByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, user_model_1.userModel.deleteOne({ email: email })];\n    });\n}); };\nexports.userService = {\n    createUser: createUser,\n    getUserByUsername: getUserByUsername,\n    getUserIdByEmail: getUserIdByEmail,\n    deleteUserByEmail: deleteUserByEmail,\n};\n\n\n//# sourceURL=webpack:///./src/user/user.service.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logger = void 0;\nvar winston_1 = __webpack_require__(/*! winston */ \"winston\");\nexports.logger = (0, winston_1.createLogger)({\n    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),\n    'transports': [\n        new winston_1.transports.Console(),\n    ],\n});\n(0, winston_1.addColors)({\n    error: 'red',\n    warn: 'yellow',\n    info: 'cyan',\n    debug: 'green'\n});\n\n\n//# sourceURL=webpack:///./src/utils/logger.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;