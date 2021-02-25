import React from 'react'
import comp from '../comp.png';
import lecture from '../lecture.jpg';
import coupon from '../coupon.jpg';
export const Body = () => {
    return (
        <>
            <div className="justify-content-center" id="beinggeeky">
                <h1 className=" my-5">Being Geeky</h1>
                <h2 className=" my-5">Your own video and theortical study place.</h2>
                <p className=" mx-5 d-none d-sm-block my-5">Being Geeky is one of the best platform for the online learning.
                With the best study material.Dummy text is text that is used in the publishing
                industry or by web designers to occupy the space which will later be filled with 'real' content.
                This is required when, for example, the final text is not yet available.
                Dummy text is also known as 'fill text'. It is said that song composers of the past
                used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.
                Dummy texts have been in use by typesetters since the 16th century.
            </p>
            </div>
            <div className="justify-content-center" id="tutorial">
                <i className="fa fa-music"></i>
                <h1>Documentation</h1>
                <h2 className="my-4">All genuine Documentation at one place</h2>
                <p className="my-4">
                    Being Geeky helps the viewer to find all the required documentation
                    at one place so that they need not waste time to find offical documentation.
                    The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated
                    in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or
                    less corresponds to 'proper' Latin. It contains a series of real Latin words.
                    This ancient dummy text is also incomprehensible, but it imitates the rhythm of
                    most European languages in Latin script. The advantage of its Latin origin and the
                    relative meaninglessness of Lorum Ipsum is that the text does not attract
                    attention to itself or distract the viewer's attention from the layout.
            </p>
                <button className="btn btn-dark my-2">Start Your Trial Now</button>
                <h5 className="mt-2">You can download Being Geeky from playstore or appstore</h5>
                <img src={comp} style={{ height: "50%", width: "80%", borderRadius: "10%" }} className="img-fluid" alt="ipad" />
            </div>
            <div className="justify-content-center" id="video">
                <h1>The video lecture you shouldn't miss</h1>
                <p className="my-4">
                With one of the best content available online.And one of the best instructors it makes Being 
                Geeky one of the best available learing platform available.he spread of computers and 
                layout programmes thus made dummy text better known. While in earlier times several lines 
                of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text 
                of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. 
                Based on 'De finibus', these generators automatically create longer sections of the 
                Lorem Ipsum text or various other filler texts.
                </p>
                <button className="btn btn-primary my-4">Start Your Trial Now</button><br></br>
                <img src={lecture} style={{height: "50%", width: "80%",borderRadius:"2%"}} className="img-fluid" alt="ipad" />
            </div>
            <div className="justify-content-center" id="lectures">
                <h1>Lectures available anywhere anytime.</h1>
                <p className="my-5">You can watch the lecture anytime from anywhere and ask doubts.
                The phrasal sequence of the Lorem Ipsum text is now so widespread 
                and commonplace that many DTP programmes can generate dummy text
                using the starting sequence "Lorem ipsum". Fortunately, the phrase 
                'Lorem Ipsum' is now recognized by electronic pre-press systems and, 
                when found, an alarm can be raised. This avoids a publication going 
                to print with overlooked dummy text.
                </p>
            </div>
            <div className="d-md-flex" id="coupons">
                <img src={coupon} style={{ height:"40%",width:"35%",borderRadius:"20%"}} alt='image'/>
                <div className=" offset-md-2 container my-sm-4">
                    <h3>Coupons</h3>
                    <p className="my-5">You can apply different coupons to get extra discount on selected courses.
                        Certain internet providers exploit the fact that fill text cannot be recognized 
                        by automatic search engines - meaningful information cannot be distinguished 
                        from meaningless: Target-generated dummy text mixed with a certain combination 
                        of search terms can lead to an increased frequency of visits by search machine users. 
                        As a consequence, advertising revenues, which rely on website 'hits', are increased.
                    </p>
                    <p>
                    Already have a Coupon?
                    </p><hr></hr>
                    <a href="#coupons" style={{textDecoration:"none"}}><i class="fa fa-chevron-right"></i>Redeem</a>
                    
                </div>

            </div>
        </>
    )
}

