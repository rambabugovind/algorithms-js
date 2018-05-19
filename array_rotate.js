
function solution(A, K) {
    K = K%A.length;//in case the rotation exceeds length of array
    A.reverse();
    creverse(A,0,K-1);
    creverse(A,K,A.length-1);
    
    console.log(A);
    return A;
}

function creverse(A,start,end){
    while(start<end){
        [A[start],A[end]] = [A[end],A[start]];
        start++;
        end--;
    }
}

ar=[1,2,3,4];
solution(ar,6);