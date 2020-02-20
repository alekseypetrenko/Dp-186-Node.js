// 1	1 10,  9 9	  => Possible
// 2	20 40, 2 4	  => Possible
// 3	50 20, 40 40  => Impossible
// 4	10 4, 5 5	  => Impossible
// 4	10 15, 15 10  => Possible


function checkRectangles(rect1, rect2){
    let a = rect1.a;
    let b = rect1.b;
    let p = rect2.p;
    let q = rect2.q;

    if ((p <= a && q <= b) || 
        p > a && 
        b >= (2*p*q*a +(p*p - q*q) * Math.sqrt(p*p+q*q-a*q) )/(p*p + q*q)
        ) {
        console.log("Possible");      
    } else {
        console.log("Impossible");
    }
    
}

checkRectangles({a:1,b:10}, {p:9,q:9})
checkRectangles({a:20,b:40},{p:2,q:4})
checkRectangles({a:50,b:20},{p:40,q:40})
checkRectangles({a:10,b:4}, {p:5,q:5})
checkRectangles({a:10.1,b:15}, {p:10.1, q:15.2})
checkRectangles({a:10, b:15},{p:15, q:10})
