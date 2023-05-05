export const formatMilliseconds = (milliseconds: number): string => {
  return new Date(milliseconds).toLocaleTimeString().substring(3);
};
