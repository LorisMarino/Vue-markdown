
export default {
  name: 'Editor',
  data () {
    return {
      editorText: ''
    }
  },

  mounted () {
    if (localStorage.getItem('editorText')) {
      this.editorText = localStorage.getItem('editorText')
    }
  },

  watch: {
    editorText () {
      this.$store.commit('editorText', this.editorText)
      localStorage.setItem('editorText', this.editorText)
    }
  }
}
