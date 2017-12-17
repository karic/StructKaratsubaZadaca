function karatSubaTimer(x, y){
    var start = performance.now();
    console.log("Karatsuba: ",karatSuba(x, y));

    var end = performance.now();

    return (end-start);
}

function StandardTimer(x, y) {
    var start = performance.now();
    console.log("Standard: ", Standard(x,y));
    var end = performance.now();

    return (end-start);

}



function karatSuba(x,y)
{

    var x1,x0,y1,y0,base,m;
    base  = 10;


    if((x<base)||(y<base)){
        return x * y;
    }

    var pomx = x.toString();
    var pomy = y.toString();

    if (pomx.length > pomy.length){
        var n = pomy.length;
    } else {
        var n = pomx.length;
    }
    m = Math.round(n/2);



    var left1 = parseInt(pomx.substring(0,pomx.length-m));
    var right1 = parseInt(pomx.substring(pomx.length-m,pomx.length)) ;

    var left2 = parseInt(pomy.substring(0,pomy.length-m));
    var right2 = parseInt(pomy.substring(pomy.length-m,pomy.length));


    var z0   =   karatSuba( right1, right2);
    var z1   =   karatSuba(right1+left1, right2+left2);
    var z2   =   karatSuba(left1,left2);

    var result  =   (z2 *  Math.pow(base, 2 * m )  ) + ( (z1-z2-z0) * Math.pow(base,  m )) + z0;

    return result;

}

function Standard(x, y) {
    let sum=0;
    for (let i=1; i<=x; i++){
        sum+=y;
    }
    return sum;
}




function executeKarat(){

    //document.getElementById("karatsubaTime").value=scriptTimer(karatSuba(document.getElementById("x").value, document.getElementById("y").value));
    document.getElementById("karatsubaTime").value=karatSubaTimer(parseInt(document.getElementById("x").value), parseInt(document.getElementById("y").value));
};

function executeStandard(){
    //document.getElementById("standardTime").value=scriptTimer(Standard(document.getElementById("x").value, document.getElementById("y").value));
    document.getElementById("standardTime").value=StandardTimer(parseInt(document.getElementById("x").value), parseInt(document.getElementById("y").value));
};
