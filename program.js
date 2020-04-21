f=_=>                          //see aknowledgements for original source of this code.
                              //this function rewrites itself and changes the 1 and 0 back and forth.
  require('fs').writeFileSync(  
    __filename,                
    `f=${f};f()`.replace(      
      /(\d[^,]*),(\d[^\)]*)/,  // regexp to match and group the numbers in this script
      (m,a,b)=>                // replace function with arguments match, group a, group b
        `${b=+b},${+a+b}`    
    ),                        
    console.log(               
      (0,1)                    
    )                          
  );f()