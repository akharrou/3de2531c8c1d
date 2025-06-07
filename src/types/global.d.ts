
// src/types/global.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url: string;
          'loading-anim-type'?: string;
        },
        HTMLElement
      >;
      // gmpx-api-loader and gmpx-store-locator are no longer used
    }
  }
}

// This export makes the file a module, which is necessary for global declarations to be picked up.
export {};
