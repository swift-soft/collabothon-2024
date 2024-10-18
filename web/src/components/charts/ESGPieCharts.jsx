import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const dataOuter = [
  { name: "CSR Strategy", value: 9, group: 0, color: "#003f52" },
  { name: "Shareholders", value: 12, group: 0, color: "#004a61" },
  { name: "Management", value: 35, group: 0, color: "#00556f" },
  { name: "Product responsibility", value: 10, group: 1, color: "#e8a303" },
  { name: "Community", value: 14, group: 1, color: "#d59501" },
  { name: "Human rights", value: 8, group: 1, color: "#b48006" },
  { name: "Workforce", value: 30, group: 1, color: "#b78000" },
  { name: "Resources used", value: 20, group: 2, color: "#2c947d" },
  { name: "Emissions", value: 28, group: 2, color: "#38b197" },
  { name: "Innovation", value: 20, group: 2, color: "#40bea3" },
];

const dataInner = [
  { name: "Governance", value: 56, color: "#03485d" },
  { name: "Social", value: 62, color: "#FFB300" },
  { name: "Environmental", value: 68, color: "#4bd4b6" },
];

export default function ESGPieChart() {
  const [activeInnerIndex, setInnerActiveIndex] = useState();
  const [activeOuterIndex, setOuterActiveIndex] = useState(1000);

  return (
    <>
      <Text
        position="absolute"
        top="156px"
        left="50%"
        transform="translate(-50%)"
        fontSize="xl"
        fontWeight={600}
        opacity={activeInnerIndex === undefined ? 1 : 0}
      >
        ESG Score
      </Text>
      <Text
        position="absolute"
        top="176px"
        left="50%"
        transform="translate(-50%)"
        fontWeight="600"
        fontSize="36px"
        opacity={activeInnerIndex === undefined ? 1 : 0}
      >
        186
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          width={300}
          height={300}
          onMouseLeave={() => {
            setInnerActiveIndex(undefined);
            setOuterActiveIndex(1000);
          }}
        >
          <Pie
            activeIndex={activeInnerIndex}
            activeShape={renderActiveShapeInner}
            data={dataInner}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={110}
            paddingAngle={2}
            fill="#5DA782"
            dataKey="value"
            onMouseEnter={(_, index) => setInnerActiveIndex(index)}
          >
            {dataInner.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={
                  activeInnerIndex === undefined || activeInnerIndex === index
                    ? 1
                    : 0.4
                }
              />
            ))}
          </Pie>
          <Pie
            activeIndex={activeOuterIndex}
            activeShape={renderActiveShapeOuter}
            inactiveShape={(props) =>
              activeOuterIndex === 1000
                ? renderActiveShapeOuter({ ...props, opacity: 1 })
                : renderActiveShapeOuter({ ...props, opacity: 0.4 })
            }
            data={dataOuter}
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={140}
            paddingAngle={2}
            fill="#5DA782"
            dataKey="value"
            onMouseEnter={(cell, index) => {
              setInnerActiveIndex(cell.group);
              setOuterActiveIndex(index);
            }}
          >
            {dataOuter.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={
                  activeOuterIndex === undefined || activeOuterIndex === index
                    ? 1
                    : 0.4
                }
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

const renderActiveShapeInner = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy - 16}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontWeight={600}
        fontSize={20}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 24}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontWeight={600}
        fontSize={36}
      >
        {value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 3}
        outerRadius={outerRadius + 7}
        fill={fill}
      />
    </g>
  );
};

const renderActiveShapeOuter = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
    opacity,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={opacity}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        opacity={opacity}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
        opacity={opacity}
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        fill={fill}
        stroke="none"
        opacity={opacity}
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        opacity={opacity}
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        opacity={opacity}
      >
        {value}
      </text>
    </g>
  );
};
