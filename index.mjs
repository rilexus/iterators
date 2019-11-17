
// --------------Array Iterable--------------
// const a = [1,2,3];
// for (let val of a){
// 	console.log(val);
// }

// -----------Object Iterable 1--------------
// const users = {
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
// const users = {
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
// const users = {
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
// const usersIterator = users[Symbol.iterator]();
// console.log(usersIterator.next());
// console.log(usersIterator.next());
// console.log(usersIterator.next());
// console.log(usersIterator.next());


// -----------Object Iterable 4--------------
// const users = {
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
// const [a,b,...rest] = users;
// console.log(a,b,...rest);


// --------------Iterable Generator-----------
// const users = {
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
// const itr = users[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());



// --------------Basic Generator--------------
// function* basicGenerator(
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
// console.log(iterator.next());
// console.log(iterator.next());
//
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
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let val of iterator){
// 	if (val >= 40) iterator.return();
// 	console.log(val);
// }


// -----------------Range Generator-----------------
// function* range(from, to, step = 1) {
// 	let index = from - step; //lower bound
// 	while (index <= to - step /*upper bound*/){
// 		yield step ? index = index + step : index++
// 	}
// }
//
// for (let val of range(0,10)){
// 	console.log(val);
// }

// ----------------- Fibo -------------
// function* fibonacci() {
// 	let fn1 = 0;
// 	let fn2 = 1;
// 	while (true) {
// 		let current = fn1;
// 		fn1 = fn2;
// 		fn2 = current + fn1;
// 		yield current;
// 	}
// }
// const sequence = fibonacci();
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());



// -----------Async Iterable --------------
// const delay = (ms) => new Promise((res)=> setTimeout(res,ms));
// const users = {
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
// 	for await (const user of users){
// 		console.log(user);
// 	}
// })();


// -------------------Async Generator---------------------
// const delay = (ms) => new Promise((res)=> setTimeout(res,ms));
// const users = {
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
// 	[Symbol.asyncIterator]: async function* (){ // async
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
// 	for await (const user of users){
// 		console.log(user);
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
// 					if (idx === array.length) array = [...array, 1,2,3];
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
// const delay = (ms) => new Promise((res)=> setTimeout(res,ms));
// function createFetch() { // fetch data from server 5 times
// 	let timesFetched = 0;
// 	return async function() {
// 		timesFetched++;
// 		if (timesFetched >= 5) return; // no more data to fetch
// 		console.log('fetching data...');
// 		await delay(500);
// 		return [1,2,3,4,5]
//
// 	}
// }
//
// const fetchData = createFetch();
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
//
// async function handleData(data){
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
// handleData(data).then((sum) => {
// 	console.log('Sum: ', sum);
// });


// ---------------- Async Generator ----------------------
// const delay = (ms) => new Promise((res)=> setTimeout(res,ms));
// function createFetch() { // fetch data from server 5 times
// 	let timesFetched = 0;
// 	return async function() {
// 		timesFetched++;
// 		if (timesFetched >= 5) return; // no more data to fetch
// 		console.log('fetching data...');
// 		await delay(500);
// 		return [1,2,3,4,5]
//
// 	}
// }
//
// const fetchData = createFetch();
//
// async function*  streamingData() {
// 	while (true) {
// 		const data = await fetchData();
// 		if (!data) return;
// 		yield data
// 	}
// }
//
//
// async function handleData(data){
// 	let sum = 0;
// 	for await (const numbers of data){
// 		await delay(200);
// 		for (const num of numbers){
// 			console.log(num);
// 			sum = sum + num;
// 		}
// 	}
// 	console.log('done!');
// 	return sum;
// }
//
// const data = streamingData();
// handleData(data).then((sum) => {
// 	console.log('Sum: ', sum);
// });
//
