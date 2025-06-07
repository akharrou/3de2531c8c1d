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
      'gmpx-api-loader': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          key: string; // API Key
          'solution-channel'?: string;
        },
        HTMLElement
      >;
      'gmpx-store-locator': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'map-id'?: string;
          // This element will be configured via JavaScript
        },
        HTMLElement
      > & {
        // Adding configureFromQuickBuilder method for TypeScript
        configureFromQuickBuilder?: (configuration: any) => void;
      };
    }
  }
}

// This export makes the file a module, which is necessary for global declarations to be picked up.
export {};
