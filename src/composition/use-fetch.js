import {toRefs, reactive} from '@vue/composition-api';

export default function(url, options) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      state.response = json;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };
  return {...toRefs(state), fetchData};
}
