"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertuser(username, password, firstname, lastname, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user2.create({
            data: { username, password, firstname, lastname, email },
        });
        console.log(result);
    });
}
// insertuser(
//   "bko777",
//   "1234567",
//   "ashishhhbk",
//   "karagond07",
//   "bkashishh0777@gmail.com"
// );
function insertintotodos(title, description, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.create({
            data: {
                title,
                description,
                userid,
            },
        });
        console.log(res);
    });
}
// insertintotodos("football", "go to football", 1);
function Getalltodos(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.findMany({
            where: {
                userid: id,
            },
            select: {
                title: true,
                description: true,
                done: true,
                user: true,
            },
        });
        console.log(res);
    });
}
Getalltodos(1);
