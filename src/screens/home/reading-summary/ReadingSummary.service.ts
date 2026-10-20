export function useReadingSummaryService() {
  const metrics = [
    { value: "24", label: "MINUTES TODAY" },
    { value: "142", label: "MINUTES THIS WEEK" },
    { value: "03", label: "BOOKS FINISHED" },
  ] as const;

  return {
    metrics,
  };
}
