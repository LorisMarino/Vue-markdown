
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
    } else {
      const text = `# Markdown editor \n\n ## Bienvenue sur Mardown editor \n\n *__Écrivez__ votre markdown à gauche et __lisez-le__ à droite* \n\n **Retrouvez le code sur [GitHub](https://github.com/LorisMarino/Vue-markdown)**`
      this.editorText = text
    }
  },

  watch: {
    editorText () {
      this.$store.commit('editorText', this.editorText)
      localStorage.setItem('editorText', this.editorText)
    }
  }
}
