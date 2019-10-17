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
      <h2>erorr!! {{ error }}</h2>
    </div>
    <div v-if="fetching"><h2>Fetching Data!</h2></div>
    <div class="search-results" v-for="brewery in list" :key="brewery.id">
      <ul>
        <li><span class="title">Name:</span> <span class="brew">{{ brewery.name }}</span></li>
        <li><span class="title">Street:</span> <span class="brew">{{ brewery.street}}</span></li>
        <li><span class="title">City:</span><span class="brew"> {{ brewery.city }}</span></li>
        <li><span class="title">Zip:</span><span class="brew"> {{brewery.postal_code}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import useBrewList from "../composition/use-brew-list";


import {createComponent} from '@vue/composition-api';
export default createComponent({
  setup() {
    const { submitted, list, val, error, fetching } = useBrewList();
    return {
      val,
      list,
      submitted,
      error,
      fetching
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
});
</script>

<style scoped>
.search-results {
  display: flex;
  width: 600px;
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
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.brew {
  font-weight: bold;
}

</style>
