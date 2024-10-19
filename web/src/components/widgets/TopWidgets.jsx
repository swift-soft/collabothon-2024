import { useEffect, useState } from "react";
import {
  IconAlertCircle,
  IconArrowBack,
  IconCheckbox,
  IconMail,
  IconMessage,
  IconTransfer,
} from "@tabler/icons-react";
import InfoWidget from "./InfoWidget";
import Widget from "./Widget";
import { Box, Flex } from "@chakra-ui/react";
import ConsultantsWidget from "./ConsultantsWidget";
import {
  fetchActionsForUser,
  fetchMessagesForUser,
  getUser,
} from "../../config/supabaseClient";

const iconMap = {
  "Interest Rate Update on Saving...": <IconMessage />,
  "Important Security Alert...": <IconAlertCircle />,
  "Transfer request": <IconTransfer />,
  "Refund request": <IconArrowBack />,
};

export default function TopWidgets() {
  const [messages, setMessages] = useState([]);
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const currentUser = await getUser();
      if (currentUser) {
        const userId = currentUser.id;
        const fetchedMessages = await fetchMessagesForUser(userId);
        const fetchedActions = await fetchActionsForUser(userId);

        setMessages(fetchedMessages.slice(0, 2));
        setActions(fetchedActions.slice(0, 2));
      }
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Flex gap={4} w="full">
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title={`${messages.length} New messages`}
          link="Open mailbox"
          icon={<IconMail size={36} />}
          items={messages.map((msg) => ({
            icon: iconMap[msg.title] || <IconMessage />,
            text: msg.title,
            date: msg.date,
          }))}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <InfoWidget
          title={`${actions.length} Actions to approve`}
          link="Go to approval actions"
          icon={<IconCheckbox size={36} />}
          items={actions.map((action) => ({
            icon: iconMap[action.title] || <IconCheckbox />,
            text: action.title,
            date: action.date,
          }))}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={2} flex={1}>
        <ConsultantsWidget />
      </Widget>
    </Flex>
  );
}
