function mostrarAlertaEliminar() {
    const alertaEliminar = document.querySelector('.custom-alert');
    alertaEliminar.classList.remove('d-none');
  }

  function cancelarEliminacion() {
    const alertaEliminar = document.querySelector('.custom-alert');
    alertaEliminar.classList.add('d-none');
  }
  function eliminarProducto() {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para eliminar el producto
        Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
      } else {
        cancelarEliminacion();
      }
    });
  }