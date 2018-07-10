import { shallowMount } from "@vue/test-utils";
import SearchInput from "@/components/SearchInput.vue";

describe("SearchInput.vue", () => {
  it("renders its prop as the value", () => {
    const term = "my search term";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { value: term }
    });
    expect(wrapper.text()).toMatch(term);
  });
});
