import "./Analytics.css";
import img from "../assets/analytics.png";
import React from "react";
import Item from "./Item";
import mobile from "../assets/mobile.png";

function Analytics() {
  const arr = [
    {
      icon: "fa-regular fa-comments",
      heading: "Share team inboxes",
      text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "fa-brands fa-superpowers",
      heading: "Deliver instant answers",
      text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "fa-solid fa-list-check",
      heading: "Manage your team with reports",
      text: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];
  return (
    <section className="analytics">
      <div className="box">
        <button>Features</button>
        <h1>Cutting-edge features for advanced analytics</h1>
        <h4>
          Powerful, self-serve product and growth analytics to help you
          convert,engage, and retain more users. Trusted by over 4,000 startups.
        </h4>
        <div className="graph_image">
          <img
            src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tl5ZRygCNN25p2iHjATaEpArMFj1ql59YSklm5asoOsUd7MOQfZn-j0NdHSfHBFudd0P0FmKUFs9aQcLdkUd8J1dFi~dfUXEwolIfuLClHje-3c-xl9ozum7R9yEZVsXrjkMEfdIc-P3hXLRhhAkNf2RHfBjL~u7eRu-xjZmqcaarsV20NBh9I~2E2CO0VgL0pGhKU5DwFnAYjpIL4bt4qmPOVX9sjoOgu9HKVwE4MucDDpuTCzMBTTKv-L9lrKi95XkSLA3uwjhrHi-PhD9kpA2FLSMzXnnbkwDwMgMTnGmLZSZCqGTrf-MA1HGOKj~weIytE9eOlqeb9sEUD-Y5A__"
            alt=""
          />
          <div className="mobile">
            <img
              src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tl5ZRygCNN25p2iHjATaEpArMFj1ql59YSklm5asoOsUd7MOQfZn-j0NdHSfHBFudd0P0FmKUFs9aQcLdkUd8J1dFi~dfUXEwolIfuLClHje-3c-xl9ozum7R9yEZVsXrjkMEfdIc-P3hXLRhhAkNf2RHfBjL~u7eRu-xjZmqcaarsV20NBh9I~2E2CO0VgL0pGhKU5DwFnAYjpIL4bt4qmPOVX9sjoOgu9HKVwE4MucDDpuTCzMBTTKv-L9lrKi95XkSLA3uwjhrHi-PhD9kpA2FLSMzXnnbkwDwMgMTnGmLZSZCqGTrf-MA1HGOKj~weIytE9eOlqeb9sEUD-Y5A__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="items">
        {arr.map((item, index) => {
          return (
            <Item
              key={index}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Analytics;
