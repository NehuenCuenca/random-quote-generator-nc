<template>
  <div class="loading" v-if="isLoading">Wait a momentum... 🗿</div>
  <div v-else class="quote-block">
    <p class="quote">"{{ randomQuote.quoteText }}"</p>

    <div class="author-and-tags">
      <div class="info">
        <span class="author">{{ randomQuote.quoteAuthor }}</span>
        <span class="genre">{{ randomQuote.quoteGenre }}</span>
      </div>
      <router-link class="arrow"
        :to="{ name: 'AuthorQuotes', params: { author: dashedAuthor } }">
        ➡
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';

export default {
  setup() {

    const router = useRouter()
    const randomQuote = ref({})
    const isLoading = ref(true);

    const getRandomQuote = async () => {
      try {
        const resp = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
        if (resp.status === 200) {
          const { data } = await resp.json()
          const { quoteText, quoteAuthor, quoteGenre, _id } = data[0]
          
          isLoading.value = false;
          randomQuote.value = { quoteText, quoteAuthor, quoteGenre, _id }
        }
      } catch (error) {
        console.error("EXPLOTO ACA: ", error);
      }
    }

    const dashedAuthor = computed(() => {
      const dashed = randomQuote.value.quoteAuthor.split(' ').join('-')
      return dashed
    })

    onMounted(async () => {
      await getRandomQuote()
    })

    return {
      router,
      randomQuote,
      isLoading,
      dashedAuthor
    }
  }
}
</script>

<style scoped>
.loading {
  align-self: center;
  font: 600 2.5rem 'Raleway', sans-serif;
  color: darkkhaki;
}


.quote-block .author-and-tags {
  padding: 4vh 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vh 0;
  transition: all .3s ease;
  cursor: pointer;
}

.author-and-tags .info {
  display: flex;
  flex-direction: column;
  gap: 1vh 0;
}

.author-and-tags .author {
  font: 700 1.5rem 'Raleway', sans-serif;
  color: #4F4F4F;
}

.author-and-tags .genre {
  font: 500 14px 'Raleway', sans-serif;
  color: #828282;
}

.author-and-tags .arrow {
  font: 500 1.7rem 'Raleway', sans-serif;
  color: transparent;
}

.quote-block .author-and-tags:hover {
  background-color: #333333;
}

.author-and-tags:hover .author {
  color: white;
}

.author-and-tags:hover .arrow {
  color: white;
}
</style>
