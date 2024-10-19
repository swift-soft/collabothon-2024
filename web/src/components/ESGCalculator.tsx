import {
  Box,
  Flex,
  Heading,
  Input,
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
  const [reducedInterestRate, setReducedInterestRate] = useState(0);

  useEffect(() => {
    calculateSavings(esgScore, loanAmount, loanTerm);
  }, []);

  const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const calculateSavings = (esgScore, loanAmount, loanTerm) => {
    const savings = (esgScore / 100) * 0.005 * loanAmount * loanTerm;
    setSavings(savings.toFixed(0));

    if (loanAmount > 0) {
      const interestReduction = (esgScore / 1000) * 5;
      setReducedInterestRate(interestReduction.toFixed(2));
    } else {
      setReducedInterestRate(0);
    }
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
    <VStack p={4} minH="full" gap={6}>
      <Heading fontSize="2xl">How much do you save with ESG?</Heading>
      <VStack alignItems="start" fontSize="sm" gap={5} w="95%">
        {/* Loan Amount */}
        <VStack
          align="start"
          width="full"
          gap={0}
          boxShadow="md"
          rounded="lg"
          p={2}
          bg="whiteAlpha.600"
        >
          <Flex justifyContent="space-between" w="full">
            <Text>Loan amount</Text>
            <Flex alignItems="center">
              <Input
                size="md"
                variant="unstyled"
                type="text"
                value={formatNumberWithSpaces(loanAmount)}
                onChange={(e) => {
                  const value = e.target.value.replace(/\s/g, "");
                  handleLoanAmountChange(parseFloat(value) || 0);
                }}
                maxW="100px"
                textAlign="right"
                fontSize="lg"
              />
              <Text fontSize="lg" ml={1}>
                €
              </Text>
            </Flex>
          </Flex>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={loanAmount}
            onChange={handleLoanAmountChange}
            min={0}
            max={5000000}
            step={10000}
          >
            <SliderTrack>
              <SliderFilledTrack bg="#325762" />
            </SliderTrack>
            <SliderThumb>
              <Box bg="#325762" p={1} borderRadius="full" />
            </SliderThumb>
          </Slider>
        </VStack>

        {/* Loan Term */}
        <VStack
          align="start"
          width="full"
          gap={0}
          boxShadow="md"
          rounded="lg"
          p={2}
          bg="whiteAlpha.600"
        >
          <Flex justifyContent="space-between" w="full" alignItems="center">
            <Text>Loan term</Text>
            <Flex alignItems="center">
              <Input
                size="md"
                variant="unstyled"
                type="number"
                value={loanTerm}
                onChange={(e) =>
                  handleLoanTermChange(parseInt(e.target.value) || 0)
                }
                maxW="60px"
                textAlign="right"
                fontSize="lg"
              />
              <Text fontSize="lg" ml={1}>
                years
              </Text>
            </Flex>
          </Flex>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={loanTerm}
            onChange={handleLoanTermChange}
            min={1}
            max={30}
          >
            <SliderTrack>
              <SliderFilledTrack bg="#325762" />
            </SliderTrack>
            <SliderThumb>
              <Box bg="#325762" p={1} borderRadius="full" />
            </SliderThumb>
          </Slider>
        </VStack>

        {/* ESG Scoring */}
        <VStack
          align="start"
          width="full"
          gap={0}
          boxShadow="md"
          rounded="lg"
          p={2}
          bg="whiteAlpha.600"
        >
          <Flex justifyContent="space-between" w="full">
            <Text>ESG scoring</Text>
            <Input
              size="md"
              variant="unstyled"
              type="number"
              value={esgScore}
              onChange={(e) =>
                handleEsgScoreChange(parseInt(e.target.value) || 0)
              }
              maxW="65px"
              textAlign="right"
              fontSize="lg"
            />
          </Flex>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={esgScore}
            onChange={handleEsgScoreChange}
            min={0}
            max={100}
          >
            <SliderTrack>
              <SliderFilledTrack bg="#325762" />
            </SliderTrack>
            <SliderThumb>
              <Box bg="#325762" p={1} borderRadius="full" />
            </SliderThumb>
          </Slider>
        </VStack>
      </VStack>

      <Box minH="90px">
        {esgScore >= 40 ? (
          <VStack gap={4}>
            <Flex fontSize="md" gap={2} alignItems="baseline">
              Interest rate reduced by{" "}
              <Text fontSize="xl">{reducedInterestRate}</Text>
              percentage points
            </Flex>
            <VStack fontSize="sm" gap={0}>
              <Text fontSize="3xl" fontWeight="extrabold" lineHeight="35px">
                {formatNumberWithSpaces(savings)} €
              </Text>
              <Text>saved</Text>
            </VStack>
          </VStack>
        ) : (
          <Text fontSize="4xl" color="red.500" mt={7}>
            No discount applied
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default ESGCalculator;
