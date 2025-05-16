import { useState } from "react";
import Modal from "./Modal";

export default function XModals () {
    const [open, setOpen] = useState(false);

    return <div>
        <h1>User Details Modal</h1>
        <button className="modal-btn" onClick={() => setOpen(true)}>Open Form</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <ModalForm />
        </Modal>

        {/* <div style={{display: 'flex', flexDirection:'column', gap:'12rem'}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nobis excepturi natus, nihil suscipit vel quo dicta modi. Eveniet eligendi dicta asperiores! Nisi debitis autem odio deserunt, sed repudiandae eveniet molestias, quis temporibus doloribus cum veniam soluta optio facere a excepturi officia deleniti, dolorem assumenda quos id. Accusamus eum harum officiis nesciunt modi dignissimos explicabo, in accusantium alias quam distinctio voluptatem dolorem nobis dolores, amet tempore fugiat praesentium dicta quo quos? Vel recusandae fugiat laudantium dolorum necessitatibus ratione nam alias placeat cupiditate expedita. Optio molestias ut minima? Ea asperiores, nemo error illo deserunt excepturi tempora ut cum hic accusantium quibusdam, quisquam quia exercitationem distinctio! Earum obcaecati sunt illo alias, vitae explicabo, exercitationem provident quidem eos eius adipisci ipsa culpa, cumque laudantium omnis corrupti? Distinctio, corporis a corrupti rem in laborum mollitia neque consectetur? Soluta labore at amet alias architecto incidunt expedita sunt nemo recusandae. Omnis, recusandae. Quod, vero repudiandae. Distinctio quidem, magnam inventore laborum officia exercitationem cupiditate odio veritatis modi possimus officiis nisi earum nihil ipsum quos nesciunt accusamus, illo doloribus quas tempora commodi? Pariatur qui aut reprehenderit eos, alias optio perferendis laudantium laboriosam magnam ab! Eos vel iusto suscipit delectus illo quibusdam. Nihil eaque veritatis minus eum cum velit?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem laudantium quibusdam dicta aliquid, qui minus, officiis accusantium assumenda asperiores id, doloremque corrupti illo ad tempore quos culpa a dolorum? Sequi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut iure illo blanditiis vitae nisi eos amet dicta ipsum rem debitis iste, aspernatur, soluta sit sint aut tempore deleniti ducimus veritatis suscipit dolore quisquam praesentium quos rerum. Quia facilis amet natus illo nihil fugit dicta beatae, expedita eligendi consequatur minus dolores quisquam aperiam dignissimos voluptates deserunt esse, quas nam voluptatem mollitia quae? Asperiores, nulla amet. Ab sunt sed quisquam consectetur accusantium explicabo doloribus eaque quasi assumenda, atque eum. Repellendus quia reiciendis asperiores magni quas tempore, eius necessitatibus quod provident? Ducimus fugiat temporibus vitae dignissimos maxime explicabo culpa iusto deserunt est quisquam, itaque mollitia veniam eveniet adipisci unde, deleniti voluptates. At vel, dolor placeat nisi incidunt necessitatibus quas? Animi maxime eligendi, aperiam, recusandae consequatur officia facilis quibusdam reprehenderit impedit quia accusamus labore molestiae! Quasi sapiente neque fugit adipisci recusandae blanditiis, suscipit, pariatur deserunt modi illo eveniet corrupti maxime, placeat natus tempore quod corporis veritatis quidem itaque consequuntur. Neque quos dolorum vero facere voluptatum, possimus quasi nemo natus doloribus delectus. Doloremque, dignissimos accusantium? Reprehenderit illo ducimus libero, incidunt vero id, animi nobis nesciunt accusamus, officia architecto provident corrupti quisquam exercitationem laborum cum! Nihil magnam et animi, deserunt accusantium dolorum quaerat ipsa repudiandae itaque aperiam quibusdam sint neque aliquid unde laudantium! Repellat nemo mollitia dolore similique eligendi, dicta accusamus numquam odit nobis, est vel natus ut unde in consequatur officiis! Asperiores excepturi, labore quibusdam quos neque corporis illum provident consequatur cum enim ut inventore veritatis eaque voluptates molestiae saepe nostrum. Error soluta provident neque amet natus velit quis, quo architecto non reprehenderit? Doloribus soluta quidem odio necessitatibus, tempora temporibus deleniti facere pariatur harum perspiciatis ab. Dignissimos, eum tempore odio reiciendis debitis, voluptatem qui repudiandae architecto corporis reprehenderit officia placeat laborum quis labore, vitae assumenda exercitationem quidem sequi libero numquam! Blanditiis quaerat hic officiis vitae? Impedit, eligendi odit doloremque soluta ea facere distinctio sint, iusto earum perferendis, consectetur fuga. Incidunt voluptates laudantium quasi deleniti consequatur eaque, quam culpa perspiciatis, minima doloribus repellat nihil voluptate! Fuga omnis provident labore neque, voluptatem corrupti asperiores commodi! Error sint modi sapiente aspernatur, dignissimos neque earum sequi? Consequuntur accusantium cumque quam inventore. Vero nam consectetur adipisci ipsam debitis ipsum quibusdam aperiam sequi earum quisquam unde voluptates, magni maiores repellendus, non ea? Nulla blanditiis, sunt provident error quibusdam expedita corporis harum minus molestiae illum commodi beatae in odit nobis impedit laudantium itaque. Facilis, excepturi eligendi? Expedita architecto accusamus voluptate quisquam quibusdam rerum maxime culpa iste corporis dolore. Perspiciatis officiis distinctio consequatur ipsa maiores, dignissimos, sapiente quia velit quasi nihil maxime fugiat magnam, atque minima. Perferendis odit, sequi cum officia nemo hic quidem dolores error quasi, temporibus velit doloribus at? Reprehenderit illum earum in corporis? Nobis, eligendi excepturi praesentium dicta autem optio est deserunt? Mollitia, ex unde? Nesciunt accusamus quam ab labore beatae quisquam rem cum hic quasi, expedita odit facere amet numquam dignissimos perspiciatis at blanditiis ullam iste ad atque, nihil nobis incidunt sequi! Nam fugit in esse dolorem, asperiores illo aliquam ad corporis. Id soluta, harum rem repellat perspiciatis enim assumenda, impedit non mollitia repellendus, pariatur eos. Eligendi corrupti maiores eos iste eum voluptatibus ipsam! Tempore reprehenderit omnis, maiores recusandae eligendi quasi laboriosam. Blanditiis nam quidem natus sint ducimus impedit necessitatibus maxime eligendi et, ipsa dicta ea odit, cupiditate ex, placeat eaque hic labore delectus iusto incidunt minima adipisci ratione! Suscipit error autem dignissimos quae odit? Voluptatibus officiis, rerum inventore aspernatur maxime necessitatibus, illo fuga praesentium nam doloremque quibusdam pariatur. Reiciendis magni pariatur nisi corporis at, exercitationem dicta quos repudiandae voluptates reprehenderit, soluta, porro quae. Sit assumenda ullam itaque et, nobis nostrum aliquam aspernatur iusto sapiente vel excepturi laboriosam accusantium esse tenetur tempora quo aut cumque fuga, quia totam in. Quis voluptate neque dolorem blanditiis sed esse dolores autem veritatis sequi adipisci nihil provident voluptatem earum, delectus, repellendus voluptatum excepturi! Assumenda quo non aliquid, molestiae dolor, perferendis reprehenderit deleniti doloribus laborum dolore, pariatur necessitatibus quasi perspiciatis nemo vitae id sapiente harum! Excepturi architecto esse ad reprehenderit, recusandae veritatis corporis molestiae quo velit voluptatibus possimus eligendi fugiat harum itaque quibusdam facere placeat et sapiente? Nam assumenda est perspiciatis? Doloremque quam iusto sed soluta culpa suscipit rerum porro sequi est corporis ipsam, ad neque veritatis ut tenetur veniam totam ab obcaecati? Perspiciatis necessitatibus porro animi aliquid expedita numquam vel in blanditiis enim neque, provident error esse placeat ipsa tenetur quam ut ipsum corporis inventore eligendi? Voluptatum, repellat quae perspiciatis accusantium voluptatibus velit mollitia eveniet neque, a reprehenderit labore nisi tempora ipsam sapiente est dolore fugiat quas harum beatae sed aspernatur. Reiciendis mollitia labore repellat perferendis fugit, aspernatur a unde, itaque libero facilis iste natus autem dolores? At, ea hic asperiores eligendi itaque mollitia vero veniam exercitationem optio molestiae et aut accusantium reiciendis. Iure nobis ad, accusantium facere libero quis, voluptates ipsum autem neque cumque id exercitationem, velit nulla tempore asperiores praesentium deserunt? Atque itaque sunt impedit minus consequuntur, aut tempora quaerat magni! Quam ad officia repudiandae soluta, distinctio explicabo magnam impedit quos neque maiores quia. Quo quod iusto vel distinctio eaque recusandae, beatae explicabo laborum dicta, odit perspiciatis nulla amet nesciunt earum magni eos, blanditiis consequuntur corrupti commodi! Eos officiis expedita, quae enim, rerum praesentium asperiores sequi exercitationem laborum iste, modi iusto vero. Cum, eum quidem! Dolor, voluptate? Expedita saepe, libero, doloribus qui aspernatur dolor voluptatum placeat accusantium repellendus quidem voluptas exercitationem. Distinctio quo maxime nisi a voluptatibus laboriosam vero culpa quae quod. Deleniti natus reprehenderit beatae porro amet eum ut quis doloremque fugit quam minima excepturi accusantium iste assumenda aliquam placeat quos pariatur dolores laboriosam, nihil nisi saepe incidunt. Eaque provident ex natus voluptas doloribus rerum itaque eligendi commodi placeat recusandae beatae eum minus, sunt, minima ullam. Eveniet, quis cumque minima repellendus vitae est magnam molestias dolorem rerum perspiciatis impedit? Expedita quisquam voluptatibus necessitatibus perferendis numquam. Sequi ullam reiciendis aperiam quibusdam minima qui perferendis aut. Illum soluta molestias cumque ratione delectus praesentium iure quos magni aperiam, obcaecati reprehenderit nesciunt in quae possimus nobis? Commodi velit quod assumenda error quae. Minus excepturi velit sed eius reprehenderit vel fuga quos nesciunt corrupti!</p>
        </div> */}
    </div>
}


const ModalForm = () => {
    const [errorInput, setErrorInput] = useState("");
    
    const Errors = {
        numberError: "Invalid phone number. Please enter a 10-digit phone number.",
        emailError: "Invalid email. Please check your email address.",
        dateError: "Invalid date of birth. Date of Birth cannot be in Future.",
    }

    const modalSubmitHandler = (e) => {
        e.preventDefault();
        const formelements = new FormData(e.currentTarget);

        console.log(formelements.get("date"))
        console.log(new Date(formelements.get("date")).getTime() > new Date())
        if (formelements.get("phone").length !== 10) {
            alert(Errors.numberError);
            setErrorInput("phone");
            return;
        } else if (new Date(formelements.get("date")) > Date.now()) {
            alert(Errors.dateError);
            setErrorInput("dob");
            return;
        } else {
            setErrorInput("");
            for(let [key, val] of formelements)
                console.log(key, val);
            e.target.reset();
            // e.target.
        }
    }

    return <>
        <h1 style={{margin:'0', padding:'0'}}>Fill Details</h1>
        <form style={{height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}} action="" onSubmit={modalSubmitHandler}>
            <div className="formElement">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                { errorInput === 'username' && <p className="modal-input-error">* Username Required</p> }
            </div>

            <div className="formElement">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required/>
                { errorInput === 'email' && <p className="modal-input-error">* Invalid email </p> }
            </div>

            <div className="formElement">
                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id="phone" name="phone" required/>
                { errorInput === 'phone' && <p className="modal-input-error">* Invalid phone number</p> }
            </div>

            <div className="formElement">
                <label htmlFor="username">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required/>
                { errorInput === 'dob' && <p className="modal-input-error">* Invalid Date</p> }
            </div>

            <button type="submit" className="modal-btn submit-button">Submit</button>
        </form>
    </>
}
/**
 * Submit btn = className attribute as "submit-button
 * 
 * 
 * 
 * 
 */