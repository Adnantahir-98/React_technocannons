import React from 'react'
import './teamprofile.css'



function teamprofile() {
    return (
        <div>
            <main>

                <section class="sec-one px-5 mb-5">
                    <div class="row">

                        <div id="doct_img" class="col-lg-4 float-left">
                            <img src="img/2.jpg" class="img-responsive rounded-circle py-4 float-left" alt="doctor_image/2.jpg" />
                        </div>
                        <div class="col-lg-8 float-right">
                            <p class="text-secondary pt-5 end">E N D O C R I N O L O G I S T</p>
                            <h2 class="d-name">Sara Khan</h2><br />
                            <div>
                                {/* <!-- Add font awesome icons --> */}
                                <a href="#" class="fa fa-facebook px-2 text-dark"></a>
                                <a href="#" class="fa fa-twitter px-2 text-dark"></a>
                                <a href="#" class="fa fa-youtube px-2 text-dark"></a>
                                <a href="#" class="fa fa-instagram px-2 text-dark"></a>
                            </div> <br />
                            <p class="des">Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or <br />
                                thoracic surgery) though minor procedures may be performed by pulmonologists. <br /> Pulmonology is closely.</p> <br />
                        </div>

                    </div>
                </section>



                <section class=" sec-two px-5 py-5">


                    <div class="row">
                        <div class="col-md-4">
                            <div class="aside py-5">
                                <p class="py-1"><i class="fa fa-user px-3"></i> Female </p>
                                <p class="py-1"><i class="fa fa-comments px-3"></i> English, Phillip </p>

                                <p class="py-1"><i class="fa fa-phone px-3"></i> 2673-8031-39 </p>
                                <p class="py-1"><i class="fa fa-envelope px-3"></i> Johndoe@example.com </p>
                                <p class="py-1"><i class="fa fa-address-card px-2"></i> Mediz 2nd building EBEX St. Walton Singapore</p>

                                <a href="#"><button class="btn btn-info btn-lg w-100 py-4">Download VCard </button></a>
                            </div>


                            <div class="py-5">

                                <h2>Specialty</h2>
                                <p>Respiratory medicine (lung)</p>

                                <hr class="my-5" />

                                <h2>Conditions</h2>
                                <p>Cystic fibrosis (children)</p>

                                <hr class="my-5" />

                                <h2>Memberships</h2>
                                <div class="py-3 mem">
                                    <p class="text-info">British Cardiovascular Society</p>
                                    <p class="text-info">British Society of Cardiovascular Magneticy</p>
                                    <p class="text-info">European Society of Cardiology</p>
                                    <p class="text-info">Fellow Royal Society of Medicine</p>
                                </div>
                                <hr class="my-5" />

                                <h2>Doctor Schedule</h2>
                                <div class="py-3 mem">
                                    <p class="text-info">Monday <span class="float-right text-dark">07:00 - 16:00 <i class="fa fa-clock-o text-success"></i></span></p>
                                    <hr />
                                    <p class="text-info">Tuesday <span class="float-right text-dark">04:00 - 13:00 <i class="fa fa-clock-o text-success"></i></span></p>
                                    <hr />
                                    <p class="text-info">Friday <span class="float-right text-dark">08:00 - 12:00 <i class="fa fa-clock-o text-success"></i></span></p>
                                    <hr />
                                    <p class="text-info">Saturday <span class="float-right text-dark">09:00 - 15:00 <i class="fa fa-clock-o text-success"></i></span></p>
                                    <hr />
                                </div>



                            </div>


                        </div>
                        <div class="col-md-8">

                            <h1 class="text-info py-4">Biography</h1>
                            <p>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in
                                1987. He then worked at various New York hospitals for the next five years, including Seattle, and
                                Washington. He also held positions with the Medical Research Council, NY Heart Foundation
                                and the Wellcome Trust.</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior
                                researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with
                                the main clinical focus of oesophageal surgery. He continued in this post until his move to the
                                Seattle in the early 1992.</p>

                            <hr class="my-5" />

                            <h1 class="text-info py-4">Education</h1>
                            <p>BSc degree in Neurosciences (1994) at University College London.</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>Royal College of Physicians; MRCP (UK) 2000.</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>PHD Imperial College London School of Medicine in 2004.</p>


                            <hr class="my-5" />

                            <h1 class="text-info py-4">Research interests</h1>
                            <p>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation</p>


                            <hr class="my-5" />


                            <h1 class="text-info py-4">Awards and honours</h1>
                            <p>1988 British Thoracic Society Fisons Travel Fellowship</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>1991 British Medical Association HC Roscoe Fellowship</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>1997 Royal College of Physicians Graham Bull Prize in Clinical Science.</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>2004 North American CF Conference Plenary Lecturer (first non-American)</p>

                            <hr class="text-info bg-info w-25 float-left" /> <br /> <br />

                            <p>2005 CF Trust John Panchaud Medal</p>

                            <hr class="my-5" />


                            <h1 class="text-info py-4">My Skills</h1>

                            <div class="my-5">
                                <h6 class="my-3">CARDIOLOGY</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                                    </div>
                                </div>
                            </div>
                            <div class="my-5">
                                <h6 class="my-3">HEART ASSESSMENT</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    </div>
                                </div>
                            </div>

                            <div class="my-5">
                                <h6 class="my-3">HEART SURGERY</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    </div>
                                </div>
                            </div>

                            <div class="my-5">
                                <h6 class="my-3">REHABILITATION AND THERAPIES</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                </section>



</main>

        </div>
    )
}

export default teamprofile
