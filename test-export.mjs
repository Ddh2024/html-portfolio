import * as nextSanity from 'next-sanity';
console.log('Available exports:', Object.keys(nextSanity));
if ('defineLive' in nextSanity) {
  console.log('defineLive IS present');
} else {
  console.log('defineLive is MISSING');
}
