export default {
  methods: {
    get(url) {
      return this.$axios.get(url);
    }
  }
};
