"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const startCountdown = (count) => {
    console.log(`Starting countdown from ${count}...`);
    const countdownInterval = setInterval(() => {
        if (count === 0) {
            clearInterval(countdownInterval);
            console.log('Time\'s up!');
            rl.close();
        }
        else {
            console.log(count);
            count--;
        }
    }, 1000);
};
rl.question('Enter the countdown duration (in seconds): ', (answer) => {
    const seconds = parseInt(answer, 10);
    if (!isNaN(seconds)) {
        startCountdown(seconds);
    }
    else {
        console.log('Invalid input. Please enter a number.');
        rl.close();
    }
});
// type EnteredNo = number;
// const EnteredNo = prompt("Entered number here.....!")
// if( EnteredNo){
//     for (let index = EnteredNo; index < array.length; index--) {
//         const element = array[index];
//     }
// }
