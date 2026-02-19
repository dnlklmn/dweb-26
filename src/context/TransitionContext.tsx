import React, { createContext, useContext, useState, useCallback } from "react";

export interface TransitionData {
  slug: string;
  infoTop: DOMRect;
  meta: DOMRect;
  tags: DOMRect;
  card: DOMRect;
}

interface TransitionContextType {
  transitionData: TransitionData | null;
  setTransitionData: (data: TransitionData | null) => void;
  clearTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [transitionData, setTransitionData] = useState<TransitionData | null>(
    null
  );

  const clearTransition = useCallback(() => {
    setTransitionData(null);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ transitionData, setTransitionData, clearTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
};
