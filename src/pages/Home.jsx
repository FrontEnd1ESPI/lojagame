import GameCard from "../components/GameCard"
import JogoImg from "../assets/jogo01.jpg"
import WarzoneImg from "../assets/warzonegame.jpg"
import GtaImg from "../assets/gtasix.jpg"

const Home = () => {
  const games=[
    { id: 1, titulo:"Call of Duty® Warzone",preco:"R$400.00",imagem:WarzoneImg},
    {id:2,titulo:"Grand Theft Auto 6",preco:"R$500.00",imagem:GtaImg},
    {id:3,titulo:"Jogo 03",preco:"R$350.00",imagem:JogoImg},
    {id:4,titulo:"Jogo 04",preco:"R$250.00",imagem:JogoImg}
  ];
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="text-white font-bold titulo text-3xl">Jogos em Destaques</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            titulo={game.titulo}
            preco={game.preco}
            imagem={game.imagem}
          />
        ))}
      </section>
      
    </main>
  )
}

export default Home
