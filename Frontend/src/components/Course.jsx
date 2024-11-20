import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Course() {
    console.log(list);
    return (
        <div className="min-h-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 flex items-center justify-center text-center flex-col">
            <h1 className="text-2xl font-semibold md:text-4xl mb-12">
                We're delighted to have you{" "}
                <span className="text-pink-500">here! :)</span>{" "}
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sapiente expedita modi in perspiciatis cupiditate similique ut culpa, qui, repellat minus iure temporibus voluptatum beatae quo est sit. Repellat laudantium ipsa impedit cum cumque sunt quis repudiandae porro omnis minima.</p>
            <Link to={-1}><button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">Back</button></Link>
          </div>

          <div className="grid mt-12 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
            {
              list.map((item) => (
                <Card item={item} key={item.id}/>
              ))
            }
          </div>
        </div>
    );
}
