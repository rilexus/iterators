import fetch from 'node-fetch';
import construct = Reflect.construct;

// --------------Array Iterable--------------
// const a = [1,2,3];
// for (let val of a){
// 	console.log(val);
// }

//-----------Object Iterable 1--------------
// const users: any = {
// 	user_1: {
// 		name: 'Peter'
// 	},
// 	user_2: {
// 		name: 'Paul'
// 	},
// 	user_3: {
// 		name: 'Dimitry'
// 	}
// };
// for (let u of users){
// 	console.log(u);
// }

// -----------Object Iterable 2--------------
// const users: any = {
// 	user_1: {
// 		name: 'Peter'
// 	},
// 	user_2: {
// 		name: 'Paul'
// 	},
// 	user_3: {
// 		name: 'Dimitry'
// 	}
// };
// for (let u in users){
// 	console.log(u);
// }



// -----------Object Iterable 3--------------
// const users: any = {
// 	user_1: {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	},
// 	user_2: {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	},
//
// 	[Symbol.iterator]: function(){
// 		const host = this; // users
// 		const keys = Object.keys(host);
// 		let idx = -1;
// 		return {
// 			next: function () {
// 				idx++;
// 				if (idx < keys.length) return {
// 					value: host[keys[idx]],
// 					done: false
// 				};
// 				return {done: true}
// 			}
// 		}
// 	}
// };
//
// for (let user of users){
// 	console.log(user);
// }

// -----------Object Iterable 4--------------
// const users: any = {
// 	user_1: {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	},
// 	user_2: {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	},
//
// 	[Symbol.iterator]: function(){
// 		const host = this; // users
// 		const keys = Object.keys(host);
// 		let idx = -1;
// 		return {
// 			next: function () {
// 				idx++;
// 				if (idx < keys.length) return {
// 					value: host[keys[idx]],
// 					done: false
// 				};
// 				return {done: true}
// 			}
// 		}
// 	}
// };
//
// const [a,b,c] = users;
// console.log(a,b,c);


// --------------Iterable Generator-----------
// const users: any = {
// 	user_1: {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	},
// 	user_2: {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	},
//
// 	[Symbol.iterator]: function* (){
// 		let idx = -1;
// 		const keys = Object.keys(this);
// 		while (idx < keys.length -1) {
// 			idx++;
// 			yield this[keys[idx]]
// 		}
// 	}
// };
//
// for (let u of users){
// 	console.log(u);
// }



// --------------Basic Generator--------------
// function *basicGenerator(
// ) {
// 	yield {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	};
// 	yield {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	};
// 	yield {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	};
// }
// const iterator = basicGenerator();
// console.log(iterator.next());
// console.log(iterator.next().value);
// for (let val of basicGenerator()){
// 	console.log(val)
// }


// -----------------Infinity-----------------
// function * infGenerator() {
// 	let index = 0;
// 	while (true){
// 		yield index++;
// 	}
// }
//
// const iterator = infGenerator();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// for (let val of iterator){
// 	if (val >= 40) iterator.return();
// 	console.log(val);
// }


// -----------------Range Generator-----------------
// function *inRange(from: number, to: number) {
// 	let index = from;
// 	while (index <=  to){
// 		yield index++
// 	}
// }
//
// for (let val of inRange(0,15)){
// 	console.log(val);
// }


// // -----------------Range with steps Generator-----------------
// function *inRange(from: number, to: number, step?: number) {
// 	let index = step ? from - step /*lower bound*/ : from;
// 	while (index <= (step ? to - step /*upper bound*/ : to)){
// 		yield step ? index = index + step : index++
// 	}
// }
//
// for (let val of inRange(0,10, 2)){
// 	console.log(val);
// }


// ---------------- Iterator return & done value
// function* inRange(from: number, to: number, step?: number) {
// 	let index = step ? from - step /*lower bound*/ : from;
// 	while (index <= (step ? to - step /*upper bound*/ : to)){
// 		yield step ? index = index + step : index++
// 	}
// }
// const iterator = inRange(0,2, 1)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// -----------Async Iterable --------------
// const delay = (ms:number) => new Promise((res)=> setTimeout(res,ms));
// const users: any = {
// 	user_1: {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	},
// 	user_2: {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	},
//
// 	[Symbol.asyncIterator]: function(){ // async
// 		const host = this; // users
// 		const keys = Object.keys(host);
// 		let idx = -1;
// 		return {
// 			next: async function () {
// 				await delay(1000);
// 				idx++;
// 				if (idx < keys.length) return {
// 					value: host[keys[idx]],
// 					done: false
// 				};
// 				return {done: true}
// 			}
// 		}
// 	}
// };
//
// (async function () {
// 	for await (const u of users){
// 		console.log(u);
// 	}
// })();


// -------------------Async Generator---------------------
// const delay = (ms:number) => new Promise((res)=> setTimeout(res,ms));
// const users: any = {
// 	user_1: {
// 		name: 'Peter',
// 		nick: 'BlueBird'
// 	},
// 	user_2: {
// 		name: 'Paul',
// 		nick: 'RedBird'
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 		nick: 'FuckBird'
// 	},
//
// 	[Symbol.asyncIterator]: async function*(){ // async
// 		let idx = -1;
// 		const keys = Object.keys(this);
// 		while (idx < keys.length -1) {
// 			idx++;
// 			await delay(1000);
// 			yield this[keys[idx]]
// 		}
// 	}
// };
//
// (async function () {
// 	for await (const u of users){
// 		console.log(u);
// 	}
// })();

// ------------ Infinite Iteration Source-----------------
// let array = [1,2,3];
// function createIterable() {
// 	const iterator = {
// 		[Symbol.iterator]: function(){
// 			let idx = -1;
// 			return {
// 				next: function () {
// 					idx++;
// 					if (idx === array.length){
// 						array = [...array, 1,2,3]
// 					}
// 					return {
// 						value: array[idx],
// 						done: false
// 					}
// 				}
// 			}
// 		}
// 	};
// 	return iterator[Symbol.iterator]()
// }
// const iterator = createIterable();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


// --------------------Streaming Data Iterator-------------------------
// const delay = (ms:number) => new Promise((res)=> setTimeout(res,ms));
// let timesFetched = 0;
// async function fetchData() { // fetch data from server 5 times
// 	timesFetched++;
// 	if (timesFetched >= 5) return; // no more data to fetch
// 	console.log('fetching data...');
// 	await delay(500);
// 	return [1,2,3,4,5]
// }
//
// function streamingData(){ // return streaming data
// 	const iterator = {
// 		[Symbol.asyncIterator]: async function* (){
// 			let cache = null;
//
// 			while (true) {
// 				cache = await fetchData();
// 				if (!cache) return;
//
// 				for (const d of cache){
// 					yield d;
// 				}
// 			}
// 		}
// 	};
// 	return iterator[Symbol.asyncIterator]();
// }

// async function handleData(data:any){
// 	let sum = 0;
// 	for await (const v of data){
// 		await delay(200);
// 		sum = sum + v;
// 		console.log(v)
// 	}
// 	console.log('done!');
// 	return sum;
// }
//
// const data = streamingData();
// handleData(data).then((sum:number) => {
// 	console.log('Sum: ', sum);
// });


// --------------------Streaming Data Generator ----------------------
// const delay = (ms:number) => new Promise((res)=> setTimeout(res,ms));
// let timesFetched = 0;
// async function fetchData() { // fetch data from server 5 times
// 	timesFetched++;
// 	if (timesFetched >= 5) return; // no more data to fetch
// 	console.log('fetching data...');
// 	await delay(500);
// 	return [1,2,3,4,5]
// }
//
//
// async function* streamingDataGenerator(){
// 	let cache = null;
// 	while (true) {
// 		cache = await fetchData();
// 		if (!cache) return;
//
// 		for (const d of cache){
// 			yield d;
// 		}
// 	}
// }
//
// async function handleData(data:any){
// 	let sum = 0;
// 	for await (const v of data){
// 		await delay(200);
// 		sum = sum + v;
// 		console.log(v)
// 	}
// 	console.log('done!');
// 	return sum;
// }
//
// const data = streamingDataGenerator();
// handleData(data).then((sum:number) => {
// 	console.log('Sum: ', sum);
// });
//

