/**
 * Converts an object of parameters into a query string.
 *
 * @param {Object} params - The parameters to be converted.
 * @returns {string} The query string representation of the parameters.
 */
export const parseParamsToQueryString = (params) => {
  const results = Object.keys(params).reduce((acc, key) => {
    const value = params[key];

    if (typeof value === "undefined" || value === null || value === "") {
      return acc;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return acc;
      }
      return {
        ...acc,
        [key]: value.join(","),
      };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return new URLSearchParams(results).toString();
};
