

async function demo(params) {
	
	
	console.log('1');
	
	
	let a = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('bad')
		}, 1000)
	})
	
	console.log('2');
	
	
	console.log('3');
	
}

demo(2)

console.log('4');
