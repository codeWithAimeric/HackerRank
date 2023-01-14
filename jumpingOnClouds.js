function jumpingOnClouds(c, k) {
    let e=100;
    let n=c.length; 
    if(k==c.length){
    		
            if(c[0] == 1){
                e -=3
            }else if(c[0] == 0){
                e -= 1;
            }
        return e; 
    }
    for(let i=k; i<c.length; i+=k){
       	console.log('début de i ====', i);
        if(i == 0 ){
            if(c[0] == 1){
                e -=3
            }else if(c[0] == 0){
                e -= 1;
            }
        		console.log('i = 0, e=', e);
            break;
        }
        if(c[i] == 1){
            e -= 3;
            console.log('c[i] = 1, e =', e);
        }else if(c[i] == 0){
            e -= 1;
            console.log('c[i] = 0, e=', e);
        }
        
         if(i+k >= n){
         		console.log('i+k >= n, i=', i);
            i = Math.abs(i+k-n);
            i -= k;
            console.log('i après transformation = ', i);
        }
        
        
    }
        return e; 
}
