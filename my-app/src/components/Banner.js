import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import{ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Frontend", "DSA" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
     //tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }





  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>

                <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Hello,Working on this project....</span>
                <h1>{`I AM PAVAN KALYAN`} </h1>
                <h1><span className='wrap'>{text}</span></h1>
                <p>A CSE student skilled in Java, JavaScript, React, and Node. Built projects like a blood bank system and chat app(look projects section for more info), solved 600+ DSA problems, and holds certifications from Pearson, Salesforce, and Cisco.</p>
                <button onClick={()=>console.log("pavan")}>Lets's Connect<ArrowRightCircle size={25}/></button>
                
                </Col>


                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt='Header-image'/>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
