// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-6671287059027708-100813-b6e84f26d5ce63bfc3e78216be991bc3-174131484",
});
// Crea un objeto de preferencia

class MercadopagoController {
  async mercadopago({ request }) {
    let preference = {
      items: carrito.map((product) => ({
        title: product.item.name,
        unit_price: product.item.price,
        quantity: product.quantity,
      })),
    };

    const res = await mercadopago.preferences.create(preference);

    return res;
  }
}
// let preference = {items:[productos]};
console.log(preference);
// mercadopago.preferences
//   .create(preference)
//   .then(function (response) {
//     // Este valor reemplazará el string "<%= global.id %>" en tu HTML
//     global.id = response.body.id;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

module.exports = MercadopagoController
