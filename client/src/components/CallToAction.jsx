import { Button } from "flowbite-react";
import aigenerate from "../assets/images/ai-generated-8761977_1280.webp";
export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Do you want to implement machine learning models and AI technology in
          your company?
        </h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 100 Machine learning Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.over100mlprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={aigenerate} />
      </div>
    </div>
  );
}
