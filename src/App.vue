<template>
  <nav>
    <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 375">
      <path fill="#005cf5" d="M500,250v125h-125v-125h.43v-.43c0-69.04-55.96-125-125-125s-125,55.96-125,125v.43h124.57v125h-125v-125H0C0,111.93,111.93,0,250,0s250,111.93,250,250Z"/>
    </svg>
    <RouterLink to="/">{{ t.navigation?.home || 'Home' }}</RouterLink>
    |
    <RouterLink to="/news">{{ t.navigation?.news || 'News' }}</RouterLink>
    |
    <RouterLink to="/open-source">{{ t.navigation?.openSource || 'Open Source' }}</RouterLink>
    |
    <RouterLink to="/forum">{{ t.navigation?.forum || 'Forum' }}</RouterLink>
    |
    <RouterLink to="/articles">{{ t.navigation?.articles || 'Articles' }}</RouterLink>
    |
    <RouterLink to="/write-up">{{ t.navigation?.writeUp || 'Write-Up' }}</RouterLink>
    |
    <RouterLink to="/ressources">{{ t.navigation?.ressources || 'Ressources' }}</RouterLink>

    <LanguageSelector @language-changed="updateTranslations" />
  </nav>

  <RouterView :translations="t" />
</template>

<script>
import LanguageSelector from './components/LanguageSelector.vue'

export default {
  name: 'App',
  components: { LanguageSelector },
  data() {
    return {
      t: {}
    }
  },
  methods: {
    updateTranslations(translations) {
      this.t = translations
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>