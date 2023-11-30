"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_control_1 = require("../controllers/persona.control");
const router = (0, express_1.Router)();
router.get('/', persona_control_1.getPersonas);
exports.default = router;
