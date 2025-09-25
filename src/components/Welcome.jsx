import Quiz from "../imagens/quiz.svg";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-[500px]">
      <h2 className='font-bold text-2xl'>Seja bem-vindo</h2>
      <p className='text-[#8435de]'>Clique no botão abaixo para começar.</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Quiz" />
    </div>
  );
}

export default Welcome