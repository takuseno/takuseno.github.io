import * as React from "react"
import { pageStyles } from '../components/style/master'
import Header from '../components/header'
import MetaData from '../components/meta'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import {
  introSectionStyle,
  profilePictureStyle,
  nameStyle,
  sectionTitleStyle,
  sectionContentStyle,
  contentListStyle,
  importantNameStyle
} from '../components/style/home.module.scss'

const IntroSection = () => {
  return (
    <div className={introSectionStyle}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className={profilePictureStyle}>
            <StaticImage src="../images/profile.jpg" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className={nameStyle}>Takuma Seno</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>Machine Learning Engineer @ Sony AI</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>
            <a href="https://www.linkedin.com/in/takuseno">LinkedIn</a>,
            <a href="https://github.com/takuseno">GitHub</a>
          </p>
        </Col>
      </Row>
    </div>
  )
}

const JobSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>EXPERIENCES</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>Sony AI</span> (2020-10 - Present)</p>
            <p>Machine Learning Engineer, working for reinforcement learning projects</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Okinawa Institute of Science and Technology</span> (2020-03 - 2020-07)</p>
            <p>Research Assistant, worked for building a new deep learning library</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Sony Corporation</span> (2018-11 - 2020-07)</p>
            <p>Part-time Resarch Engineer, worked for <a href="https://arxiv.org/abs/2008.07971">Super-human Gran Turismo AI</a> and <a href="https://nnabla.org/">Neural Network Libraries</a></p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Ghelia</span> (2018-04 - 2020-08)</p>
            <p>Part-time Research Engineer, worked for reinforcement learning projects (e.g. robotics, numerical optimization)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Wantedly</span> (2016-03 - 2018-11)</p>
            <p>Part-time Web Developer, worked for <a href="https://wantedly.com">wantedly.com</a> and recommendation algorithms</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>MatchinGood</span> (2014-10 - 2016-04)</p>
            <p>Part-time Web Developer, worked for building Web systems</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const PublicationSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>PUBLICATIONS</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p>Takuma Seno, Michita Imai, "d3rlpy: An Offline Deep Reinforcement Learning Library", 35th Conference on Neural Information Processing Systems (NeurIPS), Offline Reinforcement Learning Workshop, 2021</p>
          </li>
          <li>
            <p>Ryuji Imamura, Takuma Seno, Kenta Kawamoto, Michael Spranger, "Expert Human-level Driving in Gran Turismo Sport Using Deep Reinforcement Learning with Image-based Representation", 35th Conference on Neural Information Processing Systems (NeurIPS), Deep Reinforcement Learning Workshop, 2021</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const EducationSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>EDUCATIONS</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>Keio University</span> (2019-10 - Present)</p>
            <p>Ph.D, Computer Science</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Keio University</span> (2018-04 - 2019-09)</p>
            <p>Master, Computer Science</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Keio University</span> (2014-04 - 2018-03)</p>
            <p>Bachelor, Computer Science</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const ProjectSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>PROJECTS</h2>
      <div className={sectionContentStyle}>
      </div>
    </div>
  )
}

const PrizeSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>PRIZES</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>MITOU Super Creator</span> titled by Information-technology Promosition Agency, Japan (IPA) (2021)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>MITOU Creator</span> selected by Information-technology Promotion Agency, Japan (IPA) (2020)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Best Presentation Award</span> given at Annual Conference in Japanese Neural Network Society (2019)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Student Encouragement Award</span> given at Annual Conference in Information Processing Society Japan (2018)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Student Encouragement Award</span> given at Human-Agent Interaction Symposium (2017)</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <MetaData title="Takuma Seno" description="A home page for Takuma Seno" />
      <Header />
      <Container>
        <IntroSection />
        <JobSection />
        <PublicationSection />
        <EducationSection />
        <PrizeSection />
      </Container>
    </main>
  )
}

export default IndexPage
