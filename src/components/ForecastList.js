import React, { PureComponent } from 'react'
import { FORECAST_ITEMS } from '../constant'
import ForecastItem from './ForecastItem'
import ForecastDetail from './ForecastDetail'
class ForecastList extends PureComponent {
    constructor(props) {
        super(props)
        // defining state selectedItem as empty so initially there will not be any item selected
        this.state = {
            selectedItem: ''
        }
    }

    onItemClick = (item) => {
        this.setState({ selectedItem: item })
    }

    // As soon the component mounts displaying the detail of first item in catalogue by default
    componentDidMount() {
        this.setState({ selectedItem: FORECAST_ITEMS[0] })
    }

    // render the detailed view on right side of each item once clicked
    render() {
        return (
            <div>
                {/* Mapping each item in forecast catalogue and render each list display on click */}
                {
                    FORECAST_ITEMS.map((item, i) =>
                        <ForecastItem item={item} key={i} onClick={() => this.onItemClick(item)} />
                    )
                }
                {/* detailed view of each item on click will be rendered */}
                <ForecastDetail selectedItem={this.state.selectedItem} />
            </div>
        )
    }
}

export default ForecastList
