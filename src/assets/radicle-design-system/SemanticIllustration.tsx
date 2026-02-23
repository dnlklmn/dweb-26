import React from "react";
import RadicleButton from "./RadicleButton";
import SeedIcon from "./SeedIcon";

export default function SemanticIllustration() {
  const [buttonState, setButtonState] = React.useState("idle");
  return (
    <div className="flex flex-col justify-center gap-8 px-4 items-start">
      <div className="flex gap-4 items-center">
        <RadicleButton
          onHover={() => setButtonState("hover")}
          onPress={() => setButtonState("pressed")}
          onOut={() => setButtonState("idle")}
          onUp={() => setButtonState("hover")}
        >
          <SeedIcon />
          Press me
        </RadicleButton>
        <p className="capitalize font-Franklin">{buttonState}</p>
      </div>
      <div className="flex h-full w-full items-center gap-4 font-Franklin">
        <div className="flex  flex-col gap-4">
          <p className="h-4 w-4 overflow-visible whitespace-nowrap">
            Semantic Token
          </p>
          {buttonState === "hover" ? (
            <div className="rounded-full h-4 w-4 bg-[#9497FF]" />
          ) : (
            <div className="rounded-full h-4 w-4 secondary opacity-50" />
          )}
          <div className="rounded-full h-4 w-4 bg-[#8585FF]" />
          <div className="rounded-full h-4 w-4 bg-[#7070FF]" />
          {buttonState === "hover" ? (
            <div className="rounded-full h-4 w-4 secondary opacity-50" />
          ) : (
            <div className="rounded-full h-4 w-4 bg-[#9497FF]" />
          )}
        </div>

        <div className="w-full whitespace-nowrap items-start justify-center flex flex-col gap-4">
          <div className="rounded-full h-4 w-4" />

          <p
            className="h-4 "
            style={{ color: buttonState === "hover" ? "#9497FF" : "#d4d4d4" }}
          >
            --fill-primary-light
          </p>
          <p className="h-4 text-[#8585FF]">--fill-primary-hover</p>
          <p className="h-4 text-[#7070FF]">--fill-primary</p>
          <p
            className="h-4 text-[#5555FF]"
            style={{ color: buttonState === "hover" ? "#d4d4d4" : "#5555FF" }}
          >
            --fill-primary-shade
          </p>
        </div>

        <div className="w-full whitespace-nowrap items-start pr-4 justify-center flex flex-col gap-4">
          <p className="h-4 w-4 overflow-visible whitespace-nowrap">
            Global Token
          </p>
          <p
            className="h-4 "
            style={{ color: buttonState === "hover" ? "#9497FF" : "#d4d4d4" }}
          >
            --blue-100
          </p>
          <p className="h-4 text-[#8585FF]">--blue-200</p>
          <p className="h-4 text-[#7070FF]">--blue-300</p>
          <p
            className="h-4 text-[#5555FF] "
            style={{ color: buttonState === "hover" ? "#d4d4d4" : "#5555FF" }}
          >
            --blue-400
          </p>
        </div>

        <div className="items-start w-full justify-center flex flex-col gap-4">
          <p className="h-4 w-4  overflow-visible whitespace-nowrap">Value</p>

          <p
            className="h-4 "
            style={{ color: buttonState === "hover" ? "#9497FF" : "#d4d4d4" }}
          >
            #9497FF
          </p>
          <p className="h-4 text-[#8585FF]">#8585FF</p>
          <p className="h-4 text-[#7070FF]">#7070FF</p>
          <p
            className="h-4 text-[#5555FF]"
            style={{ color: buttonState === "hover" ? "#d4d4d4" : "#5555FF" }}
          >
            #5555FF
          </p>
        </div>
      </div>
    </div>
  );
}
