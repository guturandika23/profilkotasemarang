import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Home extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintah">PEMERINTAH</a></Mui.Button>
            <Carousel>
                <h1>SEMARANG</h1>
            </Carousel>
            </div>
        )
    }
}
export default Home;