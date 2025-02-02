import {
  clienteProveedores,
  productos,
  materiaPrima,
  tipoClienteProveedor,
  host,
  materiaPrimaProducto
} from "../config";

/////////////////////////////////////TIPO CLIENTE PROVEEDOR

export async function obtenerTipoClienteProveedor() {
  return fetch(`${host}${tipoClienteProveedor}`)
    .then(
      (res) => res.json() // as Promise<{results: any}>
    )
    .then((res) => {
      //console.log(res)
      //console.log(res.results)
      //return res.results
      return res;
    });
}

export async function crearTipoClienteProveedor({ nombre }: any) {
  return fetch(`${host}${tipoClienteProveedor}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

/////////////////////////////////////TABLA CLIENTES

export const obtenerClientes = async () => {
  return fetch(`${host}${clienteProveedores}`)
    .then(
      (res) => res.json() // as Promise<{results: any}>
    )
    .then((res) => {
      //console.log(res)
      //console.log(res.results)
      //return res.results
      return res;
    });
};

export async function crearClienteProveedor({
  nombre,
  apellido,
  email,
  telefono,
  direccion,
  idTipo,
}: any) {
  return fetch(`${host}${clienteProveedores}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      direccion: direccion,
      idTipo: parseInt(idTipo),
    }),
  })
  .then(res => res.json())
  .then(res => res)
}

export async function actualizarClienteProveedor({
  id,
  nombre,
  apellido,
  email,
  telefono,
  direccion,
  idTipo,
}: any) {
  return fetch(`${host}${clienteProveedores}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      direccion: direccion,
      idTipo: parseInt(idTipo),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

export async function eliminarClienteProveedor(id: number) {
  return fetch(`${host}${clienteProveedores}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

/////////////////////////////////////TABLA PRODUCTO

export const obtenerProductos = async () => {
  return fetch(`${host}${productos}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const obtenerProducto = async (id: string) => {
  return fetch(`${host}${productos}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const crearProducto = async ({ codigo, nombre, stock, precio }: any) => {
  return fetch(`${host}${productos}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      codigo: codigo,
      nombre: nombre,
      stock: stock,
      precio: precio,
    }),
  })
  .then(res=> res.json())
  .then(res=>res)
};

export async function actualizarProducto({
  id,
  codigo,
  nombre,
  stock,
  precio,
}: any) {
  return fetch(`${host}${productos}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      codigo: codigo,
      nombre: nombre,
      stock: stock,
      precio: precio,
    }),
  })
  .then(res => res.json())
  .then(res => res)
}


export async function actualizarPreparacionProducto({
 id,
  preparacion
}: any) {
  return fetch(`${host}${productos}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      preparacion: preparacion,
    }),
  })
  .then(res => res.json())
  .then(res => res)
}



export async function eliminarProducto(id: number) {
  return fetch(`${host}${productos}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
  .then(res => res.json())
  .then(res => res)
}

/////////////////////////////////////TABLA MATERIA PRIMA

export const obtenerMateriasPrimas = async () => {
  return fetch(`${host}${materiaPrima}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const obtenerMateriaPrima = async (id: string) => {
  return fetch(`${host}${materiaPrima}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};


export const crearMateriaPrima = async ({
  nombre,
  descripcion,
  stock,
  precio,
  cantidad_minima,
  idProveedor,
}: any) => {

  return fetch(`${host}${materiaPrima}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      stock: stock,
      precio: precio,
      cantidad_minima: cantidad_minima,
      id_proveedor: idProveedor,
    }),
  })
  .then(res => res.json())
  .then(res => res)
};

export async function actualizarMateriaPrima({
  id,
      nombre,
      descripcion,
      stock,
      precio,
      cantidad_minima,
      idProveedor
}: any) {
  
  return fetch(`${host}${materiaPrima}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      stock: stock,
      precio: precio,
      cantidad_minima: cantidad_minima,
      id_proveedor: idProveedor,
    }),
  })
  .then(res => res.json())
  .then(res => res)
}

export async function eliminarMateriaPrima(id: number) {
  return fetch(`${host}${materiaPrima}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
  .then(res => res.json())
  .then(res => res)
}

/////////////////////////////////////TABLA PRECIO
const obtenerPrecioProducto = () => {
  return;
};

/////////////////////////////////////MATERIA PRIMA - PRODUCTO
export async function obtenermateriasPrimasIdProducto(id:any){
  return fetch(`${host}${materiaPrimaProducto}`,{
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id_producto: id
    })
  })
  .then(res => res.json())
  .then(res => res)
}

export async function crearMateriaPrimaProducto({productoId,materiaPrimaId,cantidad, existencia}:any){
  if(existencia == true){
    return fetch(`${host}${materiaPrimaProducto}`,{
      method: 'PUT',
      headers:
      {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id_materia:materiaPrimaId,
        id_producto: parseInt(productoId),
        cantidad: parseFloat(cantidad)  
      })
    })
    .then(res => res.json())
    .then(res=>res)
  }
  return fetch(`${host}${materiaPrimaProducto}`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id_materia:materiaPrimaId,
      id_producto: parseInt(productoId),
      cantidad: parseFloat(cantidad)
    })
  }   
  )
  .then(res => res.json())
  .then(res => res)
}

export async function eliminarMateriaPrimaProductoIdMP(id:number){
  return fetch(`${host}${materiaPrimaProducto}`,{
    method: 'DELETE',
    headers:{
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      id: id
    })
  })
  .then(res => res.json())
  .then(res => res)
}

////////////////////////////////