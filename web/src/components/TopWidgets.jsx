import InfoWidget from "./InfoWidget";
import Widget from "./Widget";

export default function TopWidgets() {
  return (
    <>
      <Widget colSpan={2}>
        <InfoWidget />
      </Widget>
      <Widget colSpan={2} />
      <Widget colSpan={2} />
    </>
  );
}
