import React from 'react'
import { Card } from 'react-bootstrap'
import '../stylesheets/ForecastItem.css'
import { ForecastDetailHeader } from './ForecastDetailHeader'
function ForecastItem(props) {
    // Displaying the info of individual forecast as a bootstrap card
    const { name, title } = props.item
    return (
        <div>
            <Card className='forecast' onClick={props.onClick}>
                <ForecastDetailHeader selectedItem={props.item} />
                <Card.Body>
                    <Card.Text >{title}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ForecastItem

