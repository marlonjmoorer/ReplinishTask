module.exports.isObjectEmpty=(object)=>
{
  let isEmpty = true;
  for(keys in object)
  {
     isEmpty = false;
     break; 
  }
  return isEmpty;
}
module.exports.calculateRank=(priority,estimate)=>{
  return Math.floor(priority*(estimate/1000))
}
module.exports.wait=(interval)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>resolve(),interval)
  })
}