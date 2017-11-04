import { shallow } from "vue-test-utils";
import Header from "@/components/Header";

describe("Header.vue", () => {
  it("renders with `header` class", () => {
    const wrapper = shallow(Header);

    expect(wrapper.hasClass("header")).toBe(true);
  });

  it("gets passed title", () => {
    const wrapper = shallow(Header, {
      propsData: { title: "Sample title" },
    });
    expect(wrapper.hasProp("title", "Sample title")).toBe(true);
  });
});
