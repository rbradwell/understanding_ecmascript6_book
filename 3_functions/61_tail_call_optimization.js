/**
 * ES6 optimized for tail calls
 * 
 * A tail call is when a function is called as the last statement in another function .e.g
 * 
 */
function doSomething() {
    return doSomethingElse(); // tail calls
}

/**
 * tail calls create a new stack frame per call.
 * every stack frame is kept in memory, which is problematic when call stacj gets too large.
 * ES6 reduces size of call stack for certain tail calls in strict mode.
 * i.e. the current stack is cleared and reused under certain conditions.
 * 
 * NOTE: extra detail skipped here ...
 * 
 */