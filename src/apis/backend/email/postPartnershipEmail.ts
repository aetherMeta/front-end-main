import { backend } from "..";
import {
  PostPartnershipEmailRequest,
  PostPartnershipEmailResponse,
} from "./interface";

const postPartnershipEmail = async (
  data: PostPartnershipEmailRequest
): Promise<PostPartnershipEmailResponse> => {
  const response = await backend.contact.partnershipControllerCreate({
    requestBody: data,
  });
  return response;
};

export default postPartnershipEmail;
