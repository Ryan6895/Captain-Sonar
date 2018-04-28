<template>
  <div>
    <Navbar></Navbar>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script>
  import Navbar from './Navbar.vue'
  export default {
    components: {
      'Navbar': Navbar
    }
  }
</script>
<style lang="scss">
  $primary: #287ab1;
  @import '~bulma';
  .columns{
    flex-wrap: wrap
  }
</style>