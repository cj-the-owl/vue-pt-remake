<!-- template is where the html goes -->
<template> 
    <nav>
        <img src="https://img.logoipsum.com/265.svg" alt="logo">
        <!-- div for nav to home about and properties -->
        <!-- to= is to direct where like an href in a normal navabar -->
        <div>
            <!-- router-link is like an a tag -->
            <router-link to="/">Home</router-link> ||
            <router-link to="/about">About</router-link> ||
            <router-link to="/properties">Properties</router-link>
        </div>

        <!-- div for login and register nav -->
        <!-- v-if is to show if a someone that isnt a user is viewing -->
        <div v-if="!user">
            <router-link to="/login">Login</router-link> ||
            <router-link to="/register">Register</router-link>
        </div>
    </nav>
</template>
<script>
    export default {
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>