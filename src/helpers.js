
// debounced input
// Debouncing slows down fast moving event streams by imposing a minimum bound on the time that must elapse between any two events.
// gap specifies the minimum unit of time in milliseconds that must elapse between any two events
export function debounce(cb, gap) {
  let timeout;
  return function setup(e) {
    clearTimeout(timeout); 
    timeout = setTimeout(() => {
      cb(e);
    }, gap)
  }
}

