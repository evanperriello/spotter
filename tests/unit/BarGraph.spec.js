import { mount } from "@vue/test-utils";
import BarGraph from "@/components/BarGraph.vue";

const sampleProps = {
  sets: [
    { date: "4", weekDay: 1, weight: 90, unit: "lb", reps: 8 },
    { date: "4", weekDay: 1, weight: 95, unit: "lb", reps: 8 },
    { date: "4", weekDay: 1, weight: 97.5, unit: "lb", reps: 8 }
  ],
  divider: 107.5,
  chartWidth: 500,
  chartHeight: 200,
  spacer: 2,
  viewBy: "weight",
  name: "Chicken Good"
};

describe("BarGraph.vue", () => {
  it("renders an svg element", () => {
    const wrapper = mount(BarGraph);
    expect(wrapper.contains("svg")).toBe(true);
  });

  it("renders a g element for each set in sets prop", () => {
    const wrapper = mount(BarGraph, {
      propsData: sampleProps
    });
    expect(wrapper.findAll("g").length).toBe(3);
  });

  it("renders a rect element with the selected viewBy class for the gs", () => {
    const wrapper = mount(BarGraph, {
      propsData: sampleProps
    });
    expect(
      wrapper
        .find("g")
        .find("rect")
        .classes()
    ).toContain("weight-bar");
  });

  it("does not render a rect element for the unselected viewBy value", () => {
    const wrapper = mount(BarGraph, {
      propsData: sampleProps
    });
    expect(
      wrapper
        .find("g")
        .find("rect")
        .classes()
    ).not.toContain("reps-bar");
  });
});
