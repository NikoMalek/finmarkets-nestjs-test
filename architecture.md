# Parte 2 – Análisis y Debugging

Código a analizar:
```
@Injectable()
export class OrdersService {
  private orders = [];
  create(order) {
    this.orders.push(order);
    return order;
  }
  findAll() {
    return this.orders;
  }
  updateStatus(id, status) {
    const order = this.orders.find(o => o.id === id);
    order.status = status;
    return order;
  }
}
```
1. Identifique al menos 5 problemas de arquitectura o diseño

- El servicio OrdersService no tiene una estructura clara para manejar la persistencia de datos, ya que utiliza un array en memoria para almacenar las órdenes, lo que no es escalable ni adecuado para aplicaciones reales.
- No hay validación de los datos de entrada en el método create, lo que puede llevar a la creación de órdenes con datos incorrectos o incompletos.
- El método updateStatus no maneja el caso en el que no se encuentra la orden con el ID especificado.
- No hay manejo de errores en los métodos del servicio, lo que puede hacer que la aplicación falle de manera inesperada si ocurre un problema.
- El servicio no implementa un mecanismo de autenticación ni auditoria de quien realiza las operaciones, lo que puede ser un problema de seguridad en aplicaciones reales.

2. Explique cómo refactorizaría esta implementación en un proyecto real de NestJS.

Para refactorizar esta implementación primero crearía una entidad Order que represente la estructura de una orden, luego reemplazaria el array en memoria por una base de datos adecuada (por ejemplo, MongoDB, PostgreSQL, etc.), también agregaría validación de los datos de entrada para asegurar que las órdenes se creen con datos correctos y completos, además implementaría manejo de errores para capturar y manejar cualquier problema que pueda surgir durante la creación o actualización de órdenes y finalmente implementaría un sistema de autenticación y auditoria para garantizar que solo usuarios autorizados puedan realizar operaciones en las órdenes llevar un registro de quién realiza cada operación.
