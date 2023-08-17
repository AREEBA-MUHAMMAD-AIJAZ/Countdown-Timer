import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startCountdown = (count: number) => {
  console.log(`Starting countdown from ${count}...`);

  const countdownInterval = setInterval(() => {
    if (count === 0) {
      clearInterval(countdownInterval);
      console.log('Time\'s up!');
      rl.close();
    } else {
      console.log(count);
      count--;
    }
  }, 1000);
};

rl.question('Enter the countdown duration (in seconds): ', (answer) => {
  const seconds = parseInt(answer, 10);
  if (!isNaN(seconds)) {
    startCountdown(seconds);
  } else {
    console.log('Invalid input. Please enter a number.');
    rl.close();
  }
});