import { IconMail, IconPig, IconReceipt2 } from "@tabler/icons-react";
import InfoWidget from "./InfoWidget";
import Widget from "./Widget";

export default function TopWidgets() {
  return (
    <>
      <Widget colSpan={2} rowSpan={1}>
        <InfoWidget
          title="10 Messages"
          link="Open mailbox"
          icon={<IconMail size={48} />}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={1}>
        <InfoWidget
          title="3 new orders to be released"
          link="Release now"
          icon={<IconReceipt2 size={48} />}
        />
      </Widget>
      <Widget colSpan={2} rowSpan={1}>
        <InfoWidget
          title="12 new orders to be released"
          link="Release now"
          icon={<IconPig size={48} />}
        />
      </Widget>
    </>
  );
}
