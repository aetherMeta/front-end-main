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

const PartnershipModal: React.FC<PartnershipModalProps> = ({
  onSubmit,
  onDismiss,
}) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Modal title="Partnership" onDismiss={onDismiss}>
      <form onSubmit={(e) => onSubmit(e, values)}>
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
