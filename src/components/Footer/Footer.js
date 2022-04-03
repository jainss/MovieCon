import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>MovieCon🍟</h4>
                        <h1 className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet South North</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Movie</h4>
                        <ul className="list-unstyled">
                            <li>Action😎</li>
                            <li>Comedy🤣</li>
                            <li>Romance😍</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>TV-Series</h4>
                        <ul className="list-unstyled">
                            <li>Drama😛</li>
                            <li>Serials😥</li>
                            <li>TV-Shows😮</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} MovieCon | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;