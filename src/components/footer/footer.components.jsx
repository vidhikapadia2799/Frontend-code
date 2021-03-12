import React from 'react'
import './footer.styles.css'
import { NavLinks } from '../navabar/navbar.styles';
import { withRouter } from 'react-router-dom';

const Footer = ( {history} ) => {
    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            {/* <!--headin5_amrc--> */}
                        {/* <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                        <p>CH-4, GatewayCorp Office, S.G Highway, Ahmedabad. </p>
                        <p>+91-9426553286  </p>
                        <p>harshilsheth181888@gmail.com  </p>


                    </div>


                    {/* <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2 head">Useful Links</h5> */}
                        {/* <!--headin5_amrc--> */}
                        {/* <ul className="footer_ul_amrc">
                        
                        <NavLinks
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='home'
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact='true'
                            offset={-80}
                            ><p>Home</p></NavLinks>
                        
                            <NavLinks
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='services'
                            smooth={true}
                            duration={900}
                            spy={true}
                            exact='true'
                            offset={-65}
                            ><p>Sevices</p></NavLinks>
                        
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='about'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-65}
                            ><p>About</p></NavLinks>
                        
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='faq'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            offset={-65}
                            ><p>FAQ</p></NavLinks>
                        
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-55}
                            ><p>Contact</p></NavLinks>
                        
                        </ul> */}
            {/* <!--footer_ul_amrc ends here--> */}
                    {/* </div> */}


                    


                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
                        {/* <!--headin5_amrc ends here--> */}
                
                        <p>We Care Home Care was launched in November 2020. The company"s vision is to empower millions of service professionals across the world to deliver services at home like never seen before.</p>
                        {/* <!--footer_ul2_amrc ends here--> */}
                    </div>
                </div>
            </div>


            <div className="container">
                {/* <!--foote_bottom_ul_amrc ends here--> */}
                <p className="text-center copyright">Copyright ©2021 All Rights Reserved | Designed by <a href="/">We Care home Care</a></p>

                {/* <ul className="social_footer_ul">
                <li><a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="http://twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="http://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="http://instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul> */}
                {/* <!--social_footer_ul ends here--> */}
            </div>

        </footer>

        )
}

export default withRouter(Footer)




// <!-- Crédit to https://bootsnipp.com/snippets/bxDBA -->