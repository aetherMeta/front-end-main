import React, { useState, useCallback } from "react";
import {
  Button,
  Modal,
  Label,
  Input,
  TextArea,
  Text,
  Spinner,
  IconButton,
} from "@aethermeta/uikit";
import useToast from "hooks/useToast";
import { useUser } from "store/user/hooks";
import styled from "styled-components";

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


const StyledModal = styled(Modal)`
  min-width: 500px;
`;

interface PartnershipModalProps {
  onSubmit: (e, values: Values) => void;
  onDismiss?: () => void;
  fromMetaverse?: boolean;
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

const PartnershipModal: React.FC<PartnershipModalProps> = ({
  onSubmit,
  onDismiss,
  fromMetaverse = false,
}) => {
  const { data: userData, userDataLoaded } = useUser();
  const [values, setValues] = useState(
    userDataLoaded
      ? {
          ...initialValues,
          name:
            userData.firstName && userData.lastName
              ? `${userData.firstName} ${userData.lastName}`
              : "",
        }
      : initialValues
  );
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
    const modifyErrors = {
      name: false,
      company: false,
      email: false,
      description: false,
    };
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
          await onSubmit(e, values);
          toastSuccess("Success", "Your application has been submitted!");
          onDismiss();
        } catch (error) {
          toastError("Error", "Something went wrong!");
          console.error(error);
        } finally {
          setPending(false);
        }
      }
    },
    [onDismiss, onSubmit, toastError, toastSuccess, validate, values]
  );

  return (
    <StyledModal title="Partnership" onDismiss={onDismiss}>
      {fromMetaverse && (
        <>
          <Text mb="12px">
            Please contact us to get access to the metaverse!
          </Text>
        </>
      )}
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
        <Label color="black">Company</Label>
        <Input
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={handleInputChange}
        />{" "}
        <br />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.company ? "Company field cannot be empty" : ""
        }`}</Text>
        <Label color="black">Email</Label>
        <Input
          type="email"
          placeholder="Business Email Address"
          name="email"
          onChange={handleInputChange}
        />{" "}
        <br />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.email ? "Email field cannot be empty" : ""
        }`}</Text>
        <Label color="black">Description</Label>
        <TextArea
          placeholder="Describe your Business"
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
    </StyledModal>
  );
};

export default PartnershipModal;
