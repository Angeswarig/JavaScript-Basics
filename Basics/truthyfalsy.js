//falsy values are
//undefined
  // var user;
//Null
  // var user=null;
//""-->empty string
  // var user="";
//NaN and 0
//expect these falsy values are all called truthy values.

//coercion-->double equal checks the value alone.while triple equals checks both value and datatype.
var user="2";
if(user===2)
{
    console.log("It checks only the value");
}else{
    console.log("It check both the value and datatype");
}
