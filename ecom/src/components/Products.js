import React, { useEffect, useState } from "react";
import { formatCurrency, findById } from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/product-action";
import { addToCart } from "../actions/cart-action";
import Aux from "../hoc/_Aux";
import { Row, Col, Card, Button, Image, Spinner } from 'react-bootstrap';
import Media from 'react-bootstrap/Media'
import { useHistory } from 'react-router-dom';
import ToastAutoHide from './common-components/ToastAutoHide'
import { map, isEmpty, isUndefined } from '../common-libraries'

import { PRODUCT_PAGE_TAB_NAME, ADD_PRODUCT_BUTTON } from "../constants/name-constants"


function Products(props) {
    const history = useHistory();
    const [show, setShow] = useState(false);

    // equivalent to componentDidMount
    useEffect(() => {
        props.fetchProducts();
        console.log(props)
    }, [])

    // toast component props
    const toastProps = {
        setShow: setShow,
        show: show
    }

    const { products, cartItems } = props;


    return (
        <Aux>
            <Row>
                <Col >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{PRODUCT_PAGE_TAB_NAME}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <ToastAutoHide {...toastProps} />
                            {(isEmpty(products) || isUndefined(products)) ? (
                                <Spinner animation="border" variant="primary" />
                            ) : (

                                    <Row >
                                        {map(products, (product) => {

                                            const inCartQuantity = findById(cartItems, product._id);

                                            return (
                                                <Col md={4}>
                                                    <Card>
                                                        <Card.Header>
                                                            <Card.Title as="h5">{product.title}</Card.Title>
                                                        </Card.Header>
                                                        <Card.Body>

                                                            <Media as="li" key={product._id}>
                                                                <Image
                                                                    className="mr-3" src={product.image}
                                                                    onClick={() => {
                                                                        history.push("/product/" + product._id)
                                                                    }}
                                                                />
                                                                <Media.Body>

                                                                    <p>{formatCurrency(product.price)}</p>
                                                                    <p>In Cart:
                                                                        <b>{(isUndefined(inCartQuantity) || isEmpty(inCartQuantity)) ? 0 : inCartQuantity.count}</b>
                                                                    </p>
                                                                    <Button
                                                                        onClick={() => { setShow(true); props.addToCart(product) }}
                                                                        className="button primary"
                                                                    >
                                                                        {ADD_PRODUCT_BUTTON}
                                                                    </Button>
                                                                </Media.Body>

                                                            </Media>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                        }
                                        )}
                                    </Row>
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
        products: state.products.productList,
        cartItems: state.cart.cartItems,
    }),
    {
        fetchProducts,
        addToCart,
    }
)(Products);