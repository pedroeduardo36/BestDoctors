export const dayOfTheWeek = day => {
  const dayFormatted = {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sabado',
  };

  return dayFormatted[day];
};
