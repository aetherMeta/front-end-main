import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  DiscordIcon,
  Button,
  Input,
  Label,
  TextArea,
  Spinner,
  IconButton,
} from "@aethermeta/uikit";
import postContactEmail from "apis/backend/email/postContactEmail";
import useToast from "hooks/useToast";
import Discord from "../discord";
import { Values } from "../../../components/ContactModal";

const Container = styled.div`
    padding 50px 0px 50px 56px;  
`;

const StyledMoon = styled.div`
  background: url(/images/contactMoon.svg);
  background-repeat: no-repeat;
  height: 40rem;
  width: 40rem;
`;

const JoinUs = styled(Text)`
  max-width: 29rem;
  margin: 1rem 0;
`;

const EnquiryContainer = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  min-width: 40rem;
`;

const initialValues = {
  name: "",
  email: "",
  description: "",
};
const initialErrors = {
  name: false,
  email: false,
  description: false,
};

const Social: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [pending, setPending] = useState(false);
  const { toastSuccess, toastError } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: false,
    });

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = useCallback((): boolean => {
    let isValid = true;
    const modifyErrors = initialErrors;
    Object.entries(values).forEach((entry) => {
      const [key, value] = entry;
      if (value === initialValues[key]) {
        isValid = false;
        modifyErrors[key] = true;
      }
    });
    setErrors((prevState) => {
      return { ...prevState, ...modifyErrors };
    });
    return isValid;
  }, [values]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (validate()) {
        setPending(true);
        try {
          const onSubmit = async (v: Values) => {
            e.preventDefault();
            await postContactEmail(v);
          };
          await onSubmit(values);
          toastSuccess("Success", "Your application has been submitted!");
        } catch (error) {
          toastError("Error", "Something went wrong!");
          console.error(error);
        } finally {
          setPending(false);
        }
      }
    },
    [toastError, toastSuccess, validate, values]
  );

  return (
    <Container>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <JoinUs variant="h2Bold">GET IN TOUCH</JoinUs>
          <JoinUs variant="body">
            We&rsquo;re on Discord. Join the conversation.
          </JoinUs>
          <Button
            as="a"
            target="_blank"
            variant="primary"
            startIcon={<DiscordIcon />}
            style={{ borderRadius: 0, maxWidth: "45%" }}
            href={Discord}
            my="1rem"
          >
            AetherMeta Discord
          </Button>
          <JoinUs variant="h3Bold">Contact us</JoinUs>
          <JoinUs variant="body">
            For any enquiries you may have, email us.
          </JoinUs>
          <EnquiryContainer>
            <form onSubmit={handleSubmit}>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleInputChange}
              />
              <Text variant="bodySmall" color="failure" height="20px">{`${
                errors.name ? "Name field cannot be empty" : ""
              }`}</Text>
              <Label color="black">Email</Label>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleInputChange}
              />{" "}
              <Text variant="bodySmall" color="failure" height="20px">{`${
                errors.email ? "Email field cannot be empty" : ""
              }`}</Text>
              <Label color="black">Description</Label>
              <TextArea
                placeholder="What is your Question?"
                name="description"
                onChange={handleInputChange}
              />
              <Text variant="bodySmall" color="failure" height="20px">{`${
                errors.description ? "Describe field cannot be empty" : ""
              }`}</Text>
              {pending ? (
                <IconButton isLoading variant="text">
                  <Spinner size={48} />
                </IconButton>
              ) : (
                <Button variant="text" type="submit" p="0">
                  Submit
                </Button>
              )}
            </form>
          </EnquiryContainer>
        </Flex>
        <StyledMoon />
      </Flex>
    </Container>
  );
};

export default Social;
