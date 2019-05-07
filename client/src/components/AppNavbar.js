import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addInfo } from '../actions/signupActions';

class AppNavbar extends React.Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newSignup = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }

        // Add item with additem action
        this.props.addInfo(newSignup);

        //close modal
        this.toggle();
    }
    render() {
        return (
            <div>
                <Navbar className="fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/">Shoe Store</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink id="nav-sm" href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="nav-sm" href="#about">Brands</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="nav-sm" href="#contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button color="info" className="signup-btn" onClick={this.toggle}>Sign Up</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>Sign Up For Our Newsletters!</ModalHeader>
                                <p className="modal-p">Sign up for our newsletter to get notified when we have sales and events!</p>
                                <ModalBody>
                                    <Form onSubmit={this.onSubmit}>
                                        <FormGroup>
                                            <Input type="text" className="signupBox" name="firstname" id="firstname" placeholder="First Name" onChange={this.onChange} />
                                            <Input type="text" className="signupBox" name="lastname" id="lastname" placeholder="Last Name" onChange={this.onChange} />
                                            <Input type="text" className="signupBox" name="email" id="email" placeholder="Email" onChange={this.onChange} />
                                            <Button color="success">Sign Up</Button>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    info: state.info
})

export default connect(mapStateToProps, { addInfo })(AppNavbar);