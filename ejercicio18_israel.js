const N = 11;
let suma = 0;

for (let i = 0; i < N; i++) {
    suma += N + (N % 2) + (i * 2);
}

console.log(suma);