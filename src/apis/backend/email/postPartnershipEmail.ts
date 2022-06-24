import client from "apis/backend/client";
import { PostPartnershipEmailRequest } from "./interface";

const postPartnershipEmail = async (
  data: PostPartnershipEmailRequest
): Promise<any> => {
  const response = await client.post<any>("contact/partnership", data);
  console.log(response);
  return response.data;
};

export default postPartnershipEmail;
