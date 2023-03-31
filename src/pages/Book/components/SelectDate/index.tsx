import { Movie } from "@/types/movies";
import { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import "./SelectDatePage.css";

interface IProps {
  movie: Movie;
  time: string;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  setTime: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}

interface DateBlockProps {
  onChangeDate: (value: string) => void;
  onChangeTime: (value: string) => void;
  date: string;
  time: string;
}

const DateBlock: React.FC<DateBlockProps> = ({
  onChangeDate,
  onChangeTime,
  date,
  time,
}) => {
  return (
    <div className="grid grid-cols-5 gap-[18px]">
      <div className="date date-1">
        <div
          onClick={() => onChangeDate("Fri 21")}
          className={`date-item ${date === "Fri 21" && "selected"}`}
        >
          Fri <span className="font-semibold">21</span>
        </div>
        <div
          onClick={() => onChangeTime("9:00")}
          className={`time-item ${time === "9:00" && "selected"}`}
        >
          9:00
        </div>
      </div>
      <div className="date date-2">
        <div
          onClick={() => onChangeDate("Sat 22")}
          className={`date-item ${date === "Sat 22" && "selected"}`}
        >
          Sat <span className="font-semibold">22</span>
        </div>
        <div
          onClick={() => onChangeTime("12:00")}
          className={`time-item ${time === "12:00" && "selected"}`}
        >
          12:00
        </div>
      </div>
      <div className="date date-3">
        <div
          onClick={() => onChangeDate("Sun 23")}
          className={`date-item ${date === "Sun 23" && "selected"}`}
        >
          Sun <span className="font-semibold">23</span>
        </div>
        <div
          onClick={() => onChangeTime("15:00")}
          className={`time-item ${time === "15:00" && "selected"}`}
        >
          15:00
        </div>
      </div>
      <div className="date date-4">
        <div
          onClick={() => onChangeDate("Mon 24")}
          className={`date-item ${date === "Mon 24" && "selected"}`}
        >
          Mon <span className="font-semibold">24</span>
        </div>
        <div
          onClick={() => onChangeTime("18:00")}
          className={`time-item ${time === "18:00" && "selected"}`}
        >
          18:00
        </div>
      </div>
      <div className="date date-5">
        <div
          onClick={() => onChangeDate("Tue 25")}
          className={`date-item ${date === "Tue 25" && "selected"}`}
        >
          Tue <span className="font-semibold">25</span>
        </div>
        <div
          onClick={() => onChangeTime("21:00")}
          className={`time-item ${time === "21:00" && "selected"}`}
        >
          21:00
        </div>
      </div>
    </div>
  );
};

const SelectDate: React.FC<IProps> = ({
  movie,
  date,
  setDate,
  setTime,
  time,
  nextStep,
}) => {
  const onChangeDate = (value: string) => {
    setDate(value);
  };
  const onChangeTime = (value: string) => {
    setTime(value);
  };

  return (
    <div className="select-date">
      <div
        className="poster"
        style={{
          backgroundImage: `url(${movie.img})`,
        }}
      ></div>
      <div className="select-date__content">
        <div className="text-center font-bold text-2xl mb-4">{movie.title}</div>
        <div className="text-sm font-normal text-center opacity-60 mb-6">
          {movie.description}
        </div>
        <div className="text-xl mb-10 underline text-center font-normal">
          Select Date and Time
        </div>
        <DateBlock
          date={date}
          time={time}
          onChangeDate={onChangeDate}
          onChangeTime={onChangeTime}
        />
        <div className={`h-[60px] mt-[27px]`}>
          <button
            onClick={nextStep}
            className={`button ${date && time ? "block" : "hidden"}`}
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
