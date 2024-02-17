const endDate = '15 Feburary 2024 10: 50 PM';
let date = document.getElementById("endDate");
const inputs = document.querySelectorAll("input");

date.innerText = endDate;

const clock = () => {
  const end = new Date (endDate);
  // console.log(end)
  const now = new Date ();
  // console.log(now);
  const diff = (end - now)/1000; //difference 
  if(diff < 0) return 
  //convert in days///
  inputs[0].value = (Math.floor(diff/3600/24));
  //convert in hours//
  inputs[1].value = (Math.floor(diff/3600)% 24);
   //convert in minutes//
  inputs[2].value = (Math.floor(diff/60) % 60 );
   //convert in Seconds//
   inputs[3].value = (Math.floor(diff) % 60 );
}

clock();

/*
 1 day = 24 hr.
 1 hr  = 60 Min. 
60 min = 3600sec.
*/

setInterval(
  () => {
    clock()
  },
  1000
)