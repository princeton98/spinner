const array = ["|", "/", "-", "\\", "|"];
s = 100
for (let i = 0; i < 2; i++) {
  for (let dash of array) {
    setTimeout(() => {
      process.stdout.write(`\r${dash}   `);
    }, s);
    s += 200;
  }
}