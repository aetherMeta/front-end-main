import client from "apis/backend/client";
import {
  PostPartnershipEmailRequest,
  PostPartnershipEmailResponse,
} from "./interface";

const postPartnershipEmail = async (
  data: PostPartnershipEmailRequest
): Promise<PostPartnershipEmailResponse> => {
  const response = await client.post<PostPartnershipEmailResponse>(
    "contact/partnership",
    data
  );
  return response.data;
};

export default postPartnershipEmail;
