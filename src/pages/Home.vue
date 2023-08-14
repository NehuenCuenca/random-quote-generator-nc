<template>
    <div>
        Homee page
    </div>
</template>

<script>
import { useRouter } from 'vue-router';


export default {
    setup () {

        const router = useRouter()

    
        return {
            router
        }
    }
}
</script>

<style scoped>

</style>


// Home.vue
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}