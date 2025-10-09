

function Install() {
  return (
    <div>
      <div className="px-5 lg:w-11/12 mx-auto py-10">
  <div>
    <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
      Your Installed Apps
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="text-secondary"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeWidth="2"
          d="M19,13.5 L19,17.5 L12,22 L5,17.5 L5,13.5 M12,22 L12,13.5 M18.5,8.5 L12,4.5 L15.5,2 L22,6 L18.5,8.5 Z M5.5,8.5 L12,4.5 L8.5,2 L2,6 L5.5,8.5 Z M18.5,9 L12,13 L15.5,15.5 L22,11.5 L18.5,9 Z M5.5,9 L12,13 L8.5,15.5 L2,11.5 L5.5,9 Z"
        ></path>
      </svg>
    </h2>
    <p className="text-center text-gray-400">
      Explore All Trending Apps on the Market developed by us
    </p>
  </div>

  {/* Sort / Info */}
  <div className="flex justify-between mt-10 sticky">
    <h2 className="text-lg underline text-secondary font-medium">1 Apps Found</h2>
    <div>
      <select className="select bg-white">
        <option disabled>Sort By Size</option>
        <option value="asc">Low-High</option>
        <option value="desc">High-Low</option>
      </select>
    </div>
  </div>

  <div className="divider"></div>

  {/* Installed Apps List */}
  <div className="grid grid-cols-1 gap-5">
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200">
      <a className="w-14 h-14 shrink-0" href="/apps/1" data-discover="true">
        <img
          alt="Forest: Focus for Productivity"
          className="w-full h-full object-cover rounded-xl"
          src="/app-logo/icon-005.webp"
        />
      </a>
      <div className="flex-1">
        <a href="/apps/1" data-discover="true">
          <p className="font-medium text-sm line-clamp-1">Forest: Focus for Productivity</p>
        </a>
        <div className="flex items-center gap-3 text-xs mt-1">
          <span className="flex items-center gap-1 text-success">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="inline-block"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeWidth="2"
                d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"
              ></path>
            </svg>{" "}
            7M
          </span>
          <span className="flex items-center gap-1 text-secondary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="inline-block"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>{" "}
            4.9
          </span>
          <span className="text-xs text-gray-500">258 MB</span>
        </div>
      </div>
      <button className="btn btn-success text-white">Uninstall</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Install
