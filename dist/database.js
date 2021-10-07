"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DBMONGO = "mongodb+srv://fgarcia:fgarcia123@clustertestfernando.v4vv8.mongodb.net/dbintrobackend?retryWrites=true&w=majority";
const DATABASE = "dbintrobackend";
async function startConnection() {
    await mongoose_1.default.connect(DBMONGO, {
        dbName: DATABASE,
    });
}
exports.startConnection = startConnection;
