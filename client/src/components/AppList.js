import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import { PropTypes } from 'prop-types';

class AppList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onClickDelete = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    {items.map(({ _id, name }) => (
                        <ListGroupItem>
                            <Button
                                className="delete-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onClickDelete.bind(this, _id)}>&times;
                            </Button>
                            {name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )

    }

}

AppList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { getItems, deleteItem })(AppList);