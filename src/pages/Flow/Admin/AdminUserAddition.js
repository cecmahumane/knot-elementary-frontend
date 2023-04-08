import *  as React from 'react';
import { Card, TextInput, Label, Button, Dropdown } from 'flowbite-react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
// import { initialAuthState } from '@auth0/auth0-react/dist/auth-state';

export default function AdminUserAddition() {
  const testValue = 'test';
  return (
    <>
      <div className="max-w-sm"> 
        <Card>
          <Card.Header>
            <h5 className="mb-0">Add User</h5>
            <CloseButton />
          </Card.Header>
          <Form>
            <Row>
              <Col>
              <Form.Group>
                <div className='block mb-2'>
                  <Label htmlFor="input-first-name">First Name</Label>
                  <TextInput id="input-first-name" placeholder="First Name" type="text" required={true}/>
                </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <div className='block mb-2'>
                    <Label htmlFor="input-last-name">Last Name</Label>
                    <TextInput id="input-last-name" placeholder="Last Name" type="text" required={true}/>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Stack direction="vertical" gap={2}>
              <div className='block mb-2'>
                <Label htmlFor="input-email">Email</Label>
                <TextInput id="input-email" placeholder="Email" type="email" required={true}/>
              </div>
              <div className="block mb-2"> {/* But then again you could just autofill the role based on which component was rendered  */}
                <Dropdown label="Roles" placement="bottom">
                  <Dropdown.Item>
                    <Dropdown.Trigger>
                      <Button>Teacher</Button>
                    </Dropdown.Trigger>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.Trigger>
                      <Button>Parent</Button>
                    </Dropdown.Trigger>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.Trigger>
                      <Button>Admin</Button>
                    </Dropdown.Trigger>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </Stack>
            <Stack gap={2}>
              <Button type="submit">Submit</Button>
              <Button type={'reset'}>Clear</Button>
            </Stack>
          </Form>
        </Card>
      </div>
    </>
  )
}