<template>
  <div id="app">
    <component :is="layout">
    <router-view/>
    </component>
  </div>
</template>
<script>
import EmptyLayout from './Layouts/EmptyLayout'
import MainLayout from './Layouts/MainLayout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  comments: {
    EmptyLayout, MainLayout
  }
}
</script>
<style lang="css">
</style>
