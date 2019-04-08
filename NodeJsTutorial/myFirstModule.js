// Create Your Own Modules :-
//----------------------------

// You can create your own modules, and easily include them in your applications.

// The following example creates a module that returns a date and time object :-
//--------------------------------------------------------------------------------

// Use the "exports" keyword to make properties and methods available outside the module file.

// Save the code above in a file called "my_First.js"

// Include Your Own Module :-
//----------------------------

// Now you can include and use the module in any of your Node.js files.

exports.myDateTime = function() {
    return Date();
}
