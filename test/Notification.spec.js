import Vue from "vue";
import Vuex from "vuex";
import { shallow } from "vue-test-utils";
import Notification from "@/components/Notification";

Vue.use(Vuex);

const getState = notification => ({
  userInterface: {
    notifications: [],
    currentNotification: notification,
  },
});

const getStore = notification => new Vuex.Store({
  state: getState(notification),
});

describe("Notification.vue", () => {
  it("renders correct message", () => {
    const wrapper = shallow(Notification, {
      store: getStore({ message: "Sample message", type: "success" }),
    });
    expect(wrapper.text().trim()).toBe("Sample message".trim());
  });

  it("renders with `notification` class", () => {
    const wrapper = shallow(Notification, {
      store: getStore({ message: "Sample message", type: "success" }),
    });
    expect(wrapper.hasClass("notification")).toBe(true);
  });

  it("renders with `success` class", () => {
    const wrapper = shallow(Notification, {
      store: getStore({ message: "Sample message", type: "success" }),
    });
    expect(wrapper.hasClass("success")).toBe(true);
  });

  it("renders with `error` class", () => {
    const wrapper = shallow(Notification, {
      store: getStore({ message: "Sample message", type: "error" }),
    });
    expect(wrapper.hasClass("error")).toBe(true);
  });

  it("renders with `warning` class", () => {
    const wrapper = shallow(Notification, {
      store: getStore({ message: "Sample message", type: "warning" }),
    });
    expect(wrapper.hasClass("warning")).toBe(true);
  });
});
