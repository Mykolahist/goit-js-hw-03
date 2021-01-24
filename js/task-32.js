// Пиши код ниже этой строки
function addOverNum(firstNumber, ...otherArgs) {
    let total = 0;
      
    for (const arg of otherArgs) {
      if (arg > firstNumber) {
        total += arg;
      }
    }
  
    return total;
  // Пиши код выше этой строки
}
