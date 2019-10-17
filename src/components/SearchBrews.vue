<template>
  <div class="brews">
    <h2>Brew Search</h2>
    <section>
      <form @submit.prevent="submitted">
        <input v-model="val" type="text" />
        <button>Submit</button>
      </form>
    </section>
    <div v-if="error">
      <h2>erorr!! {{ error.error }}</h2>
    </div>
    <div class="search-results" v-for="brewery in list" :key="brewery.id">
      <ul>
        <li>Name: {{ brewery.name }}</li>
        <li>Street:</li>
        <li>City:</li>
        <li>Zip:</li>
      </ul>
    </div>
  </div>
</template>

<script>
import useBrewList from "../composition/use-brew-list";
export default {
  setup() {
    const { submitted, list, val, error } = useBrewList();
    return {
      val,
      list,
      submitted,
      error
    };
  }
  //   data() {
  //     return {
  //       val: "",
  //       breweries: []
  //     };
  //   },
  //   methods: {
  //     async submitted(event) {
  //       console.log();
  //       const response = await fetch(
  //         `https://api.openbrewerydb.org/breweries/?by_name=${this.val}`
  //       ).then(res => res.json());
  //       console.log(response);
  //       this.breweries = response;
  //       event.preventDefault();
  //     }
  //   }
};
</script>

<style scoped>
.search-results {
  display: flex;
  width: 300px;
  text-align: left;
}
.brews {
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
ul {
  list-style-type: none;
}
</style>
