let pr =  new Promise((resolve, reject)=>{
	reject("Error.");
	
})
pr.then((msg)=>{
	console.log(msg);
}).catch((err)=>{
	console.log("Error"+err);
}).finally(()=>{
	console.log("Finishing process.");
})