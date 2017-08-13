import Vue from "vue";
import iView from "iview";
import Header from "@/components/Header";
import router from "@/router";

Vue.use(iView);

const getRenderedText = (Component, propsData) => {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ router, propsData }).$mount();

  return vm.$el.querySelector(".header .title").textContent;
};

describe("Header.vue", () => {
  it("should render prop title correctly", () => {
    expect(getRenderedText(Header, {
      title: "Sample test title",
    })).to.equal("Sample test title");

    expect(getRenderedText(Header, {
      title: "Another test title",
    })).to.equal("Another test title");
  });

  it("should render menu component", () => {
    const Ctor = Vue.extend(Header);
    const vm = new Ctor({ router, propsData: "" }).$mount();

    // eslint-disable-next-line
    expect(vm.$el.querySelector(".header .ivu-menu")).to.not.be.null;
  });
});
