<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" :class="$style.logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="@/assets/vue.svg" :class="[$style.logo, $style.vue]" alt="Vue logo" />
        </a>
    </div>

    <HelloWorld msg="Vite + Vue" />

    <div>{{ msg }}</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const msg = computed(() => store.state.test)
</script>

<style module lang="stylus">
.logo
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
.logo:hover
    filter: drop-shadow(0 0 2em #646cffaa);
.logo.vue:hover
    filter: drop-shadow(0 0 2em #42b883aa);
</style>
