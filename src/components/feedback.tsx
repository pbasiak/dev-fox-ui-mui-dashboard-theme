import { createContext, useContext } from 'react';
export const FeedbackContext = createContext<(message: string) => void>(() => {});
export const useFeedback = () => useContext(FeedbackContext);
