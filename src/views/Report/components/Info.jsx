import React from "react";

const Info = (props) => {
  const { index } = props;
  const [active, setActive] = React.useState(false);

  const onChangeSwitch = (value) => setActive(value === "yes" ? true : false);

  return (
    <div className="p-[16px] lg:w-[496px] sm:w-full border-2 border-gray-200 rounded-lg ">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-gray-200">
            <img
              src="https://i.pravatar.cc/300"
              alt="profile"
              className="object-fill rounded-md h-24 w-24"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-[#D58D49] text-[12px] bg-orange-100 text-center px-2 py-1 rounded-md">
                  200011
                </p>
                <p className="text-[18px]">LISA</p>
              </div>
              <div>
                <div className="h-2 w-2 rounded-full lg:block hidden bg-[#4DCC8C]"></div>
              </div>
            </div>
            <p className="text-gray-400 text-[14px]">
              inovasi Pembersihan Unit
            </p>
          </div>
        </div>

        <div>
          <p className="items-center flex justify-center bg-[#008CFF] rounded-full h-[44px] w-[44px] text-[10px] text-white">
            25%
          </p>
        </div>
      </div>
      <p className="text-[24px] lg:mt-4 mt-2 font-semibold">
        Leader - Farhan Salim
      </p>
      <div className="mt-4">
        <div className="lg:mb-6 mb-2 text-gray-400 text-[16px] leading-[24.8px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:mb-6 mb-2 text-gray-400 text-[16px] leading-[24.8px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>SDSI / Non SDSI:</p>

        <div className="switch-button">
          <p
            className={!active && "active"}
            onClick={() => onChangeSwitch("no")}
          >
            No
          </p>
          <p
            className={active && "active"}
            onClick={() => onChangeSwitch("yes")}
          >
            Yes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
