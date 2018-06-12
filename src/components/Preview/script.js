export default {
  name: 'Preview',
  computed: {
    preview () {
      return this.$store.getters.preview
    }
  }
}
