import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";

import quartoCasalImg from '../assets/acccomodation-1.jpg';
import quartoSolteiroImg from '../assets/acccomodation-2.jpg';
import quartoDuploImg from '../assets/acccomodation-3.jpg';

const Details = ({dataEdit, isOpen, onClose }) => {
    const name = useState(dataEdit.name || "");
    const sobrenome = useState(dataEdit.sobrenome || "");
    const acomodacao = useState(dataEdit.acomodacao || "");
    const checkin = useState(dataEdit.checkin || "");
    const datenasc = useState(dataEdit.datenasc || "");
    const cep = useState(dataEdit.cep || "");
    const celular = useState(dataEdit.celular || "");
    const cidade = useState(dataEdit.cidade || "");
    const rua = useState(dataEdit.rua || "");
    const numero = useState(dataEdit.numero || "");
    const bairro = useState(dataEdit.bairro || "");
    const telefone = useState(dataEdit.telefone || "");

    function quartoImg(acomodacao) {
        if (acomodacao === "Quarto de solteiro") return <img src={quartoCasalImg} />
        if (acomodacao === "Duplo solteiro") return <img src={quartoSolteiroImg} />
        if (acomodacao === "Quarto de casal") return <img src={quartoDuploImg} />
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} size={'xl'}>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert='20%'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Detalhes da reserva</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize='2xl' marginBottom={5} textAlign="center">Quarto</Text>
                        <FormControl gap={5}>
                            <Box width={600} display="flex" alignItems="center">
                                {quartoImg(acomodacao)}
                            </Box>
                            <Box>
                                <FormLabel>Acomodação</FormLabel>
                                <Input isDisabled="true"
                                    value={acomodacao} />
                            </Box>
                            <Box>
                                <FormLabel>Check-in</FormLabel>
                                <Input isDisabled="true"
                                    value={checkin}
                                />
                            </Box>
                        </FormControl>
                        <Text fontSize='2xl' marginBottom={5} marginTop={10} textAlign="center">Cliente</Text>
                        <FormControl gap={5}>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input isDisabled="true"
                                    value={name}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Sobrenome</FormLabel>
                                <Input isDisabled="true"
                                    value={sobrenome}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Acomodação</FormLabel>
                                <Input isDisabled="true"
                                    value={acomodacao} />
                            </Box>
                            <Box>
                                <FormLabel>Check-in</FormLabel>
                                <Input isDisabled="true"
                                    value={checkin}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Data de nascimento</FormLabel>
                                <Input isDisabled="true"
                                    value={datenasc}
                                />
                            </Box>
                            <Box>
                                <FormLabel>CEP</FormLabel>
                                <Input isDisabled="true"
                                    value={cep}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Celular</FormLabel>
                                <Input isDisabled="true"
                                    value={celular}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Rua</FormLabel>
                                <Input isDisabled="true"
                                    value={rua}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Número</FormLabel>
                                <Input isDisabled="true"
                                    value={numero}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Bairro</FormLabel>
                                <Input isDisabled="true"
                                    value={bairro}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Telefone</FormLabel>
                                <Input isDisabled="true"
                                    value={telefone}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Cidade</FormLabel>
                                <Input isDisabled="true"
                                    value={cidade}
                                />
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter justifyContent="start">
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Details;