import React from "react";
import Container from "./container";
import Banner from "./banner";
import Benefits from "./benefits";

const FacilityTemplate = (props) => {
  const { data } = props;
  return (
    <>
      <Container>
        <Banner data={data.bannerData} />
        <Benefits imgPos="right" data={data.sectionData} className="px-40 py-20" />
      </Container>
    </>
  );
};

export default FacilityTemplate;
