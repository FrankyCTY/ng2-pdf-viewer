if (typeof Promise.withResolvers !== 'function') {
  Promise.withResolvers = function withResolvers() {
    let resolve;
    let reject;

    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

    return { promise, resolve, reject };
  };
}

// After ensuring Promise.withResolvers exists in this worker context,
// dynamically import the actual pdf.js worker implementation.
import('./pdf.worker.min.mjs');
