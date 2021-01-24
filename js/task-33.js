// Пиши код ниже этой строки
function findMatches(firstArg, ...otherArgs) {
    const matches = []; // Не изменяй эту строку
    
    for (const arg of otherArgs) {
        if (firstArg.includes(arg)) {
            matches.push(arg);
        }
    }
  // Пиши код выше этой строки
  return matches;
}
