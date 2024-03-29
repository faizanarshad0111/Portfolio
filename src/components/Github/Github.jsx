import Card from "./Card";
function Github() {
  return (
    <>
    <div className="flex flex-wrap justify-center "> 
        <Card
          imgs={'https://i.postimg.cc/1Xx3tT7B/bg.png          '}
          ProjectName={"Background Color Changer "}
          Github={"https://github.com/faizanarshad0111/bgColor.git"}
          Url={"https://faizanarshad0111.github.io/bgColor/"}
        />
           <Card
          imgs={'https://i.postimg.cc/cL14rfhp/weather.png          '}
          ProjectName={"Weather App "}
          Github={"https://github.com/faizanarshad0111/WeatherApp.git"}
          Url={"https://faizanarshad0111.github.io/WeatherApp/"}
        />   <Card
        imgs={'https://i.postimg.cc/ZKx5bw8P/password.png        '}
        ProjectName={" Password Generator App"}
        Github={"https://github.com/faizanarshad0111/PasswordGen.git"}
        Url={"https://faizanarshad0111.github.io/PasswordGen/"}
      />   <Card
      imgs={'https://i.postimg.cc/SQ8K5Sjv/joke.png    '}
      ProjectName={"Joke Generator App "}
      Github={"https://github.com/faizanarshad0111/JokeGen.git"}
      Url={"https://faizanarshad0111.github.io/JokeGen/"}
    />   <Card
    imgs={'https://i.postimg.cc/g2McRrBn/Blog.png'}
    ProjectName={"Portfolio/Blog Website "}
    Github={"https://github.com/faizanarshad0111/Projects.git"}
    Url={"https://faizanarshad0111.github.io/Projects/"}
  />
</div>
    </>
  );
}

export default Github;
