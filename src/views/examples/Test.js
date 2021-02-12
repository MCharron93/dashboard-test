import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    // FormGroup,
    // Form,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    // Row,
    Col,
} from "reactstrap";

const Test = () => {
    return (
        // NOTE these empty carrots are similar to the template parent div in Vue. They can be edited, but best practices note that these should be top level and never components of another kind. 
        <>
            <Col lg="6" md="8">
                <Card className="bg-neutral shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-muted text-center mt-2 mb-4">
                            <small>Snail cup width</small>
                        </div>
                        <div className="text-center">
                            <Button
                                className="btn-secondary btn-icon mr-4"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={
                                            require("../../assets/img/icons/common/github.svg")
                                                .default
                                        }
                                    />
                                </span>
                                <span className="btn-inner--text">Gothib</span>
                            </Button>
                            <Button
                                className="btn-secondary btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={
                                            require("../../assets/img/icons/common/google.svg")
                                                .default
                                        }
                                    />
                                </span>
                                <span className="btn-inner--text">Foogle</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Here is some test data</small>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Test;