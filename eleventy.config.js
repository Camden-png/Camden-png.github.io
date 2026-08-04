export default function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/static/**/*.css");
  eleventyConfig.addPassthroughCopy("src/static/**/*.js");
  eleventyConfig.addPassthroughCopy("src/static/**/*.ico");
  eleventyConfig.addPassthroughCopy("src/static/**/*.pdf");
  eleventyConfig.ignores.add("python");
  eleventyConfig.ignores.add("serve_local.ps1");
  eleventyConfig.ignores.add("serve_update.ps1");

  // Watch for changes in passthrough files and reload
  eleventyConfig.setServerOptions({
    watch: ["docs/**/*.css", "docs/**/*.js"]
  });

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
}
