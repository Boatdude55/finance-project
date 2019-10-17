import { helper } from '@ember/component/helper';

const passwordDict = [
  'pin'
];
const textDict = [
  'id',
  'username'
];

export function formatInputModel([value, ...rest], namedArgs) {

  let inputType;
  let searchElement = value.toLowerCase();

  if (passwordDict.indexOf(searchElement) !== -1) {

    inputType = 'password';

  }else if (textDict.indexOf(searchElement) !== -1) {

    inputType = 'text';

  }else {

    inputType = 'text';

  }

  return inputType;
}

export default helper(formatInputModel);
