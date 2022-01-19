import styled from 'styled-components';
// import { ThemeProvider } from 'styled-components';

export default function Home() {

  const BlogContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  `

  const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  color: #222222;
  `

  const Articles = styled.div`
  justify-content: center;
  `

  const Subtitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 28px;
  font-weight: 900;
  line-height: 31px;
  color: #d23669;
  `
  const Paragraph = styled.pattern`
  font-family: Merriweather, Georgia, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #222222;
  `
  return (

    <div className='container'>
      <BlogContent>
        <Title>Overreacted</Title>
        <Articles>
          <Subtitle>npm audit: Broken by Design</Subtitle>
          <Paragraph>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</Paragraph>
          <Subtitle>Before You memo()</Subtitle>
          <Paragraph>Rendering optimizations that come naturally.</Paragraph>
          <Subtitle>The WET Codebase</Subtitle>
          <Paragraph>Come waste your time with me.</Paragraph>
          <Subtitle>Goodbye, Clean Code</Subtitle>
          <Paragraph>Let clean code guide you. Then let it go.</Paragraph>
          <Subtitle>My Decade in Review</Subtitle>
          <Paragraph>A personal reflection.</Paragraph>
          <Subtitle>What Are the React Team Principles?</Subtitle>
          <Paragraph>UI Before API.</Paragraph>
          <Subtitle>On let vs const</Subtitle>
          <Paragraph>So which one should I use?</Paragraph>
          <Subtitle>What Is JavaScript Made Of?</Subtitle>
          <Paragraph>Getting a closure on JavaScript.</Paragraph>
          <Subtitle>How Does the Development Mode Work?</Subtitle>
          <Paragraph>Dead code elimination by convention.</Paragraph>
          <Subtitle>Algebraic Effects for the Rest of Us</Subtitle>
          <Paragraph>They’re not burritos.</Paragraph>
          <Subtitle>Preparing for a Tech Talk, Part 3: Content</Subtitle>
          <Paragraph>Turning an idea into a talk.</Paragraph>
          <Subtitle>Name It, and They Will Come</Subtitle>
          <Paragraph>A change starts with a story.</Paragraph>
          <Subtitle>Writing Resilient Components</Subtitle>
          <Paragraph>Four principles to set you on the right path.</Paragraph>
          <Subtitle>A Complete Guide to useEffect</Subtitle>
          <Paragraph>Effects are a part of your data flow.</Paragraph>
          <Subtitle>How Are Function Components Different from Classes?</Subtitle>
          <Paragraph>They’re a whole different Pokémon.</Paragraph>
        </Articles>
      </BlogContent>
      <div className='footer'>

      </div>
    </div>
  )
}
