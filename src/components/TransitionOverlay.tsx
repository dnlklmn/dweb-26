import React from "react";

/**
 * Legacy transition overlay kept as a no-op.
 *
 * The app currently navigates directly from landing cards and does not mount
 * this component. Keeping this file prevents import churn while avoiding
 * stale context/type coupling.
 */
const TransitionOverlay: React.FC = () => null;

export default TransitionOverlay;
