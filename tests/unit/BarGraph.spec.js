import { shallowMount } from "@vue/test-utils";
import BarGraph from "@/components/BarGraph.vue";

const sampleProps = {
  sets: [
    { date: "4", weekDay: 1, weight: 90, unit: "lb", reps: 8 },
    { date: "4", weekDay: 1, weight: 95, unit: "lb", reps: 8 },
    { date: "4", weekDay: 1, weight: 110, unit: "lb", reps: 8 }
  ],
  divider: 110,
  chartWidth: 600,
  chartHeight: 200,
  spacer: 2,
  viewBy: "weight",
  name: "Chicken Good"
};

describe("BarGraph.vue", () => {
  it("renders an svg element", () => {
    const wrapper = shallowMount(BarGraph);
    expect(wrapper.contains("svg")).toBe(true);
  });

  it("renders a g element for each set in sets prop", () => {
    const wrapper = shallowMount(BarGraph, {
      propsData: sampleProps
    });
    expect(wrapper.findAll("g").length).toBe(3);
  });

  it("renders a rect element with the selected viewBy class for the gs", () => {
    const wrapper = shallowMount(BarGraph, {
      propsData: sampleProps
    });
    expect(
      wrapper
        .find("g")
        .find("rect")
        .classes()
    ).toContain("weight-bar");
  });

  it("only renders one rect per g", () => {
    const wrapper = shallowMount(BarGraph, {
      propsData: sampleProps
    });
    expect(wrapper.find("g").findAll("rect").length).toBe(1);
  });

  it("assigns the appropriate height for the first bar", () => {
    const expectedOut =
      (sampleProps.sets[0].weight / sampleProps.divider) *
        sampleProps.chartHeight +
      10;
    const wrapper = shallowMount(BarGraph, {
      propsData: sampleProps
    });
    expect(
      Number(
        wrapper
          .find("g")
          .find("rect")
          .attributes().height
      )
    ).toBe(expectedOut);
  });

  it("computes the appropriate bar width", () => {
    const expectedOutput =
      sampleProps.chartWidth / sampleProps.sets.length - sampleProps.spacer;
    const wrapper = shallowMount(BarGraph, { propsData: sampleProps });
    expect(wrapper.vm.barWidth).toBe(expectedOutput);
  });
});
