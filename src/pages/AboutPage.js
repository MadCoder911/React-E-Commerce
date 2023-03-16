import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice cdesk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              Box Furniture was founded in 1985 with a vision to provide
              high-quality furniture to customers. Over the years, the store has
              grown and expanded its product range, but its commitment to
              quality has remained unchanged. Today, Box Furniture is a trusted
              name in the industry, known for its stylish and durable furniture
              pieces. With a focus on customer satisfaction and innovation, the
              store continues to evolve and adapt to changing trends and
              demands. Whether you're looking for classic or contemporary
              designs, Box Furniture has something for everyone.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
