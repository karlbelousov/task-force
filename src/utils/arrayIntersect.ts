export default function arrayIntersect(array1: any[], array2: any[]) {
  const result = array1.filter(function (n) {
    return array2.indexOf(n) !== -1;
  });
  return result;
}
