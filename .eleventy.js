// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("planet-card", function(name, detail) {
    return `<div class="card ${name}">
    <div class="planet ${name}"></div>
    <h1>${name}</h1>
    <p>${detail}</p>
    </div>`;
  });
};