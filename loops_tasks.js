//Given JSON
var obj = {
    name: "alice",
    age:23,
    year:2018,
    ispassed:true,
    present:"mon"
} 

//For loop
for (var i = 0; i < Object.keys(obj).length; i++)
  {
    var key = Object.keys(obj)[i];
    var value = obj[key];
    console.log(`${key}: ${value}`);
  }

//ForEach Loop
Object.entries(obj).forEach((entry) => {
    var key = entry[0];
    var value = entry[1];
    console.log(`${key}: ${value}`);
  });


//For In Loop
for (var key in obj) 
  {
    var value = obj[key];
    console.log(`${key}: ${value}`);
  }

//For Of Loop
for (var key of Object.keys(obj))
  {
    var value = obj[key];
    console.log(`${key}: ${value}`);
  }