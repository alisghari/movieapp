import React,{ Component } from "react"
import {Modal,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';






class AddModel extends Component {
constructor(props){
    super(props);
    this.state = {
        show:false,
    };
}
handleShow = () => {
    this.setState({show: !this.state.show});
    
};
render(){
    return (
        <div >
              <Button variant="primary" onClick={()=>this.handleShow()}>
             +
             </Button>
               <Modal show={this.state.show} onHide={this.handleShow}>
                <Modal.Header closeButton>
                <Modal.Title>add new movie</Modal.Title>
             </Modal.Header> 
               <Modal.Body>
                  <div>
          <div>
                <label className="input"> Title:</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label className="input"> Image:</label>
                <input type="text" name="image"/>
            </div> 
            <div>
                <label className="input"> Rating:</label>
                <input type="text" name="rating"/>
            </div>
            <div>
                <label className="input"> Year:</label>
                <input type="text" name="year"/>
            </div>
        </div>
    </Modal.Body>

    <AddModel.footer>
        
    <Button variant="secondary" onClick={this.handleShow}>
        close
    </Button>
    
    <Button variant="primary">Add Movie</Button>
    </AddModel.footer>
    </Modal>

     </div>

    );
}
}
export default AddModel;