import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../images/thumb.jpeg'

// build forecast detailed view content
const ForecastDetailContent = ({ selectedItem }) => {
    return (
        <div>
            <Card.Body>
                <Card.Text className="description">{selectedItem.description}</Card.Text>
                <Card.Text className="dueDate">Due Date: <br />{selectedItem.dueDate}</Card.Text>
                <Card.Text><img className="cardImage" src={Image} alt="img" /></Card.Text>
            </Card.Body>
        </div>
    )
}

export default ForecastDetailContent
