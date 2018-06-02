import React from 'react';

export default function HowItWorks(props) {
    return (
    <section className="how-it-works">
        <div className="how-it-works-title">
            <h1>How it Works</h1>
        </div>
        <div className="row">
            <div className="col-6 category career-img">
            </div>
            <div className="col-6 details red">
                <p className="title-details"> search careers</p>
                <p> search by career and location to gain an understanding of the local market. find national and local median salary, education and experience required. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-6 category grad-img right">
            </div>
            <div className="col-6 details left gold">
                <p className="title-details"> search colleges</p>
                <p> search colleges by degree, speciality and location to return to find some options of colleges. discover average cost, debt, and salary 10 years after graduation.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-6 category compare-img">
            </div>
            <div className="col-6 details">
                <p className="title-details"> compare</p>
                <p> compare colleges against desired career and calculate return on investment over 20 years.</p>
            </div>
        </div>
    </section>
    )
}
