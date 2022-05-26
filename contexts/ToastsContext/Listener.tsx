import React from 'react'
import { ToastContainer } from '../../components/Toast'
import useToast from '../../hooks/useToast'

const ToastListener = () => {
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])
  const { toasts, remove } = useToast()

  const handleRemove = (id: string) => remove(id)

  return <ToastContainer toasts={toasts} onRemove={handleRemove} />
}

export default ToastListener
