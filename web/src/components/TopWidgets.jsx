import { IconCheckbox, IconMail } from "@tabler/icons-react";
import InfoWidget from "./InfoWidget";
import Widget from "./Widget";
import { Flex } from "@chakra-ui/react";
import ConsultantsWidget from "./ConsultantsWidget";

export default function TopWidgets() {
  return (
    <Flex gap={4} w="full">
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title="7 New messages"
          link="Open mailbox"
          icon={<IconMail size={36} />}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title="3 Actions to approve"
          link="Go to approval requests"
          icon={<IconCheckbox size={36} />}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <ConsultantsWidget />
      </Widget>
    </Flex>
  );
}
