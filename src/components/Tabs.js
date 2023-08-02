import React, { useState } from "react";
import TableBasic from "./TableBasic";

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('Byline');

    return (
        <div className="parent-container">
            <div className="tab-wrapper table-components-theme w-100 d-flex p-2 rounded-top">
                <div className={`mx-2 tab-item ${currentTab === "Byline" ? 'active' : ''}`} onClick={() => setCurrentTab("Byline")}>Byline</div>
                <div className={`mx-2 tab-item ${currentTab === "Image" ? 'active' : ''}`} onClick={() => setCurrentTab("Image")}>Image</div>
                <div className={`mx-2 tab-item ${currentTab === "Video" ? 'active' : ''}`} onClick={() => setCurrentTab("Video")}>Video</div>
            </div>
            <TableBasic currentTab={currentTab} />
        </div>
    );
}

export default Tabs;