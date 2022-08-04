import client from "apis/backend/client";
import { PostContactEmailRequest, PostContactEmailResponse } from "./interface";

const postContactEmail = async (
  data: PostContactEmailRequest
): Promise<PostContactEmailResponse> => {
  const response = await client.post<PostContactEmailResponse>(
    "contact/message",
    data
  );
  return response.data;
};

export default postContactEmail;
