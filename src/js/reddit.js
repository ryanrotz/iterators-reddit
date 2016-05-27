var reddit = require('../data.json');

// Write your solutions below

// QUESTION 1  forEach - console.log all post titles

// Here's one way to do it...
// var array = reddit.data.children;
// newArray = array.forEach(function(element) {
//   console.log(element.data.title);
// });

//Here's another way to do it...

// This will loop through the "Children" array and then look through the
// objects inside of it and then print out of the post titles using console.log
// newArray = reddit.data.children.forEach(function(element) {
//   console.log(element.data.title);
// });


//QUESTION 2 map - Print an array of permalinks, append http:
//reddit.com to each so that they contain full http:// path to reddit

// Here's one way to do it...

// var array = reddit.data.children;
// newArray = array.map(function(element) {
//     console.log("http://reddit.com" + element.data.permalink);
//   });

// Here's another way to do it...

// "Children" is the array. Everything else is objects. That's why we start
// ".map" immediately after. Then we print the rest.
// newArray = reddit.data.children.map(function(element) {
//   console.log("http://reddit.com" + element.data.permalink);
// });



/* question 3 doesn't work
var array = reddit.data.children;
newArray = array.filter(function(element) {
  return (element.data.selftext > 0);

})
*/


// QUESTION 3 Filter the posts that contain actual text in the selftext key

var newArray = reddit.data.children.filter(function(element) {
  return (element.data.selftext.length > 0);
});
//console.log(newArray);  //comment this out if running the function below.

// This takes the the new array of posts, and for each post, it pulls out
// just the title, and prints it.
var someVar = newArray.forEach(function(element) {
  console.log(element.data.title + "\n");
})




// Question 4 reduce - Use reduce to obtain the sum of all the score values
// across all posts in the dataset

//Here's one way to solve it...

// var startingpoint = 0;
// var sum = reddit.data.children.reduce(function(total, elementToAddToCount) {
//   // returns the running total plus the next element
//   return total + elementToAddToCount.data.score;
// }, startingpoint);
// console.log(sum);

//Here's another way to solve it...

// var total = function (total, elementToAddToCount) {
//   return total + elementToAddToCount.data.score;
// };
// var sum = reddit.data.children.reduce(total, 0)
// console.log(sum);



/*
Obtain the following data by using the four array iterators.
forEach - console.log all post titles
map - Print an array of permalinks, append http:
//reddit.com to each so that they contain full http:// path to reddit

filter - Filter the posts that contain actual text in the selftext key
reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset
*/

//.forEach does something to each element

//.map alters each element in an array and returns a new array
//.map is great for making the same changes to every element

//.filter filters a new array based on true or false
//.filter then returns a new array if it's true
