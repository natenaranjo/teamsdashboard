import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useMutation } from '@apollo/client';
import { ADD_MEMBER } from '../../../utils/mutations';
import { QUERY_MEMBERS } from '../../../utils/queries';

const AddModal = ({ show, setShow }) => {
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        zipcode: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow

    const [addMember, {error}] = useMutation(ADD_MEMBER, {
        update(cache, { data: { addMember } }) {
            try {
                const { member } = cache.readQuery({ query: QUERY_MEMBERS});

                cache.writeQuery({
                    query: QUERY_MEMBERS,
                    data: { member: [addMember, ...member] },
                });
            } catch (e) {
                console.error(e);
            };
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addMember({
                variables: { ...formState },
            });

            setFormState({
                first_name: '',
                last_name: '',
                email_address: '',
                phone_number: '',
                zipcode: ''
            })
        } catch (e) {
            console.error(e);
        };
        setShow(false);
    }

    return (
      <Modal show={setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formState.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name='last_name'
                value={formState.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email_address"
                value={formState.email_address}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                placeholder="name@example.com"
                required
                title='Example: example@example.com'
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone_number"
                value={formState.phone_number}
                onChange={handleChange}
                placeholder="999-999-9999"
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                required
                title='Example: 999-999-9999'
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="text"
                name="zipcode"
                value={formState.zipcode}
                onChange={handleChange}
                placeholder="99999"
                pattern='[0-9]{5}'
                required
                title='Example: 99999'
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' variant="primary" onClick={handleFormSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    )
}

export default AddModal;