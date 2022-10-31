import { createClient } from 'redis';
const client = createClient();


client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

//Set
await client.set("user_name", "hadi")

//Get
const value = await client.get("user_name")
console.log("value:", value);

//Get
const del = await client.del("user_name")
console.log("del:", del)

//Get
const ex = await client.exists("user_name")
console.log("ex:", ex)

//Appends
const app = await client.append("last_name", "kirkici")
console.log("app:", app)

//Get
console.log("last_name:", await client.get("last_name"));