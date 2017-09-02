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
  (collection, offset, pageNumber) =>
    drop(offset(pageNumber), collection),
);

export default (collection, itemsPerPage) =>
  times(
    compose(
      slice(0, itemsPerPage),
      getDataByPage(collection)(calcOffset(itemsPerPage)),
    ),
  )(numberOfPages(collection)(itemsPerPage));
