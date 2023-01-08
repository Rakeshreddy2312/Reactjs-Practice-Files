import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer id="footer">
        <div className="footer">
          <div className="bttop">
            <a href="">
              {" "}
              <h4>back to top</h4>
            </a>
          </div>
          <div className="ftr-top">
            <p className="ftr-tel">
              Questions? Call
              <a className="tel-a" href="tel:123-456-654-3213">
                123-456-654-3213
              </a>
            </p>
          </div>
          <div className="ftr-mdl">
            <div className="fms">
              <div className="fmsh">courses</div>
              <a href="" className="lks">
                front end developing
              </a>
              <a href="" className="lks">
                back end deve
              </a>
              <a href="" className="lks">
                cloud computing
              </a>
              <a href="" className="lks">
                software testing
              </a>
              <a href="" className="lks">
                software administration
              </a>
            </div>
            <div className="fms">
              <div className="fmsh">about</div>
              <a href="scl9_ctct.html" className="lks">
                contact us
              </a>
              <a href="scl9_abt.html" className="lks">
                about us
              </a>
              <a href="" className="lks">
                career
              </a>
              <a href="" className="lks">
                corporate information
              </a>
            </div>
            <div className="fms">
              <div className="fmsh">help</div>
              <a href="" className="lks">
                FAQ
              </a>
              <a href="" className="lks">
                how to register
              </a>
              <a href="" className="lks">
                how to login
              </a>
            </div>
            {/* <div className="fms">
              <div className="fmsh">follow us on</div>
              <a href="" className="lks">
                <i className="fa fa-facebook" style="font-size:36px"></i>
              </a>
              <a href="" className="lks">
                <i className="fa fa-linkedin" style="font-size:36px"></i>
              </a>
              <a href="" className="lks">
                <i className="fa fa-twitter" style="font-size:36px"></i>
              </a>
            </div> */}
            <div className="fms">
              <div className="fmsh">registered office address:</div>
              <p className="lks1">school9 private limited</p>
              <p className="lks1">mindspace,building no:12,13th floor</p>
              <p className="lks1">hyderabad,500001</p>
              <p className="lks1">telangana,india</p>
              <p className="lks1">
                telephone num:
                <a className="tel-a" href="tel:123-456-654-3213">
                  123-456-654-3213
                </a>
              </p>
            </div>
          </div>
          <div className="ftr-btm">
            <p className="lks1">&copy;2019-2022 school9.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
