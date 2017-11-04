import { drop, times, compose, curry, slice } from "ramda";

const numberOfPages = curry(
  ({ length }, itemsPerPage) =>
    Math.ceil(length / itemsPerPage),
);

const calcOffset = curry(
  (itemsPerPage, pageNumber) =>
    pageNumber * itemsPerPage,
);

const getDataByPage = curry(
  (collection, offset) =>
    drop(offset, collection),
);

export default (collection, itemsPerPage) =>
  times(
    compose(
      slice(0, itemsPerPage),
      getDataByPage(collection),
      calcOffset(itemsPerPage),
    ),
  )(numberOfPages(collection)(itemsPerPage));

  // const a = (collection, itemsPerPage) => {
  //   const offset = R.times(
  //     calcOffset(itemsPerPage)
  //   )(numberOfPages(collection)(itemsPerPage));

  //   console.log(offset);

  //   const getData = R.compose(R.slice(0, itemsPerPage), getDataByPage(collection));

  //   return R.transduce(R.map(getData), (sum, x) => {
  //     sum.push(x);
  //     return sum;
  //   },
  //   [],
  //   offset);
  // };
