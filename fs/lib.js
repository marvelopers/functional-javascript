const map = (f, iter) => {
  let res = [];
  for(const a of iter){
    res.push(f(a));
  }

  return res
}

const filter = (f, iter) => {
  let res = [];
  for(const a of iter){
    if(f(a)) res.push(f(a));
  }

  return res
}


const reduce = (f, acc, iter) => {
  if(!iter){
    iter = acc[Symbol.iterator()];
    acc = iter.next().value;
  }
  for(const a of iter){
    acc = f(acc, a)
  }

  return acc
}

const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
