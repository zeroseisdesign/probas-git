# Plantilla de Documentación de Usuario segundo ISO/IEC 26514:2008

## 1. Información preliminar

**Título**: \[Nome da aplicación ou sistema]
**Versión**: \[Ex. v1.0.0]
**Data**: \[DD/MM/AAAA]
**Autor/a**: \[Nome do equipo ou persoa]
**Contacto**: \[Email ou ligazón de soporte]

---

## 2. Introdución

* **Obxectivo do documento**: Explicar o uso da aplicación a usuarios finais.
* **Público destinatario**: Usuarios finais, administradores, etc.
* **Alcance**: Funcionalidades principais cubertas.
* **Requisitos previos**: Navegador web, conexión a internet, etc.

---

## 3. Descrición xeral do produto

* **Funcionalidades principais**: Ex. xestión de contidos, enquisas, rexistro de usuarios.
* **Módulos**: Ex. módulo de usuario, panel de administración.
* **Interacción**: Interface web responsiva, accesible con teclado.
* **Fluxo básico de uso**: Inicio sesión → Acceso á función → Gardado de cambios.

---

## 4. Procedementos de uso

### Exemplo: Crear unha nova enquisa

1. Iniciar sesión como administrador.
2. Ir ao menú "Enquisas".
3. Premer "Nova enquisa".
4. Introducir título e descrición.
5. Premer "Gardar".

**Captura de pantalla** (opcional): \[Inserir ou vincular]

---

## 5. Referencia de comandos e opcións

* **Botón "Gardar"**: Almacena os cambios na base de datos.
* **Campo "Nome"**: Requirido. Máximo 100 caracteres.

---

## 6. Mensaxes e resolución de erros

| Código | Mensaxe                     | Solución                             |
| ------ | --------------------------- | ------------------------------------ |
| 101    | "Campo obrigatorio baleiro" | Introducir un valor no campo         |
| 404    | "Elemento non atopado"      | Comprobar se existe na base de datos |

---

## 7. Glosario

* **Enquisa**: Conxunto de preguntas agrupadas para recoller opinións.
* **Usuario**: Persoa que accede á aplicación.
* **Administrador**: Usuario con privilexios totais.

---

## 8. Recursos adicionais

* \[Ligazón á páxina de axuda ou FAQ]
* \[Titorial en vídeos ou PDF]
* \[Repositorio Git ou web oficial]

---

## Extra: Documentación en liña con Bootstrap

Podes empregar [Bootstrap Docs](https://getbootstrap.com/docs) para estilizar esta documentación:

```html
<div class="container">
  <h1>Guía de Usuario</h1>
  <p class="lead">Versión 1.0 - Maio 2025</p>

  <div class="alert alert-info">
    Esta documentación está en constante actualización.
  </div>

  <h2>Introdución</h2>
  <p>Esta aplicación permite crear e responder enquisas web de forma sinxela...</p>
</div>
```

---

Podes adaptar esta estrutura para entregar como PDF, Word, ou publicala como un micrositio HTML con estilos Bootstrap.

