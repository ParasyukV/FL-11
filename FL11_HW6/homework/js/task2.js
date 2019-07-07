let result, msgs = {
    norm: 'Normal triangle',
    iso: 'Isosceles triangle',
    equil: 'Equivalent triangle',
    notExists: 'Triangle doesn’t exist'
  };
  
  const inputMsg = 'Enter length for side';
  let A = parseFloat(prompt(`${inputMsg} A`, ''));
  let B = parseFloat(prompt(`${inputMsg} B`, ''));
  let C = parseFloat(prompt(`${inputMsg} C`, ''));
  
  if (A + B > C && A + C > B && B + C > A) {
  
    if (A === B && B === C && C === A) {
      result = msgs.equil;
    } else if (A === B || B === C || C === A) {
      result = msgs.iso;
    } else {
      result = msgs.norm;
    }
  
  } else {
    result = msgs.notExists;
  }
  
  console.log(result);
  