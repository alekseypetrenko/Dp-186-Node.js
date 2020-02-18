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
        if (str[i] == value.charAt()){
            return i
        }
    }

    return -1
}

console.log(myLastIndexOf(str, "e", -2));  // => return -1
console.log(myLastIndexOf(str, "A"));  // => return 0
console.log(myLastIndexOf(str, "e"));  // => return 12
console.log(myLastIndexOf(str, "e", 3));  // => return 2
console.log(myLastIndexOf(str, "Aleksey"));  // => return 0

// ------ heleper for includes - my indexOf() ----- //

const str = "Aleksey Petrenko";

function myIndexOf(str, value, index = 0){  
    index = index > str.length ? str.length : index;
    index = index < 0 ? index = 0 : index; 

    for (let i = index; i < str.length; i++) {
        if (str[i] == value.charAt()){
            return i
        }
    }

    return -1
}

console.log(myIndexOf(str, "e", -2));  // => return 2
console.log(myIndexOf(str, "A"));  // => return 0
console.log(myIndexOf(str, "e"));  // => return 12
console.log(myIndexOf(str, "e", 3));  // => return 2
console.log(myIndexOf(str, "Petrenko"));  // => return 0



// ------ includes() ----- //

function myIncludes(str, searchString, index){
    
    return myIndexOf(str, searchString, index) !== -1

}

const str1 = "Good morning, good morning, good morning to you";
const str2 = "To be, or not to be,";

console.log(myIncludes(str1, "morning")); // return => true
console.log(myIncludes(str2, "be", 5)); // return => true
console.log(myIncludes(str2, "BE")); // return => false


// ------ repeat() ----- //

function myRepeat(str, count){
    count = Math.floor(count)
    if (count < 0) {
        return "Error"
    }
    
    if (count == 1) {
        return str
    }    

    if (count == 0) {
        return ""
    }

    else {
        return str + myRepeat(str, count-1)
    }

}

const str1 = "asd"
console.log(myRepeat(str1, -1));
console.log(myRepeat(str1, 0));
console.log(myRepeat(str1, 1));
console.log(myRepeat(str1, 3));
console.log(myRepeat(str1, 3.6));
