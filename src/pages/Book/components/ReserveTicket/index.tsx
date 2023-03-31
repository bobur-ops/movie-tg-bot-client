import { Movie } from "@/types/movies";
import { ISeat } from "../..";
import "./ReserveTicket.css";
import { useRef, useEffect, useCallback, useState } from "react";
import JsBarcode from "jsbarcode";
import html2canvas from "html2canvas";
import { useTelegram } from "@/hooks/useTelegram";

interface IProps {
  movie: Movie | undefined;
  date: string;
  time: string;
  seats: ISeat[];
}

const ReserveTicket: React.FC<IProps> = ({ movie, date, seats, time }) => {
  const barcodeRef = useRef(null);
  const ticket = useRef<any>(null);
  const { tg, user, queryId, onClose } = useTelegram();
  const [ticketImage, setTicketImage] = useState("");

  const captureTicket = async () => {
    const canvas = await html2canvas(ticket.current);
    const image = canvas.toDataURL("image/png", 1.0);
    return image;
  };

  useEffect(() => {
    tg.MainButton.setParams({ text: `Reserve` });
    tg.MainButton.show();
  }, []);

  const onSendData = useCallback(async () => {
    const image = await captureTicket();

    try {
      await captureTicket();
      const data = {
        username: user.username,
        date,
        time,
        img: image,
        queryId: queryId,
        title: movie?.title,
      };
      const result = await fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  }, [user, date, time, queryId, movie, captureTicket]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    JsBarcode(barcodeRef.current, movie?.title as string, {
      background: "transparent",
      height: 30,
      width: 1,
      lineColor: "#ffffff",
      displayValue: false,
    });
  }, []);

  return (
    <div className="py-7 px-5">
      <div className="text-center font-bold text-xl mb-[50px]">
        Mobile Ticket
      </div>
      <div className="text-center mb-[30px]">
        Scan the barcode to get Access of your Movie
      </div>
      <div className="ticket" ref={ticket}>
        <div className="img">
          <img src={movie?.img} alt="Poster" />
        </div>
        <div className="rect">
          <div className="grid mb-2  grid-cols-2 justify-between gap-y-[10px] gap-x-5">
            <div className="">Date: {date}</div>
            <div className="">Time: {time}</div>
            <div className="">Row: {seats.map((i) => i.row)}</div>
            <div className="">Seats: {seats.map((i) => i.seat)}</div>
          </div>
          <div className="barcode flex justify-center">
            <svg ref={barcodeRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTicket;
