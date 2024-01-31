import {render as rtlRender, RenderOptions} from '@testing-library/react';
// If it is not imported here, it throws a "toBeVisible" error when building.
import '@testing-library/jest-dom/vitest';
import user from '@testing-library/user-event';

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const result = rtlRender(ui, {
    // Wrapper Component.
    // wrapper: AllTheProviders
    ...options,
  });

  return {user, ...result};
};

// export * from '@testing-library/react';
export {customRender as render};
