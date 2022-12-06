import {
  useDisclosure,
  useBreakpointValue,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react";
import Edit from "./components/Edit";
import '../public/style.css';
import Header from './components/Header';
import Side from './components/Side';
import quartoCasalImg from './assets/acccomodation-1.jpg';
import quartoSolteiroImg from './assets/acccomodation-2.jpg';
import quartoDuploImg from './assets/acccomodation-3.jpg';
import edit from './assets/icons/edit.svg';
import del from './assets/icons/del.svg';
import Details from "./components/Details";
import MediaQuery from 'react-responsive';

const App = () => {

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});


  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const [busca, setBusca] = useState('');

  const filterData = data.filter((item) => item.name.toString().toLowerCase().includes(busca.toLowerCase()));

  const removerReserva = (name) => {
    const newArray = data.filter((item) => item.name !== name);

    setData(newArray);
    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  function quartoImg(acomodacao) {
    if (acomodacao === "Quarto de solteiro") return <img src={quartoCasalImg} />
    if (acomodacao === "Duplo solteiro") return <img src={quartoSolteiroImg} />
    if (acomodacao === "Quarto de casal") return <img src={quartoDuploImg} />
  };

  return (
    <div className="div">
      <div className="divHeader">
        <Header />
      </div>
      <MediaQuery minWidth={899}>
        <div className="divSide">
          <Side />
        </div>
      </MediaQuery>
      <div className="divConteudo">
        <div className="divMenu">
          <div className="divTodasReservas">
            <div>
              <Button>
                <Text fontSize='2xl'>Todas as reservas</Text>
              </Button>
            </div>
            <div>
              <Button>
                <Text fontSize='2xl'>Carrinho</Text>
              </Button>
            </div>
          </div>
          <div className="divPesquisa">
            <div className="div1">
              <Input value={busca} onChange={(ev) => setBusca(ev.target.value)} placeholder="Buscar hospede"/>
            </div>
          </div>
        </div>
        <div className="divFundo">
          <table mt="6" className="tabela">
            <thead>
              <tr>
                <th maxw={isMobile ? 5 : 100} fontSize="24px">
                  <Text fontSize='lg' color="#8E98B0" fontWeight="500">Acomodação</Text>
                </th>
                <th maxw={isMobile ? 5 : 100} fontSize="70px">
                  <Text fontSize='lg' color="#8E98B0" fontWeight="500">Hospedes</Text>
                </th>
                <th p={0}></th>
              </tr>
            </thead>
            <tbody className="tbody">
              {filterData.map(({ name, sobrenome, acomodacao, checkin, datenasc, cep, celular, rua, numero, bairro, telefone, cidade }, index) => (
                <tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <td maxw={isMobile ? 5 : 100} onClick={() => [setDataEdit({ name, sobrenome, acomodacao, checkin, datenasc, cep, celular, rua, numero, bairro, telefone, cidade, index }), modal2.onOpen(),]}>
                    <div className="divQuarto">
                      <MediaQuery minWidth={490}>
                        {quartoImg(acomodacao)}
                      </MediaQuery>
                      <div className="divDesc">
                        <div className="divDesc">
                          <h1>#798423</h1>
                        </div>
                        <div className="divDesc">
                          {acomodacao}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hospedes" maxw={isMobile ? 5 : 100}>{name}{" "}{sobrenome}</td>
                  <td p={0}>
                    <div>
                      <button fontSize={20} onClick={() => [setDataEdit({ name, sobrenome, acomodacao, checkin, datenasc, cep, celular, rua, numero, bairro, telefone, cidade, index }), modal1.onOpen(),]}>
                        <img src={edit} />
                      </button>
                    </div>
                    <div>
                      <button fontSize={20} onClick={() => removerReserva(name)}>
                        <img src={del} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {modal1.isOpen && (
            <Edit
              isOpen={modal1.isOpen}
              onClose={modal1.onClose}
              data={data}
              setData={setData}
              dataEdit={dataEdit}
              setDataEdit={setDataEdit}
            />
          )}
          {modal2.isOpen && (
            <Details
              isOpen={modal2.isOpen}
              onClose={modal2.onClose}
              data={data}
              setData={setData}
              dataEdit={dataEdit}
              setDataEdit={setDataEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;