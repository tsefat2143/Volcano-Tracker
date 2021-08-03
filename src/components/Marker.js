import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/mountain'

const Marker = ({lat, lng, onCLick}) => {
    return (
        <div className={'location-marker'} onClick={onCLick}>
            <Icon icon={locationIcon} className='location-icon' />
        </div>
    )
}

export default Marker
