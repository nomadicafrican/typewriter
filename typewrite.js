const sentence = "hello there from lighthouse labs";
let counter = 0
for( let i of sentence){setTimeout(() => {
  //process.stdout.write(counter +'')
  process.stdout.write(i)
}, counter)
counter += 50
}
// make every letter in the sting 
// setTimeout(() => {
 //}, 1000);

  //for ( let i = 0; char < sentence.length; char++ ){