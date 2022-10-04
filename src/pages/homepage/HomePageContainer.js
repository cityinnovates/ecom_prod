
import React from "react";
import NewUpdateMess from "./NewUpdateMess";
import Tab_Header from "./Tab_Header";

const HomePageContainer =()=>{
    return(
        <React.Fragment>
            <div className="content-wrapper">
              <NewUpdateMess/>
              <Tab_Header/>
            </div>
        </React.Fragment>
    );
}

export default HomePageContainer;