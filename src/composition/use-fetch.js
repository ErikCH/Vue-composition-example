import { toRefs, reactive } from "@vue/composition-api";

export default function(url, options) {
  const state = reactive({
    response: [],
    error: null
  });
  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      console.log("url", res);
      const json = await res.json();
      state.response = json;
      console.log("r", state.response);
    } catch (errors) {
      state.error = errors;
    }
  };
  fetchData();
  console.log("resp", state.response.value);
  console.log("error", state.response.error);
  return { ...toRefs(state) };
}
