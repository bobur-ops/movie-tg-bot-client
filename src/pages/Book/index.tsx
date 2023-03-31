import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReserveTicket from "./components/ReserveTicket";
import SelectDate from "./components/SelectDate";
import SelectSeat from "./components/SelectSeat";
import { getMovie } from "@/hooks/getMovie";
import "./Book.css";

export interface ISeat {
  seat: string;
  row: string;
}

const Book = () => {
  const { movietitle } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);

  const [currentStep, setCurrentStep] = useState(0);
  const movie = getMovie(movietitle as string);

  const nextStep = () => {
    if (currentStep === 2) return;
    setCurrentStep((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentStep === 0) {
      navigate("/");
    }
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="book-page">
      {currentStep === 0 && movie !== undefined && (
        <SelectDate
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
          movie={movie}
          nextStep={nextStep}
        />
      )}
      {currentStep === 1 && (
        <SelectSeat
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          date={date}
          time={time}
          nextPage={nextStep}
        />
      )}
      {currentStep === 2 && (
        <ReserveTicket
          date={date}
          time={time}
          movie={movie}
          seats={selectedSeats}
        />
      )}
      <div onClick={prevPage} className="controller">
        <svg
          width="21"
          height="13"
          viewBox="0 0 21 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 6.24306H1.5M1.5 6.24306L6.5 11.2431M1.5 6.24306L6.5 1.24306"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Book;
