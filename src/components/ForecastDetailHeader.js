import React from 'react'
import { Card } from 'react-bootstrap'

// build forecast detailed view header
export const ForecastDetailHeader = ({ selectedItem }) => {
    return (
        <div>
            <Card.Header>{selectedItem.name}</Card.Header>
        </div>
    )
}

// build forecast detailed view footer
export const ForecastDetailFooter = ({ selectedItem }) => {
    return (
        <div>
            <Card.Footer>Number Of forecasts Made: {selectedItem.totalCount}<br />
                Current forecast: {selectedItem.currentForcast}, <b>PROBABILITY: </b>{selectedItem.probability}
            </Card.Footer>
        </div>
    )
}

