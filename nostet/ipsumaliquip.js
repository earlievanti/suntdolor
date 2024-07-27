const s = [1, 2, 3, 0, 4, 5];

for (let i = 0; i < s.length; i++) {
  if (!+s[i]) {
    break out;
  }
  console.log(s[i]);
}
