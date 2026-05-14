"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Não?",
      "Você tem certeza?",
      "E se eu perguntasse com carinho?",
      "Linda...por favor",
      "Com um bolinho de cenoura com cobertura ein",
      "Que tal uma pizza, ein?",
      "POR FAVOOOOOR",
      "MAS :*(",
      "euvo chora einnnnnnnn",
      "olha jato chorano",
      "estou nadando nas lágrimas",
      "por favor vida",
      ":((((",
      "VIDA POR FAVOR",
      "Me afogando nas lágrimas",
      "Não :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOOW!!! Eu te amo meu dengo!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Você ainda vai ser minha namorada??</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              SIM
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "NÃO" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
