import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  useToken,
} from "@chakra-ui/react";
import { useState } from "react";
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
    transport: 0.5,
    energy: 0.8,
    heating: 0.4,
  },
  {
    name: "02.24",
    transport: 0.5,
    energy: 0.75,
    heating: 0.35,
  },
  {
    name: "03.24",
    transport: 0.4,
    energy: 0.7,
    heating: 0.3,
  },
  {
    name: "04.24",
    transport: 0.4,
    energy: 0.6,
    heating: 0.2,
  },
  {
    name: "05.24",
    transport: 0.3,
    energy: 0.55,
    heating: 0.1,
  },
  {
    name: "06.24",
    transport: 0.3,
    energy: 0.5,
    heating: 0.05,
  },
  {
    name: "07.24",
    transport: 0.3,
    energy: 0.45,
    heating: 0.05,
  },
  {
    name: "08.24",
    transport: 0.3,
    energy: 0.5,
    heating: 0.05,
  },
  {
    name: "09.24",
    transport: 0.35,
    energy: 0.6,
    heating: 0.1,
  },
  {
    name: "10.24",
    transport: 0.4,
    energy: 0.7,
    heating: 0.2,
  },
  {
    name: "11.24",
    transport: 0.45,
    energy: 0.75,
    heating: 0.3,
  },
  {
    name: "12.24",
    transport: 0.5,
    energy: 0.8,
    heating: 0.4,
  },
];

export default function EmissionsBarChart() {
  const [navy500, yellow500] = useToken("colors", [
    "brand.navy.500",
    "brand.yellow.500",
  ]);

  const [selected, setSelected] = useState(["transport", "energy", "heating"]);

  return (
    <Stack w="100%">
      <Box w="100%" h="200px" bg="whiteAlpha.800" rounded="lg" boxShadow="md">
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
            {selected.includes("transport") && (
              <Bar
                dataKey="transport"
                fill={navy500}
                opacity={0.8}
                name="Transport"
              />
            )}
            {selected.includes("energy") && (
              <Bar
                dataKey="energy"
                fill={yellow500}
                opacity={0.8}
                name="Electrical energy"
              />
            )}
            {selected.includes("heating") && (
              <Bar
                dataKey="heating"
                fill="#4BD4B6"
                opacity={0.8}
                name="Thermal energy"
              />
            )}
            <ReferenceLine
              y={3000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <CheckboxGroup
        colorScheme="green"
        defaultValue={selected}
        onChange={setSelected}
      >
        <Stack spacing={6} direction="row" alignSelf="center">
          <Checkbox value="transport" colorScheme="brand.navy">
            Transport
          </Checkbox>
          <Checkbox value="energy" colorScheme="brand.yellow">
            Electrical energy
          </Checkbox>
          <Checkbox value="heating" colorScheme="green">
            Thermal energy
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
}
