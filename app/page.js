import MyInfo from "./_portfolio/MyInfo/MyInfo";
import Myprinciple from "./_portfolio/MyInfo/Myprinciple";
import Works from "./_portfolio/MyInfo/Works";
import Skills from "./_portfolio/MyInfo/Skills";
import AboutMe from "./_portfolio/MyInfo/AboutMe";
import Contacts from "./_portfolio/MyInfo/Contacts";






  const complete = [
    {
      title: 'Ft_Transcendence',
      skills : ['react js ', 'next js ', 'django ', 'postgrest ', 'docker ', 'nginx'],
      description: 'play and chat in secure way in one website',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
    {
      title: 'E_commerce',
      skills : ['react js ', 'next js ', 'django ', 'postgrest'],
      description: 'shop website',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
    {
      title: 'web server',
      skills : ['C++ ', ' nginx ', 'socket'],
      description: 'build owb web server',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
  ]

export default function Home() {

  return (
    <main className="   flex  flex-1 min-h-screen bg- h-auto lg:w-[64rem]  w-full  flex-col items-center justify-between gap-10 md:gap-32  md:py-20 relative">
      <MyInfo />
      <Myprinciple />
      <Works listofproject={complete} title={"projects"} />
      <Skills />
      <AboutMe />
      <Contacts/>

    </main>
  );
}
