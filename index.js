let newNumber = 0; 
const takeANumber = (katzDeliLine) => {
  newNumber++; 
  katzDeliLine.push(newNumber); 
  return `Welcome, you are ${newNumber}.`
}






const takeANumber = (katzDeliLine, newName) => {
  katzDeliLine.push(newName); 
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

const nowServing  = (katzDeliLine) => {
  if (katzDeliLine.length >= 1) {
    const nextInLine = katzDeliLine.shift(); //shift method removes first element of array (modifies) and returns
    return `Currently serving ${nextInLine}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length >= 1) {
    const formatFunc = (name, i) => i + 1 + ". " + name; 
    return `The line is currently: ${katzDeliLine.map(formatFunc).join(", ")}`; //join puts array in a string
  } else {
    return 'The line is currently empty.'; 
  }
}
//map returns edited array
//join for arrays, will not add ", " to last element