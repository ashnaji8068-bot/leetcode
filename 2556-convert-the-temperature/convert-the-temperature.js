/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const b=new Array(2)
       b[0]=celsius+273.15;
       b[1]=celsius * 1.80 + 32.00;

    return b;
};
