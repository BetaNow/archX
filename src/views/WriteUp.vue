<template>
  <div class="write-up">
    <h1>{{ translations.writeUp.title }}</h1>
    <p>{{ translations.writeUp.description }}</p>
    <div v-for="(items, catKey) in translations.writeUp.items" :key="catKey" class="category-section">
      <h2 v-if="!items.titles"><a :href="items.link">{{ items.title }}</a></h2>
      <h2 v-else v-for="titles in items.titles"><a :href="titles.link">{{ titles.title }}</a></h2>
      <p>{{ items.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteUp',
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
