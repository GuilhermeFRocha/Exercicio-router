import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

import {
  ButtonInfo,
  Container,
  Header,
  DgImg,
  LightImg,
  Main,
  TextInfo,
  Title,
  TitleSpan,
  DgBackground,
  TextMarketing,
  ContainerForm,
  TextForm,
  TitleDatesCurrent,
  TableDatesCurrent,
  CardDatesCurrent,
  PercentageDatesCurrent,
  TextDatesCurrent,
  TitleItemsPackage,
  ImgItemsPackage,
  ContainerInfo,
  ButtonInfoPackage,
  SliderCarousel,
  Navbar,
  ListItems,
} from "./styles";

import Hibrid from "./assets/Hibrid.png";
import Light from "./assets/Luz.png";
import Human from "./assets/Human.png";
import Dgback from "./assets/Dbig.png";
import ImgItems from "./assets/DDD.png";
import { FormTable } from "./components/Form";
import { ModalForm } from "./components/Modal";



function App() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header>
        <Navbar>
          <img src="" alt="" />

         <ListItems>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
         </ListItems>
         </Navbar>
      </Header>
      <Main>
        <LightImg>
          <img src={Light} alt="imagem luz de fundo" />
        </LightImg>
        <Container>
          <Title>
            Contrate o método <br /> operacional de empresas <br /> que
            <TitleSpan>
              alcançaram os <br /> próximos dígitos de <br /> faturamento.
            </TitleSpan>
          </Title>
          <ButtonInfo href="#form">Quero saber mais</ButtonInfo>
        </Container>

        <ContainerInfo>
          <TextInfo>
            A Dgthus Company é uma Martech com foco na <br /> geração de demanda
            qualificada para escala e <br /> previsibillidade exponencial de
            empresas.
          </TextInfo>

          <DgImg>
            <img src={Hibrid} alt="Logo" />
          </DgImg>
          <DgBackground>
            <img src={Dgback} alt="Background" />
          </DgBackground>
        </ContainerInfo>

        <ContainerInfo>
          <DgImg>
            <img src={Human} alt="Logo" />
          </DgImg>

          <TextInfo>
            Implementação de lucratividade através do digital <br /> com
            resultado garantido de no mínimo 1.7x o valor <br /> investido (ROI)
            nos primeiros 3 meses.
          </TextInfo>
        </ContainerInfo>

        <Container>
          <TextInfo>
            Soluções efetivas pedem um time ágil. <br /> Tenha um time completo
            em um só lugar!
          </TextInfo>

          <TextMarketing id="form">
            Marketing
            <span>10 em 1</span>
          </TextMarketing>

          <TextInfo>
            Gestor de tráfego, Programador, Estrategista, Product <br />
            Manager, Especialista em dados, Designer, Social <br /> Media, UX
            Designer, Copywriter e Vendedor.
          </TextInfo>
        </Container>

        <Container>
          <ContainerForm >
            <div>
              <TextForm>
                A Dgthus oferece um processo validado de <br /> vendas através
                do Digital; que levará seu <br /> negócio ao próximo nível com
                assertividade, <br /> previsibilidade e escala, para gerar
                <span>
                  lucro sob <br /> demanda!
                </span>
              </TextForm>
              <TextForm>
                Fornecemos uma
                <span>
                  abordagem personalizada <br />
                </span>
                e única aos nossos clientes. Entregamos os <br /> melhores
                resultados com estratégias <br /> validadas juntamente com:
              </TextForm>
              <TextForm>
                Treinamento Comercial e nosso
                <span>
                  Dgthus <br /> inside Seller
                </span>
                acompanhar, vivenciar, <br /> ajustar, validar e otimizar o
                processo de <br /> vendas e negociação mais eficaz para seu
                <br /> time interno de vendas.
              </TextForm>
            </div>
            <FormTable/>
            <ModalForm/>
          
          </ContainerForm>
        </Container>

        <Container>
          <TitleDatesCurrent>
            O atual cenário de Martech no Brasil
          </TitleDatesCurrent>

          <TableDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>41%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas brasileiras utilizam ferramenta de marketing
                manuais.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>40%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas ainda não utilizam nenhum tipo de automação de
                marketing.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>38%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas investem em ferramentas que coletam dados.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>9%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas brasileiras têm ferramentas de marketing, vendas e
                pós-venda totalmente conectados.
              </TextDatesCurrent>
            </CardDatesCurrent>
          </TableDatesCurrent>
        </Container>

        <Container>
          <SliderCarousel {...settings}>
            <CardDatesCurrent>
              <PercentageDatesCurrent>41%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas brasileiras utilizam ferramenta de marketing
                manuais.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>40%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas ainda não utilizam nenhum tipo de automação de
                marketing.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>38%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas investem em ferramentas que coletam dados.
              </TextDatesCurrent>
            </CardDatesCurrent>
            <CardDatesCurrent>
              <PercentageDatesCurrent>9%</PercentageDatesCurrent>
              <TextDatesCurrent>
                das empresas brasileiras têm ferramentas de marketing, vendas e
                pós-venda totalmente conectados.
              </TextDatesCurrent>
            </CardDatesCurrent>
          </SliderCarousel>
        </Container>

        <Container>
          <TitleItemsPackage>
            Especialista em Tração e <br /> cocriação de negócios digitais,
            <br /> Dgthus é o pacote completo: <br />
            <span>
              marketing, vendas, tecnologia, <br /> ventures e analytics.
            </span>
          </TitleItemsPackage>

          <ImgItemsPackage>
            <img src={ImgItems} alt="Métodos" />
          </ImgItemsPackage>

          <ButtonInfoPackage href="#form">Quero saber mais</ButtonInfoPackage>
        </Container>
      </Main>
    </>
  );
}

export default App;