import React, { useState } from "react";
import { Button, Modal, Label, Input, TextArea } from "@aethermeta/uikit";
import useToast from "hooks/useToast";

export interface Values {
  name: string;
  company: string;
  email: string;
  description: string;
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    let isValid = true;
    if (values.name === initialValues.name) {
      errors.name = true;
      isValid = false;
    }
    if (values.company === initialValues.company) {
      errors.company = true;
      isValid = false;
    }
    if (values.email === initialValues.email) {
      errors.email = true;
      isValid = false;
    }
    if (values.description === initialValues.description) {
      errors.description = true;
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    if (validate) {
      await onSubmit(e, values);
    }
  };

  return (
    <Modal title="Partnership" onDismiss={onDismiss}>
      <form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={handleInputChange}
        />
        <Label>Company</Label>
        <Input
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={handleInputChange}
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Business Email Address"
          name="email"
          onChange={handleInputChange}
        />
        <Label>Description</Label>
        <TextArea
          placeholder="Describe your Business"
          name="description"
          onChange={handleInputChange}
        />
        <Button variant="text" type="submit" p="0">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default PartnershipModal;
