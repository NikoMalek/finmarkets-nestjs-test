1. Explique la diferencia entre Middleware, Guard, Interceptor y Pipe en NestJS.

Middleware: Es una función que se ejecuta antes de que la solicitud alcance el controlador, la cual se utiliza para tareas como autenticación, registro de solicitudes, manejo de errores, etc.
Guard: Es una función que se ejecuta antes de que la solicitud alcance el controlador, la cual se utiliza para verificar si el usuario tiene permisos para acceder a un recurso específico.
Interceptor: Es una función que se ejecuta después de que la solicitud ha sido procesada por el controlador, la cual se utiliza para modificar la respuesta o realizar tareas adicionales.
Pipe: Es una función que se ejecuta antes de que la solicitud alcance el controlador, la cual se utiliza para transformar o validar los datos de entrada. 

Todas se ejecutan antes o después de que la solicitud alcance el controlador, pero cada una tiene un propósito específico en el ciclo de vida de la solicitud.

2. ¿Cómo implementaría autorización basada en roles?
Para implementar autorización basada en roles en NestJS, se puede utilizar Guards. Se puede crear un guard personalizado que verifique el rol del usuario antes de permitir el acceso a ciertos recursos, por ejemplo, se puede crear un guard llamado "RolesGuard" que verifique si el usuario tiene el rol necesario para acceder a una ruta específica después, se puede aplicar este guard a las rutas que requieren autorización basada en roles utilizando el decorador @UseGuards(RolesGuard) en el controlador o en métodos específicos.

3. ¿Qué problemas aparecen cuando un backend crece mucho y cómo NestJS ayuda a
resolverlos?
Cuando un backend crece mucho, pueden aparecer problemas como la dificultad para mantener el código, la falta de organización, la duplicación de código, la dificultad para escalar o la falta de modularidad, en estos casos NestJS ayuda a resolver estos problemas al proporcionar una estructura modular y escalable basada en módulos, controladores y servicios lo que nos permite organizar el código de manera más eficiente, asi promover la reutilización de código, facilitar el mantenimiento y mejorar la escalabilidad del backend a medida que crece.

4. ¿Cómo manejaría configuración por ambiente (development, staging, production)?
Para manejar la configuración por ambiente en NestJS, se puede utilizar el módulo ConfigModule que proporciona una forma sencilla de cargar y gestionar la configuración de la aplicación (.env), donde se pueden crear archivos de configuración separados para cada ambiente (por ejemplo, .env.development, .env.staging, .env.production) y luego cargar el archivo correspondiente según el ambiente en el que se esté ejecutando la aplicación, esto se puede hacer utilizando la variable de entorno NODE_ENV para determinar el ambiente actual y cargar la configuración adecuada en consecuencia.


5. ¿Cómo evitaría que dos usuarios compren el último producto disponible al mismo tiempo?

Para evitar que dos usuarios compren el último producto disponible al mismo tiempo, se puede implementar un sistema de bloqueo para garantizar que solo un usuario pueda comprar el producto a la vez, se puede utilizar una verificación de disponibilidad del producto antes de realizar la compra y bloquear el producto durante el proceso de compra para evitar que otros usuarios puedan comprarlo hasta que se complete la transacción, como se realiza en los cines al comprar entradas online, donde se bloquea el asiento durante el proceso de compra para evitar que otros usuarios lo compren al mismo tiempo.