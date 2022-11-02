import classes from './Modal.module.css';

interface ModalProp {
	loading?: boolean;
}

const Modal: React.FC<ModalProp> = ({ loading }) => {
	return <div className={`${loading ? classes.modal : classes.remove}`}></div>;
};

export default Modal;
