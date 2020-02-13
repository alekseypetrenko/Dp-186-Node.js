// ------ concat() ----- //

function myConcat(str, ...rest){       
    let concatedString = str;

    for (let i = 0; i < rest.length; i++){
        concatedString = concatedString + " " + rest[i];
    }
    return concatedString;
}

const str = "Our";
const str2 = "team";
const str3 = "is";
const str4 = "super";
const str5 = "cool";

console.log(myConcat(str, str2, str3, str4)); // => Our team is super


// ------ lastIndexOf() ----- //

const str = "Aleksey Petrenko";

function myLastIndexOf(str, value, index = str.length){  
    index = index > str.length ? str.length : index;
    index = index < 0 ? index = 0 : index; 

    for (let i = index; i >= 0; i--) {
        if (str[i] == value){
            return i
        }
    }

    return -1
}

console.log(myLastIndexOf(str, "e", -2));  // => return -1
console.log(myLastIndexOf(str, "A"));  // => return 0
console.log(myLastIndexOf(str, "e"));  // => return 12
console.log(myLastIndexOf(str, "e", 3));  // => return 2
