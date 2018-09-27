/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

const Wrapper = styled.div`
  max-width: 770px;
  width: 100%;
  padding: 3rem;
  margin: 0 auto;

  .group_buttons {
    button {
      padding: 6px 24px;
    }
  }
`;

function UserForm(props) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm="12">
            <Form onSubmit={props.onSubmit}>
              <FormGroup row>
                <Label sm={2}>First Name</Label>
                <Col sm={10}>
                  <Input
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={props.data.firstName}
                    onChange={props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Last Name</Label>
                <Col sm={10}>
                  <Input
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={props.data.lastName}
                    onChange={props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Company</Label>
                <Col sm={10}>
                  <Input
                    name="company"
                    id="company"
                    placeholder="Company"
                    value={props.data.company}
                    onChange={props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Department</Label>
                <Col sm={10}>
                  <Input
                    name="department"
                    id="department"
                    placeholder="Department"
                    value={props.data.department}
                    onChange={props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Position</Label>
                <Col sm={10}>
                  <Input
                    name="position"
                    id="position"
                    placeholder="Position"
                    value={props.data.position}
                    onChange={props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Email</Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={props.onChange}
                    value={props.data.email}
                    invalid={!!props.formErrors.email}
                  />
                  <FormFeedback>{props.formErrors.email}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup className="group_buttons text-center">
                {props.isCreatedUser ? (
                  <p className="text-success">
                    You just created user successfully!
                  </p>
                ) : (
                  <Button disabled={props.isLoading} color="primary">
                    Save
                  </Button>
                )}
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

UserForm.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    company: PropTypes.string,
    department: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isCreatedUser: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    email: PropTypes.string,
  }),
};

UserForm.defaultProps = {
  data: {
    firstName: '',
    lastName: '',
    company: '',
    department: '',
    position: '',
    email: '',
  },
  formErrors: {
    email: '',
  },
  isLoading: false,
  isCreatedUser: false,
};

export default UserForm;
