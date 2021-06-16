setTimeout(() => {
    console.log("cook ugali");
}, 2000);
 var addSomething=()=>{
     console.log("cook sukuma");
 }
addSomething();
// seTimeout accept a function as a parameter



var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

// output 
// outer func:  this.name = bar
// outer func:  self.name = bar
// inner func:  this.name = undefined
// inner func:  self.name = bar
// 
// why
//  in the first output it prints out the string we have inputed in console and the name which we are
//  accessing using this keyword which refers to the property in the outer function

//  the second output we have assigned this to self so we are able to access the name
//  in the outer function using self

//  in the third output it is undefined because we cannot use this to access the outter 
//  property since we have initilized it to self

//  in the fourth incide we are able to access name using self because self refers to this 
//  keyword which helps us to access the outer function's property name


// this keyword is used to access a property which is already initialized in the outer function