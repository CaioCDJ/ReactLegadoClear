export function changeValue(e){
  console.log('Change')
    
  return {
    type: 'VALUE_CHANGED',
    payload:e.target.value
  }
}
