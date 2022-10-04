
import React from "react";
import Tab_HeaderContainer from "./Tab_HeaderContainer";

const Tab_Header = () => {
    return (
        <React.Fragment>

            {/* Dashbord nav Tab  */}
            <div className="container-fluid">
                <div className="container">
                    <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" id="chat-tab" data-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="true">Chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false">Social</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="marketplace-tab" data-toggle="tab" href="#marketplace" role="tab" aria-controls="marketplace" aria-selected="false">Marketplaces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="webstore-tab" data-toggle="tab" href="#webstore" role="tab" aria-controls="webstore" aria-selected="false">Webstore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">All</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">{<Tab_HeaderContainer/>}</div>
                        <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">{<Tab_HeaderContainer/>}</div>
                        <div className="tab-pane fade" id="marketplace" role="tabpanel" aria-labelledby="marketplace-tab">{<Tab_HeaderContainer/>}</div>
                        <div className="tab-pane fade" id="webstore" role="tabpanel" aria-labelledby="webstore-tab">{<Tab_HeaderContainer/>}</div>
                        <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">{<Tab_HeaderContainer/>}</div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default Tab_Header;
