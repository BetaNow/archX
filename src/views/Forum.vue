<template>
  <div class="forum">
    <p>{{ translations.forum.title }}</p>
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
