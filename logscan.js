const logs = [
    "INFO server started",
    "INFO request /api/users",
    "WARN slow query 820ms",
    "ERROR db connection refused",
    "INFO request /api/orders",
    "ERROR timeout on /api/pay",
    "WARN retry queue growing",
];

let infoCount = 0;
let errorCount = 0;

for (const log of logs) {
    if (log.includes("WARN")) {
        continue;
    }
    if (log.includes("INFO")) {
        infoCount++;
    } else if (log.includes("ERROR")) {
        errorCount++;
    }
}

let firstError;

for (const log of logs) {
    if (!log.includes("ERROR")) {
        continue
    } else {
        firstError = log;
        break;
    }
}

console.log("INFO:", infoCount);
console.log("ERROR:", errorCount);
console.log("First error:", firstError);