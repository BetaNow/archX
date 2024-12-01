<template>
  <div class="language-selector">
    <select v-model="currentLang" @change="changeLang">
      <option value="en">🇬🇧 English</option>
      <option value="fr">🇫🇷 Français</option>
    </select>
  </div>
</template>

<script>
import en from '../assets/locales/en'
import fr from '../assets/locales/fr'

export default {
  name: 'LanguageSelector',
  data() {
    return {
      currentLang: 'en'
    }
  },
  methods: {
    changeLang() {
      const translations = this.currentLang === 'en' ? en : fr;
      this.$emit('language-changed', translations);

      // Save the selected language to localStorage
      localStorage.setItem('selectedLang', this.currentLang);
    }
  },
  mounted () {
    // Load the selected language from localStorage
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
      this.currentLang = savedLang;
    }

    this.changeLang();
  }
}
</script>

<style scoped>
.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
}

select {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
}

select:hover {
  border-color: #666;
}
</style>