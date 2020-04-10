import React from 'react';

import {
  FaInstagram,
  FaTwitter,
  FaInternetExplorer,
  FaGooglePlay,
  FaApple,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';

import Giross from '../../assets/logo-giross.svg';
import DevFsa from '../../assets/foto-devfsa.jpg';
import EN from '../../assets/IMG_0002.jpg';
import ED from '../../assets/foto-eduardo.jpg';
import OL from '../../assets/foto-orlando.jpeg';
import WW from '../../assets/foto-walter.jpg';
import MU from '../../assets/foto-murilo.jpg';
import NT from '../../assets/foto-nataly.jpg';
import OD from '../../assets/foto-odilon.jpg';
import MT from '../../assets/foto-matheus.jpg';

import { Container, Content, Text, Card } from './styles';

export default function Voluntarios() {
  return (
    <Container>
      <Content>
        <Text>
          <span>VOLUNTÁRIOS</span>
        </Text>

        <Card>
          <section>
            <div>
              <img src={ED} alt="" />
              <div className="name">
                <strong>Eduardo Daltro</strong>
                <p>Desenvolvedor Back-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/daltroedu">
                  <FaInstagram size={18} />
                </a>
                <a href="https://github.com/daltroedu">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/daltroedu">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={EN} alt="" />
              <div className="name">
                <strong>Enrick Daltro</strong>
                <p>Desenvolvedor Front-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://linkedin.com/in/enrickdaltro">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/enrickdaltro/">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={NT} alt="" />
              <div className="name">
                <strong>Nataly Costa</strong>
                <p>Designer</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/nataly_costa_design">
                  <FaInstagram size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={OL} alt="" />
              <div className="name">
                <strong>Orlando Burli</strong>
                <p>Desenvolvedor Front-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/burlijunior">
                  <FaInstagram size={18} />
                </a>
                <a href="orlandoburli">
                  <FaTwitter size={18} />
                </a>
                <a href="orlando.burli@gmail.com">
                  <FaInternetExplorer size={18} />
                </a>
                <a href="https://linkedin.com/in/orlando-burli-junior">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://github.com/orlandoburli">
                  <FaGithub size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={WW} alt="" />
              <div className="name">
                <strong>Walter Gandarella</strong>
                <p>Desenvolvedor Front-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/wgbn">
                  <FaInstagram size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={MU} alt="" />
              <div className="name">
                <strong>Murilo Barbosa</strong>
                <p>Desenvolvedor Front-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/murilojava">
                  <FaInstagram size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={MT} alt="" />
              <div className="name">
                <strong>Matheus Rios</strong>
                <p>Desenvolvedor Front-end</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/mattheusriios">
                  <FaInstagram size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={OD} alt="" />
              <div className="name">
                <strong>Odilon Santos</strong>
                <p>Advogado</p>
              </div>
            </div>

            <aside>
              <strong>Redes Sociais</strong>
              <div>
                <a href="https://instagram.com/odilonssantos">
                  <FaInstagram size={18} />
                </a>
                <a href="odilon@silvassilvaadvocacia.com">
                  <FaInternetExplorer size={18} />
                </a>
              </div>
            </aside>
          </section>
        </Card>
      </Content>

      <Content>
        <Text>
          <span>PARCEIROS</span>
        </Text>

        <Card>
          <section>
            <div>
              <img src={Giross} alt="" />
              <div className="name">
                <strong>Giross</strong>
                <p>Startup de mobilidade urbana e logística</p>
              </div>
            </div>

            <aside>
              <strong>Redes Socias</strong>
              <div>
                <a href="https://wa.me/5577999789680">
                  <FaWhatsapp size={18} />
                </a>
                <a href="https://instagram.com/girossapp">
                  <FaInstagram size={18} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.by4java.giross&hl=pt_BR">
                  <FaGooglePlay size={18} />
                </a>
                <a href="https://apps.apple.com/br/app/giross/id1481633932">
                  <FaApple size={18} />
                </a>
              </div>
            </aside>
          </section>

          <section>
            <div>
              <img src={DevFsa} alt="" />
              <div className="name">
                <strong>DevFSA</strong>
                <p>Comunidade feirense de tecnologia</p>
              </div>
            </div>

            <aside>
              <strong>Redes</strong>
              <div>
                <a href="https://instagram.com/devfsa_">
                  <FaInstagram size={18} />
                </a>
                <a href="https://t.me/devfsa">
                  <FaTelegram size={18} />
                </a>
                <a href="https://devfsa.com.br/">
                  <FaInternetExplorer size={18} />
                </a>
                <a href="https://github.com/devfsa">
                  <FaGithub size={18} />
                </a>
              </div>
            </aside>
          </section>
        </Card>
      </Content>
    </Container>
  );
}
