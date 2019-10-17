import { reactive, toRefs } from "@vue/composition-api";
export default function() {
  const object = reactive({ foo: "bar" });
  return toRefs(object);
}
