import { useState } from 'react';
import emailjs from 'emailjs-com'
import ItemContact from '../components/hooks/ItemContact';
import '../styles/contact.css'
import { useRef } from 'react';

const Contact = ()=>{
    const [mssg , setMssg] = useState({type:'',message: ''});
    const form = useRef();

    const hangleSubmit = (e) => {
        e.preventDefault()

        const fm = form.current
        const formData = {
            name: fm.name.value,
            email: fm.email.value,
            message: fm.message.value
        }

        emailjs.send(
            'service_fw7njuu','template_z6carjp',formData,'ZVrKSUmme_gjjwPl2'
        )
        .then(
            (result) => {
                setMssg({type:'succes',message: "Mensaje Enviado con Exito!!"});
                fm.reset;                
            },
            (error) => {setMssg({type:'error',message: error.text})}
        )        
    }

    return (
        <section className="Contact-st">
            <h3 className="text-center p-2 m-2">Contacto</h3>
            <div className="contact-content row">
                <div className="contact-items col-12 col-lg-6">
                    <ul className='contact-list'>
                        <ItemContact Title="Dirección" Ref="https://g.co/kgs/kLCVd5u" Description="697 Street Martiz, Coquimbo, Chile."/>
                        <ItemContact Title="Telefono - Wsp" Ref="https://wa.me/56930392238" Description="+56 9 30392238"/>
                        <ItemContact Title="E-Mail" Ref="mailto:garaymolina21@gmail.com?subject=Hola&body=Estoy%20interesado%20en%20tus%20servicios." Description="garaymolina21@gmail.com"/>
                        <ItemContact Title="Linkedin" Ref="https://www.linkedin.com/in/francisco-garay-3b417715b" Description="linkedin.com/Francisco-Garay"/>
                        <ItemContact Title="Facebook" Ref="https://www.facebook.com/share/NUzk1uWWyDBs2RLD/" Description="/Francisco-Garay"/>
                        <ItemContact Title="Instagram" Ref="https://www.instagram.com/garay.snk/" Description="@garay.snk"/>
                    </ul>
                </div>
                <div className="form-email col-12 col-lg-6">
                    <h4 className='text-center'>Contactame via E-mail.</h4>
                    <form className="form-contact" ref={form} onSubmit={hangleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre :</label>
                            <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Francisco Garay" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email :</label>
                            <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje :</label>
                            <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="5" required></textarea>
                        </div>
                        <input className='submit-input' type="submit" value="Enviar"/>
                    </form>
                    {
                        mssg.type &&(
                            <div className='mesagge-content'>
                                <p className={mssg['type']}>{mssg['message']}</p>
                            </div>
                        )
                    }                    
                </div>
            </div>            
        </section>
    );
}

export default Contact;