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

interface PartnershipModalProps {
  onSubmit: (e, values: Values) => void;
  onDismiss?: () => void;
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
}) => {
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
    const modifyErrors = {
      name: false,
      company: false,
      email: false,
      description: false,
    };
    for (const [key, value] of Object.entries(values)) {
      if (value === initialValues[key]) {
        isValid = false;
        modifyErrors[key] = true;
      }
    }
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
    <Modal title="Partnership" onDismiss={onDismiss}>
      <form onSubmit={handleSubmit}>
        <Label>Name (*)</Label>
        <Input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={handleInputChange}
        />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.name ? "Name field cannot be empty" : ""
        }`}</Text>
        <Label>Company (*)</Label>
        <Input
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={handleInputChange}
        />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.company ? "Company field cannot be empty" : ""
        }`}</Text>
        <Label>Email (*)</Label>
        <Input
          type="email"
          placeholder="Business Email Address"
          name="email"
          onChange={handleInputChange}
        />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.email ? "Email field cannot be empty" : ""
        }`}</Text>
        <Label>Description (*)</Label>
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
    </Modal>
  );
};

export default PartnershipModal;
