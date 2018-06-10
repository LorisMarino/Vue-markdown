import marked from 'marked'

export default {
  state: {
    editorText: ''
  },
  mutations: {
    editorText (state, data) {
      state.editorText = data
    }
  },
  getters: {
    preview: state => {
      return marked(state.editorText)
    }
  }
}
