<template>
    <div class="grid place-items-center h-screen md:w-full">
        <FlashCard />
    </div>
</template>

<script>
import FlashCard from './components/FlashCard.vue'

export default {
    name: 'App',
    data() {
        return {
        }
    },
    components: {
        FlashCard,
    }
}
</script>