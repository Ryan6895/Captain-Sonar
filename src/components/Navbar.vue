<template>
  <nav class="nav has-shadow">
    <div class="container">
        <div>Captain Sonar</div>
        <router-link class="nav-item is-tab"
            :to="{ name: 'Login', params: { id: 'Login' } }">Login</router-link>
        <router-link class="nav-item is-tab"
            :to="{ name: 'NotFound', params: { id: 'NotFound' } }">Home</router-link>
      <!--<router-link class="nav-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
      </router-link>-->
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style>
.dropbtn {
    background-color: black;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: blue;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content:hover {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
