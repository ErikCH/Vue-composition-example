<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-bind:value="hello" type="text" />
    <h3>Installed CLI Plugins</h3>
    {{ hello }}
    {{ foo }}
  </div>
</template>

<script>
import { createComponent, ref } from "@vue/composition-api";
import myObj from "../composition/myObj";

export default createComponent({
  props: {
    msg: String
  },
  name: "HelloWorld",
  setup() {
    const hello = ref("hi");
    // const object = reactive({ foo: "bar" });
    const { foo } = myObj();
    return {
      hello,
      foo
    };
  }
});
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
