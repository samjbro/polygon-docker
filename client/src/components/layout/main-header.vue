<template>
  <div class="main-header">
    <img src="~img/logo-and-title.svg"  class="main-header__brand" alt="Polygon">
    <div class="main-header__nav">
      <div class="main-header__navlink" v-for="(link, i) in links" :key="i">
        {{ link.name.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: 'Gaming' },
        { name: 'Entertainment' },
        { name: 'Reviews' },
        { name: 'Features' },
        { name: 'Guides' },
        { name: 'Shopping' },
        { name: 'Esports' },
        { name: 'Videos' },
        { name: 'Podcasts' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~#/scss/abstracts/_variables.scss";
.main-header {
  flex: 0 0 $headerHeight;
  background: linear-gradient(to right, $purple-medium-1 30%, $pink-medium-1);
  display: flex;
  align-items: center;

  &__brand {
    display: flex;
    align-items: center;
    height: 80%;
    width: 15rem;;
    overflow: hidden;
    margin-left: 1rem;
    margin-right: 4rem;
  }

  &__nav {
    display: flex;
    // flex: 5;
  }

  &__navlink {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: $white;

  }
}
</style>
