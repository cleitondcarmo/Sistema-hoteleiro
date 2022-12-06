import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const Edit = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [sobrenome, setsobrenome] = useState(dataEdit.sobrenome || "");
  const [acomodacao, setAcomodacao] = useState(dataEdit.acomodacao || "");
  const [checkin, setCheckin] = useState(dataEdit.checkin || "");
  const [datenasc, setDateNasc] = useState(dataEdit.datenasc || "");
  const [cep, setCep] = useState(dataEdit.cep || "");
  const [celular, setCelular] = useState(dataEdit.celular || "");
  const [cidade, setCidade] = useState(dataEdit.cidade || "");
  const [rua, setRua] = useState(dataEdit.rua || "");
  const [numero, setNumero] = useState(dataEdit.numero || "");
  const [bairro, setBairro] = useState(dataEdit.bairro || "");
  const [telefone, setTelefone] = useState(dataEdit.telefone || "");

  const handleSave = () => {
    if (!name || !sobrenome || !acomodacao || !checkin || !datenasc || !cep || !celular || !cidade || !rua || !numero || !bairro || !telefone) return;

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, sobrenome, acomodacao, checkin, datenasc, cep, celular, rua, numero, bairro, telefone, cidade };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, sobrenome, acomodacao, checkin, datenasc, cep, celular, rua, numero, bairro, telefone, cidade }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='20%'
          backdropBlur='2px' />
        <ModalContent>
          <ModalHeader>Editar reserva</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flex-wrap="wrap">
            <FormControl display="flex" flexDir="column" gap={5}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Sobrenome</FormLabel>
                <Input
                  type="text"
                  value={sobrenome}
                  onChange={(e) => setsobrenome(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Acomodação</FormLabel>
                <Select value={acomodacao} onChange={(e) => setAcomodacao(e.target.value)}>
                  <option value='Quarto de solteiro'>Quarto de solteiro</option>
                  <option value='Duplo solteiro'>Duplo solteiro</option>
                  <option value='Quarto de casal'>Quarto de casal</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Check-in</FormLabel>
                <Input
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  type="date"
                  value={datenasc}
                  onChange={(e) => setDateNasc(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CEP</FormLabel>
                <Input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Celular</FormLabel>
                <Input
                  type="tel"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Rua</FormLabel>
                <Input
                  type="text"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Número</FormLabel>
                <Input
                  type="number"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Bairro</FormLabel>
                <Input
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Telefone</FormLabel>
                <Input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Cidade</FormLabel>
                <Input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Edit;