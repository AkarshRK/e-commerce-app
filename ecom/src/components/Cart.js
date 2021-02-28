
import React from "react";
import { Row, Col, Card, Table, Image, Button, ListGroup } from 'react-bootstrap';
import Aux from "../hoc/_Aux";

import { formatCurrency } from "../util";
import { connect } from "react-redux";
import { removeFromCart, clearCart } from "../actions/cart-action";
import { map, size, isEqual } from "../common-libraries";
import {
    CART_PAGE_TAB_NAME,
    CART_IS_EMPTY_MESSAGE,
    CLEAR_CART_BUTTON,
    PROCEED_BUTTON,
    REMOVE_BUTTON
} from "../constants/name-constants";

function Cart(props) {

    //cart component

    const { cartItems } = props;

    return (
        <Aux>
            <Row>
                <Col >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{CART_PAGE_TAB_NAME}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            {isEqual(size(cartItems), 0) ? (
                                <div className="cart cart-header">{CART_IS_EMPTY_MESSAGE}</div>
                            ) : (
                                    <div>
                                        <p>
                                            You have {size(cartItems)} item(s) in the cart{" "}
                                        </p>
                                        <Table responsive>
                                            <tbody>
                                                {map(cartItems, (item) => (
                                                    <tr key={item._id}>
                                                        <td>
                                                            <Image src={item.image} alt={item.title}></Image>
                                                        </td>

                                                        <td>{item.title}</td>
                                                        <td className="right">
                                                            {formatCurrency(item.price)} x {item.count}{" "}
                                                            <Button
                                                                onClick={() => props.removeFromCart(item)}
                                                            >
                                                                {REMOVE_BUTTON}
                                                            </Button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                Total {" "}  {formatCurrency(
                                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                            )}
                                                <Button

                                                    className="primary"
                                                >
                                                    {PROCEED_BUTTON}
                                             </Button>
                                                <Button

                                                    className="primary"
                                                    onClick={() => { console.log('cartItems'); props.clearCart(); }}
                                                >
                                                    {CLEAR_CART_BUTTON}
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems
    }),
    { removeFromCart, clearCart }
)(Cart);