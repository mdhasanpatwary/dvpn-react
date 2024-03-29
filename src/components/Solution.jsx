import React from 'react'
import Loading from './Loading'
import Title from './Title'
import { useSpring, animated } from 'react-spring'
import { Container, Row, Col } from 'react-bootstrap';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x * -1 / 85}px,${y * -1 / 85}px,0)`

function Solution({data, classText, styleTwo}) {
    
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    let publicUrl = process.env.PUBLIC_URL + '/'

    if(!data) {
        return <Loading />
    }
    if(!styleTwo)
    return (
        <section className={`${classText} solution`} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >
            <img src={publicUrl + data.bg_pattern.url} alt={data.bg_pattern.alt} className="section-pattern-img" />
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="solution-img d-none d-xl-block">
                            <img src={publicUrl + data.images.mainImg.url} alt={publicUrl + data.images.mainImg.alt} />
                            
                            
                            <animated.img style={{ transform: props.xy.interpolate(trans1) }} src={publicUrl + data.images.man.url} alt={publicUrl + data.images.man.alt} className="s_man" />
                            
                            <animated.img style={{ transform: props.xy.interpolate(trans1) }} src={publicUrl + data.images.woman.url} alt={publicUrl + data.images.woman.alt} className="s_woman" />

                        </div>
                        <div className="solution-img-responsive d-xl-none">
                            <img src={publicUrl + data.images.fullImg.url} alt={publicUrl + data.images.fullImg.alt} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="solution-content">
                            <Title title={data.title} subtitle={data.desc} classText="style--two title-shape" />

                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className="single-solution media align-items-center">
                                            <div className="img">
                                                <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                            </div>
                                            <div className="content media-body">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    return (
        <section className="gradient-section-bg position-relative pt-120 pb-120 solution" >
            <img src={publicUrl + data.bg_pattern.url} alt={data.bg_pattern.alt} className="section-pattern-img" />
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="solution-img">
                            <img src={publicUrl + data.fullImg2.url} alt={publicUrl + data.fullImg2.alt} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="solution-content text-white">
                            <Title title={data.title} subtitle={data.desc} classText="section-title text-left title-shape title-shape-sky-blue style--two" />

                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className="single-solution media align-items-center">
                                            <div className="img style--three">
                                                <img src={publicUrl + item.img2.url} alt={item.img2.alt} />
                                            </div>
                                            <div className="content media-body">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution

Solution.defaultProps = {
    classText: 'layer section-bg pt-120 pb-120',
    styleTwo: false
}