<template>
  <div class="ressources">
    <h1>{{ translations.resources.title }}</h1>
    <p>{{ translations.resources.description }}</p>

    <h2>{{ translations.resources.researchTips.title }}</h2>
    <h2>{{ translations.resources.researchTips.description }}</h2>
    <ul>
      <li v-for="tip in translations.resources.researchTips.tips">
        {{ tip.description }}
        <template v-if="tip.links" v-for="link in tip.links">
          , <a :href="link.url">{{ link.title }}</a>
        </template>
      </li>
    </ul>

    <form action="https://duckduckgo.com/" method="get" id="form-search">
      <input type="text" name="q" id="input-search">
      <button id="submit-search">Search</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>{{ translations.resources.table.title }}</th>
          <th>{{ translations.resources.table.author }}</th>
          <th>{{ translations.resources.table.date }}</th>
          <th>{{ translations.resources.table.description }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="categorie in translations.resources.categories" :key="categorie.title">
          <tr v-for="resource in categorie.items" :style="'background-color: ' + categorie.color">
            <td><a :href="resource.link">{{ resource.title }}</a></td>
            <td>{{ resource.authors }}</td>
            <td>{{ resource.date }}</td>
            <td>{{ resource.description }}</td>
          </tr>
        </template>


      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Ressources',
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
