import { backend } from "..";
import { PostContactEmailRequest, PostContactEmailResponse } from "./interface";

const postContactEmail = async (
  data: PostContactEmailRequest
): Promise<PostContactEmailResponse> => {
  const response = await backend.contact.contactUsControllerCreate({
    requestBody: data,
  });
  return response;
};

export default postContactEmail;
