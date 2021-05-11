import React from 'react'
import { Card } from 'react-bootstrap'
import '../stylesheets/ForecastDetail.css'
import ForecastDetailContent from './ForecastDetailContent'
import { ForecastDetailHeader, ForecastDetailFooter } from './ForecastDetailHeader'

// Display detailed view of forecast
const ForecastDetail = React.memo(props => {
    return (
        props.selectedItem && <div>
            <Card className='forecastDetail'>
                <ForecastDetailHeader selectedItem={props.selectedItem} />
                <ForecastDetailContent selectedItem={props.selectedItem} />
                <ForecastDetailFooter selectedItem={props.selectedItem} />
            </Card>
        </div>
    )
})

export default ForecastDetail