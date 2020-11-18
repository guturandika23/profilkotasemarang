import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Kuliner extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
              <Carousel>
                  <h1>BANDENG PRESTO</h1>
                  <p>Bandeng prèsto) adalah makanan khas Indonesia yang berasal dari Kota Semarang, Jawa Tengah. Makanan ini dibuat dari ikan bandeng (Chanos chanos) yang dibumbui dengan bawang putih, kunyit dan garam. Ikan bandeng ini kemudian dimasak pada alas daun pisang dengan cara presto.</p>
                  <img src="/bandeng presto.jpg" width="1000" height="500"/>
                  <h1>LUMPIA</h1>
                  <p>Lumpia semarang (atau loenpia semarang) (bahasa Jawa: ꦭꦸꦤ꧀ꦥꦶꦪꦃ, translit. Lunpiyah) adalah makanan semacam rollade yang berisi rebung, telur, dan daging ayam atau udang. ... Makanan ini mulai dijajakan dan dikenal di Semarang ketika pesta olahraga GANEFO diselenggarakan pada masa pemerintahan Presiden Soekarno.</p>
                  <img src="/lumpia.jpg" width="1000" height="500"/>
                  <h1>TAHU GIMBAL</h1>
                  <p>Tahu gimbal (Hanacaraka:ꦠꦲꦸ​ꦒꦶꦩ꧀ꦧꦭ꧀) adalah makanan khas Kota Semarang. Makanan ini terdiri dari tahu goreng, rajangan kol mentah, lontong, taoge, telur, dan gimbal (udang yang digoreng dengan tepung) dan dicampur dengan bumbu kacang yang khas karena menggunakan petis udang.</p>
                  <img src="/tahu gimbal.jpg" width="1000" height="500"/>

              </Carousel>
            </div>
        )
    }
}
export default Kuliner;