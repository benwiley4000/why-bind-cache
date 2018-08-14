// ES6 version
function bindCache(instance) {
  const cache = new Map();
  const boundFnSymbol = Symbol();

  return function bind(fn, ...args) {
    let c = cache;
    for (const key of [fn, ...args]) {
      if (!c.has(key)) {
        c.set(key, new Map());
      }
      c = c.get(key);
    }

    if (!c.has(boundFnSymbol)) {
      c.set(boundFnSymbol, fn.bind(instance, args));
    }

    return c.get(boundFnSymbol);
  };
}
