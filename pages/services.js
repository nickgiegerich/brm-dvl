import Image from "next/image";
import { Services } from "../components/services";
import ErrorPage from "next/error";

export default function ServicesPage() {
  return (
    <>
      <ErrorPage statusCode={404} />
    </>
  );
}