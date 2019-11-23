
// const a = [1,2,3];
// for (let i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }

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

// -----------Object Iterable 2a--------------
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
// for (let key_index in users){
// 	console.log(users[key_index]);
// }


// -----------Object Iterable 3--------------
// const users = {
// 	user_1: {
// 		name: 'Peter',
// 	},
// 	user_2: {
// 		name: 'Paul',
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 	},
//
// 	[Symbol.iterator]: function(){
// 		const self = this; // users
// 		const keys = Object.keys(self);
// 		let idx = -1;
// 		return {
// 			next: function () {
// 				idx++;
// 				if (idx < keys.length) return {
// 					value: self[keys[idx]],
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
// 	},
// 	user_2: {
// 		name: 'Paul',
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 	},
// 	user_4: {
// 		name: 'Lara',
// 	},
//
// 	[Symbol.iterator]: function(){
// 		const self = this; // users
// 		const keys = Object.keys(self);
// 		let idx = -1;
// 		return {
// 			next: function () {
// 				idx++;
// 				const key = keys[idx];
// 				if (idx < keys.length) return {
// 					value: self[key],
// 					done: false
// 				};
// 				return {done: true}
// 			}
// 		}
// 	}
// };
//
// const [a,b,...rest] = users;
// console.log(a);
// console.log(b);
// console.log(...rest);


// --------------Iterable Generator-----------
// const users = {
// 	user_1: {
// 		name: 'Peter',
// 	},
// 	user_2: {
// 		name: 'Paul',
// 	},
// 	user_3: {
// 		name: 'Dimitry',
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
// for (let val of iterator){
// 	console.log(val)
// }


// -----------------Infinity-----------------
// function * infGenerator() {
// 	let index = 0;
// 	while (true) yield index++;
// }
//
// const iterator = infGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
//
// for (let val of iterator){
// 	if (val >= 10) iterator.return();
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
// for (let number of range(0,10)){
// 	console.log(number);
// }

// ----------------- Fibo -------------
// function* fibonacci() {
// 	let fn1 = 0;
// 	let fn2 = 1;
// 	while (true) {
// 		let current = fn1;
// 		yield current;
// 		fn1 = fn2;
// 		fn2 = current + fn1;
// 	}
// }
// const sequence = fibonacci();
//
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());



// -----------Async Iterable --------------
// const delay = (ms) => new Promise(resolve=> setTimeout(resolve,ms));
// const users = {
// 	user_1: {
// 		name: 'Peter',
// 	},
// 	user_2: {
// 		name: 'Paul',
// 	},
// 	user_3: {
// 		name: 'Dimitry',
// 	},
//
// 	[Symbol.asyncIterator]: function(){ // async
// 		const users = this;
// 		const keys = Object.keys(users);
// 		let idx = -1;
// 		return {
// 			next: async function () {
// 				await delay(1000);
// 				idx++;
// 				const key = keys[idx];
// 				if (idx < keys.length) return {
// 					value: users[key],
// 					done: false
// 				};
// 				return {done: true}
// 			}
// 		}
// 	}
// };
//
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
// function createIterator() {
// 	let array = [1,2,3];
//
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
//
// 	return iterator[Symbol.iterator]()
// }
// const iterator = createIterator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


// --------------------Streaming Data Iterator-------------------------
// const delay = (ms) => new Promise((res)=> setTimeout(res,ms));
//
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
//
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


// ---------------- Async/Await (kind of) -----------------

// const fetch = () => new Promise(resolve => {
// 	const time = 3000;
// 	console.log('fetching data...');
// 	setTimeout(()=>resolve({time}),time)
//
// });
//
// async function* dataGenerator() {
// 	const data = yield fetch();
// 	console.log('got data from server => ', data.value);
// };
//
//
// const dataIterator = dataGenerator();
// const dataPromise = dataIterator.next();
// dataPromise.then(handleData)
// function handleData(data){
// 	dataIterator.next(data);
// }
//
//
// console.log('continue execution while still fetching...');


// ---------------- Async/Await (almost) -----------------
// function fetch(url) {
// 	const time = Math.random() * 2000;
// 	setTimeout(()=>{
// 		run({
// 			time,
// 			url
// 		})
// 	},time)
// }
//
// function applyGenerator(generator) {
// 	const iterator = generator();
// 	// call run to call it.next
// 	return function run(){
// 		return iterator.next.apply(iterator, arguments);
// 	}
// }
//
// const run  = applyGenerator(function* () {
// 	const data = yield fetch('file1');
// 	console.log('data: ', data);
//
// 	const data2 = yield fetch('file2');
// 	console.log('data2: ', data2);
//
// 	const data3 = yield fetch('file3');
// 	console.log('data3: ', data3);
//
// });
// run();



// ------------------ Async/Await 🎉🎊------------------
// const timerStart = console.time;
// const timerEnd = console.timeEnd;
// const timerLabel = 'fetching of data3 took: ';
// function fetch(url) {
// 	return new Promise(resolve => {
// 		const time = Math.random() * 2000;
// 		setTimeout(() => {
// 			resolve({
// 				time,
// 				url
// 			})
// 		}, time)
// 	})
// }
//
// class Run {
// 	static async(generator) {
//
//
// 		function run(iterator, data) {
// 			const {value: fetch} = iterator.next(data);
// 			fetch && fetch.then(function chain(_data){
// 				run(iterator, _data);
// 			})
// 		}
//
// 		run(generator());
//
// 	}
// }
//
//
// Run.async(function* () {
// 	const data = yield fetch('file1');
// 	console.log('data: ', data);
//
// 	const data2 = yield fetch('file2');
// 	console.log('data2: ', data2);
//
// 	timerStart(timerLabel);
// 	const data3 = yield fetch('file3');
// 	console.log('data3: ', data3);
// 	timerEnd(timerLabel)
// });
