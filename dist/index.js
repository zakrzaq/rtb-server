"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverInfo_1 = __importDefault(require("./helpers/serverInfo"));
const port = process.env.PORT || 3030;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.status(200).json(serverInfo_1.default);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
