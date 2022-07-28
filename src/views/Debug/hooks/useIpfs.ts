import { useCallback } from "react";
import backend from "apis/backend";

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
  const handleSubmit = useCallback(
    async ({ file, name, description, attributes }: IpfsUpload) => {
      const retv = await backend.ipfs.ipfsControllerCreate(
        file,
        name,
        description,
        attributes
      );
      console.info(retv);
    },
    []
  );

  return { onSubmit: handleSubmit };
};

export default useIpfsUpload;
