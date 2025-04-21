declare module "expo-router" {
  import { ComponentType } from "react";

  export const Link: ComponentType<{
    href: string;
    asChild?: boolean;
    children?: React.ReactNode;
  }>;
  export function useRouter(): {
    push: (path: string) => void;
    replace: (path: string) => void;
    back: () => void;
    prefetch: (path: string) => void;
  };
}
