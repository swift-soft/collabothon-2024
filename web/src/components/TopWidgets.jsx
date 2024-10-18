import {
  IconAlertCircle,
  IconArrowBack,
  IconCheckbox,
  IconMail,
  IconMessage,
  IconTransfer,
  IconUserExclamation,
} from "@tabler/icons-react";
import InfoWidget from "./InfoWidget";
import Widget from "./Widget";
import { Flex } from "@chakra-ui/react";
import ConsultantsWidget from "./ConsultantsWidget";

const messages = [
  {
    icon: <IconMessage />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
  {
    icon: <IconAlertCircle />,
    text: "Lorem ipsum dolor sit...",
    date: "2024-10-16",
  },
];

const requests = [
  {
    icon: <IconTransfer />,
    text: "Transfer request",
    date: "2024-10-16",
  },
  {
    icon: <IconArrowBack />,
    text: "Refund request",
    date: "2024-10-16",
  },
];

export default function TopWidgets() {
  return (
    <Flex gap={4} w="full">
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title="7 New messages"
          link="Open mailbox"
          icon={<IconMail size={36} />}
          items={messages}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title="3 Actions to approve"
          link="Go to approval requests"
          icon={<IconCheckbox size={36} />}
          items={requests}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <ConsultantsWidget />
      </Widget>
    </Flex>
  );
}
