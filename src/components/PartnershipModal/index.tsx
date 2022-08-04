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

interface PartnershipModalProps {
  onSubmit: (e, values: Values) => void;
  onDismiss?: () => void;
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
    const modifyErrors = initialErrors;
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
    <Modal title="Partnership Interest" onDismiss={onDismiss}>
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
          errors.companyAddress ? "Company address field cannot be empty" : ""
        }`}</Text>
        <Label>Company Website (*)</Label>
        <Input
          placeholder="Company Website"
          name="companyWebsite"
          onChange={handleInputChange}
        />
        <Text variant="bodySmall" color="failure" height="20px">{`${
          errors.companyWebsite ? "Company website field cannot be empty" : ""
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
    </Modal>
  );
};

export default PartnershipModal;
