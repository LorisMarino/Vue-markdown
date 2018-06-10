<template>
  <div id="app">
    <Header />
    <Editor />
  </div>
</template>

<script>
import Header from './components/Header'
import Editor from './components/Editor'

export default {
  name: 'App',
  components: {
    Header,
    Editor
  }
}
</script>

<style lang="scss">
  @import 'static/css/sanitize';
  html,
  body {
    height: 100%;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  #app {
    display: grid;

    height: 100%;
    margin: 0 auto;

    grid-template-areas: 'header   header'
    'editor  preview';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 60px 1fr;
  }
</style>
