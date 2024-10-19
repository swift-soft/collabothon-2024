import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const initValues = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const initState = {
  isLoading: false,
  error: "",
  values: initValues,
};

const Login = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { values, isLoading } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleLogin = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: "" }));

      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        throw new Error(error.message);
      } else {
        navigate("/");
        toast({
          title: "Pomyślnie zalogowano.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Błąd.",
        description: "Podany mail lub hasło jest niepoprawne.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setState((prev) => ({
        ...prev,
        error: "Podany mail lub hasło jest niepoprawne",
      }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSignUp = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: "" }));

      if (values.password !== values.passwordRepeat) {
        toast({
          title: "Błąd.",
          description: "Podane hasła muszą być identyczne.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        throw new Error("Podane hasła muszą być identyczne");
      }

      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.name,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      } else navigate("/");
      toast({
        title: "Account has been created.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
      if (error.message === "Password should be at least 6 characters") {
        toast({
          title: "Błąd.",
          description: error.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleForgottenPassword = () => {
    toast({
      title: "Ups...",
      description: "Musisz sobie przypomnieć hasło lub utworzyć nowe konto.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Center alignItems="center" mt={5} className="relative" h="2xl">
      <Box w="md" py={6} px={20} bg="blue.200" borderRadius={24}>
        <Heading
          mb={3}
          fontWeight="light"
          fontSize="7xl"
          display="flex"
          justifyContent="center"
        >
          {isSignUp ? "sign up" : "log in"}
        </Heading>
        {isSignUp && (
          <Box>
            <FormControl mb={3} isInvalid={touched.name && !values.name}>
              <FormLabel fontSize="2xs">Full name</FormLabel>
              <Input
                borderRadius="full"
                background="white"
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
            </FormControl>
          </Box>
        )}
        <FormControl isInvalid={touched.email && !values.email} mb={3}>
          <FormLabel fontSize="2xs">Email</FormLabel>
          <Input
            borderRadius="full"
            background="white"
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </FormControl>

        <FormControl mb={16} isInvalid={touched.password && !values.password}>
          <FormLabel fontSize="2xs">Password</FormLabel>
          <Input
            borderRadius="full"
            background="white"
            type="text"
            name="password"
            errorBorderColor="red.300"
            value={values.password}
            onChange={handleChange}
            onBlur={onBlur}
            position={"absolute"}
          />
        </FormControl>
        {isSignUp ? (
          <Box>
            <FormControl
              my={16}
              isInvalid={touched.passwordRepeat && !values.passwordRepeat}
            >
              <FormLabel fontSize="2xs">Repeat password</FormLabel>
              <Input
                borderRadius="full"
                background="white"
                type="text"
                name="passwordRepeat"
                errorBorderColor="red.300"
                value={values.passwordRepeat}
                onChange={handleChange}
                onBlur={onBlur}
                position={"absolute"}
              />
            </FormControl>
          </Box>
        ) : (
          <Text
            my={3}
            cursor="pointer"
            textAlign="center"
            _hover={{ textDecoration: "underline" }}
            onClick={handleForgottenPassword}
            fontSize="xs"
          >
            Have you forgotten password?
          </Text>
        )}
        <Button
          color="inherit"
          fontSize="xl"
          letterSpacing="widest"
          w="full"
          background="white"
          borderRadius="full"
          isLoading={isLoading}
          isDisabled={
            !isSignUp
              ? !values.password || !values.email
              : !values.password || !values.email || !values.passwordRepeat
          }
          onClick={isSignUp ? handleSignUp : handleLogin}
        >
          {isSignUp ? "Create account" : "Log in"}
        </Button>

        <Flex direction="row" alignItems="center" my={3} color="gray.200">
          <Divider flex={1} />
          <Text fontSize="xs" mx={2}>
            {isSignUp ? "Do you have an account?" : "Are you new here?"}
          </Text>
          <Divider flex={1} />
        </Flex>
        <Button
          color="inherit"
          fontSize="xl"
          letterSpacing="widest"
          w="full"
          background="white"
          borderRadius="full"
          isLoading={isLoading}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Log in" : "Create account"}
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
