import { FC } from "react"
import Toast from "react-bootstrap/Toast"

interface ErrorToastProps {
    show: boolean;
    close: () => void;
    errorMsg: string;
}


const ErrorToast: FC<ErrorToastProps> = ({ show, close, errorMsg }) => {
    return (
        <Toast className="position-absolute top-0 right-0 mr-1 mt-1"
            show={show}
            onClose={close}>
            <Toast.Header>
                <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{errorMsg}</Toast.Body>
        </Toast>
    )
}

export default ErrorToast
