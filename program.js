f=_=>                          
  require('fs').writeFileSync( 
    __filename,                
    `f=${f};f()`.replace(      
      /(\d[^,]*),(\d[^\)]*)/,  
      (m,a,b)=>                
        `${b++},${a++}`     
    ),                        
    console.log(               
      (1,0)                    
    )                          
  );f()

  //see aknowledgements for original source