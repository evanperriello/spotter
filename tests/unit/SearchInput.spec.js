import { shallowMount } from "@vue/test-utils";
import SearchInput from "@/components/SearchInput.vue";

describe("SearchInput.vue", () => {
  it("renders an input element", () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.contains("input")).toBe(true);
  });

  it("renders a passed value", () => {
    const passedVal = "Chicken good";
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        value: passedVal
      }
    });
    expect(wrapper.element.value).toBe(passedVal);
  });

  it("changes from prop value to set value on user input", () => {
    const passedVal = "Chicken good";
    const userInput = "Multipass";
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        value: passedVal
      }
    });
    const input = wrapper.find('input[type="text"]');
    input.setValue(userInput);
    expect(wrapper.element.value).toBe(userInput);
  });

  it("emits input event with correct value on user input", () => {
    const passedVal = "Chicken good";
    const userInput = "Multipass";
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        value: passedVal
      }
    });
    const input = wrapper.find('input[type="text"]');
    input.setValue(userInput);
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([userInput]);
  });
});
