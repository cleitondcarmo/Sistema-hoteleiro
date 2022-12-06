import { useEffect, useState } from "react";
import '../../public/style.css';
import Header from '../components/Header';
import Side from '../components/Side';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MediaQuery from 'react-responsive';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import {
    Input,
    Select,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
} from "@chakra-ui/react";

const Cadastro = ({ }) => {
    < link
        rel=" folha de estilo "
        href=" https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css "
        integridade=" sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi "
        crossorigin=" anônimo "
    />

    const [data, setData] = useState([]);
    const [dataEdit] = useState({});

    const schema = object({
        cep: string().required("Digite um CEP válido.").min(8, "Digite no minimo 8 números").max(8, "Digite no maximo 8 números"),
        name: string().required("Digite o nome."),
        sobrenome: string().required("Digite o sobrenome."),
        acomodacao: string().required("Escolha o tipo de acomodação."),
        checkin: string().required("Escolha uma data."),
        datenasc: string().required("Escolha uma data."),
        telefone: string().required("Digite o DDD + número.").min(11, "Digite no minimo 11 números.").max(11, "Digite no maximo 11 números."),
        celular: string().required("Digite o DDD + número.").min(11, "Digite no minimo 11 números.").max(11, "Digite no maximo 11 números."),
        cidade: string().required("Digite a cidade."),
        rua: string().required("Digite a rua."),
        numero: string().required("Digite o número."),
        bairro: string().required("Digite o bairro."),
    });

    const { register, setValue, setFocus, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    useEffect(() => {
        const db_costumer = localStorage.getItem("cad_cliente")
            ? JSON.parse(localStorage.getItem("cad_cliente"))
            : [];

        setData(db_costumer);
    }, [setData]);

    const [acomodacao, setAcomodacao] = useState("");
    const [checkin, setCheckin] = useState("");
    const [name, setName] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [datenasc, setDateNasc] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");

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
        window.location.reload();
    };

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('cep', data.cep.replace(/\D/g, ''));
            setValue('rua', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setFocus('numero');
        });
    }

    const handleSubmit = (data) => {
    }

    return (
        <div>
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
                    <div className="divFundo">
                        <h1 className="fontPrimary">Dados da reserva</h1>
                        <Form className="formZone" onSubmit={onSubmit(handleSubmit)}>
                            <div className="formCad">
                                <div style={{ width: 300 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Acomodação</Form.Label>
                                        <Select value={acomodacao} {...register("acomodacao", { required: true })} onChange={(e) => setAcomodacao(e.target.value)} placeholder='Selecione uma acomodação'>
                                            <option value='Quarto de solteiro'>Quarto de solteiro</option>
                                            <option value='Duplo solteiro'>Duplo solteiro</option>
                                            <option value='Quarto de casal'>Quarto de casal</option>
                                        </Select>
                                        <span className="error">{errors?.acomodacao?.message}</span>
                                    </Form.Group>
                                </div>
                                <div style={{ width: 150 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Check-in</Form.Label>
                                        <Input value={checkin} {...register("checkin", { required: true })} onChange={(e) => setCheckin(e.target.value)} type="date" placeholder="02/02/2022 19:30" />
                                        <span className="error">{errors?.checkin?.message}</span>
                                    </Form.Group>
                                </div>
                            </div>
                            <h1 className="fontPrimary">Dados do responsável</h1>
                            <div className="formCad">
                                <div className="divSection">
                                    <div style={{ width: 250 }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fontSecond">Nome</Form.Label>
                                            <Input value={name} {...register("name", { required: true })} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome" />
                                            <span className="error">{errors?.name?.message}</span>
                                        </Form.Group>
                                    </div>
                                    <div style={{ width: 250 }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fontSecond">Sobrenome</Form.Label>
                                            <Input type="text" value={sobrenome} {...register("sobrenome", { required: true })} onChange={(e) => setSobrenome(e.target.value)} placeholder="Digite seu sobrenome" />
                                            <span className="error">{errors?.sobrenome?.message}</span>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="divSection">
                                    <div style={{ width: 170 }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fontSecond">Data de nascimento</Form.Label>
                                            <Input type="date" value={datenasc} {...register("datenasc", { required: true })} onChange={(e) => setDateNasc(e.target.value)} placeholder="09/10/1999" />
                                            <span className="error">{errors?.datenasc?.message}</span>
                                        </Form.Group>
                                    </div>
                                    <div style={{ width: 170 }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fontSecond">Telefone</Form.Label>
                                            <Input type="tel" value={telefone} {...register("telefone", { required: true })} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu telefone" />
                                            <span className="error">{errors?.telefone?.message}</span>
                                        </Form.Group>
                                    </div>
                                    <div style={{ width: 170 }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fontSecond">Celular</Form.Label>
                                            <Input type="tel" value={celular} {...register("celular", { required: true })} onChange={(e) => setCelular(e.target.value)} placeholder="Digite seu celular" />
                                            <span className="error">{errors?.celular?.message}</span>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <h1 className="fontPrimary">Endereço</h1>
                            <div className="divSection">
                                <div style={{ width: 170 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">CEP</Form.Label>
                                        <Input type="text" value={cep} {...register("cep", { required: true })}
                                            onBlur={checkCEP} onChange={(e) => setCep(e.target.value)} placeholder="463400-000" />
                                        <span className="error">{errors?.cep?.message}</span>
                                    </Form.Group>
                                </div>
                                <div style={{ width: 160 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Cidade</Form.Label>
                                        <Input type="text" value={cidade} {...register("cidade", { required: true })} onChange={(e) => setCidade(e.target.value)} placeholder="Caetité" />
                                        <span className="error">{errors?.cidade?.message}</span>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="divSection">
                                <div style={{ width: 170 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Rua</Form.Label>
                                        <Input type="text" value={rua} {...register("rua", { required: true })} onChange={(e) => setRua(e.target.value)} placeholder="Av. Santana" />
                                        <span className="error">{errors?.rua?.message}</span>
                                    </Form.Group>
                                </div>
                                <div style={{ width: 160 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Número</Form.Label>
                                        <Input type="number" value={numero} {...register("numero", { required: true })} onChange={(e) => setNumero(e.target.value)} placeholder="680" />
                                        <span className="error">{errors?.numero?.message}</span>
                                    </Form.Group>
                                </div>
                                <div style={{ width: 160 }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fontSecond">Bairro</Form.Label>
                                        <Input type="text" value={bairro} {...register("bairro", { required: true })} onChange={(e) => setBairro(e.target.value)} placeholder="Centro" />
                                        <span className="error">{errors?.bairro?.message}</span>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="divBtnEnviar">
                                <Button className="btnEnviar" type="submit" onClick={handleSave}>
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;