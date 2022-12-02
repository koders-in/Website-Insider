import { Formik, FormikHelpers } from "formik";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import {
  discordWhite,
  githubWhite,
  linkedinWhite,
  tealLocation,
  tealMessage,
  tealMobile,
  twitterWhite,
} from "../assets";
import {
  Button,
  Divider,
  Footer,
  GradientText,
  InputBox,
  Navbar,
} from "../components";
import { contactValidationSchima } from "../helper/validate";

interface initialValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const handleSubmitForm = async (
    value: initialValues,
    helper: FormikHelpers<initialValues>
  ) => {
    console.log(value);
    helper.resetForm();
  };
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.5rem] md:text-[2.8rem] mx-auto w-fit bg-gradient-to-r from-white to-main-teal font-miligrambold mt-16"
          text="Contact US"
        />
        <Divider className="h-10" />
        <div className="w-[90%] mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col sm:flex-row justify-center items-center">
          <div className="w-[50%] hidden sm:block">
            <div className="flex gap-5">
              <Image
                src={tealLocation}
                alt={tealLocation}
                width={15}
                height={15}
              />
              <div className="text-white font-miligramText400">
                <p>111, New Mohanpur Colony,</p>
                <p>Prem Nagar, Dehradun,</p>
                <p>Uttarakhand - 248007</p>
              </div>
            </div>
            <div className="flex  gap-5 my-8">
              <Image src={tealMobile} alt={tealMobile} width={15} height={15} />
              <p className="text-white font-miligramText400">0135-3504103</p>
            </div>
            <div className="flex  gap-5">
              <Image
                src={tealMessage}
                alt={tealMessage}
                width={15}
                height={15}
              />
              <p className="text-white font-miligramText400">info@koders.com</p>
            </div>
            <div className="flex gap-9 mt-8">
              {[linkedinWhite, githubWhite, twitterWhite, discordWhite].map(
                (item, i) => {
                  return (
                    <Image
                      className="cursor-pointer transition-all duration-100 hover:scale-110"
                      key={i}
                      src={item}
                      alt={item}
                      width={30}
                      height={30}
                    />
                  );
                }
              )}
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={initialValues}
              validationSchema={contactValidationSchima}
              onSubmit={handleSubmitForm}
            >
              {({ handleBlur, handleChange, errors, values, handleSubmit }) => (
                <>
                  <InputBox
                    handleChange={handleChange}
                    name="name"
                    placeholder="Name *"
                    type="text"
                    errorText={errors.name}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <Divider className="mt-2" />
                  <InputBox
                    handleChange={handleChange}
                    name="email"
                    placeholder="Email Address *"
                    type="text"
                    errorText={errors.email}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Divider className="mt-2" />
                  <InputBox
                    handleChange={handleChange}
                    name="message"
                    placeholder="Message *"
                    type="text"
                    errorText={errors.message}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  <Button
                    type="submit"
                    OnClick={handleSubmit}
                    className="mx-auto sm:mx-0 text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block mt-8 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                    text="Submit"
                  />
                </>
              )}
            </Formik>
          </div>
          <Divider className="h-14 w-full sm:hidden" />
          <div className="w-full sm:hidden">
            <div className="flex gap-5">
              <Image
                src={tealLocation}
                alt={tealLocation}
                width={15}
                height={15}
              />
              <div className="text-white font-miligramText400">
                <p>111, New Mohanpur Colony,</p>
                <p>Prem Nagar, Dehradun,</p>
                <p>Uttarakhand - 248007</p>
              </div>
            </div>
            <div className="flex  gap-5 my-8">
              <Image src={tealMobile} alt={tealMobile} width={15} height={15} />
              <p className="text-white font-miligramText400">0135-3504103</p>
            </div>
            <div className="flex  gap-5">
              <Image
                src={tealMessage}
                alt={tealMessage}
                width={15}
                height={15}
              />
              <p className="text-white font-miligramText400">info@koders.com</p>
            </div>
            <div className="flex gap-9 mt-8">
              {[linkedinWhite, githubWhite, twitterWhite, discordWhite].map(
                (item, i) => {
                  return (
                    <Image
                      className="cursor-pointer transition-all duration-100 hover:scale-110"
                      key={i}
                      src={item}
                      alt={item}
                      width={30}
                      height={30}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <Divider className="h-10" />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
