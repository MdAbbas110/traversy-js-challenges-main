function fibonacci(num) {
  console.log(`calculating ${num}`);
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
