import { shallowMount } from "@vue/test-utils";
import Stats from "@/components/Stats.vue";
const sampleProps = {
  avgWeight: 142,
  maxWeight: 150,
  avgReps: 8.9,
  maxReps: 10,
  viewByWeight: false
};
describe("Stats.vue", () => {
  it("renders according to the viewBy setting", () => {
    const wrapper = shallowMount(Stats, {
      propsData: sampleProps
    });
    expect(wrapper.find(".stats__reps").exists()).toBe(true);
    expect(wrapper.find(".stats__weight").exists()).toBe(false);
  });
});
