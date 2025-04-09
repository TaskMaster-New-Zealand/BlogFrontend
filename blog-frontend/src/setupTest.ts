// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Extend the Window interface to include the ENV property
declare global {
  interface Window {
    ENV: {
      VITE_API_BASE_URL: string;
      VITE_APP_ENV: string;
      VITE_AUTH_ENABLED: string;
      VITE_FEATURE_COMMENTS: string;
      VITE_FEATURE_LIKES: string;
      VITE_ANALYTICS_ENABLED: string;
    };
  }
}

// Mock para las variables de entorno de Vite
window.ENV = {
  VITE_API_BASE_URL: 'http://localhost:8000/api',
  VITE_APP_ENV: 'test',
  VITE_AUTH_ENABLED: 'true',
  VITE_FEATURE_COMMENTS: 'true',
  VITE_FEATURE_LIKES: 'true',
  VITE_ANALYTICS_ENABLED: 'false',
};

// Mock para IntersectionObserver (si lo necesitas)
global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];

  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Limpia y restaura todos los mocks después de cada prueba
afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});
