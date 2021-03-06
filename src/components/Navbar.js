import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';

const Navbar = () => {

    // Animation Part Started Here

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }
    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);


    // Animation Parts Ended Here 

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-mainbg ">

                <NavLink className="navbar-brand navbar-logo" to="/" exact onClick={() => window.scroll(0, 0)}>
                    MovieCon🍟
                </NavLink>


                <button
                    className="navbar-toggler"
                    onClick={function () {
                        setTimeout(function () { animation(); });
                    }}
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>

                <div
                    className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">

                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>

                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" exact>
                                <i
                                    className="fas fa-tachometer-alt">
                                </i>Trending
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Movies" exact>
                                <i
                                    className="far fa-address-book">
                                </i>Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/TvSeries" exact>
                                <i
                                    className="far fa-address-book">
                                </i>TV Series
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Search" exact>
                                <i
                                    className="far fa-copy">
                                </i>Search
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/WatchList" exact>
                                <i
                                    className="far fa-copy">
                                </i>WatchList
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;