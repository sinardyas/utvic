import persen from "../../../assets/images/persen.svg";

export const ProgressTab = (props) => {
  return (
    <div className="tab-panel">
      <div className="flex flex-col space-y-6">
        <div className="">
          <label htmlFor="persen">Persen Progress</label>
          <div className="flex space-x-2">
            <input
              type="text"
              className="bg-gray-200 px-2 w-full rounded-md"
              id="persen"
            />
            <img src={persen} alt="persen" />
          </div>
        </div>

        <div className="">
          <label htmlFor="progress">Progres</label>
          <div className="">
            <textarea
              name="progress"
              id="progress"
              cols="30"
              rows="10"
              className="w-full bg-gray-200 px-2 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IssueTab = (props) => {
  return (
    <div className="tab-panel">
      <label htmlFor="">Issue</label>
      <textarea
        name="issue"
        id="issue"
        cols="30"
        rows="10"
        className="w-full h-full bg-gray-200 px-2 rounded-md"
      ></textarea>
    </div>
  );
};

export const NextActionTab = (props) => {
  return (
    <div className="tab-panel space-y-4">
      <div className="">
        <label htmlFor="next-action">Next Action</label>
        <textarea
          name="next-action"
          id="next-action"
          cols="30"
          rows="10"
          className="w-full h-full bg-gray-200 px-2 rounded-md"
        ></textarea>
      </div>
      <div className="flex justify-end space-x-3">
        <button className="bg-red-600 text-white px-4 py-1 rounded text-sm md:text-base">
          Cancel
        </button>
        <button className="bg-[#FFCD00] px-4 py-1 rounded text-sm md:text-base">
          Submit
        </button>
      </div>
    </div>
  );
};
