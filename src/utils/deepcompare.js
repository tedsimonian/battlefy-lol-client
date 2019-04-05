import { useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";

// make sure our value doesn't change if they are the same, just return the original value, only change them if they are different
const memoize = (value) => {
  // use reacts useRef to create a mutable object to contain a value that will exist throughout the life cycle of a component
  const ref = useRef();
  // The .current property of ref is initialized to the passed argument. in this case nothing in the beginning
  // Compare our ref to our passed in value, if they aren't equal, assign the value to our ref.
  // using lodash's isEqual, we can do a deep compare if our assumed value is a nested object
  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }
  // return our ref
  return ref.current;
};

// assuming our incoming dependency is a nested object, we need to do a deep compare on it
export const useDeepCompareEffect = (callback, dependencies) => {
  useEffect(callback, memoize(dependencies));
};
