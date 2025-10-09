import { Link } from "react-router";
function Card({ apps }) {
  return (
    <Link to='/appdetails:id'><div className="card shadow-lg cursor-pointer bg-white hover:bg-base-200
      hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
      
      <figure className="pb-0">
        <img
          alt="Shoes"
          className="h-full w-full object-cover rounded-2xl"
          src={apps.image}
        />
      </figure>
      <div>
        <p className="font-semibold text-center">{apps.title}</p>
      </div>
      <div className="flex justify-between">
        <div className="badge badge-soft badge-success">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeWidth="2"
              d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"
            />
          </svg>{" "}
          {apps.size}
        </div>
        <div className="badge badge-soft badge-secondary">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>{" "}
          {apps.ratingAvg}
        </div>
      </div>
    </div></Link>
  );
}

export default Card;
