
export default {
  name: 'Editor',
  data () {
    return {
      editorText: ''
    }
  },

  watch: {
    editorText () {
      this.$store.commit('editorText', this.editorText)
    }
  }
}
