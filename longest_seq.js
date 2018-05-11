function solution(N) {
	let bin = parseInt(N,10).toString(2);
  let ct = 0;
  let max = 0;
  let flag = false;
  for(let i of bin){
  	
    //if (i==1) flag = flag+1;
    if (flag) {
    	if(i==0) {
      	ct += 1;
      }
      else{
      	if(max<ct) {
        	max=ct;
        }
        ct = 0;
      }
    	
    }
    
    if(i==1) flag=true;
    
    console.log(max,ct);
  }
  
  return max;
}

solution(1041);