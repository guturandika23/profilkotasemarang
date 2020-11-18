import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
    render(){
        return(
                <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
              <Carousel>
                  <h1>GEREJA BLENDUK</h1>
                  <p>Gereja Blenduk Semarang merupakan Gereja yang dibangun pada 1753 ini merupakan salah satu landmark di Kota Lama. Berbeda dari bangunan lain di Kota Lama yang pada umumnya memagari jalan dan tidak menonjolkan bentuk, gedung yang bergaya Neo-Klasik ini justru tampil kontras. ... Bangunan ini menghadap ke Selatan.</p>
                  <img src="/Gereja-Blenduk.jpg" width="1000" height="500"/>
                  <h1>KOTA LAMA</h1>
                  <p>Kutha Lama Semarang) adalah suatu kawasan di Semarang yang menjadi pusat perdagangan pada abad 19-20 . Pada masa itu, untuk mengamankan warga dan wilayahnya, kawasan itu dibangun benteng, yang dinamai benteng Vijhoek.</p>
                  <img src="/Kota-Lama.jpg" width="1000" height="500"/>
                  <h1>TUGU MUDA</h1>
                  <p>Tugu Muda merupakan sebuah monumen bersejarah kota Semarang yang dibangun untuk mengenang pertempuran 5 hari di Semarang. Pertempuran ini adalah perlawanan terhebat rakyat Indonesia terhadap Jepang pada masa transisi.</p>
                  <img src="/Tugu-Muda.jpg" width="1000" height="500"/>
              </Carousel>
            </div>
        )
    }
}
export default Pariwisata;