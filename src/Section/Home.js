import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Bg from "../images/space_-_5200.mp4";
import Idan from "../images/IMG-20221116-WA0005.jpg";
import { AiOutlineHtml5 } from "react-icons/ai";
import { PiFileCssLight } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { LiaSass } from "react-icons/lia";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return (
    <div>
      <div className="container">
        <div className="content">
          <Nav />
          <main>
            <h1>Frontend Developer</h1>
            <p>
              I specialize in crafting elegant and functional digital
              experiences by bringing simplicity to life through codes.
            </p>
            <div className="hero-cont">
            <img src={Idan} alt="hero-img" className="hero" />
            </div>
            <div className="main-bottom">
              <h2>Tech Stack</h2>
              |
              <div className="stacks">
              <AiOutlineHtml5 className="tech-icon" />
              <PiFileCssLight className="tech-icon" />
              <TbBrandJavascript className="tech-icon" />
              <FaReact className="tech-icon" />
              <LiaSass className="tech-icon" />
              </div>
            </div>
          </main>
          <section>
            <div id="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              porro est omnis nostrum qui explicabo architecto rem a aut
              repellat! Fugit voluptates consequatur, modi aliquid beatae
              quisquam cumque rerum, cum esse dolore at ipsa, iure sed. Est
              quasi eligendi nostrum quod itaque nam dicta, aperiam officia unde
              tenetur animi maiores ipsum quis minima, tempore modi voluptates,
              provident ducimus natus molestias voluptatum dolore nobis in! Qui
              consectetur recusandae, beatae omnis, reiciendis fuga officia
              ipsam in praesentium placeat, provident modi aspernatur deleniti
              voluptates ipsa dolorum? Sit totam numquam, vel dicta omnis porro
              quo, deserunt accusamus dignissimos repellendus dolor provident
              officiis, autem nisi! Optio quaerat cum consectetur porro nam.
              Officiis voluptate, molestiae placeat porro quidem nostrum facere
              esse cum impedit omnis blanditiis tenetur laboriosam debitis.
              Quibusdam nesciunt, inventore veniam consequuntur sit culpa magnam
              molestiae eos perferendis omnis odit ab aliquam ea? Voluptates,
              earum voluptatum. Sed consequuntur nulla eos accusamus eaque.
              Deserunt dolorum consequuntur nobis dicta vitae reiciendis
              explicabo eligendi unde ab eius, nihil recusandae sit modi a
              corporis! Nulla, eaque a assumenda nesciunt, laboriosam natus rem
              repudiandae porro quia sunt labore reiciendis eos sit! Voluptate
              harum vitae consectetur dignissimos. Omnis optio, corrupti
              consequuntur itaque incidunt dicta aspernatur ea provident velit
              reprehenderit laboriosam sunt earum molestiae ut, similique
              dignissimos facere error minima deleniti eligendi. At tempora
              maiores aliquid facilis atque quos mollitia optio quae culpa
              eaque! Dolore nesciunt sunt perspiciatis maiores, labore facere
              laudantium reprehenderit inventore fuga tempora dolorem quam
              reiciendis voluptatibus dignissimos, pariatur neque nobis eaque
              consequuntur odio dolor. Architecto, excepturi! Sit non atque sint
              distinctio! Officiis aspernatur mollitia amet, velit optio aliquid
              beatae dolorem facere, itaque laudantium fugit nisi. Recusandae
              nulla iusto doloremque dolorum harum veritatis? Libero est qui cum
              totam nulla rerum enim reiciendis, maiores at tempore consequuntur
              obcaecati sed nisi, numquam ipsum officia aut veniam earum
              exercitationem. Optio, odio hic eius, expedita porro architecto
              iusto voluptate quae impedit modi sint aut unde eos eaque adipisci
              eveniet? Laborum, molestias officia suscipit doloribus culpa
              ducimus. Dolores eos quasi iure cumque. Dolorum animi quos
              adipisci aliquam blanditiis voluptas fuga eum, dolor atque qui
              nostrum delectus cum, asperiores iusto est unde nulla aut
              laboriosam nihil? Cumque quidem fuga ratione quod, velit repellat
              consequatur, deserunt quae ab voluptatum deleniti, amet facere!
              Pariatur neque magnam soluta quas, laudantium illo reiciendis
              quidem nulla optio expedita inventore consequatur ad dicta
              mollitia eligendi, quo fugit blanditiis dignissimos aperiam?
              Accusantium doloremque dignissimos ipsam sapiente magni beatae
              labore corrupti esse quos tempora officia iure similique
              praesentium animi aut asperiores eos deserunt distinctio
              consectetur ullam, reprehenderit obcaecati. Eveniet, esse,
              voluptas placeat reprehenderit magni natus nemo nulla cupiditate
              et expedita optio ex assumenda unde delectus iste voluptates
              libero ad repellat. Adipisci culpa cum repudiandae ullam iste
              deleniti consectetur quisquam assumenda neque repellendus quis
              itaque facere molestias officiis incidunt, praesentium commodi,
              doloremque quos veritatis laboriosam similique fuga vitae
              perspiciatis? Earum atque quia accusamus deleniti libero sapiente
              magni, corporis nemo voluptatum, debitis numquam itaque
              repellendus fuga ad assumenda quae et exercitationem veritatis
              tempore? Laudantium rem rerum debitis necessitatibus aspernatur ab
              laborum vitae ipsa voluptatum eos vero nemo voluptas esse,
              laboriosam nihil magnam asperiores sed praesentium iure libero
              aperiam ex. Voluptatibus mollitia, dignissimos repudiandae libero
              corporis delectus voluptatem incidunt. Modi reiciendis magnam vero
              voluptate fuga consequuntur alias blanditiis minus nobis
              recusandae eaque et culpa adipisci iusto libero quod perspiciatis
              quis saepe, accusamus in veniam, totam cumque sunt quibusdam.
              Veritatis labore aspernatur quod commodi rerum amet aperiam
              similique hic obcaecati cum nam quae, delectus ipsam. Vel, et? In
              aspernatur iste quasi distinctio voluptatibus reprehenderit alias
              cum excepturi soluta ipsum magni autem quis, ex eius aut labore
              facilis velit facere ipsam amet. Ea asperiores at sapiente
              molestias sint accusantium recusandae ipsum quam? Voluptatibus
              recusandae, tenetur reprehenderit hic quo laborum ab natus,
              mollitia, sapiente debitis nesciunt laboriosam veritatis saepe
              voluptatem ad soluta id totam numquam possimus tempore.
              Consequatur assumenda illo dicta doloremque, nulla soluta, sint
              repudiandae eligendi ipsa vitae adipisci unde recusandae facere
              quibusdam rerum suscipit? Officiis commodi non praesentium et odit
              delectus molestias molestiae. Dolor numquam nisi eos nihil optio
              velit fugit quae unde necessitatibus. Fugiat cumque magni
              provident? Reprehenderit mollitia vel magni a ipsa iusto
              praesentium assumenda neque quidem pariatur minima iste enim
              repellat est, numquam itaque, libero esse! Nisi numquam facilis
              officia facere tempora omnis alias dolorum soluta possimus maxime
              reiciendis at deleniti tempore nulla excepturi placeat,
              reprehenderit debitis commodi. Numquam esse, error pariatur ipsa,
              quos animi eius veniam praesentium deleniti commodi beatae dolores
              molestiae fuga unde consequatur. Dignissimos libero, alias quas,
              rem perferendis delectus ut obcaecati necessitatibus omnis quod
              eveniet ab odio tempore est. Et numquam vero ab quas perspiciatis
              itaque sed, sit cum sapiente labore non voluptatem omnis tempora
              placeat consectetur dolorum quasi cumque nulla dolor accusantium
              atque iusto consequatur doloribus. Assumenda aliquid maxime
              recusandae eius veritatis laudantium, molestiae itaque quis cum
              minus dolorem id vero distinctio repellendus velit voluptatibus
              praesentium quam dolor nesciunt? Ratione pariatur itaque eos
              blanditiis, tempore assumenda explicabo animi libero excepturi
              sint repellat, consequuntur harum autem ducimus, voluptatum
              accusantium quasi rerum asperiores nesciunt adipisci magni minus
              officia. Natus animi iste et omnis reiciendis labore nulla
              maiores, illo minima itaque quam, enim odit corrupti culpa
              mollitia dolorem nihil cum veritatis magni laborum quibusdam
              dolore minus adipisci alias! Quod magnam molestias quos ex eaque
              minus voluptatibus, quasi corrupti. Quis perspiciatis deserunt
              eveniet beatae pariatur eius, blanditiis, enim provident,
              explicabo dolorum sed? Dolores veniam id maiores cum quod
              blanditiis nam voluptate totam, aspernatur atque odio sunt at
              placeat, voluptates explicabo quae recusandae ipsum nostrum itaque
              eos qui rerum maxime similique! Veniam cupiditate dolores fugit
              quo totam id, odio sequi error aperiam velit nesciunt voluptates
              praesentium repudiandae ipsa voluptatibus eligendi asperiores,
              dolorum nisi aut commodi ut reiciendis possimus neque culpa.
              Quaerat minus nam nesciunt reiciendis odit labore officiis dolorum
              voluptas modi magni optio, culpa, perferendis repudiandae hic
              quisquam! Impedit dicta ad ipsa distinctio autem unde est
              pariatur, aliquid quo nisi officia architecto nesciunt earum
              cumque voluptatum ullam non eius ab temporibus possimus!
              Exercitationem labore sequi, quaerat earum animi quidem fugiat
              voluptatibus et reprehenderit sint explicabo repudiandae cum.
              Vitae id, impedit doloribus saepe cumque totam.
            </div>
          </section>
        </div>
        <video src={Bg} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Home;
