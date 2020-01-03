const emptyLines = require('./utils/emptyLines')
const delay = require('./utils/delay');

emptyLines(15);

// const a = [1,2,3];
// for (let i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }


// const array = [1,2,3];
// for (let value of array){
// 	console.log(value);
// }


// const users = {
// 	user1: {
// 		name: 'Peter'
// 	},
// 	user2: {
// 		name: 'Paul'
// 	},
// 	user3: {
// 		name: 'Dimitry'
// 	}
// };
// for (let u of users){
// 	console.log(u);
// }


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
// for (let key in users){
// 	const value = users[key];
// 	console.log(`key: ${key};`, 'value: ', value);
// }


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
// 		name: 'Dimitry',
// 	},
//
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// 	[Symbol.iterator /*@@iterator*/]: function(){
// 		const users = this;
// 		const keys = Object.keys(users);
// 		let idx = -1;
//
// 		return {
// 			next: () => {
// 				idx++;
//
// 				if (idx >= keys.length) return {value: undefined, done: true};
//
// 				const key = keys[idx];
// 				const value = users[key];
//
// 				return {
// 					value: value,
// 					done: false
// 				}
// 			}
// 		}
//
// 	}
// };

// for (let value of users){
// 	console.log(value)
// }

// const [firstUser,secondUser,...otherUsers] = users;
// console.log(firstUser);
// console.log(secondUser);
// console.log(otherUsers);

// const userIterator = users[Symbol.iterator]();
// console.log(userIterator.next()); // { value: { name: 'Peter' }, done: false }
// console.log(userIterator.next());
// console.log(userIterator.next());
// console.log(userIterator.next());
// console.log(userIterator.next());


// function* basicGenerator(){
// 	yield {
// 		name: 'Peter',
// 	};
// 	yield  {
// 		name: 'Paul',
// 	};
// 	yield  {
// 		name: 'Dimitry',
// 	};
// 	yield  {
// 		name: 'Dimitry',
// 	}
// }
// const basicIterator = basicGenerator(); // [Symbol.iterator]()
// console.log(basicIterator.next());
// console.log(basicIterator.next());
// console.log(basicIterator.next());
// console.log(basicIterator.next());
// console.log(basicIterator.next());

// for (let val of basicIterator){
// 	console.log(val)
// }


// -----------------Infinity-----------------
// function * infGenerator() {
// 	let index = 0;
// 	while (true) yield index++;
// }
// const iterator = infGenerator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let val of iterator){
// 	if (val >= 10) iterator.return();
// 	console.log(val);
// }
// console.log(iterator.next())


// -----------------Range Generator-----------------
// function* inRange(from, to, step = 1) {
// 	let index = from - step; //lower bound
// 	const upperBound = to - step;
//
// 	while (index <= upperBound){
// 		yield step ? index = index + step : index++
// 	}
// }

// for (let number of inRange(0,10)){
// 	console.log(number);
// }


// ----------------- Fibonacci -------------
// function* fibonacci(first = 0, second = 1) {
// 	let fn1 = first; //
// 	let fn2 = second;
// 	while (true) {
// 		const fibNumber = fn1;
// 		yield fibNumber;
// 		fn1 = fn2;
// 		fn2 = fibNumber + fn1;
// 	}
// }
// const sequence = fibonacci();
// for (let fibNumber of sequence){
// 	if (fibNumber <= 13) console.log(fibNumber);
// 	else sequence.return();
// }


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
// 		const users = this;
// 		const keys = Object.keys(users);
//
// 		while (idx < keys.length -1) {
// 			idx++;
// 			const key= keys[idx];
// 			const value = users[key];
// 			yield value;
// 		}
// 	}
// };
// const itr = users[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// for (let user of users){
// 	console.log(user);
// }


// -----------Async Iterable --------------
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
// 	[Symbol.asyncIterator /*async*/]: function(){
// 		const users = this;
// 		const keys = Object.keys(users);
// 		let idx = -1;
//
// 		return {
// 			// async
// 			next: async function () {
// 				await delay(1000);
// 				idx++;
// 				const key = keys[idx];
// 				const value = users[key];
//
// 				if (idx >= keys.length) return {value: undefined, done: true};
//
// 				return {
// 					value: value,
// 					done: false
// 				}
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
// 	[Symbol.asyncIterator /*async*/]: async function* /*generator*/(){
// 		const users = this;
// 		const keys = Object.keys(this);
// 		let idx = -1;
//
// 		while (idx < keys.length -1) {
// 			idx++;
// 			await delay(1000);
// 			const key = keys[idx];
// 			const value = users[key];
//
// 			yield value
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
// const infiniteIterator = {
// 	[Symbol.iterator]: function () {
// 		let array = [1,2,3];
// 		let idx = -1;
//
// 		return {
// 			next: function () {
// 				idx++;
// 				if (idx === array.length) {
// 					array = [...array, 1,2,3];
// 					console.log('--------------')
// 				}
//
// 				const value = array[idx]; // never out of bounds
//
// 				return {
// 					value: value,
// 					done: false
// 				}
// 			}
// 		}
// 	}
// };
// const iterator = infiniteIterator[Symbol.iterator]();
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
// console.log(iterator.next().value);

// for (let o of infiniteIterator){
// 	console.log(o)
// }


// --------------------Streaming Data Iterator-------------------------
// function server() { // simulate a data source (server)
// 	let timesFetched = 0;
// 	return async function fetch() {
// 		timesFetched++;
//
// 		console.log('fetching...');
// 		await delay(1000); // delay response
//
// 		// return data only 5 times
// 		if (timesFetched >= 5) return []; // no more data available
//
// 		return [1,2,3,4,5];
// 	}
// }

// const fetch = server(); // returns Array<number> 5 times

// async function* dataGenerator (){
// 	let data = [];
// 	while (true) {
// 		data = await fetch(); // request data from server
// 		if (data.length === 0) return; // no data received
//
// 		// iterate through received data
// 		for (const d of data) {
// 			yield d;
// 		}
//
// 	}
// }
//
// async function processData(asyncDataGenerator){
// 	const asyncData = asyncDataGenerator();
// 	let sum = 0;
//
// 	for await (const dataUnit of asyncData){
// 		console.log(`process data unit: ${dataUnit}`);
//
// 		await delay(200); // simulate long running process
//
// 		// do something with the data unit
// 		sum = sum + dataUnit;
// 	}
// 	return sum;
// }
//
// processData(dataGenerator).then((processResult) => {
// 	console.log('Sum: ', processResult);
// });



// ---------------- SIMULATE AWAIT -----------------
// ---------------- Async/Await (kind of) -----------------
// const fetch = () => new Promise(resolve => {
// 	const time = 3000;
// 	console.log('fetching data...');
// 	setTimeout(()=>resolve({time}),time)
//
// });
//
// async function* dataGenerator() {
// 	const data = yield fetch(); // yield a promise
// 	// await data
// 	console.log('got data from server => ', data.value);
// }
//
// const dataIterator = dataGenerator(); // init generator
// const dataPromise = dataIterator.next(); // yield promise
//
// dataPromise.then(handleData); // await resolve
//
// function handleData(data){
// 	dataIterator.next(data); // pass data back to generator => generator "awaited" data
// }
//
// console.log('continue execution while still fetching...');


// ---------------- Async/Await (almost) -----------------

// simulate response  latency
// function fetch(url, callback) {
// 	const time = Math.random() * 2000;
// 	setTimeout(()=>{
// 		callback({
// 			time,
// 			url
// 		})
// 	},time)
// }
//
// function awaitYield(generator) {
// 	const iterator = generator();
//
// 	return function callNext(...args /*arguments*/){
// 		// return iterator.next.apply(iterator, arguments);
// 		return iterator.next(...args)
// 	}
// }
//
// const callNext  = awaitYield(function* () {
// 	// await data in order
// 	const data = yield fetch('/file1', callNext);
// 	console.log('data: ', data);
//
// 	const data2 = yield fetch('/file2',callNext);
// 	console.log('data2: ', data2);
//
// 	const data3 = yield fetch('/file3', callNext);
// 	console.log('data3: ', data3);
//
// });
//
// callNext(); // kick of execution



// ------------------ Async/Await 🎉🎊------------------
// const timerStart = console.time;
// const timerEnd = console.timeEnd;
// const timerLabel = 'fetching of data took: ';
//
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
// class Async {
// 	static awaitPromise(fromGenerator) {
//
// 		function callNext(iterator, withData) {
// 			const {value: promise} = iterator.next(withData); // pass data back to generator
//
// 			promise && promise.then(function chain(_data){
// 				callNext(iterator, _data);
// 			})
//
// 		}
// 		const iterator = fromGenerator()
// 		callNext(iterator, null);
//
// 	}
// }
//
// Async.awaitPromise(function* () {
// 	timerStart(timerLabel);
//
// 	const data = yield fetch('file1');
// 	console.log('data: ', data);
//
// 	const data2 = yield fetch('file2');
// 	console.log('data2: ', data2);
//
// 	const data3 = yield fetch('file3');
// 	console.log('data3: ', data3);
// 	timerEnd(timerLabel)
// });
// console.log('continue execution while still fetching...');

emptyLines(3);