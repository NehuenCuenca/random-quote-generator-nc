<template>
    <div>
        <h1 class="name-author">{{ undashedAuthor }}</h1>
        <WaitingSign v-if="isLoading" />
        <div v-else class="quotes-list">
            <p class="quote" v-for="({quoteText, _id}) in quotesList" :key="_id">"{{quoteText}}"</p>
            <p class="no-quotes" v-if="quotesList.length === 0">Sorry, but this author doesn't have any quotes 🤷‍♂️</p>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import WaitingSign from '../components/WaitingSign.vue';

export default {
    components: { WaitingSign },

    setup () {
        const { params } = useRoute()

        const { author } = params
        const quotesList = ref([])
        const isLoading = ref(true);
        
        const getQuotesFromAuthor = async(author) => { 
            try {
                const resp = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author.value}`)
                if (resp.status === 200) {
                    const { data } = await resp.json()
                    
                    isLoading.value = false;
                    quotesList.value = [ ...data ]
                }
            } catch (error) {
                console.error("EXPLOTO ACA: ", error);
            }
         }

        onMounted(async() => {
            await getQuotesFromAuthor(undashedAuthor)
        })

        const undashedAuthor = computed(() => {
            const undashed = author.split('-').join(' ')
            return undashed
        })
    
        
        return {
            params,
            undashedAuthor,
            quotesList,
            isLoading
        }
    }
}
</script>

<style scoped>
h1.name-author {
    font: 700 2.25rem 'Raleway', sans-serif;
    margin-bottom: 15vh;
}

.quotes-list {
    display: flex;
    flex-direction: column;
    gap: 5vh 0;
}

p.no-quotes {
    font: 500 1.25rem 'Raleway', sans-serif;
    text-decoration: underline;
}
</style>