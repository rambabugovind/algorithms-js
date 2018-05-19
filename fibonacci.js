
let m = [[1, 1],[1, 0]];
function fib(n) {
    pow(n-1);
    return m[0][0];
}

function pow(n){
    let p = [[1, 1],[1, 0]];
    //console.log(m);
    if(n==0 || n==1) return n;
    else if(n>1){
        pow(Math.floor(n/2));
        console.log(m);
        multiply(m,m);
    }
    if(n%2 !== 0) multiply(m,p);
}

function multiply(a, b)
{
	//console.log('a',a);
  //console.log('b',b);
  let x =  a[0][0]*b[0][0] + a[0][1]*b[1][0];
  let y =  a[0][0]*b[0][1] + a[0][1]*b[1][1];
  let z =  a[1][0]*b[0][0] + a[1][1]*b[1][0];
  let w =  a[1][0]*b[0][1] + a[1][1]*b[1][1];
 
  x = x.toString().length > 6? Number(x.toString().substr(x.toString().length - 6)) : x;
  y = y.toString().length > 6? Number(y.toString().substr(y.toString().length - 6)) : y;
  z = z.toString().length > 6? Number(z.toString().substr(z.toString().length - 6)) : z;
  w = w.toString().length > 6? Number(w.toString().substr(w.toString().length - 6)) : w;

  m[0][0] = x;
  m[0][1] = y;
  m[1][0] = z;
  m[1][1] = w;

}


console.log(fib(20000));

// 9007199254740991
// 354224848179261900000