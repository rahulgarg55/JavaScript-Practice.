/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
      const max = Math.max(...salary)
    const min = Math.min(...salary)
    let average = 0;
    for(let i =0;i < salary.length;i++){
      if((salary[i] === max)|| (salary[i] === min)){
         continue
      } 
      else {
         average += salary[i]
      }
    }

    return average/(salary.length-2)

};

-------------------------------------------------------------------------------------
