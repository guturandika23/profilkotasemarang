import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Sejarah extends Component{
    render(){
        return(
                <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
              <Carousel>
                  <p>Kota Semarang di Jawa Tengah ini merupakan salah satu kota tua di Indonesia yang memiliki riwayat, sejarah atau asal usul yang menarik.Kota Semarang berkembang karena ragam kebudayaan yang mempengaruhi antara lain Islam, Cina, Eropa dan tentunya penduduk pribumi. Keempat budaya itu berbaur menjadi satu dan meninggalkan pengaruh yang penting bagi kehidupan Kota Semarang.Awalnya pada saat itu di Jawa Tengah berdirilah Kerajaan Demak yang merupakan salah satu kerajaan yang bercorak Islam. Hiduplah seorang pangeran yang terkenal dari Kerajaan Demak bernama Raden Made Pandan.Beliau terkenal sebagai seorang ulama dan seorang bangsawan dan banyak orang yang hormat dan segan terhadap beliau ini.Beliau ini memiliki seorang putra yang bernama Raden Pandanarang. Seperti halnya dengan bapaknya Raden Pandanarang ini terkenal sebagai anak yang baik hati, sopan, ramah, dan berbakti kepada orang tuanya.Kemudian Raden Made Pandan mengajak anaknya dan para pengiringnya untuk meninggalkan kesultanan Kerajaan Demak. Kemudian mereka berdua pergi ke arah barat untuk mencari daerah baru yang akan ditempati.Berhari-hari dalam perjalanan, akhirnya Raden Made Pandan meminta berhenti sejenak dan merasa cocok dengan daerah hutan yang dirasa cocok untuk ditinggali.Hutan itupun dibuka lalu didirikan pondok pesantren dan lahan pertanian. Di tempat yang baru tersebut Raden Made Pandan mengajarkan agama Islam kepada para pengikutnya.Lama kelamaan keberadaan tempat tersebut dan pondok pesantren itu mengundang banyak orang untuk datang menimba ilmu agama di sini.Di tempat inilah Raden Made Pandan merasa senang hidup bersama putranya. Beliau berharap anaknya nanti bisa menggantikanya sebagai guru agama Islam di tempat tersebut.Sebelum meninggal, Raden Made Pandan berpesan kepada putranya agar melanjutkan cita – cita beliau tadi. Raden Pandanarang diperintahkan untuk tidak meninggalkan daerah tersebut.Dan Raden Pandanarang diminta untuk menyebarkan agama Islam di tempat itu serta mengelola tanah pertanian di sekitar daerah sana.Wasiat ayahnya tadi benar – benar diperhatikan oleh Raden Pandanarang. Raden Pandanarang menjadi seorang guru agama yang menyampaikan ilmu agama Islam kepada masyarakat sekitar dan mengelola lahan pertanian.Dari hasil pertanian didapatkan hasil panen bahan pangan yang melimpah dan dengan relatif singkat banyak orang datang untuk belajar ilmu agama Islam.</p>
                  <img src="peta semarang.jpg" width="1000" height="500"/>
              </Carousel>
            </div>
        )
    }
}
export default Sejarah;