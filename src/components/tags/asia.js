import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
const Asia = () => {
    let inputRef = useRef();
    return (
       <>
           <div className="page-header justify-content-between">
               <div className="page-header__image">
                   {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                   <img style={{width:"70vh"}} className="page-header__img img-rounded" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="page header image"/>
               </div>
              <div className="page-header-content">
                  <div className="page-header__intro">
                      <h1 className="page-header__title">
                       <span className="page-header__description">
                           Travel in
                       </span>
                          <div className="page-header__place" title="VIETNAM">VIETNAM</div>
                          <p className="page-header__paragraph">
                              Where street food rules, the history is rich, and breathtaking landscapes are some of the world's best.
                          </p>
                      </h1>
                  </div>

                  <div className="page-header__info">
                      <div className="info-time">
                          <div className="info-icon-div" >
                              <span className="info-icon"></span>
                          </div>
                          <span><strong>Best time to Travel</strong></span>
                          <p className="info-content">April to October is the best time to visit Vietnam</p>
                      </div>
                      <div className="info-currency">
                          <div className="info-icon-div" ><span className="info-icon"></span></div>
                          <span><strong>Currency</strong></span>
                          <p className="info-content">Vietnam’s currency is called Dong. 1 USD is equivalent to 23,500 Vietnamese Dong.</p>
                      </div>
                  </div>
              </div>

           </div>
           <div className="page-content container d-flex mt-5 justify-content-between">
               <div className="page-content__search">
                   <h3 className="search-title__heading text-center">Pick a destination</h3>
                   <ul className="page-content__search-ul">
                            <li className="page-content__search-li mt-3 mb-1">
                                <img className="page-content__search-icon" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="icon images"/>
                                <a href="#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="icon images"/>
                                <a href="#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="icon images"/>
                                <a href="#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="icon images"/>
                                <a href="#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={process.env.PUBLIC_URL+"vietnam.jpg"} alt="icon images"/>
                                <a href="#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li">
                                <div className="input-group rounded">
                                    <input ref={inputRef} type="search" className="form-control rounded" defaultValue="Or type here to search..."
                                           aria-label="Search" aria-describedby="search-addon" onFocus={(e) => inputRef.current.value=""} onBlur={(e) => inputRef.current.value="Or type here to search..."}/>
                                    <span className="input-group-text border-0" id="search-addon">
                                    <i className="fas fa-search"></i></span>
                                </div>
                            </li>
                        </ul>
                </div>
               <div className="page-content-article">
                   <div className="article-img container">
                       {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                       <img className="article-img__img" src={require("../../images/article.jpg")}  alt="article picture"/>
                   </div>
                   <div className="article-img__span">

                   </div>
                   <div className="article-heading">
                        <h1 className="text-center container w-75">Vietnam travel guide: A complete 3-week itinerary</h1>
                   </div>
               </div>
               <div className="must-do-content section container d-flex justify-content-between">

               </div>
           </div>
           {/*page content intro article*/}

           <div className="page-nav">

           </div>
       </>
    );
};

export default Asia;