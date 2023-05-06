import { createContext, useContext } from "react";
import { UserProfile } from "~/types";

const BusinessCardContext = createContext<{ user: UserProfile } | null>(null);

export function useBusinessCard() {
  const context = useContext(BusinessCardContext);
  if (!context) {
    throw new Error(
      "BusinessCard.* component must be rendered as child of BusinessCard component"
    );
  }
  return context;
}

const BusinessCardProvider = BusinessCardContext.Provider;

export default BusinessCardProvider;
