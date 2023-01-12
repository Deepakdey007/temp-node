const os = require('os')

const user = os.userInfo();

console.log(user);

// method return system uptime in second

console.log(os.uptime());

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

// Node.js program to demonstrate the	
// os.totalmem() method
	
// Import the os module

// Convert total memory to kb, mb and gb
var total_memory = os.totalmem();
var total_mem_in_kb = total_memory/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;

total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);

total_mem_in_mb = total_mem_in_mb%1024;
total_mem_in_kb = total_mem_in_kb%1024;
total_memory = total_memory%1024;

// Display memory size
console.log("Total memory: " + total_mem_in_gb + "GB "
		+ total_mem_in_mb + "MB " + total_mem_in_kb
		+ "KB and " + total_memory + "Bytes");
