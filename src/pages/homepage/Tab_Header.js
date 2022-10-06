
import React, { useEffect } from "react";
import Tab_HeaderContainer from "./Tab_HeaderContainer";
import { useState } from "react";

const Tab_Header = () => {
    const [data, setData] = useState({
        message: 'Hello user chat !....',
        superchange: 'Supercharge your chat selling',
    });
    const chat = (e) => {

        const check = e.target.id;
        if (check == "chat-tab") {
            setData(
                {
                    message: 'Hello user chat !....',
                    superchange: 'Supercharge your chat selling',
                }
            )
        }
        if (check == "social-tab") {
            setData(
                {
                    message: 'Hello user Social !....',
                    superchange: 'Supercharge your chat selling',
                }
            )
        }
        if (check == "marketplace-tab") {
            setData(
                {
                    message: 'Hello user marketplace-tab !....',
                    superchange: 'Supercharge your chat selling',
                }
            )
        }
        if (check == "webstore-tab") {
            setData(
                {
                    message: 'Hello user webstore-tab !....',
                    superchange: 'Supercharge your chat selling',
                }
            )
        }
        if (check == "all-tab") {
            setData(
                {
                    message: 'Hello user all-tab !....',
                    superchange: 'Supercharge your chat selling',
                }
            )
        }



    }



    return (
        <React.Fragment>

            {/* Dashbord nav Tab  */}
            <div className="container-fluid">
                <div className="container">
                    <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" id="chat-tab" data-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="true" onClick={chat}>Chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false" onClick={chat}>Social</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="marketplace-tab" data-toggle="tab" href="#marketplace" role="tab" aria-controls="marketplace" aria-selected="false" onClick={chat}>Marketplaces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="webstore-tab" data-toggle="tab" href="#webstore" role="tab" aria-controls="webstore" aria-selected="false" onClick={chat}>Webstore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false" onClick={chat}>All</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">{<Tab_HeaderContainer dataMessage={data.message} dataSell={data.superchange} />}</div>
                        <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">{<Tab_HeaderContainer dataMessage={data.message} dataSell={data.superchange} />}</div>
                        <div className="tab-pane fade" id="marketplace" role="tabpanel" aria-labelledby="marketplace-tab">{<Tab_HeaderContainer dataMessage={data.message} dataSell={data.superchange} />}</div>
                        <div className="tab-pane fade" id="webstore" role="tabpanel" aria-labelledby="webstore-tab">{<Tab_HeaderContainer dataMessage={data.message} dataSell={data.superchange} />}</div>
                        <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">{<Tab_HeaderContainer dataMessage={data.message} dataSell={data.superchange} />}</div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default Tab_Header;
