import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Input,
  Button,
  Label,
  TextArea,
  Spinner,
  IconButton,
} from "@aethermeta/uikit";
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
`;

export interface Values {
  contactName: string;
  contactEmail: string;
  jobTitle: string;
  companyName: string;
  companyDescription: string;
  companyAddress: string;
  companyWebsite: string;
  companyTwitter: string;
  companyInstagram: string;
  additionalMessage: string;
}

export interface Errors {
  contactName: boolean;
  contactEmail: boolean;
  jobTitle: boolean;
  companyName: boolean;
  companyDescription: boolean;
  companyAddress: boolean;
  companyWebsite: boolean;
}

const initialValues = {
  contactName: "",
  contactEmail: "",
  jobTitle: "",
  companyName: "",
  companyDescription: "",
  companyAddress: "",
  companyWebsite: "",
  companyTwitter: "",
  companyInstagram: "",
  additionalMessage: "",
};

const initialErrors = {
  contactName: false,
  contactEmail: false,
  jobTitle: false,
  companyName: false,
  companyDescription: false,
  companyAddress: false,
  companyWebsite: false,
};

const optionalFields = [
  "companyTwitter",
  "companyInstagram",
  "additionalMessage",
];

const Enquires: React.FC = () => {
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
      if (optionalFields.includes(key)) return;
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
        Get in touch with out sales team for more details on how you can onboard
        to the newest marketing touchpoint for generation Z.
      </Center>
      <EnquiryContainer>
        <EnquiryContainer2>
          <Enquiry>
            <Text variant="h3Bold">Enquiries</Text>
          </Enquiry>
          <form onSubmit={handleSubmit}>
            <Label>Name (*)</Label>
            <Input
              type="text"
              placeholder="Contact Name"
              name="contactName"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.contactName ? "Contact name field cannot be empty" : ""
            }`}</Text>
            <Label>Email (*)</Label>
            <Input
              type="email"
              placeholder="Contact Email"
              name="contactEmail"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.contactEmail ? "Contact email field cannot be empty" : ""
            }`}</Text>
            <Label>Job Title (*)</Label>
            <Input
              placeholder="Contact Job Title"
              name="jobTitle"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.jobTitle ? "Job title field cannot be empty" : ""
            }`}</Text>
            <Label>Company Name (*)</Label>
            <Input
              placeholder="Company Name"
              name="companyName"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.companyName ? "Company name field cannot be empty" : ""
            }`}</Text>
            <Label>Company Description (*)</Label>
            <Input
              placeholder="Company Description"
              name="companyDescription"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.companyDescription
                ? "Company description field cannot be empty"
                : ""
            }`}</Text>
            <Label>Company Description (*)</Label>
            <Input
              placeholder="Company Address"
              name="companyAddress"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.companyAddress
                ? "Company address field cannot be empty"
                : ""
            }`}</Text>
            <Label>Company Website (*)</Label>
            <Input
              placeholder="Company Website"
              name="companyWebsite"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px">{`${
              errors.companyWebsite
                ? "Company website field cannot be empty"
                : ""
            }`}</Text>
            <Label>Company Twitter</Label>
            <Input
              placeholder="Company Twitter"
              name="companyTwitter"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px" />
            <Label>Company Instagram</Label>
            <Input
              placeholder="Company Instagram"
              name="companyInstagram"
              onChange={handleInputChange}
            />
            <Text variant="bodySmall" color="failure" height="20px" />
            <Label>Additional Message</Label>
            <TextArea
              placeholder="Additional Message"
              name="additionalMessage"
              onChange={handleInputChange}
            />
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
};
export default Enquires;
