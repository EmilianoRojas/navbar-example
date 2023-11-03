import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { CambiaClave } from '../models/CambiaClave.model';
import { ArrowIcon } from '../assets/icons/ArrowIcon';
import { useMediaQuery } from 'react-responsive'
import { UserService } from '../services/password.service';

export default function CambiaClaveModal(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit, reset,  formState: { errors, isValid} } = useForm<CambiaClave>({ mode: "all"});
  const [isOpen, setIsOpen] = useState(props.show)
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
})

  const onSubmit: SubmitHandler<CambiaClave> = (data) => {
    UserService.changePassword(data.newPassword).then(res => {
      props.notify()
      props.close()
      reset()
    }).catch(err => {
      console.error(err)
    })
  }


  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10 bottom-0" onClose={props.close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="lg:fixed lg:inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="lg:fixed lg:inset-0 lg:overflow-y-auto">
            <div className="lg:flex lg:min-h-full items-center justify-center lg:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex lg:flex-row flex-col modal-clave transform overflow-hidden bg-white text-left align-middle lg:shadow-xl transition-all">
                {!isDesktop && <div className='mb-2'>
                  <div className='self-start ml-5 lg:ml-8 mt-4 lg:mt-10 breadcrumb-separator'>
            <p> <span className='breadcrumb'>Inicio</span> | <span className='breadcrumb'>Cambio de clave</span></p>
        </div>
        <div className='self-start ml-5 lg:ml-8 mt-2 lg:mt-12'>   
            <div className="flex items-center gap-1.5 mt-0.5 cursor-pointer" onClick={() => window.location.replace('home')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M0 6.5C0 10.0897 2.91031 13 6.5 13C10.0897 13 13 10.0897 13 6.5C13 2.91031 10.0897 0 6.5 0C2.91031 0 0 2.91031 0 6.5ZM7.875 4.18313V8.81688C7.87493 8.91183 7.84782 9.0048 7.79684 9.08491C7.74586 9.16503 7.67313 9.22897 7.58714 9.26925C7.50116 9.30954 7.40548 9.32451 7.31129 9.31242C7.21711 9.30032 7.12832 9.26165 7.05531 9.20094L4.27125 6.88437C4.21485 6.83745 4.16946 6.77869 4.13832 6.71227C4.10717 6.64584 4.09102 6.57337 4.09102 6.5C4.09102 6.42663 4.10717 6.35416 4.13832 6.28774C4.16946 6.22131 4.21485 6.16255 4.27125 6.11562L7.05531 3.79906C7.12832 3.73835 7.21711 3.69968 7.31129 3.68758C7.40548 3.67549 7.50116 3.69046 7.58714 3.73075C7.67313 3.77103 7.74586 3.83497 7.79684 3.91509C7.84782 3.9952 7.87493 4.08817 7.875 4.18313Z" fill="#004A98"/>
                </svg> 
                <p className='volver '>Volver</p>
            </div>
        </div>
                  </div>}
                {!isDesktop && 
                <div className='flex flex-col ml-5'>
                    <span className='crear-usuario-text'>Cambio de clave</span>
                    <div className="barra-orange mb-5"></div>
                </div>}
                  <div className="seccion-candado flex lg:flex-col lg:justify-center items-center">
                    {isDesktop ? 
                    
                    <div>
                        <svg width="324" height="324" viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M161.798 169.535C166.262 169.535 170.543 167.8 173.7 164.711C176.856 161.622 178.63 157.432 178.63 153.064C178.63 148.695 176.856 144.506 173.7 141.417C170.543 138.328 166.262 136.593 161.798 136.593C157.334 136.593 153.053 138.328 149.897 141.417C146.74 144.506 144.967 148.695 144.967 153.064C144.967 157.432 146.74 161.622 149.897 164.711C153.053 167.8 157.334 169.535 161.798 169.535ZM212.292 95.4152C216.756 95.4152 221.037 97.1506 224.194 100.239C227.35 103.328 229.124 107.518 229.124 111.886V194.241C229.124 198.61 227.35 202.799 224.194 205.888C221.037 208.977 216.756 210.712 212.292 210.712H111.304C106.84 210.712 102.559 208.977 99.4027 205.888C96.2462 202.799 94.4729 198.61 94.4729 194.241V111.886C94.4729 107.518 96.2462 103.328 99.4027 100.239C102.559 97.1506 106.84 95.4152 111.304 95.4152H119.72V78.9442C119.72 68.0232 124.153 57.5495 132.044 49.8272C139.936 42.1049 150.638 37.7666 161.798 37.7666C167.324 37.7666 172.796 38.8317 177.901 40.9011C183.006 42.9704 187.645 46.0035 191.552 49.8272C195.459 53.6509 198.559 58.1903 200.674 63.1862C202.788 68.1821 203.877 73.5367 203.877 78.9442V95.4152H212.292ZM161.798 54.2376C155.102 54.2376 148.681 56.8406 143.946 61.474C139.211 66.1074 136.551 72.3916 136.551 78.9442V95.4152H187.045V78.9442C187.045 72.3916 184.385 66.1074 179.651 61.474C174.916 56.8406 168.494 54.2376 161.798 54.2376Z" fill="#FFA500"/>
                            <path d="M85 28.2275C108.401 14.6893 134.965 7.5806 162 7.62225C247.054 7.62225 316 76.5681 316 161.622C316 246.676 247.054 315.622 162 315.622C76.9458 315.622 8 246.676 8 161.622C8 133.579 15.4998 107.26 28.6052 84.6223" stroke="white" strokeWidth="15" strokeLinecap="round"/>
                            <path d="M102.104 265.987L95.1071 261.916L99.6823 253.774H90.532V245.632H99.6823L95.1071 237.762L102.104 233.691L106.68 241.562L111.255 233.691L118.252 237.762L113.677 245.632H122.827V253.774H113.677L118.252 261.916L111.255 265.987L106.68 257.845L102.104 265.987ZM145.165 265.987L138.167 261.916L142.742 253.774H133.592V245.632H142.742L138.167 237.762L145.165 233.691L149.74 241.562L154.315 233.691L161.312 237.762L156.737 245.632H165.887V253.774H156.737L161.312 261.916L154.315 265.987L149.74 257.845L145.165 265.987ZM188.225 265.987L181.228 261.916L185.803 253.774H176.652V245.632H185.803L181.228 237.762L188.225 233.691L192.8 241.562L197.375 233.691L204.372 237.762L199.797 245.632H208.948V253.774H199.797L204.372 261.916L197.375 265.987L192.8 257.845L188.225 265.987Z" fill="#FFA500"/>
                            <path d="M224.288 261.916L231.285 265.987L235.86 257.845L240.435 265.987L247.433 261.916L242.857 253.774H252.008V245.632H242.857L247.433 237.762L240.435 233.691L235.86 241.562L231.285 233.691L224.288 237.762L228.863 245.632H219.713V253.774H228.863L224.288 261.916Z" fill="#FFA500"/>
                        </svg> 
                    </div>
                    :
                    <div className='ml-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="65" viewBox="0 0 62 65" fill="none">
                            <path d="M31.5 36.8095C32.1299 36.8095 32.734 36.5486 33.1794 36.0843C33.6248 35.6199 33.875 34.9901 33.875 34.3333C33.875 33.6766 33.6248 33.0468 33.1794 32.5824C32.734 32.118 32.1299 31.8571 31.5 31.8571C30.8701 31.8571 30.266 32.118 29.8206 32.5824C29.3752 33.0468 29.125 33.6766 29.125 34.3333C29.125 34.9901 29.3752 35.6199 29.8206 36.0843C30.266 36.5486 30.8701 36.8095 31.5 36.8095ZM38.625 25.6667C39.2549 25.6667 39.859 25.9276 40.3044 26.3919C40.7498 26.8563 41 27.4861 41 28.1429V40.5238C41 41.1805 40.7498 41.8104 40.3044 42.2747C39.859 42.7391 39.2549 43 38.625 43H24.375C23.7451 43 23.141 42.7391 22.6956 42.2747C22.2502 41.8104 22 41.1805 22 40.5238V28.1429C22 27.4861 22.2502 26.8563 22.6956 26.3919C23.141 25.9276 23.7451 25.6667 24.375 25.6667H25.5625V23.1905C25.5625 21.5487 26.1881 19.9741 27.3016 18.8131C28.4151 17.6522 29.9253 17 31.5 17C32.2797 17 33.0518 17.1601 33.7722 17.4712C34.4926 17.7823 35.1471 18.2383 35.6984 18.8131C36.2498 19.388 36.6871 20.0704 36.9855 20.8215C37.2839 21.5725 37.4375 22.3775 37.4375 23.1905V25.6667H38.625ZM31.5 19.4762C30.5552 19.4762 29.649 19.8675 28.9809 20.5641C28.3128 21.2606 27.9375 22.2054 27.9375 23.1905V25.6667H35.0625V23.1905C35.0625 22.2054 34.6872 21.2606 34.0191 20.5641C33.351 19.8675 32.4448 19.4762 31.5 19.4762Z" fill="#FFA500"/>
                            <path d="M17.0568 9.53409C21.3287 7.06263 26.1783 5.76489 31.1136 5.77249C46.6407 5.77249 59.2271 18.3589 59.2271 33.8861C59.2271 49.4132 46.6407 61.9996 31.1136 61.9996C15.5864 61.9996 3 49.4132 3 33.8861C3 28.7666 4.36913 23.962 6.7616 19.8293" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <path d="M12.8413 12.9677L17.5069 2.62513L24.1311 11.8369L12.8413 12.9677Z" fill="white"/>
                            <path d="M20.72 51L19.68 50.3697L20.36 49.1092H19V47.8487H20.36L19.68 46.6303L20.72 46L21.4 47.2185L22.08 46L23.12 46.6303L22.44 47.8487H23.8V49.1092H22.44L23.12 50.3697L22.08 51L21.4 49.7395L20.72 51ZM27.12 51L26.08 50.3697L26.76 49.1092H25.4V47.8487H26.76L26.08 46.6303L27.12 46L27.8 47.2185L28.48 46L29.52 46.6303L28.84 47.8487H30.2V49.1092H28.84L29.52 50.3697L28.48 51L27.8 49.7395L27.12 51ZM33.52 51L32.48 50.3697L33.16 49.1092H31.8V47.8487H33.16L32.48 46.6303L33.52 46L34.2 47.2185L34.88 46L35.92 46.6303L35.24 47.8487H36.6V49.1092H35.24L35.92 50.3697L34.88 51L34.2 49.7395L33.52 51Z" fill="#FFA500"/>
                            <path d="M38.88 50.3697L39.92 51L40.6 49.7395L41.28 51L42.32 50.3697L41.64 49.1092H43V47.8487H41.64L42.32 46.6303L41.28 46L40.6 47.2185L39.92 46L38.88 46.6303L39.56 47.8487H38.2V49.1092H39.56L38.88 50.3697Z" fill="#FFA500"/>
                        </svg>
                    </div>
                    }
                    <div className="flex flex-col lg:items-center items-start">
                        <span className='importante lg:mt-20 '>¡Importante!</span>
                        <p className='recuerde lg:text-center text-left'> Recuerde no compartir su clave y mantenerla confidencial.</p>
                    </div>
                  </div>

                  <div className="flex flex-col seccion-form">
                    <span className='cerrar-modal cursor-pointer hidden lg:flex self-end mt-4 mr-8' onClick={props.close}>
                        <span className='mt-1 mr-1'><ArrowIcon /></span>
                        <span>CERRAR</span>
                    </span>
                    <div className="form lg:mx-12 mx-5">
                        {isDesktop && <div className='flex flex-col'>
                                <span className='crear-usuario-text'>Cambio de clave</span>
                                <div className="barra-orange mb-4"></div>
                        </div>}
                        <div className="lg:mb-10 lg:mt-0 mt-2">
                            <span className="font-open text-left">Clave actual</span>
                            <div className="pass-wrapper lg:mt-2.5 mt-4">
                                <input
                                {...register("currentPassword", { required: true, minLength: 4 })}
                                className={ errors.currentPassword
                                    ? "border rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                    : "border border-rose-500 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                }
                                type={passwordShown ? "text" : "password"}
                                placeholder="Ingrese clave actual"
                                />
                                <button type="button" id="" className="icon-eye-icon text-xs text-gray-400 showPass" onClick={() => setPasswordShown(!passwordShown)}/>
                            </div>
                        </div>
                        <div className="lg:mb-5 mt-5">
                            <span className="font-open text-left">Nueva clave</span>
                            <div className="pass-wrapper lg:mt-2.5 mt-4">
                                <input
                                {...register("newPassword", { required: true, minLength: 4 })}
                                className={ errors.newPassword
                                    ? "border rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                    : "border border-rose-500 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                }
                                type={passwordShown ? "text" : "password"}
                                placeholder="Ingrese nueva clave"
                                />
                                <button type="button" id="" className="icon-eye-icon text-xs text-gray-400 showPass" onClick={() => setPasswordShown(!passwordShown)}/>
                            </div>
                            <p className='info-new-pw'>La nueva clave debe contar con 4 dígitos numéricos</p>
                        </div>
                        <div className="">
                            <span className="font-open text-left">Confirmar nueva clave</span>
                            <div className="pass-wrapper mt-2">
                                <input
                                {...register("confirmPassword", { required: true, minLength: 4 })}
                                className={ errors.confirmPassword
                                    ? "border rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                    : "border border-rose-500 rounded w-full py-2 px-3 text-sm text-gray-700 focus:outline-none"
                                }
                                type={passwordShown ? "text" : "password"}
                                placeholder="Confirmar nueva clave"
                                />
                                <button type="button" id="" className="icon-eye-icon text-xs text-gray-400 showPass" onClick={() => setPasswordShown(!passwordShown)}/>
                            </div>
                        </div>
                       {isDesktop ? <div className="flex lg:flex-row flex-col lg:justify-around mt-10">
                                <button
                                type="button"
                                className="modal-clave-btn-cancel"
                                onClick={props.close}
                                >
                                Cancelar
                                </button>
                                <button
                                type="button"
                                className={isValid ? "modal-clave-btn-confirm" : "modal-clave-btn-disabled"}
                                onClick={handleSubmit(onSubmit)}
                                >
                                Cambiar clave
                                </button>
                        </div> :
                        <div className="flex lg:flex-row flex-col lg:justify-around">
                            <button
                            type="button"
                            className={isValid ? "modal-clave-btn-confirm" : "modal-clave-btn-disabled"}
                            onClick={handleSubmit(onSubmit)}
                            >
                            Cambiar clave
                            </button>
                            <button
                            type="button"
                            className="modal-clave-btn-cancel"
                            onClick={props.close}
                            >
                            Cancelar
                            </button>
                        </div>
                        }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
