import {
  Box,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ESGCalculator = () => {
  const [savings, setSavings] = useState(0);
  const [esgScore, setEsgScore] = useState(71);
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [loanTerm, setLoanTerm] = useState(5);

  useEffect(() => {
    calculateSavings(esgScore, loanAmount, loanTerm);
  }, []);

  const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const calculateSavings = (esgScore, loanAmount, loanTerm) => {
    const savings = (esgScore / 100) * 0.005 * loanAmount * loanTerm;
    setSavings(savings.toFixed(0));
  };

  const handleEsgScoreChange = (value) => {
    setEsgScore(value);
    calculateSavings(value, loanAmount, loanTerm);
  };

  const handleLoanAmountChange = (value) => {
    setLoanAmount(value);
    calculateSavings(esgScore, value, loanTerm);
  };

  const handleLoanTermChange = (value) => {
    setLoanTerm(value);
    calculateSavings(esgScore, loanAmount, value);
  };

  return (
    <VStack p={4} minH="full">
      <Heading fontSize="2xl">How much do you save with ESG?</Heading>
      {esgScore >= 30 ? (
        <Text fontSize="4xl">{formatNumberWithSpaces(savings)} €</Text>
      ) : (
        <Text fontSize="4xl" color="red.500">
          No discount applied
        </Text>
      )}
      <VStack alignItems="start" fontSize="xl" gap={8} w="80%">
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Text>Loan amount (€): </Text>
          <NumberInput
            size="lg"
            onChange={(valueString) =>
              handleLoanAmountChange(parseFloat(valueString))
            }
            value={loanAmount}
            min={0}
            maxW={28}
          >
            <NumberInputField pr={0} />
          </NumberInput>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Text>Loan term (years): </Text>
          <NumberInput
            size="lg"
            maxW={20}
            defaultValue={15}
            min={1}
            max={99}
            onChange={(valueString) =>
              handleLoanTermChange(parseInt(valueString) || 0)
            }
            value={loanTerm}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <VStack width="full" alignItems="start" gap={0}>
          <Text>ESG scoring: </Text>
          <Flex width="full" gap={10}>
            <Slider
              flex="1"
              focusThumbOnChange={false}
              value={esgScore}
              onChange={handleEsgScoreChange}
              min={0}
              max={100}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="25px" children={esgScore} />
            </Slider>
            <NumberInput
              size="lg"
              maxW={12}
              value={esgScore}
              onChange={(valueString) =>
                handleEsgScoreChange(parseInt(valueString) || 0)
              }
              max={100}
              min={0}
            >
              <NumberInputField pr={0} />
            </NumberInput>
          </Flex>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ESGCalculator;
