
function solution(A) {
    const numberSort = function (a,b) {
    return a - b;
	};
    let s = [...new Set(A)];//to create new set and assign it to an array
    s.sort(numberSort);
    let n = 1;
    for(let i=0; i<s.length;i++) {
    		if(s[0]<1) {
        	s.splice(0,1);//splice(index_pos,number_of_items_to_remove)
        }
     }
     for(let i=0;i<s.length;i++) {
     	if(n==s[i]) {
            n++;
        }
        else{
            return n;
        }
    }
    return n;
}