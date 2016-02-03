'use strict';

function idnpCheckSum(val, multiplier) {
  multiplier = multiplier.toString();
  return (val.toString().split('').reduce(function (prev, val, i) {
      return prev + (+val) * (+multiplier[i]);
    }, 0) / 10) % 10;
}

function validateIdnp(val) {

  if (!val) return false;
  val = val.toString();

  if (val.length !== 13) return false;
  if (['0', '2'].indexOf(val.charAt(0)) == -1) return false;

  var multiplier = '731731731731';
  var checkSum = idnpCheckSum(val.slice(0, val.length - 1), multiplier);

  return true;
}
