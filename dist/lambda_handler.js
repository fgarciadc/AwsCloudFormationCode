"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const models_1 = __importDefault(require("./models"));
const database_1 = require("./database");
async function getUsers(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    await database_1.startConnection();
    const users = await models_1.default.find();
    let response = {
        statusCode: 200,
        body: JSON.stringify(users)
    };
    return response;
}
exports.getUsers = getUsers;
async function getUserById(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    await database_1.startConnection();
    const user = await models_1.default.findById(event.pathParameters.id);
    let responseId = {
        statusCode: 200,
        body: JSON.stringify(user)
    };
    return responseId;
}
exports.getUserById = getUserById;
