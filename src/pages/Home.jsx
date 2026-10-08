import GameCard from "../components/GameCard"
import JogoImg from "../assets/jogo01.jpg"
import WarzoneImg from "../assets/warzonegame.jpg"
import GtaImg from "../assets/gtasix.jpg"
import MineImg from "../assets/minecraft.jpg"
import GowImg from "../assets/gow.jpg"


const Home = () => {
  const games=[
    { id: 1, titulo:"Call of Duty® Warzone",preco:"R$",imagem:WarzoneImg},
    {id:2,titulo:"Grand Theft Auto 6",preco:"R$549.90",imagem:GtaImg},
    {id:3,titulo:"Minecraft",preco:"R$99.90",imagem:MineImg},
    { id: 4, titulo:"God of War® Ragnarok",preco:"R$249.90",imagem:GowImg}
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
