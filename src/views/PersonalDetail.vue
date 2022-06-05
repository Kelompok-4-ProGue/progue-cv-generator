<template>
    <div class="px-40">
        <!-- Step 1 -->
        <div v-if="step == 1" class="flex flex-col items-center justify-start mb-40">
            <p class="text-5xl font-bold mb-8 " >Detail <span class="text-blue">Pribadi</span></p>
            <BaseCard title="Profil">
                <div class="flex w-full mb-7">
                    <div class="flex justify-center mr-7">
                        <label for="upload-photo" class="flex items-center justify-center bg-white-blue w-[130px] h-full rounded-lg p-9 cursor-pointer">
                            <img src="../assets/icons/upload_photo.svg" alt="upload_photo">
                        </label>
                        <input type="file" name="photo" id="upload-photo" class="hidden"/>
                    </div>
                    <div class="flex flex-col justify-between  w-full">
                        <input type="text" placeholder="Nama Depan" :class="input_field_class" class="mb-7">
                        <input type="text" placeholder="Nama Belakang" :class="input_field_class">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="email" placeholder="Email" :class="input_field_class">
                    <input type="phone" placeholder="Nomor Telepon" :class="input_field_class">
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Alamat" :class="input_field_class">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Kota" :class="input_field_class">
                    <input type="number" placeholder="Kode Pos" :class="input_field_class">
                </div>
                <div class="grid grid-cols-5 gap-7 mb-7 w-full">
                    <input type="url" placeholder="Tempat Lahir" :class="input_field_class" class="col-span-2">
                    <input type="url" placeholder="Tanggal Lahir" :class="input_field_class">
                    <input type="url" placeholder="Bulan Lahir" :class="input_field_class">
                    <input type="url" placeholder="Tahun Lahir" :class="input_field_class">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="url" placeholder="Linkedin" :class="input_field_class">
                    <input type="url" placeholder="Website" :class="input_field_class">
                </div>
            </BaseCard>
            <BaseCard title="Media Sosial">
                <div v-for="(social_media,index) in sosial_medias" :key="social_media" class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <select id="" :class="input_field_class" v-model="sosial_medias[index].sosmed">
                        <option value="" selected disabled>Sosial Media</option>
                        <option value="instagram">Instagram</option>
                        <option value="dribbble">Dribbble</option>
                        <option value="behance">Behance</option>
                        <option value="github">Github</option>
                    </select>
                    <input type="number" placeholder="Username" :class="input_field_class" v-model="sosial_medias[index].username">
                </div>
                <div class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addSosmed">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
    
            <div class="flex items-center justify-center">
                <button @click="nextStep" class="flex items-center justify-center px-[20px] py-[10px] bg-blue text-2xl text-white rounded-md">Lanjutkan Langkah <img src="../assets/icons/arrow-right.svg" alt="arrow-right"></button>
            </div>
        </div>

        <!-- Step 2 -->
        <div v-if="step == 2" class="flex flex-col items-center justify-start mb-40">
            <p class="text-5xl font-bold mb-8 " >Pengalaman <span class="text-blue">Karir</span></p>
            <!-- Description -->
            <BaseCard title="Deskripsi">
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Pekerjaan Profesional" :class="input_field_class">
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <textarea cols="30" rows="10" :class="input_field_class" placeholder="Deskripsi profil anda"></textarea>
                </div>
            </BaseCard>

            <!-- Education -->
            <BaseCard v-for="(education, index) in educations" :key="index" :title="`Pendidikan ${index+1}`" :titleCenter="true">
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Gelar" :class="input_field_class">
                    <input type="text" placeholder="Universitas" :class="input_field_class">
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Kota" :class="input_field_class">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Mulai" :class="input_field_class">
                    <input type="text" placeholder="Tahun Mulai" :class="input_field_class">
                </div>
                <div class="flex items-center justify-start mb-7 w-full">
                    <input type="checkbox" id="current-education" class="mr-3 bg-white-blue w-[20px] h-[20px] rounded">
                    <label for="current-education" class="text-sm font-medium"> Ini adalah pendidikan saya saat ini</label>
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Selesai" :class="input_field_class" class="bg-[#CDD6DE]" disabled>
                    <input type="text" placeholder="Tahun Selesai" :class="input_field_class" class="bg-[#CDD6DE]" disabled>
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <textarea cols="30" rows="10" :class="input_field_class" placeholder="Deskripsi pendidikan anda"></textarea>
                </div>
                <div v-if="index == educations.length-1" class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addEducation">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
            
            <!-- Profession -->
            <BaseCard v-for="(profession, index) in professions" :key="index" :title="`Pekerjaan ${index+1}`" :titleCenter="true">
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Posisi/Jabatan" :class="input_field_class">
                    <input type="text" placeholder="Perusahaan" :class="input_field_class">
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Kota" :class="input_field_class">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Mulai" :class="input_field_class">
                    <input type="text" placeholder="Tahun Mulai" :class="input_field_class">
                </div>
                <div class="flex items-center justify-start mb-7 w-full">
                    <input type="checkbox" id="current-education" class="mr-3 bg-white-blue w-[20px] h-[20px] rounded">
                    <label for="current-education" class="text-sm font-medium"> Ini adalah pekerjaan saya saat ini</label>
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Selesai" :class="input_field_class" class="bg-[#CDD6DE]" disabled>
                    <input type="text" placeholder="Tahun Selesai" :class="input_field_class" class="bg-[#CDD6DE]" disabled>
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <textarea cols="30" rows="10" :class="input_field_class" placeholder="Deskripsi pekerjaan anda"></textarea>
                </div>
                <div v-if="index == educations.length-1" class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addEducation">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
            
            <!-- Certification -->
            <BaseCard v-for="(certification, index) in certifications" :key="index" :title="`Sertifikasi ${index+1}`" :titleCenter="true">
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Nama Sertifikasi" :class="input_field_class" v-model="certification.name">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Mulai" :class="input_field_class" v-model="certification.start_month">
                    <input type="text" placeholder="Tahun Mulai" :class="input_field_class" v-model="certification.start_year">
                </div>
                <div class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bulan Berakhir" :class="input_field_class" v-model="certification.end_month">
                    <input type="text" placeholder="Tahun Berakhir" :class="input_field_class" v-model="certification.end_year">
                </div>
                <div class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <textarea cols="30" rows="10" :class="input_field_class" placeholder="Deskripsi sertifikasi anda" v-model="certification.description"></textarea>
                </div>
                <div v-if="index == educations.length-1" class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addEducation">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
            
            <!-- Professional Skills -->
            <BaseCard title="Keahlian Profesional" :titleCenter="true">
                <div v-for="(professional_skill, index) in professional_skills" :key="index" class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Bidang" :class="input_field_class" v-model="professional_skill.field">
                    <select id="" :class="input_field_class" v-model="professional_skill.level">
                        <option value="" selected disabled>Tingkat</option>
                        <option value="Basic">Basic</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                <div class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addProfessionalSkill">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
            
            <!-- Soft Skills -->
            <BaseCard title="Soft Skill" :titleCenter="true">
                <div v-for="(soft_skill, index) in soft_skills" :key="index" class="grid grid-cols-1 gap-7 mb-7 w-full">
                    <input type="text" placeholder="Soft Skill" :class="input_field_class" v-model="soft_skill.name">
                </div>
                <div class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addSoftSkill">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
            
            <!-- Languages -->
            <BaseCard title="Bahasa" :titleCenter="true">
                <div v-for="(language, index) in languages" :key="index" class="grid grid-cols-2 gap-7 mb-7 w-full">
                    <select :class="input_field_class" v-model="language.name">
                        <option value="" selected disabled>Bahasa</option>
                        <option v-for="each_language in list_languages" :key="each_language" :value="each_language">{{each_language}}</option>
                    </select>
                    <select :class="input_field_class" v-model="language.level">
                        <option value="" selected disabled>Tingkat</option>
                        <option value="Basic">Basic</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                        <option value="Native">Native</option>
                    </select>
                </div>
                <div class="flex justify-center items-center w-full">
                    <button class="bg-white" @click="addLanguage">
                        <img src="../assets/icons/add_content.svg" alt="add social media icon" class="cursor-pointer">
                    </button>
                </div>
            </BaseCard>
    
            <div class="flex items-center justify-center">
                <button @click="nextStep" class="flex items-center justify-center px-[20px] py-[10px] bg-blue text-2xl text-white rounded-md">Lanjutkan Langkah <img src="../assets/icons/arrow-right.svg" alt="arrow-right"></button>
            </div>
        </div>

        <!-- Step 3 -->
        <div v-if="step == 3" class="flex flex-col items-center justify-start mb-40">
            <p class="text-5xl font-bold mb-8 " >Jadikan <span class="text-blue">CV</span></p>

            <vue-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="false"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="hee hee"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                @hasStartedGeneration="hasStartedGeneration()"
                @hasGenerated="hasGenerated($event)"
                ref="html2Pdf"
            >
                <section slot="pdf-content">
                    <BaseCard class="w-[794px] h-full">
                        <div class="grid grid-cols-6 gap-12 w-full bg-white">
                            <div class="flex flex-col items-start justify-start col-span-2">
                                <!-- Photo Section -->
                                <img src="../assets/img/sample-profile-image.jpeg" alt="profile image" class="rounded-[40px] w-full rounded-br-none mb-4">
                                <!-- <div class="rounded-[40px] rounded-br-none bg-blue-dark w-full h-[285px] mb-4"></div> -->

                                <!-- Social Media Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <div class="flex justify-start items-center mb-4">
                                        <img src="../assets/icons/whatsapp_icon.svg" alt="whatsapp_icon" class="w-6 mr-3 ">
                                        <p>(+62) 822 4571 8040</p>
                                    </div>
                                    <div class="flex justify-start items-center mb-4">
                                        <img src="../assets/icons/email_icon.svg" alt="email_icon" class="w-6 mr-3">
                                        <p>umamsyarief123@gmail.com</p>
                                    </div>
                                    <div class="flex justify-start items-center mb-4">
                                        <img src="../assets/icons/instagram_icon.svg" alt="instagram_icon" class="w-6 mr-3 ">
                                        <p>@umam_syarief</p>
                                    </div>
                                    <div class="flex justify-start items-center mb-4">
                                        <img src="../assets/icons/dribbble_icon.svg" alt="dribbble_icon" class="w-6 mr-3 ">
                                        <p>Umam_Syarief</p>
                                    </div>
                                    <div class="flex justify-start items-center mb-4">
                                        <img src="../assets/icons/linkedin_icon.svg" alt="linkedin_icon" class="w-6 mr-3 ">
                                        <p>Muhammad Syariful Umam</p>
                                    </div>
                                </div>

                                <!-- Pendidikan Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">PENDIDIKAN</p>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>2020 - Sekarang</p>
                                        <p class="font-semibold">TELKOM UNIVERSITY</p>
                                        <p>S1 Teknologi Informasi</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>2017 - 2020</p>
                                        <p class="font-semibold">SMA NURIS JEMBER</p>
                                        <p>Jurusan IPA</p>
                                    </div>
                                </div>

                                <!-- Skill Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">SKILL</p>
                                    <div class="flex justify-between items-center w-full mb-1">
                                        <p>Figma</p>
                                        <p class="font-semibold">Expert</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full mb-1">
                                        <p>Figma</p>
                                        <p class="font-semibold">Expert</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full mb-1">
                                        <p>Digital Imaging</p>
                                        <p class="font-semibold">Advanced</p>
                                    </div>
                                </div>

                                <!-- Language Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">BAHASA</p>
                                    <div class="flex justify-between items-center w-full mb-1">
                                        <p>Indonesia</p>
                                        <p class="font-semibold">Expert</p>
                                    </div>
                                    <div class="flex justify-between items-center w-full mb-1">
                                        <p>English</p>
                                        <p class="font-semibold">Native</p>
                                    </div>
                                </div>

                                <!-- Softskill Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">SOFTSKILL</p>
                                    <div class="flex justify-start items-center w-full">
                                        <p>Kerja Tim</p>
                                    </div>
                                    <div class="flex justify-start items-center w-full">
                                        <p>Presentasi yang Baik</p>
                                    </div>
                                    <div class="flex justify-start items-center w-full">
                                        <p>Berpikir Kreatif</p>
                                    </div>
                                    <div class="flex justify-start items-center w-full">
                                        <p>Analisa Informasi</p>
                                    </div>
                                </div>

                            </div>
                            <div class="flex flex-col items-start justify-start text-left col-span-4 w-full">
                                <p class="font-bold text-5xl mb-4">UI/UX DESIGNER</p>
                                <p class="font-light text-6xl mb-4">MUHAMMAD SYARIFUL UMAM</p>

                                <!-- Profile Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">PROFIL</p>
                                    <div class="flex flex-col justify-start items-start w-full">
                                        <p>Saya memiliki kemampuan menerapkan design process dengan baik. Saya familiar menggunakan software figma untuk UI Design dan Photoshop untuk Digital Imaging. Saya berkomitmen tinggi untuk belajar mengembangkan diri dan inovasi sehingga mampu menyelesaikan suatu permasalahan.</p>
                                        <br>
                                        <p class="font-semibold ">Jember, 4 Juni 2002 | Jember, Jawa Timur, 68168</p>
                                    </div>
                                </div>

                                <!-- Achievement Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">PRESTASI</p>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Juara 2 | Desain Poster Nasional</p>
                                        <p class="font-semibold">PTI IT COMPETITION FESTIVAL 1.0 2020</p>
                                        <p>di Universitas Muhammadiyah Surakarta</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Juara 1 | Desain Poster Nasional</p>
                                        <p class="font-semibold">KURKUMIN 2018</p>
                                        <p>di Universitas Gadjah Mada</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>di Universitas Gadjah Mada</p>
                                        <p class="font-semibold">TECHFEST 2018</p>
                                        <p>di Universitas Jambi</p>
                                    </div>
                                </div>

                                <!-- Certification Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">SERTIFIKASI</p>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>UI/UX | Juli 2021 - Desember 2021</p>
                                        <p class="font-semibold">BOOTCAMP SYNRGY ACADEMY BATCH 3</p>
                                        <p>Pelatihan UI/UX, Workshop dan Product Showcase</p>
                                    </div>
                                </div>

                                <!-- Internship / Working Experience Section -->
                                <div class="flex flex-col items-start justify-start mb-8 w-full">
                                    <p class="font-bold text-3xl mb-4">PENGALAMAN MAGANG</p>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Creative (Design) | Oktober 2021 - Desember 2021</p>
                                        <p class="font-semibold">KREEN | PT. Keren Entertainment Indonesia</p>
                                        <p>Membuat Social Media Design dan Brand Guidelines</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Creative (Design) | Oktober 2021 - Desember 2021</p>
                                        <p class="font-semibold">CV. DAFIDEA TECHNOCRAFT</p>
                                        <p>Membuat UI Design dan Berkolaborasi dalam Web/Mobile Project</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Creative (Design) | Juli 2021 - Oktober 2021</p>
                                        <p class="font-semibold">TOKOPEDIA YOUTH MALANG BATCH 2</p>
                                        <p>Mendesain Sosial Media, Banner Promo dan Assortment</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>Product Designer | Februari 2021 - April 2021</p>
                                        <p class="font-semibold">TITAN VARIASI MOTOR MALANG</p>
                                        <p>Rebranding,  Redesign Sosial Media dan Interface Website, Meningkatkan followers Instagram dari 3000 menjadi 4000</p>
                                    </div>
                                    <div class="flex flex-col justify-start items-start mb-4">
                                        <p>UI/UX Designer | Februari 2021 - April 2021</p>
                                        <p class="font-semibold">PITOMALANG.COM</p>
                                        <p>Membuat User Interface Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                </section>
            </vue-html2pdf>

            <BaseCard class="w-full h-full" id="cv-container">
                <div class="grid grid-cols-6 gap-12 w-full bg-white">
                    <div class="flex flex-col items-start justify-start col-span-2">
                        <!-- Photo Section -->
                        <img src="../assets/img/sample-profile-image.jpeg" alt="profile image" class="rounded-[40px] w-full rounded-br-none mb-4">
                        <!-- <div class="rounded-[40px] rounded-br-none bg-blue-dark w-full h-[285px] mb-4"></div> -->

                        <!-- Social Media Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <div class="flex justify-start items-center mb-4">
                                <img src="../assets/icons/whatsapp_icon.svg" alt="whatsapp_icon" class="w-6 mr-3 ">
                                <p>(+62) 822 4571 8040</p>
                            </div>
                            <div class="flex justify-start items-center mb-4">
                                <img src="../assets/icons/email_icon.svg" alt="email_icon" class="w-6 mr-3">
                                <p>umamsyarief123@gmail.com</p>
                            </div>
                            <div class="flex justify-start items-center mb-4">
                                <img src="../assets/icons/instagram_icon.svg" alt="instagram_icon" class="w-6 mr-3 ">
                                <p>@umam_syarief</p>
                            </div>
                            <div class="flex justify-start items-center mb-4">
                                <img src="../assets/icons/dribbble_icon.svg" alt="dribbble_icon" class="w-6 mr-3 ">
                                <p>Umam_Syarief</p>
                            </div>
                            <div class="flex justify-start items-center mb-4">
                                <img src="../assets/icons/linkedin_icon.svg" alt="linkedin_icon" class="w-6 mr-3 ">
                                <p>Muhammad Syariful Umam</p>
                            </div>
                        </div>

                        <!-- Pendidikan Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">PENDIDIKAN</p>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>2020 - Sekarang</p>
                                <p class="font-semibold">TELKOM UNIVERSITY</p>
                                <p>S1 Teknologi Informasi</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>2017 - 2020</p>
                                <p class="font-semibold">SMA NURIS JEMBER</p>
                                <p>Jurusan IPA</p>
                            </div>
                        </div>

                        <!-- Skill Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">SKILL</p>
                            <div class="flex justify-between items-center w-full mb-1">
                                <p>Figma</p>
                                <p class="font-semibold">Expert</p>
                            </div>
                            <div class="flex justify-between items-center w-full mb-1">
                                <p>Figma</p>
                                <p class="font-semibold">Expert</p>
                            </div>
                            <div class="flex justify-between items-center w-full mb-1">
                                <p>Digital Imaging</p>
                                <p class="font-semibold">Advanced</p>
                            </div>
                        </div>

                        <!-- Language Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">BAHASA</p>
                            <div class="flex justify-between items-center w-full mb-1">
                                <p>Indonesia</p>
                                <p class="font-semibold">Expert</p>
                            </div>
                            <div class="flex justify-between items-center w-full mb-1">
                                <p>English</p>
                                <p class="font-semibold">Native</p>
                            </div>
                        </div>

                        <!-- Softskill Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">SOFTSKILL</p>
                            <div class="flex justify-start items-center w-full">
                                <p>Kerja Tim</p>
                            </div>
                            <div class="flex justify-start items-center w-full">
                                <p>Presentasi yang Baik</p>
                            </div>
                            <div class="flex justify-start items-center w-full">
                                <p>Berpikir Kreatif</p>
                            </div>
                            <div class="flex justify-start items-center w-full">
                                <p>Analisa Informasi</p>
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-col items-start justify-start text-left col-span-4 w-full">
                        <p class="font-bold text-5xl mb-4">UI/UX DESIGNER</p>
                        <p class="font-light text-6xl mb-4">MUHAMMAD SYARIFUL UMAM</p>

                        <!-- Profile Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">PROFIL</p>
                            <div class="flex flex-col justify-start items-start w-full">
                                <p>Saya memiliki kemampuan menerapkan design process dengan baik. Saya familiar menggunakan software figma untuk UI Design dan Photoshop untuk Digital Imaging. Saya berkomitmen tinggi untuk belajar mengembangkan diri dan inovasi sehingga mampu menyelesaikan suatu permasalahan.</p>
                                <br>
                                <p class="font-semibold ">Jember, 4 Juni 2002 | Jember, Jawa Timur, 68168</p>
                            </div>
                        </div>

                        <!-- Achievement Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">PRESTASI</p>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Juara 2 | Desain Poster Nasional</p>
                                <p class="font-semibold">PTI IT COMPETITION FESTIVAL 1.0 2020</p>
                                <p>di Universitas Muhammadiyah Surakarta</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Juara 1 | Desain Poster Nasional</p>
                                <p class="font-semibold">KURKUMIN 2018</p>
                                <p>di Universitas Gadjah Mada</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>di Universitas Gadjah Mada</p>
                                <p class="font-semibold">TECHFEST 2018</p>
                                <p>di Universitas Jambi</p>
                            </div>
                        </div>

                        <!-- Certification Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">SERTIFIKASI</p>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>UI/UX | Juli 2021 - Desember 2021</p>
                                <p class="font-semibold">BOOTCAMP SYNRGY ACADEMY BATCH 3</p>
                                <p>Pelatihan UI/UX, Workshop dan Product Showcase</p>
                            </div>
                        </div>

                        <!-- Internship / Working Experience Section -->
                        <div class="flex flex-col items-start justify-start mb-8 w-full">
                            <p class="font-bold text-3xl mb-4">PENGALAMAN MAGANG</p>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Creative (Design) | Oktober 2021 - Desember 2021</p>
                                <p class="font-semibold">KREEN | PT. Keren Entertainment Indonesia</p>
                                <p>Membuat Social Media Design dan Brand Guidelines</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Creative (Design) | Oktober 2021 - Desember 2021</p>
                                <p class="font-semibold">CV. DAFIDEA TECHNOCRAFT</p>
                                <p>Membuat UI Design dan Berkolaborasi dalam Web/Mobile Project</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Creative (Design) | Juli 2021 - Oktober 2021</p>
                                <p class="font-semibold">TOKOPEDIA YOUTH MALANG BATCH 2</p>
                                <p>Mendesain Sosial Media, Banner Promo dan Assortment</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>Product Designer | Februari 2021 - April 2021</p>
                                <p class="font-semibold">TITAN VARIASI MOTOR MALANG</p>
                                <p>Rebranding,  Redesign Sosial Media dan Interface Website, Meningkatkan followers Instagram dari 3000 menjadi 4000</p>
                            </div>
                            <div class="flex flex-col justify-start items-start mb-4">
                                <p>UI/UX Designer | Februari 2021 - April 2021</p>
                                <p class="font-semibold">PITOMALANG.COM</p>
                                <p>Membuat User Interface Website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseCard>
    
            <div class="flex items-center justify-center">
                <button v-if="!hasDownload" @click="downloadCV" class="flex items-center justify-center px-[20px] py-[10px] bg-blue text-2xl text-white rounded-md"><span class="mr-3">Download CV</span> <img src="../assets/icons/download_icon.svg" alt="download_icon"></button>
                <button v-else @click="$router.push('/')" class="flex items-center justify-center px-[20px] py-[10px] bg-blue text-2xl text-white rounded-md">Kembali ke Beranda</button>
            </div>
        </div>

    </div>
</template>

<script>
import BaseCard from '../components/BaseCard.vue'
import html2pdf from 'html2pdf.js'
import VueHtml2pdf from 'vue-html2pdf'

export default {
    components: {
        BaseCard,
        VueHtml2pdf
    },
    data() {
        return {
            input_field_class: 'bg-white-blue py-[15px] px-[25px] rounded-lg w-full',
            input_file_class: '',
            name: '',
            // step: 3,
            hasDownload: false,
            step: this.$store.state.step,
            sosial_medias: [
                {
                    sosmed: '',
                    username: ''
                },
                {
                    sosmed: '',
                    username: ''
                },
                {
                    sosmed: '',
                    username: ''
                }
            ],
            educations: [
                {
                    title: '',
                    university: '',
                    city: '',
                    start_month: '',
                    start_year: '',
                    is_current_education: false,
                    end_month: '',
                    end_year: '',
                    description: '',
                }
            ],
            professions: [
                {
                    position: '',
                    company: '',
                    city: '',
                    start_month: '',
                    start_year: '',
                    is_current_job: false,
                    end_month: '',
                    end_year: '',
                    description: ''
                }
            ],
            certifications: [
                {
                    name: '',
                    start_month: '',
                    start_year: '',
                    end_month: '',
                    end_year: '',
                    description: ''
                }
            ],
            professional_skills: [
                {
                    field: '',
                    level: '',
                },
            ],
            soft_skills: [
                {
                    name: '',
                },
            ],
            languages: [
                {
                    name: '',
                    level: '',
                },
            ],
            list_languages: [
                'Bahasa Indonesia',
                'Bahasa Inggris',
                'Bahasa Jepang',
                'Bahasa Korea',
                'Bahasa Mandarin',
            ],

            opt: {
                margin:       0,
                filename:     'My Free ATS CV.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
            },

            // htmlToPdfOptions: {
            //     margin: 0,
            //     filename: `hehehe.pdf`,
            //     image: {
            //         type: 'jpeg', 
            //         quality: 0.98
            //     },
            //     enableLinks: false,
            //     html2canvas: {
            //         scale: 1,
            //         useCORS: true
            //     },
            //     jsPDF: {
            //         unit: 'in',
            //         format: 'a4',
            //         orientation: 'portrait'
            //     }
            // }



            // a4_size: {
            //     {595 x 842}, {794 x 1123}, {1240 x 1754}, 2480 x 3508
            // }
        }
    },
    methods: {
        addSosmed() {
            this.sosial_medias.push({
                sosmed: '',
                username: ''
            })
        },
        addProfessionalSkill() {
            this.professional_skills.push({
                field: '',
                level: ''
            })
        },
        addSoftSkill() {
            this.soft_skills.push({
                name: '',
            })
        },
        addLanguage() {
            this.languages.push({
                name: '',
                level: '',
            })
        },
        addEducation() {
            this.educations.push({
                title: '',
                university: '',
                city: '',
                start_month: '',
                year: '',
            })
        },
        nextStep() {
            window.scrollTo(0,0)
            this.$store.commit('nextStep')
            this.step = this.$store.state.step
        },
        downloadCV() {
            window.scrollTo(0,0)
            // html2pdf.js
            var element = document.getElementById('cv-container')
            var worker = html2pdf().set(this.opt).from(element).save();
            this.hasDownload = true
            this.$store.commit('resetStep')
            // vue-html2pdf
            // this.$refs.html2Pdf.generatePdf()
        }
    },
    mounted() {
        // this.$store.commit('resetStep')
    }
}
</script>

<style scoped>
/* select {
    display: block;
    width: 100%;
    font-size: 1em;
    padding: 0.8rem 0.5rem;
    border: 1px solid #333;
    font-family: inherit;

    appearance: none;
    background-image: '../assets/icons/dropdown-arrow.svg';
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
} */
</style>