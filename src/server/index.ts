import Koa from 'koa';
import { Tables, DBConnetion } from "./db";
import { IStudent } from "../types";
import { createConnection } from 'typeorm';
import "reflect-metadata";
const app = new Koa();
let db = new DBConnetion("student");
app.context.database = db;


// response
app.use(async ctx => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // db.insert<IStudent>({ nickname: "anYlsj", account: "wer", password: "123", age: 5, job: "我", hobby: "weew" });
    // ctx.body = 
    let st= await db.findAll<IStudent>();
    
    console.log(st);
    ctx.header
    ctx.body=st
    // ctx.body = db.findAll<IStudent>();
    // ctx.body = Tables.Student;
});

app.listen(3333);
console.log("Koa server is running!");
console.log("http://localhost:3333");
export { };