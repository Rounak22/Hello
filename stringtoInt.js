function stringToNumber(str)
{
    let res=0;  
    let negative = false;
    //Number map to check
    const nums = {
        "0":0,
        "1": 1, "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6,"7": 7,"8": 8,"9": 9};
//negative number checking
        if(str.charAt(0)==="-"&&nums[str.charAt(1)]){
            str.substring(1);
            negative = true
        }  
//iteration on string
    for (let i=0; i<str.length; i++)
    {
        const char = str.charAt(i);
        
        if(nums[char]){
            const value = nums[char];
            res += value;
            res *= 10;
        }
        else if(!negative){
            break;
        }
       
       
                        
    }
    //if negative is true then multiply by -1
    if(negative){
        res = res*-1
    }
   //value is already ahead by extra 0
        res/=10
    
    
    return res;
}

console.log(stringToNumber("43")) //43
console.log(stringToNumber("0")) //0
console.log(stringToNumber("42a")) //42
console.log(stringToNumber("43a23")) //43
console.log(stringToNumber("aaaa23")) //0
console.log(stringToNumber("-22")) //-22
console.log(stringToNumber("-122")) //-122
console.log(stringToNumber("1")) //1
