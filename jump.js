
function solution(A){
    let hashtable = {};
    hashtable[0] = 0;
    let next = 0+A[0];
    let jump = 1;

    while(hashtable[next] == undefined){
        if(next < A.length && next >= 0){
            hashtable[next] = next;
            next += A[next];
            jump += 1;
        }
        else
            return jump;
    }
    return -1;
}

console.log(solution([-5,2,4,2,8,6]));