<template>
  <div class="articles">
    <h1>{{ translations.articles.title }}</h1>
    <p>{{ translations.articles.description }}</p>
    <div v-for="(category, catKey) in translations.articles.categories" :key="catKey" class="category-section">
      <h2><a :href="category.link">{{ category.title }}</a></h2>
      <p>{{ category.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    translations: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
