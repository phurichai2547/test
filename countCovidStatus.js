const { template } = require('@babel/core')

//65130500065 phuri chainikhom
function countCovidStatus(covidStatusArray) {
  let countnegl = 0;
    let countnegh = 0;
    let countpost = 0;
    if (covidStatusArray === null || covidStatusArray === undefined) {
        return undefined;
    } else if (covidStatusArray.length === 0) {
        return {};
    }
    for (let i = 0; i < covidStatusArray.length; i++) {
        if (covidStatusArray[i] === 'negative and low risk') {
            countnegl++
        } else if (covidStatusArray[i] === 'negative and high risk') {
            countnegh++
        } else if (covidStatusArray[i] === 'positive') {
            countpost++
        }
    }
    const obj = { 'negative and low risk': countnegl, 'negative and high risk': countnegh, 'positive': countpost }
    for (let key in obj) {
      if (obj[key] === 0) {
        delete obj[key] 
      }
    }
    return obj;
  }
module.exports = countCovidStatus
