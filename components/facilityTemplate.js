import React from "react";
import Container from "./container";
import Banner from "./banner";
import Benefits from "./benefits";

const FacilityTemplate = (props) => {
  const { data } = props;
  const styleFiller = { flexGrow: 1, borderBottom: "2px solid gray", margin: "14px" };
  return (
    <div className="flex-nowrap">
      <Banner data={data.bannerData} />
      <Benefits imgPos="right" data={data.sectionData} className="px-40 py-20" />
      <Container className="flex flex-col items-stretch max-w-5xl border-4 border-gray-600 mt-0">
        <div className="p-4">
          <div className="text-center text-2xl self-center font-extrabold">Heading</div>
          <div className="text-center py-2">Deco</div>
          <div className="flex flex-row justify-between  ">
            <div className="text-lg">Timings :</div>
            <div className="filler" style={styleFiller}></div>
            <div className="text-lg">thing 1 - explanation </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FacilityTemplate;
/* 
    Opening hours: Clearly state the operating hours of the pool, including weekdays and weekends.
    Seasonality: Mention if the pool has seasonal closures or operates year-round (if relevant).
    Admission fees: If applicable, mention the entry fee or any membership options available.
    Reservation policy: Inform users if reservations are required for pool access.
    Age restrictions: Specify any age restrictions for unsupervised access or specific areas.

Safety and Regulations:

    Lifeguard presence: Indicate if lifeguards are on duty and their operating hours.
    Pool rules: List essential pool rules, such as no running, proper attire, and hygiene regulations.
    Safety instructions: Provide basic safety instructions like following lifeguard instructions and not swimming alone.
    Emergency procedures: Briefly outline the procedure in case of emergencies.

Additional Information:

    Amenities: List any amenities offered at the pool, such as changing rooms, showers, lockers, towels (rental or included), poolside furniture, concessions, etc.
    Activities: Mention any activities offered like swimming lessons, water exercises, aquatic fitness classes, or poolside events.
    Parking: Briefly explain parking availability and any associated fees.
    Contact information: Provide contact details like phone number, email address, or website link for further inquiries.

Optional Information:

    Pool temperature: If applicable, mention the pool's average temperature, especially for indoor pools.
    Lane availability: Mention if lap lanes are available and their designated swim times, if applicable.
    Guest policies: Clarify any guest policies regarding the number of guests allowed per member or visitor.
    Photos and videos: Include high-quality photos and videos showcasing the pool, its facilities, and activities offered.
*/
