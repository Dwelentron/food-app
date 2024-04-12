import Menu from "./Menu";
import { FaCopyright, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
export default function Intro(){
    return(
        <>
            <div className="one flex ml-1 bg-stone-400 rounded-l-lg align-sub">
                <img src="./img/intro.jpg" alt="" className="h-1/3 w-1/2 rounded-2xl mr-2" />
                <h1 className="mx-auto font-serif text-lg">Welcome to BetterTaste, your savory sanctuary in the digital world where culinary exploration meets mouthwatering inspiration. Whether you're a seasoned chef or a kitchen novice, prepare to embark on a gastronomic journey like no other.Here, we celebrate the artistry of food and the joy of sharing meals with loved ones. From delectable recipes passed down through generations to innovative culinary creations that push the boundaries of taste, our goal is simple: to ignite your passion for cooking and ignite your taste buds with every bite. Join us as we dive into the colorful tapestry of global cuisines, exploring the rich traditions and diverse flavors that make each dish a culinary masterpiece. From comforting classics to bold experiments, we'll guide you through step-by-step recipes, insider tips, and tantalizing food photography that will inspire you to don your apron and unleash your inner chef.So, grab a seat at our virtual table, and let's savor the flavors of life together, one recipe at a time.</h1>
            </div>
            <h1 className="font-bold text-center m-7 text-3xl animate-bounce duration-700">ENJOY OUR FOOD! Its Mersmerizing</h1>

            <Menu />

            <div className="bg-stone-950 h-32 p-5">
                <div className="items-center flex">
                    <h1 className="text-white"><FaCopyright />Copyright 2024</h1>
                      
                </div>
                <span className="float-right mr-10">
                        <h1 className="text-white text-lg underline">Reach</h1>
                        <span className="grid grid-cols-3 gap-2 text-white text-lg">
                            <section className="hover:text-orange-600 hover:text-xl duration-200 ease-in-out"><FaFacebook /></section>
                            <section className="hover:text-orange-600 hover:text-xl duration-200 ease-in-out"><FaInstagram /></section>
                            <section className="hover:text-orange-600 hover:text-xl duration-200 ease-in-out"><FaPinterest /></section>
                        </span>
                    </span>
                
            </div>
        </>
    )
}