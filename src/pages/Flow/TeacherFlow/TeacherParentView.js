import React from 'react'
import {Card, Button, Dropdown} from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function TeacherParentView() {
  // I
  const ParentInfo = (email, name) => {
    return (
      <Card>
        <Card.Body>
          <h3>{name}</h3>
          <p>{email}</p>
        </Card.Body>
        <Card.Body>
          <Dropdown>
            <Dropdown.Item>
              <Link to="/parent/child">View Child</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/parent/child">View Child</Link>
            </Dropdown.Item>
          </Dropdown>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div>
    <div className=''>
      <Card className=''>
        <div>
          <h5 className=''></h5>
          <p className=''></p>
        </div>
        <Button className=''><>See More</></Button>
      </Card>
      <Card className=''>
        <div>
          <h5 className=''></h5>
          <p className=''></p>
        </div>
        <Button className=''><>See More</></Button>
      </Card>
      <Card className=''>
        <div>
          <h5 className=''></h5>
          <p className=''></p>
        </div>
        <Button className=''><>See More</></Button>
      </Card>
    </div>
      <aside>
        {/* This is only displayed when you click on that perent's, card, button */}
      </aside>
    </div>
  )
}
