import { backend } from "..";
import { PostContactUsRequest, PostContactUsResponse } from "./interface";

const postContactUsEmail = async (
  data: PostContactUsRequest
): Promise<PostContactUsResponse> => {
  const response = await backend.contact.contactUsControllerCreate({
    requestBody: data,
  });
  return response;
};

export default postContactUsEmail;
