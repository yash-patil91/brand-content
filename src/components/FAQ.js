import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import horse5 from "../assets/images/horse5.jpg"

const FAQ = () => {
    return (
        <div className="relative">
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "40vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('${horse5}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        FAQ
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Frequently Asked Questions about Equellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Container>
                    <section className="relative py-20">
                        <div className="container mx-auto px-4 text-center">
                            <div className="w-full mx-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl mb-8 font-medium text-left">
                                    These are the most Frequently asked questions about the Equellence club experience.
                                    </h3>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT IS EQUELLENCE?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                The main objective of Equellence is to bridge the gap between the equestrian and the non-horse world by connecting equestrians, brands, barns, and events while promoting all individual content creation and social media through a specifically curated equestrian network.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT CAN I DO TO JOIN AS A CONTENT CREATOR?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                To join Equellence, you can submit an application here. To increase your chances of acceptance into the Equellence group, upload impressive social media content, be: daring, bold and original, and try to have a message that stands out. Whether or not you get accepted into Equellence, you can always re-apply so continue to grow your platform to the best of your abilities!<br />
                                                <a href="https://forms.gle/b6na3zsAyujFoD3eA "><span className='text-blue-400'>https://forms.gle/b6na3zsAyujFoD3eA </span></a>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT DO I GET WHEN I JOIN?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                When you become a member of Equellence, you are not just joining a club. You are joining a lifelong Equestrian family. Therefore, like family, we take care of you. You receive a lot:
                                                <ul>
                                                    <li>Free VIP access to Equfest and all Equellence related events all around the world</li>
                                                    <li>Free VIP access to various horse shows</li>
                                                    <li>Free housing and trips to many incredible countries through our group retreats</li>
                                                    <li>A specially curated network and platform to communicate and collaborate with over 100+ equestrian content creators</li>
                                                    <li>Access to a multitude of videos and tutorials on how to successfully grow a platform as a content creator, including trends, tips and tricks, and a place to ask questions and gain feedback.</li>
                                                    <li>Brand deals both paid monetarily and gifted.</li>
                                                    <li>PR collateral with a multitude of brands</li>
                                                    <li>Free Equellence uniform and merchandise.</li>
                                                    <li>Opportunity to connect with big equestrian content creators and professionals from all over the world, advancing and solidifying your career long-term as an equestrian.</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4a-content"
                                            id="panel4a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT IS MY EXPECTATION AS A MEMBER?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                As a member of Equellence, you are expected to embody the values of luxury, professionalism, and creativity in everything you do. This means maintaining the highest standards of excellence in your work, upholding a respectful and polished demeanor in all interactions, and contributing to the growth of the community with innovative ideas and a collaborative spirit. Your commitment to these principles will ensure that Equellence remains a space of inspiration, connection, and success for all involved.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel5a-content"
                                            id="panel5a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO I NEED TO PAY ANYTHING?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                To fund the club and all the amazing activities, we do have a monthly membership fee of $19.99. You can pay this monthly, or select yearly membership with a discount.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel6a-content"
                                            id="panel6a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHERE CAN I BUY TICKETS FOR EQUELLENCE EVENTS?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                You can find more about Equfest, the festival for equestrians, run by Equellence, on the official Equfest website here.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel7a-content"
                                            id="panel7a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO I NEED TO BE AN EQUESTRIAN TO JOIN?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                Equellence is a club for creators making content with any types of Equines. You don't have to ride, however, your content does have to stand out.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel8a-content"
                                            id="panel8a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>DO YOU ACCEPT EQUESTRIANS OF ALL BACKGROUNDS?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                Absolutely! We pride ourselves in diversity and make an effort to select Equestrians with not a lot of opportunity and backgrounds. In our selection process, we also do try to select Equestrians we know will also match the resources and the connections we have, so please also do keep that in mind when applying.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion className="mt-3" style={{ border: "0.02rem solid #ededed" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel8a-content"
                                            id="panel8a-header"
                                        >
                                            <Typography className='text-2xl leading-relaxed text-gray-700'>WHAT GOES INTO MY CLUB DUES?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-lg leading-relaxed text-gray-600 text-left'>
                                                Equellence may be a new club, but a lot actually goes into the subscription. In the Equellence club, the network and community is our biggest perk, but besides that, within the club you get special benefits such as:

                                                <ul className='list-disc pl-5 text-left'>
                                                    <li><strong>Club meetings:</strong> Our club meetings tend to be bi-weekly, and this is where you can connect with other members of the group, but also receive weekly trend updates, new growth strategies, and receive account help.</li>
                                                    <li><strong>Account boosting:</strong> As you’ve seen on our social media page, we oftentimes post videos and photos of our members. These reels/images boost your account and engagement, and also help curate your feed as a content creator. You can upload images/videos to our group forum for us to edit and post for you.</li>
                                                    <li><strong>Individual account growth and help:</strong> New members get individual club meetings from our founder on strategies with how to grow your account, and personal assistance.</li>
                                                    <li><strong>Masterclass:</strong> Our masterclass aids you on specific content trends, goals, strategies and more on how to grow your page and personal brand!</li>
                                                    <li><strong>Paid/unpaid opportunities and special perks:</strong> There are fun perks that happen in the club. We have collaborations between members, paid and unpaid opportunities, traveling opportunities, brand partnerships and more.</li>
                                                </ul>

                                                Of course, Equellence again is a community, so you don’t have to even participate in the content creator side. Some members just enjoy having a network. But if content creation is something you’d like to explore full time, Equellence strategies are best to follow and keep up with!
                                            </Typography>
                                        </AccordionDetails>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                {/*               
                <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Choose Your Subscription Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Small Business</h3>
              <p className="text-2xl font-semibold text-gray-800 mb-4">$79.99</p>
              <p className="text-gray-600 mb-4">Best for small businesses, startups, or companies with a limited budget.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>✔️ Paid campaigns</li>
                <li>✔️ Work with 3 Influencer Campaigns per month</li>
                <li>✔️ Assigned Influencer per Campaign</li>
              </ul>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>

       
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-500 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Standard Business</h3>
              <p className="text-2xl font-semibold text-gray-800 mb-4">$199.99</p>
              <p className="text-gray-600 mb-4">Best for all types of Businesses looking to expand their outreach.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>✔️ Paid Campaigns (disclose budget per Campaign)</li>
                <li>✔️ Gifted Campaigns</li>
                <li>✔️ PR Campaigns</li>
                <li>✔️ 2 Influencer Campaigns per month</li>
                <li>✔️ Ability to select up to 3 Influencers per Campaign</li>
              </ul>
            </div>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>

     
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-500 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professionals Business</h3>
              <p className="text-2xl font-semibold text-gray-800 mb-4">$399.99</p>
              <p className="text-gray-600 mb-4">Best for Corporations or big companies looking to expand their outreach.</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>✔️ Paid Campaigns (disclose budget per Campaign)</li>
                <li>✔️ PR Campaigns</li>
                <li>✔️ Gifted Campaigns</li>
                <li>✔️ Unlimited Influencer Campaigns per month</li>
                <li>✔️ Ability to select Influencer per Campaign</li>
              </ul>
            </div>
            <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div> */}

            </main>
            <Footer />
        </div>
    );
}

export default FAQ;
