import { times, slice } from "ramda";

export default (toIndex, collection) =>
  times(index => slice(0, toIndex, collection[index]), collection.length);
