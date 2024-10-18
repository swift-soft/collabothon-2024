import CarbonOffsetPropositions from "./CarbonOffsetPropositions";
import EmissionsBarChart from "./charts/EmissionsBarChart";
import Widget from "./Widget";

export default function Emissions() {
  return (
    <Widget colSpan={4}>
      <EmissionsBarChart />
      <CarbonOffsetPropositions />
    </Widget>
  );
}
