export const formatSeconds = (seconds: number): string => {
  return new Date(seconds * 1000).toLocaleTimeString().substring(3);
};
