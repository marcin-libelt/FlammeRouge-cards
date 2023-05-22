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

  const getName = data => {
    const m = 100,
      random = Math.random() * m + 1, // to avoid zero value
      step = m / data.length,
      section = Math.ceil(random / step);
    return data[section - 1]; // zero based index
  };

  return `${getName(firstName)} ${getName(lastName)}`;
};
