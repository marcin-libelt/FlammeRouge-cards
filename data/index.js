import {getRandomInt} from '../helpers/arrays';

/** Generates random person name: 'firstname lastname' based on given arrays */
export const getFakeName = () => {
  const firstName = [
    'Jan',
    'Piotr',
    'Kamil',
    'Marcin',
    'Dominik',
    'Teodor',
    'Mirosław',
  ];

  const lastName = [
    'Nowak',
    'Kowalski',
    'Prądkowski',
    'Niemirow',
    'Karmasz',
    'Libelt',
    'Piotrowski',
    'Grycuk',
    'Maciejewski',
    'Modzelewski',
  ];

  const getName = data => data[getRandomInt(data.length)]; // zero based index

  return `${getName(firstName)} ${getName(lastName)}`;
};
