import { shallow } from "vue-test-utils";
import Menu from "@/components/Menu";

const $route = {
  path: "/",
};

describe("Menu.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Menu, {
      propsData: { title: "Sample title" },
      mocks: { $route },
    });
  });

  it("gets passed title", () => {
    expect(wrapper.hasProp("title", "Sample title")).toBe(true);
  });

  it("render passed title", () => {
    expect(wrapper.find(".title").text()).toBe("Sample title");
  });
});
