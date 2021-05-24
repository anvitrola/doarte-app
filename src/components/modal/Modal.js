
import {Model, Container} from './Modal.styles'

export default function ConfirmationModalImpl(props) {
	const {
    	handleClose, // renderProp fn expects truthy or falsey
    	show,             // boolean - visible/invisible
    	headerText,   // text
    	detailText,     // html / inner text
    	openPos       // placement choice
	} = {...props};

	const sendYes = () => handleClose(true);

	const sendNo = () => handleClose(false);

	return (
    	<Model show={show}>
        	<Container openPos={openPos}>
            	<Header>{headerText}</Header>
            	<HBar/>
            	<Slot>{detailText}</Slot>
            	<ButtonBar>
                	<Button onClick={sendYes} primary={true}>Yes</Button>
                	<Button onClick={sendNo} primary={false}>No</Button>
            	</ButtonBar>
        	</Container>
    	</Model>
	);
}