import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter password length: ', input => {
  const length = parseInt(input);
  if (isNaN(length) || length <= 0) {
    console.log('Invalid length!');
    rl.close();
    return;
  }

  function password(length) {
    const chars = [];
    while (chars.length < length) {
      const code = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
      chars.push(String.fromCharCode(code));
    }
    return chars.join('');
  }

  for (let i = 0; i < 10; i++) {
    console.log(password(length));
  }
  
  rl.close();
});