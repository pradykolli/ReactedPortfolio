import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
function ContactMe(props) {
    const items = [
        {
          src: 'app/src/Assets/Images/banner.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'app/src/Assets/Images/logo1.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'app/src/Assets/Images/logo4.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3'
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
                    <Form>
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
                    </Form>

                </Col>
                <Col md="6">
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