import React, { useState } from "react";
import { backAero, blogMain, blogProfile, wideBlog } from "../assets";
import { Button, Divider } from "../components";

const ReadMoreBlog = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="py-16 mt-10 w-[90%] sm:w-[94%] mx-auto">
      <Button
        OnClick={() => {}}
        logo={backAero}
        text="Back"
        className="text-white"
      />
      <Divider className="mt-6" />
      <div className="flex justify-between items-center">
        <span className="text-[14px] text-main-light_white">SEP 22, 2022</span>
        <span className="text-[14px] text-main-teal">
          Web Development &nbsp;&nbsp; App Development
        </span>
      </div>
      <h1 className="text-white mt-4 text-[22px]">
        Hacking Humans is easier than hacking Computers
      </h1>
      <Divider className="mt-4" />
      <div className="flex items-center">
        <img src={blogProfile} alt="profile" className="mr-3 h-9" />
        <span className="text-white">Jhon Doe</span>
      </div>
      <Divider className="mt-4" />
      <img src={wideBlog} alt="blog img" className="w-full md:h-96" />
      <Divider className="mt-6" />
      <p
        className="text-main-light_white"
        style={
          showMore
            ? {}
            : {
                WebkitMaskImage:
                  "linear-gradient(180deg, #000 60%, transparent)",
              }
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a
        tristique sem vitae. Phasellus in nunc, suspendisse viverra sapien. Eget
        donec suspendisse mauris non. Lobortis turpis eu amet facilisis. <br />
        <br />
        Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
        neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
        lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
        elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
        imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
        pellentesque egestas diam quis. Semper commodo eros, ac arcu. Hendrerit
        pharetra, dui, volutpat mi aliquam at erat condimentum. A quis malesuada
        nibh et felis, massa in magna auctor. <br /> <br /> Vel cras ipsum
        commodo, nunc sed posuere mattis tristique massa. Ut neque, nascetur
        ipsum sed nisl. Tincidunt in penatibus mauris enim lacus, viverra
        senectus arcu bibendum. Posuere neque in id tellus elementum. Rutrum
        posuere amet ut orci. Bibendum tellus, enim gravida imperdiet cras nisl.
        Venenatis tincidunt tortor varius nunc sed pellentesque egestas diam
        quis. Semper commodo eros, ac arcu. Hendrerit pharetra, dui, volutpat mi
        aliquam at erat condimentum. A quis malesuada nibh et felis, massa in
        magna auctor.
        {showMore && (
          <span>
            Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
            neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
            lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
            elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim
            gravida imperdiet cras nisl. Venenatis tincidunt tortor varius nunc
            sed pellentesque egestas diam quis. Semper commodo eros, ac arcu.
            Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
            quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
            Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
            neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
            lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
            elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim
            gravida imperdiet cras nisl. Venenatis tincidunt tortor varius nunc
            sed pellentesque egestas diam quis. Semper commodo eros, ac arcu.
            Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
            quis malesuada nibh et felis, massa in magna auctor.
          </span>
        )}
      </p>
      {!showMore && (
        <Button
          OnClick={() => {
            setShowMore(true);
          }}
          text="Read More"
          className="border-2 mt-3 border-main-teal bg-main-greenOpt-200 text-main-greenOpt-1000 block mx-auto px-6 py-2 rounded-lg hover:bg-main-greenOpt-1000 hover:text-white"
        />
      )}
    </div>
  );
};

export default ReadMoreBlog;
