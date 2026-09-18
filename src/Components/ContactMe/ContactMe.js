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
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState('');

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const values = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            addressOne: form.addressOne.value,
            addressTwo: form.addressTwo.value,
            city: form.city.value,
            zipCode: form.zipCode.value,
            country: form.country.value,
            query: form.query.value
        };
        const nextErrors = {};
        const requiredFields = {
            firstName: 'First name is required.',
            lastName: 'Last name is required.',
            addressOne: 'Address Line 1 is required.',
            city: 'City is required.',
            country: 'Country is required.',
            query: 'Please enter a message.'
        };

        Object.keys(requiredFields).forEach((field) => {
            if (!values[field] || !values[field].trim()) {
                nextErrors[field] = requiredFields[field];
            }
        });

        if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
            nextErrors.email = 'Enter a valid email address.';
        }

        if (!values.zipCode || !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$|^\d{5}(-\d{4})?$/.test(values.zipCode.trim())) {
            nextErrors.zipCode = 'Enter a valid postal or ZIP code.';
        }

        if (values.query && values.query.trim().length < 10) {
            nextErrors.query = 'Message must be at least 10 characters.';
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setNotification('');
            return;
        }

        const emailBody = [
            `First name: ${values.firstName.trim()}`,
            `Last name: ${values.lastName.trim()}`,
            `Email: ${values.email.trim()}`,
            `Address Line 1: ${values.addressOne.trim()}`,
            `Address Line 2: ${values.addressTwo.trim() || 'Not provided'}`,
            `City: ${values.city.trim()}`,
            `Postal/ZIP code: ${values.zipCode.trim()}`,
            `Country: ${values.country.trim()}`,
            '',
            'Message:',
            values.query.trim()
        ].join('\n');
        const mailto = `mailto:pradykolli@gmail.com?subject=${encodeURIComponent('Contacting from the portfolio website')}&body=${encodeURIComponent(emailBody)}`;

        setNotification('Your email draft has been opened. Please review and send it from your email client.');
        window.location.href = mailto;
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
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="inputWrapper">
                                    <input type="text" name="firstName" className="form-control" id="firstName" required aria-required="true" aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? 'firstNameError' : undefined} placeholder="first name goes here"/>
                                    <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                {errors.firstName && <small id="firstNameError" className="text-danger">{errors.firstName}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="inputWrapper">
                                    <input type="text" name="lastName" className="form-control" id="lastName" required aria-required="true" aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? 'lastNameError' : undefined} placeholder="last name goes here"/>
                                    <span><i className="far fa-user" aria-hidden="true"></i></span>
                                </div>
                                {errors.lastName && <small id="lastNameError" className="text-danger">{errors.lastName}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <div className="inputWrapper">
                                    <input type="email" name="email" className="form-control" id="email" required aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'emailError' : undefined} placeholder="email@address.com"/>
                                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                                {errors.email && <small id="emailError" className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="addressOne">Address Line 1</label>
                                <div className="inputWrapper">
                                    <input type="text" name="addressOne" className="form-control" id="addressOne" required aria-required="true" aria-invalid={Boolean(errors.addressOne)} aria-describedby={errors.addressOne ? 'addressOneError' : undefined} placeholder="Address line 1 goes here"/>
                                    <span><i className="fas fa-home" aria-hidden="true"></i></span>
                                </div>
                                {errors.addressOne && <small id="addressOneError" className="text-danger">{errors.addressOne}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="addressTwo">Address Line 2 (optional)</label>
                                <div className="inputWrapper">
                                    <input type="text" name="addressTwo" className="form-control" id="addressTwo" placeholder="Address line 2 goes here (optional)"/>
                                    <span><i className="fas fa-road" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="inputWrapper">
                                    <input type="text" name="city" className="form-control" id="city" required aria-required="true" aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? 'cityError' : undefined} placeholder="City goes here"/>
                                    <span><i className="fas fa-city" aria-hidden="true"></i></span>
                                </div>
                                {errors.city && <small id="cityError" className="text-danger">{errors.city}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipCode">Zip Code</label>
                                <div className="inputWrapper">
                                    <input type="text" name="zipCode" className="form-control" id="zipCode" required aria-required="true" aria-invalid={Boolean(errors.zipCode)} aria-describedby={errors.zipCode ? 'zipCodeError' : undefined} placeholder="Postal or ZIP code"/>
                                    <span><i className="fas fa-map-marker-alt" aria-hidden="true"></i></span>
                                </div>
                                {errors.zipCode && <small id="zipCodeError" className="text-danger">{errors.zipCode}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="inputWrapper">
                                    <input type="text" name="country" className="form-control" id="country" required aria-required="true" aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? 'countryError' : undefined} placeholder="Country goes here"/>
                                    <span><i className="fas fa-flag-usa" aria-hidden="true"></i></span>
                                </div>
                                {errors.country && <small id="countryError" className="text-danger">{errors.country}</small>}
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="query">Please write to us</label>
                                <textarea name="query" className="form-control" id="query" cols="30" rows="5" required aria-required="true" aria-invalid={Boolean(errors.query)} aria-describedby={errors.query ? 'queryError' : undefined} placeholder="Query you want us to answer"></textarea>
                                {errors.query && <small id="queryError" className="text-danger">{errors.query}</small>}
                            </div>
                            <div className="form-group full-width">
                                    <button type="submit" className="btn btn-success"><i className="fas fa-paper-plane mr5" aria-hidden="true"></i><span className="text-upper">    Send</span></button>
                                    {notification && <p className="text-success" role="status">{notification}</p>}
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