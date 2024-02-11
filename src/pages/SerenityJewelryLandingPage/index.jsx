import React from "react";

import { Img, List, PagerIndicator, Slider, Text } from "components";

const SerenityJewelryLandingPagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-red-50 flex flex-col font-cormorantgaramond sm:gap-10 md:gap-10 gap-[258px] items-center justify-end mx-auto pt-[45px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1290px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row font-cormorantgaramond sm:gap-5 items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                  size="txtCormorantGaramondBold48"
                >
                  Serenity{" "}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[667px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondSemiBold28"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[46px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondSemiBold28"
                >
                  About Us
                </Text>
                <Text
                  className="sm:ml-[0] ml-[45px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondSemiBold28"
                >
                  Pages
                </Text>
                <Text
                  className="sm:ml-[0] ml-[43px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondSemiBold28"
                >
                  Catalog
                </Text>
              </div>
              <Text
                className="italic mt-[83px] md:text-5xl text-[85px] text-center text-gray-900"
                size="txtCormorantGaramondBoldItalic85"
              >
                Serenity{" "}
              </Text>
              <Text
                className="capitalize mt-1 md:text-5xl text-8xl text-center text-gray-900"
                size="txtPlayfairDisplayRomanMedium96"
              >
                Adorn Yourself in Elegance
              </Text>
              <Img
                className="h-[453px] sm:h-auto mt-[67px] object-cover w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div className="flex md:flex-col flex-row font-cormorantgaramond md:gap-10 items-start justify-between mt-[41px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondBold28"
                >
                  <span className="text-gray-900 font-cormorantgaramond text-left font-bold">
                    Make the beauty of your body with accessories on{" "}
                  </span>
                  <span className="text-gray-900 font-cormorantgaramond text-left font-bold italic">
                    Serenity{" "}
                  </span>
                </Text>
                <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-between w-[12%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                    size="txtCormorantGaramondBold28"
                  >
                    Shop Now
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[250px] w-full">
            <div className="md:h-[405px] h-[524px] relative w-[35%] md:w-full">
              <div className="absolute md:h-[405px] h-[454px] left-[0] top-[0] w-[90%] sm:w-full">
                <div className="md:h-[405px] h-[454px] m-auto w-full">
                  <div className="absolute border-[3px] border-gray-600 border-solid bottom-[0] h-[292px] right-[0] w-[68%]"></div>
                  <Img
                    className="absolute h-[405px] left-[0] object-cover top-[0] w-[85%]"
                    src="images/img_rectangle10.png"
                    alt="rectangleTen"
                  />
                </div>
                <div className="absolute backdrop-opacity-[0.5] bg-black-900_b7 blur-[100.00px] bottom-[9%] h-[231px] right-[14%] w-[54%]"></div>
              </div>
              <Img
                className="absolute bottom-[0] h-[308px] object-cover right-[0] w-[64%]"
                src="images/img_rectangle11.png"
                alt="rectangleEleven"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[57%] md:w-full">
              <Text
                className="capitalize leading-[120.00%] md:text-5xl text-[80px] text-gray-900 w-full"
                size="txtCormorantGaramondMedium80"
              >
                Exploring the Beauty of Adornments
              </Text>
              <Text
                className="leading-[126.60%] mt-[53px] text-gray-900 text-xl w-[92%] sm:w-full"
                size="txtPoppinsRegular20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                mi rutrum, lobortis dolor nec, feugiat sapien. Vivamus dolor
                nisl, rutrum quis libero non, lobortis mollis arcu. Ut neque
                dui,{" "}
              </Text>
              <div className="flex flex-row font-cormorantgaramond gap-2.5 items-center justify-start mt-[70px] w-[21%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondBold28"
                >
                  Read More
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-64 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="capitalize md:text-5xl text-[80px] text-gray-900"
                  size="txtCormorantGaramondRegular80"
                >
                  New Arrivals
                </Text>
                <Img
                  className="h-[25px] sm:mt-0 mt-[69px]"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="flex gap-[29px] mt-[125px] w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start mx-2.5">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Img
                          className="h-[400px] sm:h-auto object-cover w-full"
                          src="images/img_image4.png"
                          alt="imageFour"
                        />
                        <Text
                          className="mt-7 md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtCormorantGaramondBold32"
                        >
                          Serenity Sparkle
                        </Text>
                        <div className="flex flex-row font-poppins gap-2.5 items-center justify-start mt-[9px] w-[36%] md:w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20"
                          >
                            $287.00
                          </Text>
                          <Text
                            className="line-through text-gray-600 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            $397.00
                          </Text>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-5 bg-gray-900_01 w-5" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-5 border-gray-900_01 border border-solid w-5"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex h-5 justify-center mt-[69px] w-[100px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-5 bg-gray-900_01 w-5"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-5 border-gray-900_01 border border-solid w-5"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[266px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize md:text-5xl text-[80px] text-center text-gray-900"
                size="txtCormorantGaramondRegular80"
              >
                Catalog
              </Text>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-[115px] w-full">
                <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[19px] w-[24%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtCormorantGaramondBold32"
                  >
                    Rings
                  </Text>
                  <Img
                    className="h-[345px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle2.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start mb-[9px] w-[24%] md:w-full">
                  <Img
                    className="h-[345px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle3.png"
                    alt="rectangleThree"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtCormorantGaramondBold32"
                  >
                    Necklace
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start md:mt-0 mt-[21px] w-[24%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtCormorantGaramondBold32"
                  >
                    Earings
                  </Text>
                  <Img
                    className="h-[345px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle11.png"
                    alt="rectangleFour"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start mb-[9px] w-[24%] md:w-full">
                  <Img
                    className="h-[345px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle5.png"
                    alt="rectangleFive"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtCormorantGaramondBold32"
                  >
                    Bracelet
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mt-[153px] w-[10%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCormorantGaramondBold28"
                >
                  View All
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowright.svg"
                  alt="arrowright_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[264px] w-[57%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize md:text-5xl text-[80px] text-center text-gray-900"
                size="txtCormorantGaramondRegular80"
              >
                what Our clients says
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[116px] w-[97%] md:w-full">
                <Img
                  className="h-[25px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Img
                  className="h-[350px] md:h-auto object-cover"
                  src="images/img_rectangle8.png"
                  alt="rectangleEight"
                />
                <Img
                  className="h-[25px]"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright_Three"
                />
              </div>
              <Img
                className="h-[21px] mt-10"
                src="images/img_star.svg"
                alt="star"
              />
              <div className="flex md:flex-col flex-row font-poppins gap-[21px] items-start justify-start mt-6 w-[89%] md:w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Text
                  className="capitalize leading-[120.00%] mb-[13px] md:mt-0 mt-[21px] text-center text-gray-900 text-xl w-[88%] sm:w-full"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vel mi rutrum, lobortis dolor nec, feugiat sapien. Vivamus
                  dolor nisl, rutrum, pellentesque a nulla.
                </Text>
                <Img
                  className="h-[23px] md:mt-0 mt-[84px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <Text
                className="capitalize mt-[42px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                size="txtCormorantGaramondSemiBold32"
              >
                Preston Murphy
              </Text>
              <Text
                className="capitalize mt-[21px] text-base text-center text-gray-900"
                size="txtCormorantGaramondRegular16"
              >
                National Branding Strategist
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[264px] w-full">
            <div className="flex flex-col md:gap-10 gap-[115px] items-start justify-start w-full">
              <Text
                className="capitalize md:text-5xl text-[80px] text-gray-900"
                size="txtCormorantGaramondRegular80"
              >
                Our Blog Jewelry
              </Text>
              <List
                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Img
                    className="h-[487px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="capitalize mt-5 text-gray-600 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    22 Jan 2024
                  </Text>
                  <Text
                    className="capitalize mt-[34px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtCormorantGaramondBold36"
                  >
                    Dazzling Gems: Exploring the Beauty of Colored Stones
                  </Text>
                  <Text
                    className="capitalize leading-[120.00%] mt-[35px] text-gray-900 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vel mi rutrum, lobortis dolor nec, feugiat sapien. Vivamus
                    dolor nisl, rutrum, pellentesque a nulla.
                  </Text>
                  <div className="flex flex-row font-cormorantgaramond gap-2.5 items-center justify-start mt-[34px] w-[18%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-600"
                      size="txtCormorantGaramondBold28Gray600"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright_gray_600.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Img
                    className="h-[219px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle7.png"
                    alt="rectangleSeven"
                  />
                  <Text
                    className="capitalize mt-3.5 text-gray-600 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    28 Feb 2024
                  </Text>
                  <Text
                    className="capitalize ml-1 md:ml-[0] mt-[33px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtCormorantGaramondBold36"
                  >
                    {" "}
                    Jewelry for Every Occasion
                  </Text>
                  <Text
                    className="capitalize leading-[120.00%] mt-[31px] text-gray-900 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </Text>
                  <div className="flex flex-row font-cormorantgaramond gap-2.5 items-center justify-start mt-[34px] w-[37%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-600"
                      size="txtCormorantGaramondBold28Gray600"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright_gray_600.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[717px] sm:h-[787px] md:px-5 relative w-full">
            <Img
              className="h-[717px] m-auto object-cover w-full"
              src="images/img_rectangle8_717x1440.png"
              alt="rectangleEight_One"
            />
            <div className="absolute bg-gray-600_b2 flex flex-col md:gap-10 gap-[127px] h-full inset-[0] items-start justify-center m-auto p-[75px] md:px-10 sm:px-5 w-full">
              <Text
                className="capitalize leading-[120.00%] mt-[103px] md:text-5xl text-[80px] text-white-A700 w-[81%] sm:w-full"
                size="txtCormorantGaramondRegular80WhiteA700"
              >
                Get your Serenity Jewelry set today - 25% discount applied
              </Text>
              <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[79px] md:pl-10 sm:pl-5 pl-[41px] w-[71%] md:w-full">
                <Text
                  className="text-gray-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Enter email addres...{" "}
                </Text>
                <Text
                  className="bg-gray-600 h-[77px] justify-center pb-6 pt-[27px] sm:px-5 px-[35px] text-white-A700 text-xl uppercase w-[175px]"
                  size="txtCormorantGaramondSemiBold20"
                >
                  <span className="text-white-A700 font-cormorantgaramond text-left font-bold">
                    S
                  </span>
                  <span className="text-white-A700 font-cormorantgaramond text-left font-bold">
                    ubscribe
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <footer className="bg-gray-600 flex items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[163px] mt-[157px] mx-auto w-[89%]">
              <div className="flex flex-col items-start justify-start w-[35%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtCormorantGaramondBold48WhiteA700"
                >
                  Serenity{" "}
                </Text>
                <Text
                  className="capitalize leading-[120.00%] mt-10 text-white-A700 text-xl w-full"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vel mi rutrum, lobortis dolor nec, feugiat sapien.{" "}
                </Text>
                <div className="flex flex-row gap-10 items-center justify-start mt-[52px] w-[64%] md:w-full">
                  <Img
                    className="h-10 w-10"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Img
                    className="h-10 w-10"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                  <Img
                    className="h-10 w-10"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-10 w-10"
                    src="images/img_info.svg"
                    alt="info"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[150px] md:mt-0 mt-0.5 w-[14%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtCormorantGaramondSemiBold36"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col font-poppins items-start justify-start md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-white-A700 text-xl">
                      <Text size="txtPoppinsRegular20WhiteA700">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[33px] text-white-A700 text-xl"
                    >
                      <Text size="txtPoppinsRegular20WhiteA700">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-9 text-white-A700 text-xl"
                    >
                      <Text size="txtPoppinsRegular20WhiteA700">Catalog</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[34px] text-white-A700 text-xl"
                    >
                      <Text size="txtPoppinsRegular20WhiteA700">Blog</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[194px] w-1/4 md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  >
                    <Text size="txtCormorantGaramondSemiBold36">
                      Contact Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-poppins gap-2.5 items-start justify-start md:ml-[0] ml-[3px] mt-[33px]">
                      <Img
                        className="h-[25px] w-[25px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        424-947-9877
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-poppins gap-2.5 items-start justify-start md:ml-[0] ml-[3px] mt-[34px]">
                      <Img
                        className="h-[26px]"
                        src="images/img_email.svg"
                        alt="email"
                      />
                      <Text
                        className="mt-0.5 text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        Luminary.@gmail.com
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-poppins gap-2.5 items-center justify-start md:ml-[0] ml-[3px] mt-[31px]">
                      <Img
                        className="h-8"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="capitalize leading-[138.50%] text-white-A700 text-xl w-[88%] sm:w-full"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        9256 Abigail Forges, Sao Tome and Principe
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SerenityJewelryLandingPagePage;
