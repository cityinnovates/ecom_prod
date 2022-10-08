import React from 'react'
import MerchantUserMess from './MerchantUserMess'
import FeatureCard from '../../templetes/FeatureCard'
import TempleteCard from '../../templetes/TempleteCard'


const TabHeaderContainer = (props) => {

    return (
        <React.Fragment>
            <MerchantUserMess dataMessage={props.dataMessage} dataSell={props.dataSell} />
            <FeatureCard data={props.data} />
            <TempleteCard datacard={props.datacard} />
        </React.Fragment>
    )
}

export default TabHeaderContainer;