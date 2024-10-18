import { Box, useToken } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "01.24",
    co2: 4000,
  },
  {
    name: "02.24",
    co2: 3000,
  },
  {
    name: "03.24",
    co2: 2000,
  },
  {
    name: "04.24",
    co2: 2780,
  },
  {
    name: "05.24",
    co2: 1890,
  },
  {
    name: "06.24",
    co2: 2390,
  },
  {
    name: "07.24",
    co2: 3490,
  },
  {
    name: "08.24",
    co2: 2490,
  },
  {
    name: "09.24",
    co2: 2690,
  },
  {
    name: "10.24",
    co2: 1990,
  },
  {
    name: "11.24",
    co2: 2000,
  },
  {
    name: "12.24",
    co2: 2100,
  },
];

export default function EmissionsBarChart() {
  const [navy500] = useToken("colors", ["brand.navy.500"]);

  return (
    <Box w="100%" p={4} pb={0}>
      <Box w="100%" h="200px" bg="whiteAlpha.800" rounded="lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={100}
            data={data}
            margin={{
              top: 24,
              right: 24,
              left: 8,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="co2" stackId="a" fill={navy500} opacity={0.8} />
            <ReferenceLine
              y={3000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
