f=_=>                          //see aknowledgements for original source of this code.
                              //this function rewrites itself and changes the 1 and 0 back and forth.
  require('fs').writeFileSync( 
    __filename,                
    `f=${f};f()`.replace(      
      /(\d[^,]*),(\d[^\)]*)/,  
      (m,a,b)=>                
        `${b++},${a++}`     
    ),                        
    console.log(               
      (0,1)                    
    )                          
  );f()