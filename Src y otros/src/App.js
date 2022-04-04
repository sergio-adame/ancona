import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

//datos predeterminados
const data = [
  {
    id: "1",
    SKU: "FKC-619084667",
    nombre: "CLUTCH NISSAN TSURU III",
    descripcionCorta: "KIT CLUTCH NISSAN TSURU III",
    descripcion: "KIT CLUTCH NISSAN TSURU III 92-17 TSUBAME 93-04 SENTRA",
    imagenes: "",
    categoria: "Motor",
    precio: "$980",
    marca: "LUK",
    numeroDeParte: "9845631",
    familia: "sedán",
    motor: "4cl 1.6lts",
    proveedor: "OSRAM",
    estatus: "disponible",
  },
  {
    id: "2",
    SKU: "MRA-80064",
    nombre: "Manguera linea de gasolina",
    descripcionCorta: "MANGUERA LINEA DE GASOLINA 3/8 9.5MM",
    descripcion: "MANGUERA LINEA DE GASOLINA 3/8 9.5MM 15.24M ROLL (600IN)",
    imagenes: "",
    categoria: "Accesorios",
    precio: "$58",
    marca: "DAYKO",
    numeroDeParte: "1354946",
    familia: "sedán",
    motor: "1.6",
    proveedor: "Valeo",
    estatus: "disponible",
  }         
];

class App extends React.Component {

  //estados iniciales
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      SKU: "",
      nombre: "",
      descripcionCorta: "",
      descripcion: "",
      imagenes: "",
      categoria: "",
      precio: "",
      marca: "",
      numeroDeParte: "",
      familia: "",
      motor: "",
      proveedor: "",
      estatus: "",
    },
  };

 
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].SKU = dato.SKU;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].descripcionCorta = dato.descripcionCorta;
        arreglo[contador].descripcion = dato.descripcion;
        arreglo[contador].imagenes = dato.imagenes;
        arreglo[contador].categoria = dato.categoria;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].marca = dato.marca;
        arreglo[contador].numeroDeParte = dato.numeroDeParte;
        arreglo[contador].familia = dato.familia;
        arreglo[contador].motor = dato.motor;
        arreglo[contador].proveedor = dato.proveedor;
        arreglo[contador].estatus = dato.estatus;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>

        <Navbar color="info" light>
          <NavbarBrand href="https://www.anconaautopartes.com/" className="mr-auto">Ancona autopartes</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <img src="https://seeklogo.com/images/R/refaccionaria-ancona-autopartes-logo-FFE87BCB6D-seeklogo.com.png" width={"50em"}></img>
                <NavLink href="https://github.com/sergio-adame">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Añadir Pieza</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>SKU</th>
                <th>Nombre</th>
                <th>Descripción Corta</th>
                <th>Descripción</th>
                <th>Imágenes</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Marca</th>
                <th>Número De Parte</th>
                <th>Familia</th>
                <th>Motor</th>
                <th>Proveedor</th>
                <th>Estatus</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.SKU}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.descripcionCorta}</td>
                  <td>{dato.descripcion}</td>
                  <td><img src="{dato.imagenes}"></img></td>
                  <td>{dato.categoria}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.numeroDeParte}</td>
                  <td>{dato.familia}</td>
                  <td>{dato.motor}</td>
                  <td>{dato.proveedor}</td>
                  <td>{dato.estatus}</td>


                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar</Button>{" "}
                    <Button className="mt-2" color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Modificar datos de pieza</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                SKU: 
              </label>
              <input
                className="form-control"
                name="SKU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.SKU}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            

            <FormGroup>
              <label>
                Descripción Corta: 
              </label>
              <input
                className="form-control"
                name="descripcionCorta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcionCorta}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripción: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Imágenes: 
              </label>
              <input
                className="form-control"
                name="imagenes"
                type="file"
                onChange={this.handleChange}
                value={this.state.form.imagenes}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Categoria: 
              </label>
              <input
                className="form-control"
                name="categoria"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.categoria}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.marca}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Número De Parte: 
              </label>
              <input
                className="form-control"
                name="numeroDeParte"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.numeroDeParte}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Familia: 
              </label>
              <input
                className="form-control"
                name="familia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.familia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Motor: 
              </label>
              <input
                className="form-control"
                name="motor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.motor}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Proveedor: 
              </label>
              <input
                className="form-control"
                name="proveedor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.proveedor}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estatus: 
              </label>
              <input
                className="form-control"
                name="estatus"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.estatus}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Pieza</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                ID: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                SKU: 
              </label>
              <input
                className="form-control"
                name="SKU"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            

            <FormGroup>
              <label>
                Descripción Corta: 
              </label>
              <input
                className="form-control"
                name="descripcionCorta"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripción: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Imágenes: 
              </label>
              <input
                className="form-control"
                name="imagenes"
                type="file"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Categoria: 
              </label>
              <input
                className="form-control"
                name="categoria"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Número De Parte: 
              </label>
              <input
                className="form-control"
                name="numeroDeParte"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Familia: 
              </label>
              <input
                className="form-control"
                name="familia"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Motor: 
              </label>
              <input
                className="form-control"
                name="motor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Proveedor: 
              </label>
              <input
                className="form-control"
                name="proveedor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estatus: 
              </label>
              <input
                className="form-control"
                name="estatus"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
