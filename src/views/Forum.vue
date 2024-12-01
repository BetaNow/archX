<template>
  <div class="forum">
    <h1>{{ translations.forum.title }}</h1>
    <p>{{ translations.forum.description }}</p>
    <div v-for="(category, catKey) in translations.forum.categories" :key="catKey" class="category-section">
      <h2><a :href="category.link">{{ category.title }}</a></h2>
      <p>{{ category.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forum',
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
