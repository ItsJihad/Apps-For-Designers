
import Card from '../cardsholder/Card'

function Cardsholder({appdata}) {
  return (
    <div>
  <div className="pt-10">
    <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3 ">
      Trending Apps
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-secondary"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    </h2>
    <p className="text-center text-gray-500">
      Explore All Trending Apps on the Market developed by us
    </p>
  </div>

  <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
    {appdata.slice(0,8).map(apps=> <Card key={apps.id} apps={apps} ></Card>)}
  </div>

  <div className="text-center">
    <a
      className="btn btn-wide text-white hover:shadow-xl bg-gradient-to-tl to-[#632EE3] from-[#9F62F2]"
      href="/apps"
      data-discover="true"
    >
      Show All
    </a>
  </div>
</div>

  )
}

export default Cardsholder
