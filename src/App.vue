<template>
  <nav>
    <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 375">
      <path fill="#005cf5" d="M500,250v125h-125v-125h.43v-.43c0-69.04-55.96-125-125-125s-125,55.96-125,125v.43h124.57v125h-125v-125H0C0,111.93,111.93,0,250,0s250,111.93,250,250Z"/>
    </svg>
    <router-link to="/">Accueil</router-link>
    |
    <router-link to="/news">News</router-link>
    |
    <router-link to="/open-source">Open source</router-link>
    |
    <router-link to="/forum">Forum</router-link>
    |
    <router-link to="/articles">Articles</router-link>
    |
    <router-link to="/write-up">Write-Up</router-link>
    |
    <router-link to="/ressources">Ressources</router-link>
  </nav>

  <router-view/>
</template>

<style>
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