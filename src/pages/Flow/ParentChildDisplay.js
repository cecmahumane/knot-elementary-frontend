import React from 'react'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function ChildDisplay() {
  const ChildInfo = (name) => {
    this.name = name
    return (
      <Card>
        <Card.Body>
          <h3>{name}</h3>
        </Card.Body>
        <Card.Body>
          <Button>
            <Link to=""></Link>
          </Button>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div className=''>
      <Card className=''>
          <div>
            <h5 className=''>ok</h5>
            <p className=''></p>
          </div>
        <Button className=''><>See More</></Button>
      </Card>
      <Card className=''>
        <div>
          <h5 className=''>ok</h5>
          <p className=''></p>
        </div>
        <Button className=''><>See More</></Button>
      </Card>
      <Card className=''>
        <div>
          <h5 className=''>ok</h5>
          <p className=''></p>
        </div>
        <Button className=''><>See More</></Button>
      </Card>
    </div>
  )
}