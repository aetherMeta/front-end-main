export type PostPartnershipEmailRequest = {
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
};

export type PostPartnershipEmailResponse = {
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
};

export type PostContactEmailRequest = {
  name: string;
  email: string;
  description: string;
};

export type PostContactEmailResponse = {
  name: string;
  email: string;
  description: string;
};
