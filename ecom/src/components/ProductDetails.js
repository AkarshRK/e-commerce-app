import React, { useEffect, useState } from "react";
import { formatCurrency, findById } from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/product-action";
import { addToCart } from "../actions/cart-action";
import Aux from "../hoc/_Aux";
import { Row, Col, Card, Button, Image, Spinner, ListGroup, Media } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { map, isEmpty, isUndefined } from '../common-libraries'
import { PRODUCT_INFO_PAGE_TAB_NAME, ADD_PRODUCT_BUTTON } from "../constants/name-constants"


function ProductDetails(props) {
    //product detail component 

    const { products, cartItems } = props;

    const { id } = useParams();
    const [clickedProduct, setClickedProduct] = useState({});
    const [inCartDetail, setInCartDetail] = useState({});



    useEffect(() => {
        setClickedProduct(findById(products, id));
    }, [])

    useEffect(() => {
        setInCartDetail(findById(cartItems, id));
    }, [cartItems])

    const { availableSizes, description, image, price, title } = clickedProduct;


    return (
        <Aux>

            <Row>
                <Col >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{PRODUCT_INFO_PAGE_TAB_NAME}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            {isEmpty(clickedProduct) ? (
                                <Spinner animation="border" variant="primary" />
                            ) : (
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">{title}</Card.Title>
                                        </Card.Header>
                                        <Card.Body>

                                            <Media as="li" key={id}>
                                                <Image
                                                    className="mr-3" src={image}
                                                />
                                                <Media.Body>

                                                    <p>{formatCurrency(price)}</p>
                                                    <p>{description}</p>

                                                    <p>In Cart:
                                                        <b>{(isUndefined(inCartDetail) || isEmpty(inCartDetail)) ? 0 : inCartDetail.count}</b>
                                                    </p>

                                                    <p>
                                                        <ListGroup horizontal>
                                                            {
                                                                map(availableSizes, (sz) => {
                                                                    return (
                                                                        <Button variant="outline-secondary">
                                                                            {sz}
                                                                        </Button>

                                                                    )
                                                                })
                                                            }
                                                        </ListGroup>
                                                    </p>
                                                    <Button
                                                        onClick={() => props.addToCart(clickedProduct)}
                                                        className="button primary"
                                                    >
                                                       {ADD_PRODUCT_BUTTON}
                                                    </Button>
                                                </Media.Body>

                                            </Media>
                                        </Card.Body>
                                    </Card>


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
)(ProductDetails);