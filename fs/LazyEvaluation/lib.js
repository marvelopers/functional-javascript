//  이터러블 중심 프로그래밍에서의 지연 평가 (Lazy Evaluation)

// L.range, L.map, L.filter, take, reduce 중첩 사용


L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

// map, filter 계열 함수들이 가지는 결합 법칙

// [map]

// L.map = function *(f, iter) {
//   for (const a of iter) yield f(a);
// };

L.map = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
});

// [filter]

// L.filter = function *(f, iter) {
//   for (const a of iter) if (f(a)) yield a;
// };

L.filter = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) {
      yield a;
    }
  }
});