export const isTestMode = process.env.NODE_ENV === 'test'

export function throttle(fn, wait) {
  // var pre = Date.now();
  var timer
  wait = wait || 100
  return function () {
    // var context = this;
    // var args = arguments;
    // var now = Date.now();
    // if( now - pre >= wait){
    //     fn();
    //     pre = Date.now();
    // }
    // console.log('throttle',timer)
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}
