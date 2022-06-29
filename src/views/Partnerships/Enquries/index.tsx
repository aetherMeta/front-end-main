import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Flex, Text, Input, Button, Label, TextArea, Spinner, IconButton } from "@aethermeta/uikit";
import postPartnershipEmail from "apis/backend/email/postPartnershipEmail";
import useToast from "hooks/useToast";

const Container = styled.div`
  padding 5em 20px;
  background-repeat: no-repeat;
  background-size: 503px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding 5em 70px;
    background-size: 1706px;
   
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding 5em 180px;
   
    background-size: 1706px;
   
  }
`;

const EnquiryContainer = styled(Flex)`
  justify-content: center;
  min-height: 10rem;
  margin: 10em;
`;

const EnquiryContainer2 = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  min-width: 40rem;
`;

const Enquiry = styled(Flex)`
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 2rem;
`;

const Center = styled(Text)`
  text-align: center;
`

export interface Values {
  name: string;
  company: string;
  email: string;
  description: string;
}

export interface Errors {
  name: boolean;
  company: boolean;
  email: boolean;
  description: boolean;
}

const initialValues = {
  name: "",
  company: "",
  email: "",
  description: "",
};
const initialErrors = {
  name: false,
  company: false,
  email: false,
  description: false,
};

const Enquires: React.FC =  () => {
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
      Object.entries(values).forEach(entry => {
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
              await postPartnershipEmail(v);
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
            <Center variant="h3Bold">
                Get in touch with out sales team for more details on how you can onboard to the newest marketing touchpoint for generation Z.
            </Center>
            <EnquiryContainer>
              <EnquiryContainer2>
                  <Enquiry>
                    <Text variant="h3Bold">
                        Enquiries
                    </Text>
                  </Enquiry>
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
                    
                    <Label color="black">
                      Company
                    </Label>
                    <Input type="text" placeholder="Company Name" name="company" onChange={handleInputChange}/> <br />
                    <Text variant="bodySmall" color="failure" height="20px">{`${
                      errors.company ? "Company field cannot be empty" : ""
                    }`}</Text>
                    <Label color="black">
                      Email
                    </Label>
                    <Input type="email" placeholder="Business Email Address" name="email" onChange={handleInputChange}/> <br />
                    <Text variant="bodySmall" color="failure" height="20px">{`${
                      errors.email ? "Email field cannot be empty" : ""
                    }`}</Text>
                    <Label color="black">
                      Description
                    </Label>
                    <TextArea placeholder="Describe your Business" name="description" onChange={handleInputChange}/>
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
                </EnquiryContainer2>
            </EnquiryContainer>
                
        </Container>
    );
  }

export default Enquires;