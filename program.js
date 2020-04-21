f=_=>                          //see aknowledgements for original source of this code.
                              //this function rewrites itself and changes the 1 and 0 back and forth.
                              require('fs').writeFileSync( 
                                __filename,                	    __filename,                
                                `f=${f};f()`.replace(      	    `f=${f};f()`.replace(      
                                  /(\d[^,]*),(\d[^\)]*)/,  	      /(\d[^,]*),(\d[^\)]*)/,  
                                  (m,a,b)=>                	      (m,a,b)=>                
                                    `${b++},${a++}`     	        `${b++},${a++}`     
                                ),                        	    ),                        
                                console.log(               	    console.log(               
                                  (1,0)                    	      (0,1)                    
                                )                          	    )                          
                              );f() 	  );f() 