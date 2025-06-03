// src/types/global.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url: string;
          'loading-anim-type'?: string;
          // To add other Spline attributes, extend this type.
          // For example: events-target?: string;
        },
        HTMLElement
      >;
    }
  }
}

// This export makes the file a module, which is necessary for global declarations to be picked up.
export {};
