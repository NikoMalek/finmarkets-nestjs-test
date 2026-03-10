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


# Parte 4 – Diseño de Arquitectura

1. ¿Cómo escalaría esta API para soportar 1000 requests por segundo?

Para escalar esta API y soportar 1000 requests por segundo, se podría implementar Redis para manejar caché de las tareas y reducir la carga en la base de datos, tambien se pueden usar colas de tareas para procesar operaciones de manera asíncrona y evitar bloqueos en la aplicación, permitiendo manejar un mayor volumen de solicitudes sin afectar el rendimiento.

2. ¿Qué cambios haría si el sistema creciera a millones de tareas?

Implementaría paginación, filtros más eficientes y optimización de consultas en la base de datos, para evitar sobrecargar la aplicación y mantener un buen rendimiento al trabajar con grandes volúmenes de información.

3. ¿Cómo implementaría autenticación JWT en este sistema?

Para implementar autenticación JWT en este sistema, utilizaria el modulo @nestjs/jwt para generar y validar tokens JWT, crearia un servicio de autenticación que maneje el proceso de inicio de sesión y generación de tokens, luego protegeria las rutas que requieren autenticación utilizando Guards personalizados que verifiquen la validez del token JWT en cada solicitud.

4. ¿Cómo manejaría procesamiento asincrónico para tareas pesadas?

Para tareas pesadas implementaría procesamiento asincrónico enviando esas operaciones a procesos en segundo plano, de manera que no bloqueen la respuesta de la API, asi permitiendo que la aplicación siga respondiendo a otras solicitudes mientras se procesan las tareas pesadas.