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
  importantNameStyle,
  publicationListStyle
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
          <p>Ph.D, Research Scientist @ Sony Research</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>
            <a href="https://www.linkedin.com/in/takuseno">LinkedIn</a>,
            <a href="https://github.com/takuseno">GitHub</a>,
            <a href="https://scholar.google.co.jp/citations?user=uBCMlS4AAAAJ">Google Scholar</a>
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
            <p><span className={importantNameStyle}>Sony Research</span> (2020-10 - Present)</p>
            <p>Research Scientist, working for <a href="https://www.gran-turismo.com/us/gran-turismo-sophy/">Gran Turismo Sophy</a></p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Okinawa Institute of Science and Technology</span> (2020-03 - 2020-07)</p>
            <p>Research Assistant, worked for a custom backpropagation library: <a href="https://github.com/proppo/proppo">Proppo</a></p>
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
      <h2 className={sectionTitleStyle}>SELECTED PUBLICATIONS</h2>
      <div className={sectionContentStyle}>
        <ul className={publicationListStyle}>
          <li>
            <p>Paavo Parmas, <strong>Takuma Seno</strong>, Yuma Aoki, "Model-based Reinforcement Learning with Scalable Composite Policy Gradient Estimators", 40th International Conference on Machine Learning (ICML), 2023</p>
          </li>
          <li>
            <p><strong>Takuma Seno</strong>, Michita Imai, "d3rlpy: An Offline Deep Reinforcement Learning Library", Journal of Machine Learning Research (JMLR), 315, 1-20, 2022</p>
          </li>
          <li>
            <p>Paavo Parmas, <strong>Takuma Seno</strong>, "Proppo: a Message Passing Framework for Customizable and Composable Learning Algorithms", 36th Conference on Neural Information Processing Systems (NeurIPS), 2022</p>
          </li>
          <li>
            <p>James MacGlashan, Evan Archer*, Alisa Devlic*, <strong>Takuma Seno*</strong>, Craig Sherstan*, Peter R Wurman, Peter Stone, "Value Function Decomposition for Iterative Design of Reinforcement Learning Agents", 36th Conference on Neural Information Processing Systems (NeurIPS), 2022</p>
          </li>
          <li>
            <p>Peter R Wurman, Samuel Barrett, Kenta Kawamoto, James MacGlashan, Kaushik Subramanian, Thomas J Walsh, Roberto Capobianco, Alisa Devlic, Franziska Eckert, Florian Fuchs, Leilani Gilpin, Piyush Khandelwal, Varun Kompella, HaoChih Lin, Patrick MacAlpine, Declan Oller, <strong>Takuma Seno</strong>, Craig Sherstan, Michael D Thomure, Houmehr Aghabozorgi, Leon Barrett, Rory Douglas, Dion Whitehead, Peter Dürr, Peter Stone, Michael Spranger, Hiroaki Kitano. "Outracing champion Gran Turismo drivers with deep reinforcement learning", Nature, 602, 223-228, 2022</p>
          </li>
          <li>
            <p><strong>Takuma Seno</strong>, Michita Imai, "d3rlpy: An Offline Deep Reinforcement Learning Library", NeurIPS Offline Reinforcement Learning Workshop, 2021</p>
          </li>
          <li>
            <p>Ryuji Imamura, <strong>Takuma Seno</strong>, Kenta Kawamoto, Michael Spranger, "Expert Human-Level Driving in Gran Turismo Sport Using Deep Reinforcement Learning with Image-based Representation", NeurIPS Deep Reinforcement Learning Workshop, 2021</p>
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
            <p><span className={importantNameStyle}>Keio University</span> (2019-09 - 2023-09)</p>
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
      <h2 className={sectionTitleStyle}>OSS ACTIVITIES</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>d3rlpy</span>, an offline deep reinforcement learning library, founder, <a href="https://github.com/takuseno/d3rlpy">https://github.com/takuseno/d3rlpy</a></p>
          </li>
          <li>
            <p><span className={importantNameStyle}>nnabla</span>, Sony's neural network library, contributor, <a href="https://github.com/sony/nnabla">https://github.com/sony/nnabla</a></p>
          </li>
          <li>
            <p><span className={importantNameStyle}>nnabla-rl</span>, a nnabla-based deep reinforcement learning library, contributor, <a href="https://github.com/sony/nnabla-rl">https://github.com/sony/nnabla-rl</a></p>
          </li>
          <li>
            <p><span className={importantNameStyle}>nnabla-js</span>, a JavaScript runtime for nnabla, founder, <a href="https://github.com/sony/nnabla-js">https://github.com/sony/nnabla-js</a></p>
          </li>
        </ul>
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
            <p><span className={importantNameStyle}>Mitou Super Creator</span> certified by Information-technology Promotion Agency, Japan (IPA) (2021)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Mitou Creator</span> selected by Information-technology Promotion Agency, Japan (IPA) (2020)</p>
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
        <ProjectSection />
        <EducationSection />
        <PrizeSection />
      </Container>
    </main>
  )
}

export default IndexPage
