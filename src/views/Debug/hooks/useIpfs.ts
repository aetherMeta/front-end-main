import { backend } from "apis/backend";
import { IpfsUploadRequest } from "apis/backend/generated";
import { useCallback } from "react";

export type Attribute = {
  // eslint-disable-next-line camelcase
  trait_type: string;
  value: string;
};

export type IpfsUpload = {
  file: Record<string, unknown>;
  name: string;
  description: string;
  attributes: Array<Attribute>;
};
const useIpfsUpload = () => {
  const handleSubmit = useCallback(async (formData: IpfsUploadRequest) => {
    const retv = await backend.ipfs.ipfsControllerCreate({
      formData,
    });
    console.info(retv);
    return retv;
  }, []);

  return { onSubmit: handleSubmit };
};

export default useIpfsUpload;
