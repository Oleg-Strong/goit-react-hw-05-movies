const checkCasts = castArray => {
  let filteredArray = castArray.reduce(
    (acc, value) => {
      if (acc.map[value.id])
        //если данноей значение уже было
        return acc; // ничего не делаем, возвращаем уже собранное
      acc.map[value.id] = true; // помечаем значение, как обработанное
      acc.filteredArray.push(value); // добавляем объект в массив отфильтрованных
      return acc; // возвращаем собранное
    },
    {
      map: {}, // здесь будут отмечаться обработанные значения
      filteredArray: [], // здесь конечный массив уникальных отфильтрованных свойств
    }
  ).filteredArray;
  return filteredArray; // получаем конечный массив
};
export default checkCasts;
