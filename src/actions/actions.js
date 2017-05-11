// add name 

function addName(first, last) {
  return {
    type: 'ADD_NAME', 
    first, 
    last
  }
}

export default addName;