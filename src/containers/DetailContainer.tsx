import React, {Component} from 'react'
import 'antd/dist/antd.css';
import '../App.css'
import {Modal, Button, Col, Row} from 'antd';

const details = [
    {

    }
]

export class DetailContainer extends Component {
    render() {

        return (
            <div>
                <br/>
                <br/>
                <div >
                    <Row>
                        <Col span={4}> Objective </Col>
                        <Col span={20}> This project was proposed by Karnataka Welfare Association for the Blind (KWAB)
                            looks at re-designing the neighbourhood park as a safe recreation space for 150 blind
                            children
                            and 250-300 visually impaired & orthopedically disabled, visiting the center. KWAB caters to
                            the
                            needs of the Blind in particular, the other categories of disabled people and the
                            under-privileged people in general and to render specialized services. Since this is a
                            public
                            park, it will additionally benefit the larger neighborhood, i.e. residents of Risaldar
                            Street &
                            V.V. Girl slum (50,000 people). </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={4}> Problem </Col>
                        <Col span={20}>It is been observed that, the parks in Bangalore which is been taken ownership by
                            the
                            established builders or government often satisfy the requirements of so called normal
                            people.
                            These parks have jogging tracks, kids play area, well maintained lightings for the night,
                            drinking water facility, etc. One will find a lot of visitors enjoying the serenity of the
                            park.
                            However what I observed is, these parks does not seems to be accessible to the visually
                            impaired
                            citizen. Hence my question is, is the park an inclusive park?</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={4}> My Goal </Col>
                        <Col span={20}> The goal is to encourage parks to be built with facilities that can help the
                            viusally impaired person experience nature through the aid of sounds & touch & beyond
                            everything, to be able to do so without dependency</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={4}> Sector </Col>
                        <Col span={20}> Non Government Organisation - Karnata Welfare Association for the Blind
                            (KWAB)</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={4}> My Role </Col>
                        <Col span={20}> Human Centric Designer</Col>
                    </Row>

                </div>
                <br/>
                <br/>
                <br/>
                <div >
                    <h3>Fly in the wall</h3>
                    <Row>
                        <Col span={12}> A day in a life of Cubbon Park, Bangalore gave me an insight on how I each space
                            has
                            been utilised by different kinds of people. I spent my time by observing the activities
                            taking
                            place in the park from dawn to dusk. It was nice to see how each space was utilized in
                            different
                            ways.
                            From my observation, I understood that the park did not just serve people who would come for
                            a
                            walk or to relax. It encouraged people from conducting events and promotional activities and
                            hence brought a sense of cultural and socio economic diversity in the atmosphere. Throughout
                            the
                            day, there was never a moment that the park was completely empty.
                        </Col>
                        <Col span={4}></Col>
                        <Col span={6}><img src={'images/img20160123070348.png'}></img> </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
