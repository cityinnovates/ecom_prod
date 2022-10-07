import React from 'react'
import Merchant_UserMess from './Merchant_UserMess'
import FeatureCard from '../../templetes/FeatureCard'
import TempleteCard from '../../templetes/TempleteCard'


const Tab_HeaderContainer = (props) => {

    return (
        <React.Fragment>
            <Merchant_UserMess dataMessage={props.dataMessage} dataSell={props.dataSell} />
            <FeatureCard data={props.data} />
            <TempleteCard datacard={props.datacard} />
        </React.Fragment>
    )
}

export default Tab_HeaderContainer;