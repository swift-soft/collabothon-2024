import { Heading, Stack } from "@chakra-ui/react";
import CarbonOffsetPropositions from "./CarbonOffsetPropositions";
import EmissionsBarChart from "./charts/EmissionsBarChart";
import Widget from "./Widget";

export default function Emissions() {
  return (
    <Widget rowSpan={4} colSpan={4} flex={2}>
      <Stack p={2}>
        <Heading fontSize="xl" mb={2}>
          Your carbon footprint
        </Heading>
        <EmissionsBarChart />
        <CarbonOffsetPropositions />
      </Stack>
    </Widget>
  );
}
