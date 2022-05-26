import React, { useContext } from "react";
import { ToastsContext } from "../contexts/ToastsContext";

const useToast = () => {
  const toastContext = useContext(ToastsContext);
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])
  if (toastContext === undefined) {
    throw new Error("Toasts context undefined");
  }

  return toastContext;
};

export default useToast;
