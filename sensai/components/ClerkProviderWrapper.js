"use client";  // ✅ Required for Clerk

import { ClerkProvider } from "@clerk/clerk-react";

export default function ClerkProviderWrapper({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
