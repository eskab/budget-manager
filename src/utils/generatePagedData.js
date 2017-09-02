import { drop, times, compose, curry } from "ramda";
import sliceNestedArrays from "./sliceNestedArrays";

// TO BE REFACTORED

const numberOfPages = ({ length }, itemsPerPage) => Math.ceil(length / itemsPerPage);

const calcOffset = itemsPerPage => pageNumber => pageNumber * itemsPerPage;

const part = (collection, calc) => pageNumber => drop(calc(pageNumber), collection);

export default (collection, itemsPerPage) =>
  compose(
    curry(sliceNestedArrays)(itemsPerPage),
    curry(times)(part(collection, calcOffset(itemsPerPage))),
    numberOfPages,
  )(collection, itemsPerPage);
