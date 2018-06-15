<template>
  <div id="app">
    <Header />
    <Editor />
    <Preview />
  </div>
</template>

<script>
import Header from './components/Header'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  components: {
    Header,
    Editor,
    Preview
  }
}
</script>

<style lang="scss">
  @import 'static/css/sanitize';
  @import 'src/assets/scss/utils/colors';
  html,
  body {
    height: 100%;
  }
  body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;

    background-color: $twilight-blue;
    a {
      text-decoration: none;

      color: $tana;
      &:hover {
        color: $pewter;
      }
    }
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
