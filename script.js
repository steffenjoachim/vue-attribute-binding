Vue.createApp({
    data() {
      return {
        headline: "Attribute Binding is awesome",
        imageAttrs: {
          src: "https://picsum.photos/id/237/200/300",
          alt: "Some cute dog",
        },
      };
    },
  }).mount("#app");