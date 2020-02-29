f=_=>                          // define `f` as function with a single unused argument `_`
  require('fs').writeFileSync( // import the standard filesystem module and overwrite file
    __filename,                // string var containing path of file for current module
    `f=${f};f()`.replace(      // template string containing source of entire script
      /(\d[^,]*),(\d[^\)]*)/,  // regexp to match and group the numbers in this script
      (m,a,b)=>                // replace function with arguments match, group a, group b
        `${b=+b},${+a+b}`      // template string incrementing fibonacci numbers in place
    ),                         // end replace()
    console.log(               // prints to stdout, `undefined` passed to argument
      (2584,4181)                    // comma separated group returns value of last expression
    )                          // end console.log()
  );f()