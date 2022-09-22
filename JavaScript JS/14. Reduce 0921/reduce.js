const productsN = [
  { name: "Tamsios spalvos akiniai" },
  { name: "Sviesios spalvos akiniai" },
  { name: "Zalios spalvos akiniai" },
  { name: "Geltoni akiniai" },
];

const getConcatinatedItems = () => {
  const initialValue = "";

  const concatinatedString = productsN.reduce(
    (previousValue, currentValue) =>
      `${previousValue} ${currentValue.name.split(" ")[0]}`,
    initialValue
  );

  return concatinatedString;
};

console.log(getConcatinatedItems());

// array reduce

const showReduceCapabilities = () => {
  const array = [1, 2, 3, 4];
  const initialValue = 0;

  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const sum2 = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, initialValue);

  console.log({ sum, sum2 });
};

const getProductsSum = (products, initialValue = 0) => {
  //   const productsSum = products.reduce((sum, current) => {
  //     console.info({ current });
  //     return sum + current.price;
  //   }, initialValue);

  const productsSum = products.reduce(
    (sum, current) => sum + current.price * current.amount,
    initialValue
  );

  return productsSum;
};

const products = [
  { title: "Helmet", price: 200, amount: 1 },
  { title: "Glasses", price: 600, amount: 5 },
  { title: "Belt", price: 150, amount: 0 },
];

console.log(getProductsSum(products));
