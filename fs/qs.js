const qs = (obj) => {
  go(
    obj,
    Object.entries,
    map(([key, value])=> `${key}=${value}`),
    reduce((a,b)=> `${a}&${b}`)
  )
}

const querryStr = pipe(
  Object.entries,
  map(([key, value])=> `${key}=${value}`),
  reduce((a,b)=> `${a}&${b}`)
)