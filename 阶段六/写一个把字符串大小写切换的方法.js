function caseConvert(str) {
 return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
  const a = `${s1.toUpperCase()}${s2.toLowerCase()}`
  console.log(a)
  return a
 })
}
caseConvert('adfadfaGSDGSE') //ADFADFAgsdgse