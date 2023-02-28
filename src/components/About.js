/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <section class='page-section' id='about'>
      <div class='container'>
        <div class='text-center'>
          <h2 class='section-heading text-uppercase'>About</h2>
          <h3 class='section-subheading text-muted'>About Our Organization</h3>
        </div>
        <ul class='timeline'>
          <li>
            <div class='timeline-image'>
              <img
                class='rounded-circle img-fluid'
                src='assets/img/about/1.jpg'
                alt='...'
              />
            </div>
            <div class='timeline-panel'>
              <div class='timeline-heading'>
                <h4>Welcome</h4>
                <h4 class='subheading'>To iTana</h4>
              </div>
              <div class='timeline-body'>
                <p class='text-muted'>
                  We use film, podcasts, community dialogues, outreaches, and
                  social hangouts to create awareness and promote mental health.
                </p>
              </div>
            </div>
          </li>
          <li class='timeline-inverted'>
            <div class='timeline-image'>
              <img
                class='rounded-circle img-fluid'
                src='assets/img/about/2.jpg'
                alt='...'
              />
            </div>
            <div class='timeline-panel'>
              <div class='timeline-heading'>
                <h4>iTana:</h4>
                <h4 class='subheading'>Our Mission</h4>
              </div>
              <div class='timeline-body'>
                <p class='text-muted'>
                  Make mental health support accessible and approachable for all
                  youth ages 10 to 25, regardless of their background or
                  circumstances.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class='timeline-image'>
              <img
                class='rounded-circle img-fluid'
                src='assets/img/about/3.jpg'
                alt='...'
              />
            </div>
            <div class='timeline-panel'>
              <div class='timeline-heading'>
                <h4>iTana</h4>
                <h4 class='subheading'>Our Approach</h4>
              </div>
              <div class='timeline-body'>
                <p class='text-muted'>
                  iTana believes in using mediums that are easy to access and
                  appreciated by the youth, and how it offers integrated
                  services that cater to the unique needs of each individual.
                </p>
              </div>
            </div>
          </li>
          <li class='timeline-inverted'>
            <div class='timeline-image'>
              <img
                class='rounded-circle img-fluid'
                src='assets/img/about/4.jpg'
                alt='...'
              />
            </div>
            <div class='timeline-panel'>
              <div class='timeline-heading'>
                <h4>iTana</h4>
                <h4 class='subheading'>Join Us</h4>
              </div>
              <div class='timeline-body'>
                <p class='text-muted'>
                  explore the different programs and initiatives offered by
                  iTana, and find the ones that best suits your needs
                </p>
              </div>
            </div>
          </li>
          <li class='timeline-inverted'>
            <div class='timeline-image'>
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
