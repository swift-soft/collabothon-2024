import CarbonOffsetPropositions from "./CarbonOffsetPropositions";
import EmissionsBarChart from "./charts/EmissionsBarChart";
import Widget from "./Widget";

export default function Emissions() {
  return (
    <Widget rowSpan={4} colSpan={4} flex={2}>
      <EmissionsBarChart />
      <CarbonOffsetPropositions />
    </Widget>
  );
}
