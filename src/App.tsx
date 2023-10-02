import { Widget } from "@typeform/embed-react";
import { ResponsiveRadar } from "@nivo/radar";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: "10vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          color: "white",
        }}
      >
        AI Maturity Health Check
      </h1>
      {page === 1 && (
        <div>
          <button onClick={() => setPage(2)}>Take the Survey</button>
        </div>
      )}
      {page === 2 && (
        <div>
          <Widget
            id={"TauDsgoD"}
            style={{ width: "80vw", height: "40vw" }}
            className="my-form"
            onSubmit={async ({ formId, responseId }) => {
              console.log(
                `Form ${formId} submitted, response id: ${responseId}`
              );
              const response = await fetch(
                `https://31773aa0.jellycat-bigcommerce-api-proxies-946.pages.dev/v1/getformbyid/${formId}/${responseId}/`
              );
              console.log("🙌🏻 ~ response:", response);
              const data = await response.json();
              const answers = data?.items?.shift()?.answers;
              console.log("🙌🏻 ~ answers:", answers);
              setPage(3);
            }}
          />
        </div>
      )}
      {page === 3 && (
        <div>
          <h2>Thank you</h2>
          <ResponsiveRadar
            animate
            // @ts-ignore-next-line
            width={900}
            height={500}
            curve="catmullRomClosed"
            data={[
              {
                carmenere: 41,
                chardonay: 73,
                syrah: 114,
                taste: "fruity",
              },
              {
                carmenere: 39,
                chardonay: 78,
                syrah: 23,
                taste: "bitter",
              },
              {
                carmenere: 101,
                chardonay: 27,
                syrah: 114,
                taste: "heavy",
              },
              {
                carmenere: 113,
                chardonay: 108,
                syrah: 78,
                taste: "strong",
              },
              {
                carmenere: 76,
                chardonay: 35,
                syrah: 88,
                taste: "sunny",
              },
            ]}
            dotLabelYOffset={3}
            dotSize={32}
            enableDotLabel
            gridLabelOffset={36}
            indexBy="taste"
            keys={["chardonay", "carmenere", "syrah"]}
            margin={{
              bottom: 30,
              left: 80,
              right: 80,
              top: 60,
            }}
          />
        </div>
      )}
    </>
  );
}

export default App;
