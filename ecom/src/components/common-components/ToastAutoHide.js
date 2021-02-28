
import { Toast } from 'react-bootstrap';
function ToastAutoHide(props) {
    //Toast component to show a toast whenever a product is added
    const { setShow, show } = props
    return (

        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide
            style={{
                position: 'absolute',
                top: 10,
                right: 10,
            }}>
            <Toast.Header>
                <b className="mr-auto">Product added to cart!</b>
            </Toast.Header>
        </Toast>
    )
}

export default ToastAutoHide;