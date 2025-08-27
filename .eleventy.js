module.exports = function (eleventyConfig) {
  // Copy `src/images` to `_site/images`
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
