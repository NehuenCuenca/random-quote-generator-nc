<template>
    <div>
        <h1 class="name-author">{{ undashedAuthor }}</h1>
        <div class="quotes-list">
            <p class="quote" v-for="({quoteText, _id}) in quotesList" :key="_id">"{{quoteText}}"</p>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'


export default {
    setup () {
        const { params } = useRoute()

        const { author } = params
        const quotesList = ref([])
        
        const getQuotesFromAuthor = async(author) => { 
            try {
                const resp = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author.value}`)
                if (resp.status === 200) {
                    const { data } = await resp.json()
                    
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
            quotesList
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
</style>