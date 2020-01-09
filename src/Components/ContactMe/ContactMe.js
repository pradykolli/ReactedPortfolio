import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Row, Col } from 'reactstrap';
function ContactMe(props) {
    const items = [
        {
          src: 'Images/banner.jpg',
          altText: 'Slide 1',
          caption: ''
        },
        {
          src: 'Images/logo1.jpg',
          altText: 'Slide 2',
          caption: ''
        },
        {
          src: 'Images/logo4.jpg',
          altText: 'Slide 3',
          caption: ''
        }
      ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <div>
            <h1>Get in touch with us</h1>
            <Row>
                <Col md="6" className="leftCol">
                    {/* <Form>
                        <FormGroup>
                            <Label for="fname">First Name</Label>
                            <Input type="text" name="fname" id="fname" placeholder="Pradeep" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lname">Last Name</Label>
                            <Input type="text" name="lname" id="lname" placeholder="Kolli" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Pradeepkolli@prady.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Query">Query</Label>
                            <Input type="textarea" name="text" id="Query" placeholder="Please enter your query here." />
                        </FormGroup>

                        <Button><i className="fas fa-paper-plane"></i>  Send Mail</Button>
                    </Form> */}
                     <div className="contactBlock">
                        <form>
                            <div className="form-group">
                                <label for="firstName">First name</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="firstName" required aria-required="true" placeholder="first name goes here"/>
                                    <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="lastName">Last name</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="lastName" required aria-required="true" placeholder="last name goes here"/>
                                    <span><i className="far fa-user" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <div className="inputWrapper">
                                    <input type="email" className="form-control" id="email" required aria-required="true" placeholder="email@address.com"/>
                                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="addressOne">Address Line 1</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="addressOne" required aria-required="true" placeholder="Address line 1 goes here"/>
                                    <span><i className="fas fa-home" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="addressTwo">Address Line 2</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="addressTwo" required aria-required="true" placeholder="Address line 2 goes here"/>
                                    <span><i className="fas fa-road" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="city">City</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="city" required aria-required="true" placeholder="City goes here"/>
                                    <span><i className="fas fa-city" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="zipCode">Zip Code</label>
                                <div className="inputWrapper">
                                    <input type="number" size="6" className="form-control" id="zipCode" required aria-required="true" placeholder="Zipcode goes here"/>
                                    <span><i className="fas fa-map-marker-alt" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="country">Country</label>
                                <div className="inputWrapper">
                                    <input type="text" className="form-control" id="country" required aria-required="true" placeholder="Country goes here"/>
                                    <span><i className="fas fa-flag-usa" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label for="query">Please write to us</label>
                                <textarea name="query" className="form-control" id="query" cols="30" rows="5"  required aria-required="true" placeholder="Query you want us to answer"></textarea>  
                            </div>
                            <div className="form-group full-width">
                                    <button className="btn btn-success"><i class="fas fa-paper-plane mr5" aria-hidden="true"></i><span class="text-upper">    Send</span></button>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col md="6" className="carousel">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default ContactMe