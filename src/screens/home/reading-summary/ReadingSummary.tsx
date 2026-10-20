import { useReadingSummaryService } from "./ReadingSummary.service";
import {
  Metric,
  MetricLabel,
  MetricValue,
  SummaryContainer,
} from "./ReadingSummary.style";

export default function ReadingSummary() {
  const { metrics } = useReadingSummaryService();

  return (
    <SummaryContainer accessibilityLabel="Reading summary">
      {metrics.map((metric) => (
        <Metric key={metric.label}>
          <MetricValue>{metric.value}</MetricValue>
          <MetricLabel>{metric.label}</MetricLabel>
        </Metric>
      ))}
    </SummaryContainer>
  );
}
