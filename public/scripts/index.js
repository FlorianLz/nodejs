"use strict";
const len = 10000000;
const toto = Array(len);
for (let i = 0; i < len; i++) {
    toto[i] = Math.round(Math.random() * 10);
}
const logiqueDeTri = (a, b) => {
    return a - b;
};
function bench() {
    const debut = Date.now();
    const ret = toto.sort(logiqueDeTri);
    return Date.now() - debut;
}
console.log(bench());
//# sourceMappingURL=index.js.map