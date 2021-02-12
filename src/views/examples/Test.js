import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    // FormGroup,
    // Form,
    Input,
    // InputGroupAddon,
    // InputGroupText,
    InputGroup,
    // Row,
    Col,
    Container,
} from "reactstrap";

const Test = () => {
    return (
        // NOTE these empty carrots are similar to the template parent div in Vue. They can be edited, but best practices note that these should be top level and never components of another kind. 
        <>
            <Container>
                <Col lg="6" md="8">
                    <Card className="bg-neutral shadow border-0 mt-5">
                        <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-4">
                                Hello World
                        </div>
                        </CardHeader>
                        <CardBody>
                            <h5>
                                Here is a subheading
                        </h5>
                            <InputGroup>
                                <Input
                                    type="datetime-local">
                                </Input>
                            </InputGroup>
                        </CardBody>
                        <Button className="btn-3 mt-2 btn-info">Click me</Button>
                    </Card>
                    <Card>
                        <CardHeader>

                        </CardHeader>

                    </Card>
                </Col>
            </Container>
        </>
    );
};

export default Test;