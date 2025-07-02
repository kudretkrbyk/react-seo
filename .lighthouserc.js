module.exports = {
  ci: {
    collect: {
      url: [
        "https://kudretkrbyk.com.tr/",
        "https://kudretkrbyk.com.tr/blog",
        "https://kudretkrbyk.com.tr/blog/kocaeli-sosyal-medya-yonetimi",
        // buraya test etmek istediğin diğer URL'leri de ekleyebilirsin
      ],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
