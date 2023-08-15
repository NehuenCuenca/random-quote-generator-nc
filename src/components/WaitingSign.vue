<template>
    <div class="loading">Wait a momentum... {{ randomEmoji }}</div>
</template>

<script>
import { computed } from 'vue'

export default {
    setup () {
        const emojis = ['🗿', '👀', '🤓', '👴']

        const randomEmoji = computed(() => {
            const rndIndex = Math.floor( Math.random() * emojis.length)
            return emojis[rndIndex]
        })
    
        return { randomEmoji }
    }
}
</script>

<style scoped>
.loading {
  align-self: center;
  font: 600 2.25rem 'Raleway', sans-serif;
  color: darkkhaki;
}
</style>