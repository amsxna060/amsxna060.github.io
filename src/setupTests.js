// jest-dom adds custom matchers like toBeInTheDocument()
import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia — framer-motion and our Hero need it.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// jsdom doesn't implement IntersectionObserver — framer-motion whileInView needs it.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});
