
function solution(sum,A) {
    let hashtable = {};

    for(let i=0;i<A.length;i++) {
        let tmp = hashtable[sum-A[i]] !== undefined ? hashtable[sum-A[i]] : 0;
        hashtable[sum-A[i]] = tmp+1;
    }
    let pairs = 0;

    for(let i=0;i<A.length;i++) {
        let count = hashtable[A[i]] !== undefined ? hashtable[A[i]] : 0;
        pairs += count;
    }
    return pairs;
}

console.log(solution(6, [1,8,-3,0,1,3,-2,4,5]));