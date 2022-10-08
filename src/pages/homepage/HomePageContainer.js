
import React from "react";
import NewUpdateMess from "./NewUpdateMess";
import TabHeader from "./TabHeader";

const HomePageContainer =()=>{
    return(
        <React.Fragment>
            <div className="content-wrapper">
              <NewUpdateMess/>
              <TabHeader/>
            </div>
        </React.Fragment>
    );
}

export default HomePageContainer;