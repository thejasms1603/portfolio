import { journey } from "@/data";
import { Button } from "./ui/moving-border";

const Journey = () => {
  return (
    <section id='journey'>
      <div className='py-20 w-full'>
        <h1 className='heading'>
          My <span className='text-purple'>Journey So Far</span>
        </h1>
        <div className='gap-10 mt-12 grid lg:grid-cols-4 grid-cols-1 w-full'>
          {journey.map((card) => (
            <Button
              key={card.id}
              borderRadius='1.75rem'
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 gap-2 py-6 md:p-5 lg:p-10'>
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className='lg:w-22 md:w-20 w-16'
                />
                <div className="lg:ms-5">
                    <h1 className="text-start md:text-2xl text-xl font-bold">{card.title}</h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">{card.desc}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
